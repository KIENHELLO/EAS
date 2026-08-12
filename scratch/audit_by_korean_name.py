import openpyxl
import json
import re

# Load DB
with open('scratch/db_schools.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# Normalize Korean names (strip spaces)
db_by_ko = {}
for u in db:
    ko_clean = re.sub(r'\s+', '', u['name_ko']).strip() if u['name_ko'] else ""
    if ko_clean:
        db_by_ko[ko_clean] = u

print(f"Loaded {len(db_by_ko)} Korean name variations from DB.")

# Function to extract Korean Hangul from a string
def extract_hangul(text):
    if not text: return ""
    hangul = re.findall(r'[\uac00-\ud7a3]+', str(text))
    return "".join(hangul)

files = ['diachitop1%.xlsx', 'diachitop2%.xlsx', 'diachitop3%.xlsx']

for f in files:
    wb = openpyxl.load_workbook(f, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))
    
    maps_col_idx = 12 if f == 'diachitop1%.xlsx' else (11 if f == 'diachitop2%.xlsx' else 10)
    name_col_idx = 2 if f == 'diachitop1%.xlsx' else (2 if f == 'diachitop2%.xlsx' else 1)
    
    start_row = 3 if f == 'diachitop1%.xlsx' else (4 if f == 'diachitop2%.xlsx' else 2)
    
    matched = 0
    unmatched = []
    total = 0
    
    for idx, r in enumerate(rows[start_row:]):
        school_name = r[name_col_idx]
        if not school_name or 'TÊN TRƯỜNG' in str(school_name) or str(school_name).strip() == '':
            continue
            
        total += 1
        ko_extracted = extract_hangul(school_name)
        
        # Try to extract Korean name from Google Maps link if not in school_name!
        url = r[maps_col_idx]
        if not ko_extracted and url:
            # Decode URL
            decoded_url = urllib.parse.unquote(url) if 'urllib' in globals() else url
            ko_extracted = extract_hangul(decoded_url)
            
        # Strip spaces from extracted hangul
        ko_extracted = re.sub(r'\s+', '', ko_extracted)
        
        found = None
        if ko_extracted and ko_extracted in db_by_ko:
            found = db_by_ko[ko_extracted]
            
        # Fallback to Vietnamese name fuzzy check
        if not found:
            name_clean = school_name.replace('\n', ' ').strip().lower()
            for u in db:
                db_vi = u['name_vi'].lower().strip()
                db_en = u['name_en'].lower().strip()
                if name_clean in db_vi or db_vi in name_clean or name_clean in db_en or db_en in name_clean:
                    found = u
                    break
                    
        if found:
            matched += 1
        else:
            unmatched.append((school_name, ko_extracted))
            
    print(f"\nFILE: {f} | Total: {total} | Matched: {matched} | Unmatched: {len(unmatched)}")
    if unmatched:
        print("Unmatched samples:")
        for u_name, u_ko in unmatched[:10]:
            print(f"  - '{u_name}' (extracted Korean: '{u_ko}')")
