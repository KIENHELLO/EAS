import json
import re
import urllib.request
import urllib.parse
import time

with open('scratch/unified_schools.json', 'r', encoding='utf-8') as f:
    schools = json.load(f)

with open('scratch/db_schools.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# Build normalized DB map
def clean(text):
    if not text: return ""
    text = str(text).lower()
    text = text.replace('-', '').replace(' ', '').replace('\'', '')
    text = text.replace('đạihọcquốcgia', '').replace('đạihọccônggiáo', '').replace('đạihọcnữsinh', '').replace('đạihọcnữ', '').replace('đạihọc', '')
    text = text.replace('caodẳngkỹthuật', '').replace('caodẳngy', '').replace('caodẳng', '').replace('trường', '')
    patterns = {
        '[àáảãạăằắẳẵặâầấẩẫậ]': 'a',
        '[èéẻẽẹêềếểễệ]': 'e',
        '[ìíỉĩị]': 'i',
        '[òóỏõọôồốổỗộơờớởỡợ]': 'o',
        '[ùúủũụưừứửữự]': 'u',
        '[ỳýỷỹỵ]': 'y',
        'đ': 'd'
    }
    for pattern, repl in patterns.items():
        text = re.sub(pattern, repl, text)
    return text

db_by_clean = {}
for u in db:
    # Filter out mock schools from the old database lookup to avoid copying mock coordinates!
    if 'mock_uni' in u['id']:
        continue
    db_by_clean[clean(u['name_vi'])] = u
    db_by_clean[clean(u['name_en'])] = u

# We also load the geocoding cache if exists
CACHE_FILE = 'scratch/geocoding_cache.json'
try:
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
except Exception:
    cache = {}

def save_cache():
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

def geocode_osm(query):
    if query in cache:
        return cache[query]
        
    url = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(query)}&format=json&accept-language=ko&limit=1"
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'EAS-Korea-Tuition-Agent/1.0 (kient@koreaedu.vn)'}
    )
    
    for attempt in range(3):
        try:
            time.sleep(1.2)
            with urllib.request.urlopen(req, timeout=10) as response:
                data = json.loads(response.read().decode('utf-8'))
                if data:
                    cache[query] = data[0]
                    save_cache()
                    return data[0]
        except Exception as e:
            print(f"  [Attempt {attempt+1}] Error geocoding {query}: {e}")
            time.sleep(2)
    return None

def extract_coords_from_url(url):
    if not url: return None, None
    m = re.search(r'!3d(-?[0-9.]+)!4d(-?[0-9.]+)', url)
    if m:
        return float(m.group(1)), float(m.group(2))
    # Alt format
    m = re.search(r'@(-?[0-9.]+),(-?[0-9.]+)', url)
    if m:
        return float(m.group(1)), float(m.group(2))
    return None, None

# Process each school in unified_schools
resolved_count = 0
osm_geocoded_count = 0

for s in schools:
    name = s['name_vi']
    
    # 1. First, check if coordinates can be extracted from maps_link
    lat, lon = extract_coords_from_url(s['maps_link'])
    if lat and lon:
        s['lat'] = lat
        s['lon'] = lon
        # Query address using coordinates from cache or OSM
        key = f"{lat},{lon}"
        if key in cache:
            geo_data = cache[key]
            s['address_ko'] = geo_data.get('display_name', '')
            s['postcode'] = geo_data.get('address', {}).get('postcode', '')
            
    # 2. If no coordinates, check the old database (ONLY non-mock entries!)
    if not s['lat'] or not s['lon']:
        c_name = clean(name)
        if c_name in db_by_clean:
            db_match = db_by_clean[c_name]
            s['name_en'] = db_match.get('name_en', s['name_vi'])
            s['name_ko'] = db_match.get('name_ko', s['name_vi'])
            s['address_ko'] = db_match.get('campus_address', '')
            
            # Check if there are coordinates in school_coordinates.json
            with open('src/data/school_coordinates.json', 'r', encoding='utf-8') as f_coords:
                coords_db = json.load(f_coords)
            if db_match['id'] in coords_db:
                c = coords_db[db_match['id']]
                s['lat'] = c['lat']
                s['lon'] = c['lon']
                resolved_count += 1
                print(f"Resolved from old DB: {name} -> {s['lat']}, {s['lon']}")
                
    # 3. If still no coordinates, geocode via OSM Nominatim search!
    if not s['lat'] or not s['lon']:
        print(f"Querying OSM Nominatim for: {name}")
        # Build search query (using English name or Vietnamese name)
        # Often adding 'University South Korea' works best
        query = name
        if 'Đại học' in query:
            query = query.replace('Đại học', '').strip() + ' University Korea'
        elif 'Cao đẳng' in query:
            query = query.replace('Cao đẳng', '').strip() + ' College Korea'
            
        geo_data = geocode_osm(query)
        if not geo_data:
            # Fallback to Korean query
            # E.g. we can search the Vietnamese name directly
            geo_data = geocode_osm(name)
            
        if geo_data:
            s['lat'] = float(geo_data['lat'])
            s['lon'] = float(geo_data['lon'])
            s['address_ko'] = geo_data.get('display_name', '')
            s['postcode'] = geo_data.get('address', {}).get('postcode', '')
            osm_geocoded_count += 1
            print(f"  Geocoded via OSM: {name} -> {s['lat']}, {s['lon']}")
        else:
            print(f"  FAILED to geocode: {name}")

# Save updated schools back
with open('scratch/unified_schools.json', 'w', encoding='utf-8') as f:
    json.dump(schools, f, ensure_ascii=False, indent=2)

print(f"\nGeocoding summary:")
print(f"  Resolved from old DB: {resolved_count}")
print(f"  OSM Search geocoded: {osm_geocoded_count}")
print(f"  Total with coordinates now: {sum(1 for s in schools if s['lat'] and s['lon'])} / {len(schools)}")
