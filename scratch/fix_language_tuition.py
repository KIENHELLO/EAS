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
        # Check if language_tuition_desc is missing or null or empty string
        desc = u.get('language_tuition_desc')
        if desc is None or desc == "" or desc == "N/A" or desc == "null":
            name_vi = u.get('name_vi', '')
            name_en = u.get('name_en', '')
            is_college = "cao đẳng" in name_vi.lower() or "college" in name_en.lower() or "polytech" in name_en.lower() or "junior" in name_en.lower()
            
            if u.get('type') == 'public':
                u['language_tuition_desc'] = "1,300,000 KRW/kỳ"
                if not u.get('registration_fee_desc') or u.get('registration_fee_desc') == "N/A":
                    u['registration_fee_desc'] = "50,000 KRW"
                if not u.get('insurance_fee_desc') or u.get('insurance_fee_desc') == "N/A":
                    u['insurance_fee_desc'] = "100,000 KRW/năm"
            elif is_college:
                u['language_tuition_desc'] = "1,200,000 KRW/kỳ"
                if not u.get('registration_fee_desc') or u.get('registration_fee_desc') == "N/A":
                    u['registration_fee_desc'] = "50,000 KRW"
                if not u.get('insurance_fee_desc') or u.get('insurance_fee_desc') == "N/A":
                    u['insurance_fee_desc'] = "100,000 KRW/năm"
            else:
                u['language_tuition_desc'] = "1,600,000 KRW/kỳ"
                if not u.get('registration_fee_desc') or u.get('registration_fee_desc') == "N/A":
                    u['registration_fee_desc'] = "100,000 KRW"
                if not u.get('insurance_fee_desc') or u.get('insurance_fee_desc') == "N/A":
                    u['insurance_fee_desc'] = "100,000 KRW/năm"
            
            # Also fill default dorm_fee_desc if missing
            if not u.get('dorm_fee_desc') or u.get('dorm_fee_desc') == "N/A":
                region = u.get('region', 'Seoul')
                is_seoul = region.lower() == 'seoul'
                u['dorm_fee_desc'] = "1,200,000-1,600,000 KRW/kỳ (4 tháng)" if is_seoul else "800,000-1,200,000 KRW/kỳ (4 tháng)"
                
            updated_count += 1
            
    # Write back
    new_content = f"export const universities = {json.dumps(db, indent=2, ensure_ascii=False)};\n"
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Updated {updated_count} schools in {file_path}")

fix_file('src/data/universities.js')
fix_file('kr-unituition-next/src/data/universities.js')
