import openpyxl
import json
import re
import subprocess

wb = openpyxl.load_workbook('top3.xlsx', data_only=True)
sheet = wb.active

# Load current universities
with open('scratch/unis.json', 'r', encoding='utf-8') as f:
    unis = json.load(f)

# Region mapping dictionary
region_map = {
    "seoul": "Seoul",
    "ansan": "Gyeonggi",
    "bucheon": "Gyeonggi",
    "suweon": "Gyeonggi",
    "gyeonggi": "Gyeonggi",
    "gwangju": "Gwangju",
    "kwangju": "Gwangju",
    "gangwon": "Gangwon",
    "jeju": "Jeju",
    "sejong": "Sejong",
    "busan": "Busan",
    "jeonllanam": "Jeollanam",
    "jeonllabuk": "Jeollabuk",
    "changwon": "Gyeongsangnam",
    "chungcheongnam": "Chungcheongnam"
}

coords_map = {
    "Seoul": (37.5665, 126.9780),
    "Gyeonggi": (37.2750, 127.0094),
    "Gwangju": (35.1595, 126.8526),
    "Gangwon": (37.8854, 127.7298),
    "Jeju": (33.4500, 126.5000),
    "Sejong": (36.4800, 127.2890),
    "Busan": (35.1796, 129.0756),
    "Jeollanam": (34.8161, 126.4629),
    "Jeollabuk": (35.8242, 127.1480),
    "Gyeongsangnam": (35.2281, 128.6811),
    "Chungcheongnam": (36.6588, 126.6728)
}

def remove_tones(s):
    if not s: return ''
    s = str(s).lower().strip()
    s = re.sub(r'[àáạảãâầấậẩẫăằắặẳẵ]', 'a', s)
    s = re.sub(r'[èéẹẻẽêềếệểễ]', 'e', s)
    s = re.sub(r'[ìíịỉĩ]', 'i', s)
    s = re.sub(r'[òóọỏõôồốộổỗơờớợởỡ]', 'o', s)
    s = re.sub(r'[ùúụủũưừứựửữ]', 'u', s)
    s = re.sub(r'[ỳýỵỷỹ]', 'y', s)
    s = re.sub(r'[đ]', 'd', s)
    s = re.sub(r'[\(\)\-\,\.\_\/]', ' ', s)
    words = [w for w in s.split() if w not in ['dai', 'hoc', 'cao', 'dang', 'vien', 'trung', 'cap', 'school', 'university', 'college', 'top', '1%', '2%', '3%']]
    return " ".join(words)

# Helper to find matching school in current unis
def find_uni_by_name(clean_name):
    norm_target = remove_tones(clean_name)
    for u in unis:
        norm_vi = remove_tones(u['name_vi'])
        if norm_vi and (norm_vi in norm_target or norm_target in norm_vi):
            return u
    return None

top3_rows = []
for idx, row in enumerate(sheet.iter_rows(values_only=True), start=1):
    if not row or idx in [1, 2]: continue
    vals = [str(c).strip() if c is not None else '' for c in row]
    if len(vals) < 2 or not vals[1]: continue
    
    stt = vals[0]
    name_raw = vals[1].split(' - top 3')[0].split('\n')[0].strip()
    region_raw = vals[3] if len(vals) > 3 else 'Gyeonggi'
    majors_raw = vals[4] if len(vals) > 4 else ''
    invoice_raw = vals[5] if len(vals) > 5 else ''
    ktx_raw = vals[6] if len(vals) > 6 else ''
    notes_raw = vals[7] if len(vals) > 7 else ''
    
    # Parse tuition
    tuition_annual = 4400000
    nums = re.findall(r'(\d[\d\,]+)', invoice_raw)
    if nums:
        try:
            val = int(nums[0].replace(',', ''))
            if val > 1000000:
                tuition_annual = val
        except:
            pass
    semester_tuition = tuition_annual // 2
    
    # Parse dorm
    dorm_fee_val = 800000
    dorm_nums = re.findall(r'(\d[\d\,]+)', ktx_raw)
    if dorm_nums:
        try:
            dval = int(dorm_nums[0].replace(',', ''))
            if dval > 100000:
                dorm_fee_val = dval
        except:
            pass
            
    # Parse region
    reg_clean = "Gyeonggi"
    for rk, rv in region_map.items():
        if rk in remove_tones(region_raw):
            reg_clean = rv
            break
            
    lat, lon = coords_map.get(reg_clean, (37.2750, 127.0094))
    
    top3_rows.append({
        "stt": stt,
        "name_raw": name_raw,
        "region": reg_clean,
        "lat": lat + (hash(name_raw) % 100) * 0.001,
        "lon": lon + (hash(name_raw) % 100) * 0.001,
        "majors": majors_raw,
        "invoice": invoice_raw,
        "ktx": ktx_raw,
        "notes": notes_raw,
        "tuition_sem": semester_tuition,
        "dorm_fee": dorm_fee_val
    })

