import openpyxl
import json
import re

# Load JSON dumped db schools
with open('scratch/db_schools.json', 'r', encoding='utf-8') as f:
    db_schools = json.load(f)

# Helper to normalize school names for matching
def normalize_name(name):
    if not name:
        return ""
    # Remove text in parentheses like ( KU ), ( 건국대학교 )
    name = re.sub(r'\s*\([^)]*\)', '', name)
    # Remove newlines, spaces, special chars
    name = name.replace('\n', ' ').strip()
    name = re.sub(r'\s+', ' ', name)
    # Remove prefixes like "Đại học", "Cao đẳng", "Trường"
    name_clean = name.lower()
    for prefix in ["đại học quốc gia", "đại học công giáo", "đại học nữ sinh", "đại học nữ", "đại học", "cao đẳng kỹ thuật", "cao đẳng y", "cao đẳng", "trường"]:
        if name_clean.startswith(prefix):
            name_clean = name_clean[len(prefix):].strip()
            break
    return name_clean

# Build match maps
db_by_normalized = {}
for u in db_schools:
    norm_vi = normalize_name(u['name_vi'])
    norm_en = normalize_name(u['name_en'])
    db_by_normalized[norm_vi] = u
    db_by_normalized[norm_en] = u
    # Also index by exact name_vi
    db_by_normalized[u['name_vi'].lower().strip()] = u
    db_by_normalized[u['name_en'].lower().strip()] = u

print(f"Indexed {len(db_by_normalized)} variations from DB.")

from extract_coords import extract_lat_long

files = ['diachitop1%.xlsx', 'diachitop2%.xlsx', 'diachitop3%.xlsx']

for f in files:
    wb = openpyxl.load_workbook(f, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))
    
    maps_col_idx = 12 if f == 'diachitop1%.xlsx' else (11 if f == 'diachitop2%.xlsx' else 10)
    name_col_idx = 2 if f == 'diachitop1%.xlsx' else (2 if f == 'diachitop2%.xlsx' else 1)
    
    matched = 0
    unmatched = 0
    total = 0
    
    print(f"\n--- Matching results for {f} ---")
    for idx, r in enumerate(rows):
        if idx < 4 and f == 'diachitop2%.xlsx': continue
        if idx < 3 and f == 'diachitop1%.xlsx': continue
        if idx < 2 and f == 'diachitop3%.xlsx': continue
        
        school_name = r[name_col_idx]
        if not school_name or 'TÊN TRƯỜNG' in str(school_name):
            continue
            
        school_name = school_name.replace('\n', ' ').strip()
        url = r[maps_col_idx]
        lat, lon = extract_lat_long(url)
        
        total += 1
        norm_name = normalize_name(school_name)
        
        match_found = None
        if norm_name in db_by_normalized:
            match_found = db_by_normalized[norm_name]
        else:
            # Try fuzzy check: if norm_name is contained in any DB normalized name or vice-versa
            for db_norm, u in db_by_normalized.items():
                if db_norm and norm_name and (db_norm in norm_name or norm_name in db_norm):
                    match_found = u
                    break
                    
        if match_found:
            matched += 1
        else:
            unmatched += 1
            if unmatched <= 5:
                print(f"  Unmatched: {school_name} (normalized: '{norm_name}')")
                
    print(f"Total: {total} | Matched: {matched} | Unmatched: {unmatched}")
