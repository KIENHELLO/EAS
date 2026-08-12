import openpyxl
import re
import urllib.parse

files = ['diachitop1%.xlsx', 'diachitop2%.xlsx', 'diachitop3%.xlsx']

def extract_lat_long(url):
    if not url or not isinstance(url, str):
        return None, None
    # Method 1: Look for !3d[value]!4d[value]
    match1 = re.search(r'!3d(-?[0-9.]+)!4d(-?[0-9.]+)', url)
    if match1:
        return float(match1.group(1)), float(match1.group(2))
    
    # Method 2: Look for /@37.xxxx,127.xxxx
    match2 = re.search(r'/@(-?[0-9.]+),(-?[0-9.]+)', url)
    if match2:
        return float(match2.group(1)), float(match2.group(2))
    
    # Method 3: Check query parameters (like q=37.xxxx,127.xxxx or query=...)
    parsed = urllib.parse.urlparse(url)
    qs = urllib.parse.parse_qs(parsed.query)
    if 'q' in qs:
        val = qs['q'][0]
        match3 = re.match(r'(-?[0-9.]+),(-?[0-9.]+)', val)
        if match3:
            return float(match3.group(1)), float(match3.group(2))
            
    return None, None

for f in files:
    wb = openpyxl.load_workbook(f, data_only=True)
    sheet = wb.active
    print(f"\nParsing file: {f}")
    rows = list(sheet.iter_rows(values_only=True))
    
    # Find headers and detect Google Maps column
    maps_col_idx = None
    name_col_idx = None
    
    # Let's inspect first few rows to find name and link column
    for r_idx, r in enumerate(rows[:5]):
        for c_idx, val in enumerate(r):
            if val and isinstance(val, str):
                if 'maps.place' in val.lower() or 'google.com/maps' in val.lower():
                    maps_col_idx = c_idx
                if 'tên trường' in val.lower() or 'tên trường ' in val.lower() or 'tên trường' in val.lower():
                    name_col_idx = c_idx
                    
    # Fallback to column index based on inspection
    if maps_col_idx is None:
        if f == 'diachitop1%.xlsx': maps_col_idx = 12
        elif f == 'diachitop2%.xlsx': maps_col_idx = 11
        elif f == 'diachitop3%.xlsx': maps_col_idx = 10
        
    if name_col_idx is None:
        if f == 'diachitop1%.xlsx': name_col_idx = 2
        elif f == 'diachitop2%.xlsx': name_col_idx = 2
        elif f == 'diachitop3%.xlsx': name_col_idx = 1
        
    print(f"Name column index: {name_col_idx}, Maps column index: {maps_col_idx}")
    
    count_success = 0
    count_total = 0
    
    for idx, r in enumerate(rows):
        # Skip header rows
        if idx < 4 and f == 'diachitop2%.xlsx':
            continue
        if idx < 3 and f == 'diachitop1%.xlsx':
            continue
        if idx < 2 and f == 'diachitop3%.xlsx':
            continue
            
        school_name = r[name_col_idx] if name_col_idx < len(r) else None
        if not school_name:
            continue
            
        url = r[maps_col_idx] if maps_col_idx < len(r) else None
        lat, lon = extract_lat_long(url)
        count_total += 1
        if lat and lon:
            count_success += 1
            if count_success <= 3:
                print(f"  {school_name.strip()} -> Lat: {lat}, Long: {lon}")
                
    print(f"Extracted coordinates for {count_success}/{count_total} schools successfully.")
