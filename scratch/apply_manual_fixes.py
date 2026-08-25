import json
import os

def apply_fixes(file_path):
    if not os.path.exists(file_path):
        print(f"File {file_path} does not exist")
        return
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    prefix = "export const universities ="
    if prefix in content:
        json_str = content.replace(prefix, '').replace(';', '').strip()
    else:
        print(f"Prefix not found in {file_path}")
        return
        
    db = json.loads(json_str)
    updated = 0
    
    for u in db:
        if u['id'] == 'seokyeong':
            u['admission_conditions'] = "- 7.0 trở lên\n- vắng không quá 10 buổi"
            updated += 1
        elif u['id'] == 'ewhawomans':
            u['admission_conditions'] = "7.0 trở lên\n- vắng không quá 5 buổi (nhiều hơn cần giải trình)"
            updated += 1
            
    new_content = f"export const universities = {json.dumps(db, indent=2, ensure_ascii=False)};\n"
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Applied fixes to {file_path} (updated {updated} records)")

apply_fixes('src/data/universities.js')
apply_fixes('kr-unituition-next/src/data/universities.js')
