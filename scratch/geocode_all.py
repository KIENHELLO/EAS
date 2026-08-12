import openpyxl
import re
import json
import os
import urllib.request
import urllib.parse
import time
from extract_coords import extract_lat_long

CACHE_FILE = 'scratch/geocoding_cache.json'
OUTPUT_FILE = 'scratch/geocoded_schools.json'

# Load cache if exists
if os.path.exists(CACHE_FILE):
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
else:
    cache = {}

def save_cache():
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

def reverse_geocode(lat, lon):
    key = f"{lat},{lon}"
    if key in cache:
        return cache[key]
    
    url = f"https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json&accept-language=ko"
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'EAS-Korea-Tuition-Agent/1.0 (kient@koreaedu.vn)'}
    )
    
    retries = 3
    for attempt in range(retries):
        try:
            time.sleep(1.2)  # Strictly obey Nominatim's 1s rate limit
            with urllib.request.urlopen(req, timeout=10) as response:
                data = json.loads(response.read().decode('utf-8'))
                cache[key] = data
                save_cache()
                return data
        except Exception as e:
            print(f"  [Attempt {attempt+1}/{retries}] Error geocoding {lat},{lon}: {e}")
            time.sleep(2)
            
    return None

files = {
    'diachitop1%.xlsx': {'top': 1, 'name_col': 2, 'maps_col': 12},
    'diachitop2%.xlsx': {'top': 2, 'name_col': 2, 'maps_col': 11},
    'diachitop3%.xlsx': {'top': 3, 'name_col': 1, 'maps_col': 10}
}

all_processed_schools = []

for filename, config in files.items():
    wb = openpyxl.load_workbook(filename, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))
    
    print(f"\nProcessing {filename}...")
    
    name_col = config['name_col']
    maps_col = config['maps_col']
    
    start_row = 0
    if filename == 'diachitop1%.xlsx': start_row = 3
    elif filename == 'diachitop2%.xlsx': start_row = 4
    elif filename == 'diachitop3%.xlsx': start_row = 2
    
    for idx, r in enumerate(rows[start_row:]):
        school_name = r[name_col]
        if not school_name or 'TÊN TRƯỜNG' in str(school_name) or str(school_name).strip() == '':
            continue
            
        school_name = school_name.replace('\n', ' ').strip()
        url = r[maps_col]
        
        lat, lon = extract_lat_long(url)
        if not lat or not lon:
            print(f"  Skipping non-school row {idx + start_row}: {school_name}")
            continue
            
        print(f"  Geocoding: {school_name} ({lat}, {lon})")
        geo_data = reverse_geocode(lat, lon)
        
        address_ko = ""
        postcode = ""
        status = "Thất bại"
        
        if geo_data:
            address_ko = geo_data.get('display_name', '')
            postcode = geo_data.get('address', {}).get('postcode', '')
            status = "Thành công"
            
        all_processed_schools.append({
            'stt': len(all_processed_schools) + 1,
            'file_source': filename,
            'top_class': config['top'],
            'name': school_name,
            'region_orig': r[3] if len(r) > 3 else '',
            'url_orig': url,
            'lat': lat,
            'lon': lon,
            'address_ko': address_ko,
            'postcode': postcode,
            'status': status
        })

# Save output
with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    json.dump(all_processed_schools, f, ensure_ascii=False, indent=2)

print(f"\nFinished geocoding! Total processed: {len(all_processed_schools)}")
