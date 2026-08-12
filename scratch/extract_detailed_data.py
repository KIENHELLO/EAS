import openpyxl
import os
import re
import json

# 1. Load CSDL
db_path = 'src/data/universities.js'
with open(db_path, 'r', encoding='utf-8') as f:
    db_content = f.read().replace('export const universities =', '').replace(';', '').strip()
    db = json.loads(db_content)

# 2. Đọc các file Excel để lấy thông tin chi tiết
excel_files = {
    'TOP1%.xlsx': 1,
    'TO2%.xlsx': 2,
    'top3.xlsx': 3,
    'diachitop1%.xlsx': 1,
    'diachitop2%.xlsx': 2,
    'diachitop3%.xlsx': 3
}

excel_data = []

def clean_name(name):
    if not name:
        return ""
    name = str(name).lower()
    name = re.sub(r'\(.*?\)', '', name)
    name = re.sub(r'\[.*?\]', '', name)
    name = re.sub(r'[^a-z0-9\uac00-\ud7a3\s]', '', name)
    return " ".join(name.split())

for f_name, top_val in excel_files.items():
    if not os.path.exists(f_name):
        continue
    wb = openpyxl.load_workbook(f_name, data_only=True)
    sheet = wb[wb.sheetnames[0]]
    rows = list(sheet.iter_rows(values_only=True))
    if not rows:
        continue
    
    headers = [str(h).strip().lower() if h else "" for h in rows[0]]
    
    # Tìm index các cột
    name_idx = -1
    invoice_idx = -1
    ktx_idx = -1
    cond_idx = -1
    majors_idx = -1
    
    # Phán đoán cột bằng keyword
    for idx, h in enumerate(headers):
        if 'trường' in h or 'name' in h or 'school' in h:
            name_idx = idx
        elif 'invoice' in h or 'học phí' in h or 'tuition' in h:
            invoice_idx = idx
        elif 'ktx' in h or 'ký túc' in h or 'dorm' in h:
            ktx_idx = idx
        elif 'điều kiện' in h or 'tuyển sinh' in h or 'gpa' in h or 'cond' in h:
            cond_idx = idx
        elif 'ngành' in h or 'thế mạnh' in h or 'major' in h:
            majors_idx = idx
            
    # Dự phòng
    if name_idx == -1:
        # Giả sử cột thứ 2 (index 1) hoặc 3 (index 2) là tên trường
        name_idx = 1 if len(headers) > 1 else 0
        
    for row in rows[1:]:
        if not any(x is not None for x in row):
            continue
        school_name = row[name_idx] if name_idx < len(row) else None
        if not school_name or 'tên trường' in str(school_name).lower():
            continue
            
        invoice = row[invoice_idx] if invoice_idx != -1 and invoice_idx < len(row) else None
        ktx = row[ktx_idx] if ktx_idx != -1 and ktx_idx < len(row) else None
        cond = row[cond_idx] if cond_idx != -1 and cond_idx < len(row) else None
        majors = row[majors_idx] if majors_idx != -1 and majors_idx < len(row) else None
        
        excel_data.append({
            'file': f_name,
            'top': top_val,
            'raw_name': school_name,
            'clean_name': clean_name(school_name),
            'invoice': invoice,
            'ktx': ktx,
            'cond': cond,
            'majors': majors
        })

print(f"Read {len(excel_data)} records from detail Excel sheets.")

# 3. Tiến hành đối sánh với các trường đang bị null tuition
null_schools = [u for u in db if all(val is None for val in u.get('tuition', {}).values())]
print(f"Null tuition schools count: {len(null_schools)}")

matched_count = 0
for u in null_schools:
    u_ko = clean_name(u.get('name_ko'))
    u_en = clean_name(u.get('name_en'))
    u_vi = clean_name(u.get('name_vi'))
    
    # Tìm kiếm trong excel_data
    best_match = None
    for item in excel_data:
        it_name = item['clean_name']
        if not it_name:
            continue
        # So khớp trực tiếp hoặc chứa nhau
        if u_ko and u_ko in it_name or it_name in u_ko:
            best_match = item
            break
        if u_en and u_en in it_name or it_name in u_en:
            best_match = item
            break
        if u_vi and u_vi in it_name or it_name in u_vi:
            best_match = item
            break
            
    if best_match:
        matched_count += 1
        print(f"Matched: '{u['name_vi']}' -> Excel '{best_match['raw_name']}' in {best_match['file']}")
        print(f"  Invoice: {best_match['invoice']}")
        print(f"  KTX: {best_match['ktx']}")
        print(f"  Majors: {best_match['majors']}")

print(f"Matched {matched_count} out of {len(null_schools)} null tuition schools.")