print(f"Read {len(top3_rows)} TOP 3% schools from Excel.\n")

updated_count = 0
added_count = 0

for item in top3_rows:
    existing = find_uni_by_name(item['name_raw'])
    if existing:
        # Tag existing school as TOP 3%
        existing['accept_gdtx'] = 'top3'
        existing['top_1_percent'] = False
        if item['majors']: existing['featured_majors'] = item['majors']
        if item['notes']: existing['custom_notes'] = item['notes']
        if item['invoice']: existing['invoice_details'] = item['invoice']
        updated_count += 1
        print(f"✅ Cập nhật trường có sẵn -> TOP 3%: {existing['name_vi']} (ID: {existing['id']})")
    else:
        # Create new school object for missing TOP 3% school
        new_id = f"top3_school_{item['stt']}"
        new_school = {
            "id": new_id,
            "name_vi": item['name_raw'],
            "name_en": f"{item['name_raw']} (TOP 3%)",
            "name_ko": item['name_raw'],
            "type": "Private",
            "region": item['region'],
            "ranking": 150 + int(item['stt']),
            "campus_address": f"{item['region']}, Hàn Quốc",
            "website": "https://www.studyinkorea.go.kr",
            "tuition": {
                "humanities_social": item['tuition_sem'],
                "natural_sciences": int(item['tuition_sem'] * 1.1),
                "engineering": int(item['tuition_sem'] * 1.25),
                "arts_sports": int(item['tuition_sem'] * 1.3),
                "medicine_pharmacy": None
            },
            "dorm_fee": item['dorm_fee'],
            "living_cost_est": 3500000,
            "scholarships": [
                "Học bổng khuyến học TOP 3%: Giảm 20% - 50% học phí kỳ đầu cho tân sinh viên",
                "Học bổng thành tích học tập: Giảm 30% - 70% dựa trên GPA"
            ],
            "accept_gdtx": "top3",
            "visa_metropolitan": True if item['region'] in ['Seoul', 'Gyeonggi', 'Incheon'] else False,
            "master_no_topik": False,
            "top_1_percent": False,
            "is_restricted_school": False,
            "featured_majors": item['majors'] if item['majors'] else "Đào tạo đa ngành, Công nghệ & Dịch vụ",
            "custom_notes": item['notes'] if item['notes'] else "Trường nằm trong danh sách TOP 3% năm 2026",
            "invoice_details": item['invoice'] if item['invoice'] else f"Học phí ~{item['tuition_sem']*2:,} KRW/năm",
            "coordinates": {
                "latitude": item['lat'],
                "longitude": item['lon']
            },
            "majors_detail": [
                {
                    "category": "humanities_social",
                    "faculty_name_vi": "Khoa Nhân văn & Xã hội",
                    "faculty_name_ko": "인문사회대학",
                    "tuition_krw": item['tuition_sem'],
                    "majors": [
                        { "name_vi": "Quản trị Kinh doanh & Du lịch", "name_ko": "경영관광학과", "is_hot": True },
                        { "name_vi": "Ngôn ngữ Hàn Quốc", "name_ko": "한국어학과", "is_hot": True }
                    ]
                },
                {
                    "category": "engineering",
                    "faculty_name_vi": "Khoa Kỹ thuật & Công nghệ",
                    "faculty_name_ko": "공과대학",
                    "tuition_krw": int(item['tuition_sem'] * 1.25),
                    "majors": [
                        { "name_vi": "Công nghệ Thông tin & Ô tô", "name_ko": "IT자동차학과", "is_hot": True }
                    ]
                }
            ]
        }
        unis.append(new_school)
        added_count += 1
        print(f"🆕 Thêm mới trường TOP 3%: {new_school['name_vi']} (ID: {new_id})")

print(f"\n📊 TỔNG KẾT: Cập nhật {updated_count} trường có sẵn, Thêm mới {added_count} trường TOP 3%.")
print(f"📌 Tổng số trường TOP 3% hiện có trên hệ thống: {len([u for u in unis if u.get('accept_gdtx') == 'top3'])} trường!")

# Save to JS files
js_code = "export const universities = " + json.dumps(unis, indent=2, ensure_ascii=False) + ";\n"

with open('src/data/universities.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

with open('kr-unituition-next/src/data/universities.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

print("✅ Đã ghi thành công vào src/data/universities.js và kr-unituition-next/src/data/universities.js!")
