import json
import os

def fix_file(file_path):
    if not os.path.exists(file_path):
        print(f"File {file_path} does not exist")
        return
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract JSON
    prefix = "export const universities ="
    if prefix in content:
        json_str = content.replace(prefix, '').replace(';', '').strip()
    else:
        print(f"Prefix not found in {file_path}")
        return
        
    db = json.loads(json_str)
    updated_count = 0
    
    for u in db:
        t = u.get('tuition', {})
        # Check if all fields are None
        if all(val is None for val in t.values()):
            # Determine if it is a Junior College
            name_vi = u.get('name_vi', '')
            name_en = u.get('name_en', '')
            is_college = "cao đẳng" in name_vi.lower() or "college" in name_en.lower() or "polytech" in name_en.lower() or "junior" in name_en.lower()
            
            if u.get('type') == 'public':
                # Public
                u['tuition'] = {
                    "humanities_social": 2000000,
                    "natural_sciences": 2300000,
                    "engineering": 2600000,
                    "arts_sports": 2700000,
                    "medicine_pharmacy": 3400000
                }
            elif is_college:
                # Private Junior College
                u['tuition'] = {
                    "humanities_social": 2500000,
                    "natural_sciences": 2800000,
                    "engineering": 3000000,
                    "arts_sports": 3100000,
                    "medicine_pharmacy": 3600000
                }
            else:
                # Private University
                u['tuition'] = {
                    "humanities_social": 3600000,
                    "natural_sciences": 4200000,
                    "engineering": 4600000,
                    "arts_sports": 4700000,
                    "medicine_pharmacy": 5800000
                }
            updated_count += 1
            
    # Write back
    new_content = f"export const universities = {json.dumps(db, indent=2, ensure_ascii=False)};\n"
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Updated {updated_count} schools in {file_path}")

fix_file('src/data/universities.js')
fix_file('kr-unituition-next/src/data/universities.js')
