import openpyxl
import json
import re
import urllib.parse

# Load DB
with open('scratch/db_schools.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# Function to remove Vietnamese tones and standard formatting
def clean_text(text):
    if not text: return ""
    text = text.lower()
    # Replace common spelling variants
    text = text.replace('-', '').replace(' ', '').replace('\'', '')
    text = text.replace('đạihọcquốcgia', '').replace('đạihọccônggiáo', '').replace('đạihọcnữsinh', '').replace('đạihọcnữ', '').replace('đạihọc', '')
    text = text.replace('caodẳngkỹthuật', '').replace('caodẳngy', '').replace('caodẳng', '').replace('trường', '')
    # Strip accents
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

db_clean_vi = {clean_text(u['name_vi']): u for u in db}
db_clean_en = {clean_text(u['name_en']): u for u in db}

files = ['diachitop1%.xlsx', 'diachitop2%.xlsx', 'diachitop3%.xlsx']

for f in files:
    wb = openpyxl.load_workbook(f, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))
    
    maps_col_idx = 12 if f == 'diachitop1%.xlsx' else (11 if f == 'diachitop2%.xlsx' else 10)
    name_col_idx = 2 if f == 'diachitop1%.xlsx' else (2 if f == 'diachitop2%.xlsx' else 1)
    
    start_row = 3 if f == 'diachitop1%.xlsx' else (4 if f == 'diachitop2%.xlsx' else 2)
    
    matched = []
    unmatched = []
    
    for idx, r in enumerate(rows[start_row:]):
        school_name = r[name_col_idx]
        if not school_name or 'TÊN TRƯỜNG' in str(school_name) or str(school_name).strip() == '':
            continue
            
        name_str = str(school_name).replace('\n', ' ').strip()
        name_norm = clean_text(name_str)
        
        found = None
        # Check direct match in clean maps
        if name_norm in db_clean_vi:
            found = db_clean_vi[name_norm]
        elif name_norm in db_clean_en:
            found = db_clean_en[name_norm]
            
        # Try substring search in clean maps
        if not found:
            for db_clean, u in db_clean_vi.items():
                if db_clean and name_norm and (db_clean in name_norm or name_norm in db_clean):
                    found = u
                    break
            if not found:
                for db_clean, u in db_clean_en.items():
                    if db_clean and name_norm and (db_clean in name_norm or name_norm in db_clean):
                        found = u
                        break
                        
        if found:
            matched.append((name_str, found['name_vi'], found['id']))
        else:
            unmatched.append(name_str)
            
    print(f"\nFILE: {f} | Total: {len(matched) + len(unmatched)} | Matched: {len(matched)} | Unmatched: {len(unmatched)}")
    if unmatched:
        print("Truly Unmatched:")
        for u in unmatched[:15]:
            print(f"  - '{u}'")
