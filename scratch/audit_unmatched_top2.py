import json
import re

with open('scratch/analysis_results.json', 'r', encoding='utf-8') as f:
    analysis = json.load(f)

with open('scratch/db_schools.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# Build normalized DB map
db_by_id = {u['id']: u for u in db}
db_names_vi = {u['name_vi'].lower().strip(): u for u in db}
db_names_en = {u['name_en'].lower().strip(): u for u in db}

print("Auditing unmatched top 2% schools...")

unmatched_top2 = [s for s in analysis['table'] if s['source'] == 'diachitop2%.xlsx' and 'Tên trường viết tắt' in s['notes']]

print(f"Total unmatched in top 2%: {len(unmatched_top2)}")

missing_schools = []
matched_manually = []

def normalize_text(text):
    if not text: return ""
    text = text.lower().replace('-', ' ').replace('đại học', '').replace('cao đẳng', '').replace('trường', '').strip()
    text = re.sub(r'\s+', '', text)
    return text

for s in unmatched_top2:
    name = s['name']
    norm_name = normalize_text(name)
    
    # Try manual matching by checking substring or normalized string match
    found = None
    for u in db:
        db_norm_vi = normalize_text(u['name_vi'])
        db_norm_en = normalize_text(u['name_en'])
        if norm_name == db_norm_vi or norm_name == db_norm_en:
            found = u
            break
        if norm_name in db_norm_vi or db_norm_vi in norm_name:
            found = u
            break
            
    if found:
        matched_manually.append((name, found['name_vi'], found['id']))
    else:
        missing_schools.append(name)

print(f"\nSuccessfully matched manually: {len(matched_manually)}")
for m in matched_manually:
    print(f"  '{m[0]}' -> DB: '{m[1]}' (ID: {m[2]})")

print(f"\nTruly missing schools (not matching anything in DB): {len(missing_schools)}")
for m in missing_schools:
    print(f"  - {m}")
