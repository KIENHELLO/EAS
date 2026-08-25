import json
import os

def verify_all(file_path):
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
        if u.get('is_verified') is False:
            u['is_verified'] = True
            updated_count += 1
            
    # Write back
    new_content = f"export const universities = {json.dumps(db, indent=2, ensure_ascii=False)};\n"
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Set is_verified = True for {updated_count} schools in {file_path}")

verify_all('src/data/universities.js')
verify_all('kr-unituition-next/src/data/universities.js')
