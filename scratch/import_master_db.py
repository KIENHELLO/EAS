import openpyxl
import json
import os
import re
import datetime
import subprocess
from difflib import SequenceMatcher

def similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()

old_id_to_hangeul = {
    "top3_school_8": "경기대학교", # Kyonggi
    "top3_school_20": "경동대학교", # Kyungdong
    "top3_school_2": "안산대학교", # Ansan
    "top3_school_3": "부천대학교", # Bucheon
    "top3_school_4": "동남보건대학교", # Dongnam Health
    "top3_school_6": "장안대학교", # Jangan
    "top3_school_9": "경민대학교", # Kyungmin
    "top3_school_10": "서정대학교", # Seojeong
    "top3_school_11": "신안산대학교", # Shin Ansan
    "top3_school_13": "두원공과대학교", # Doowon Technical
    "top3_school_14": "동원대학교", # Tongwon
    "top3_school_15": "용인예술과학대학교", # Yongin Arts & Sci
    "top3_school_16": "광주여자대학교", # Kwangju Women's
    "top3_school_17": "송원대학교", # Songwon
    "top3_school_18": "강릉영동대학교", # Gangneung Yeongdong
    "top3_school_19": "한라대학교", # Halla
    "top3_school_22": "송호대학교", # Songho
    "top3_school_23": "강원도립대학교", # Gangwon State
    "top3_school_1": "중앙승가대학교", 
    "top3_school_21": "상지대학교", # Sangji
    "caoangyeungjin": "영진전문대학교", # Yeungjin
    "caoangkimpo": "김포대학교", # Kimpo
    "caoangshingu": "신구대학교", # Shingu
    "caoangshingu_83": "신구대학교",
    "saungonnguquoct": "서울외국어대학원대학교", 
    "sausunhakup": "선학유피대학원대학교", 
    "viencaohocngonn": "서울외국어대학원대학교",
    "caodangcheongam": "청암대학교",
    "caodangytedaegu": "대구보건대학교",
    "caodangkhoahock": "동원과학기술대학교",
    "keimyung": "계명대학교",
    "gachon": "가천대학교",
    "kwangwoon": "광운대학교",
    "gangneungwonju": "강릉원주대학교",
    "sahmyook": "삼육대학교",
    "khoahoccongnghe": "서울과학기술대학교",
    "sungkyul": "성결대학교",
    "shinhan": "신한대학교",
    "kinhthanhhanquo": "한국성서대학교",
    "ngoainguhankuk": "한국외국어대학교",
    "hanyangerica": "한양대학교 ERICA",
    "konyang": "건양대학교",
    "koreacososejong": "고려대학교",
    "kongju": "공주대학교",
    "giaothonghanquo": "한국교통대학교",
    "hanbat": "한밭대학교",
    "nazarene": "나사렛대학교",
    "daejeon": "대전대학교",
    "mokwon": "목원대학교",
    "dankook": "단국대학교",
    "soonchunhyang": "순천향대학교",
    "woosong": "우송대학교",
    "joobu": "중부대학교",
    "giaoduckythuath": "한국기술교육대학교",
    "hannam": "한남대학교",
    "hanseo": "한서대학교",
    "hoseo": "호서대학교",
    "kyungnam": "경남대학교",
    "kyungsang": "경상국립대학교",
    "kyungsung": "경성대학교",
    "kyungwoon": "경운대학교",
    "gwangju": "광주대학교",
    "gyeongguk": "경북대학교",
    "pukyong": "부경대학교",
    "sunchon": "순천대학교",
    "changwon": "창원대학교",
    "daegu_catholic": "대구가톨릭대학교",
    "daeshin": "대신대학교",
    "donggukwise": "동국대학교",
    "tongmyung": "동명대학교",
    "dongseo": "동서대학교",
    "donga": "동아대학교",
    "silla": "신라대학교",
    "widuk": "위덕대학교",
    "inje": "인제대학교",
    "chosun": "조선대학교",
    "kyungin": "경인여자대학교",
    "dongwon": "동원대학교",
    "myongji_college": "명지전문대학",
    "osan_uni": "오산대학교",
    "nghethuatkhoaho": "용인예술과학대학교",
    "induk": "인덕대학교",
    "hocviennghethua": "서울예술대학교",
    "wonkwang_health": "원광보건대학교",
    "jeonbuk_science": "전북과학대학교",
    "thongtinkyungna": "경남정보대학교",
    "khoahocdongeui": "동의과학대학교",
    "yeungnam_college": "영남이공대학교",
    "ulsan_science": "울산과학대학교",
    "luatvakinhdoanh": "국제법률경영대학원대학교",
    "dongshintop": "동신대학교",
    "kosintop": "고신대학교",
    "masantop": "마산대학교",
    "howontop": "호원대학교",
    "ajou_motor": "아주자동차대학교",
    "dongmyung": "동명대학교",
    "phimanhhanquoc": "한국영상대학교",
    "khoahocvacongng": "경남과학기술대학교",
    "dongeui": "동의대학교",
    "yongin": "용인대학교",
    "dongduk": "동덕여자대학교",
    "mokpo": "목포대학교",
    "nghethuatyewon": "예원예술대학교",
    "yuwon": "유원대학교",
    "chodang": "초당대학교",
    "chongshin": "총신대학교",
    "vanhoakeimyung": "계명문화대학교",
    "khoahockyongbuk": "경북과학대학교",
    "viencongnghegeu": "금오공과대학교",
}

def clean_ko_excel(name):
    if not name:
        return ""
    name = re.sub(r'\(.*?\)', '', str(name))
    name = name.replace("국립", "")
    hangeul_parts = re.findall(r'[\uac00-\ud7a3a-zA-Z0-9]+', name)
    if hangeul_parts:
        return "".join(hangeul_parts).lower()
    return "".join(str(name).split()).lower()

def clean_ko_db(name, school_id=None):
    if school_id and school_id in old_id_to_hangeul:
        val = old_id_to_hangeul[school_id]
        val = val.replace("국립", "")
        hangeul_parts = re.findall(r'[\uac00-\ud7a3a-zA-Z0-9]+', val)
        return "".join(hangeul_parts).lower()
    if not name:
        return ""
    hangeul_parts = re.findall(r'[\uac00-\ud7a3a-zA-Z0-9]+', str(name))
    if hangeul_parts:
        return "".join(hangeul_parts).lower()
    return "".join(str(name).split()).lower()

def clean_en(name):
    if not name:
        return ""
    name = re.sub(r'\(.*?\)', '', str(name))
    name = re.sub(r'[^a-zA-Z0-9]', '', name).lower()
    return name

def make_slug(name_en):
    name = str(name_en).lower()
    name = name.replace("university", "").replace("college", "").strip()
    name = re.sub(r'[^a-z0-9]', '', name)
    return name

def normalize_region(r):
    if not r:
        return "Seoul"
    r = str(r).strip()
    mapping = {
        'Seoul': 'Seoul',
        'Busan': 'Busan',
        'Daegu': 'Daegu',
        'Incheon': 'Incheon',
        'Gwangju': 'Gwangju',
        'Daejeon': 'Daejeon',
        'Ulsan': 'Ulsan',
        'Gyeonggi': 'Gyeonggi',
        'Gyeonggi-do': 'Gyeonggi',
        'Gyeonggido': 'Gyeonggi',
        'Gangwon': 'Gangwon',
        'Gangwon-do': 'Gangwon',
        'Gangwondo': 'Gangwon',
        'Chungbuk': 'Chungbuk',
        'Chungcheongbuk-do': 'Chungbuk',
        'Chungcheongbukdo': 'Chungbuk',
        'Chungnam': 'Chungnam',
        'Chungcheongnam-do': 'Chungnam',
        'Chungcheongnamdo': 'Chungnam',
        'Jeonbuk': 'Jeonbuk',
        'Jeollabuk-do': 'Jeonbuk',
        'Jeollabukdo': 'Jeonbuk',
        'Jeonnam': 'Jeonnam',
        'Jeollanam-do': 'Jeonnam',
        'Jeollanamdo': 'Jeonnam',
        'Gyeongbuk': 'Gyeongbuk',
        'Gyeongsangbuk-do': 'Gyeongbuk',
        'Gyeongsangbukdo': 'Gyeongbuk',
        'Gyeongnam': 'Gyeongnam',
        'Gyeongsangnam-do': 'Gyeongnam',
        'Gyeongsangnamdo': 'Gyeongnam',
        'Jeju': 'Jeju',
        'Jeju-do': 'Jeju',
        'Jejudo': 'Jeju',
        'Changwon': 'Gyeongnam'
    }
    r_lower = r.lower()
    for k, v in mapping.items():
        if k.lower() == r_lower or r_lower == v.lower():
            return v
    for k, v in mapping.items():
        if k.lower() in r_lower:
            return v
    return r

# Setup paths
excel_path = 'MASTER_DATABASE_DAI_HOC_CAO_DANG_HAN_QUOC_2026.xlsx'
vite_db_path = 'src/data/universities.js'
next_db_path = 'kr-unituition-next/src/data/universities.js'
timestamp = datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')

# 1. Backups
print("=== Starting Backups ===")
for p in [vite_db_path, next_db_path]:
    if os.path.exists(p):
        backup_path = p.replace('.js', f'.backup.{timestamp}.js')
        with open(p, 'r', encoding='utf-8') as src, open(backup_path, 'w', encoding='utf-8') as dst:
            dst.write(src.read())
        print(f"Created physical backup: {backup_path}")
    else:
        print(f"File not found for backup: {p}")

# 2. Dump current database
print("\n=== Dumping Current DB ===")
dump_script = """
const fs = require('fs');
const content = fs.readFileSync('src/data/universities.js', 'utf8');
const universities = eval(content.replace('export const universities =', 'module.exports ='));
console.log(JSON.stringify(universities));
"""
with open('scratch/dump_to_json.cjs', 'w', encoding='utf-8') as f:
    f.write(dump_script)

res = subprocess.run(['node', 'scratch/dump_to_json.cjs'], capture_output=True, text=True, encoding='utf-8')
old_db = json.loads(res.stdout.strip())
print(f"Loaded {len(old_db)} active schools from current database.")

# 3. Read Excel MASTER_DATABASE sheet
print("\n=== Reading Excel Source ===")
wb = openpyxl.load_workbook(excel_path, data_only=True)
sheet = wb['MASTER_DATABASE']
rows_val = list(sheet.iter_rows(values_only=True))

headers = rows_val[0]
excel_rows = []
for r in rows_val[1:]:
    if not r[0]: # skip empty rows
        continue
    row_dict = {headers[i]: r[i] for i in range(len(headers))}
    excel_rows.append(row_dict)
print(f"Loaded {len(excel_rows)} schools from Excel.")

# 4. Perform Two-Step Matching (ensuring no duplicate matching)
print("\n=== Performing Matching ===")
db_matched_ids = set()
excel_matched_indices = {} # excel_idx -> db_school

# Step 1: Korean Name Match (ensuring no duplicate matching)
for idx, row in enumerate(excel_rows):
    ex_ko = clean_ko_excel(row['Korean_Name'])
    if not ex_ko:
        continue
    matched_school = None
    for db_school in old_db:
        if db_school['id'] in db_matched_ids:
            continue
        db_ko = clean_ko_db(db_school.get('name_ko'), db_school.get('id'))
        if ex_ko == db_ko:
            matched_school = db_school
            break
    if matched_school:
        excel_matched_indices[idx] = matched_school
        db_matched_ids.add(matched_school['id'])

# Step 2: English Name Match fallback (ensuring no duplicate matching)
for idx, row in enumerate(excel_rows):
    if idx in excel_matched_indices:
        continue
    ex_en = clean_en(row['English_Name'])
    if not ex_en:
        continue
    matched_school = None
    for db_school in old_db:
        if db_school['id'] in db_matched_ids:
            continue
        db_en = clean_en(db_school.get('name_en'))
        if db_en == ex_en or clean_en(db_school.get('id')) == ex_en:
            matched_school = db_school
            break
    if matched_school:
        excel_matched_indices[idx] = matched_school
        db_matched_ids.add(matched_school['id'])

# Near-matches check for warning report
near_matches = []
for idx, row in enumerate(excel_rows):
    if idx in excel_matched_indices:
        continue
    clean_ex_ko = clean_ko_excel(row['Korean_Name'])
    clean_ex_en = clean_en(row['English_Name'])
    for db_school in old_db:
        if db_school['id'] in db_matched_ids:
            continue
        sim_ko = similarity(clean_ex_ko, clean_ko_db(db_school.get('name_ko'), db_school.get('id')))
        sim_en = similarity(clean_ex_en, clean_en(db_school.get('name_en')))
        if sim_ko > 0.85 or sim_en > 0.85:
            near_matches.append({
                'excel': row,
                'db': db_school,
                'sim_ko': sim_ko,
                'sim_en': sim_en
            })

# 5. Process Unmatched Old Schools
unmatched_old_schools = [u for u in old_db if u['id'] not in db_matched_ids]
print(f"Matched Excel rows: {len(excel_matched_indices)}")
print(f"Unmatched old database schools: {len(unmatched_old_schools)}")

# 6. Map and Build the New List
new_universities = []
used_slugs = set()

def clean_val(val, field_name=None):
    if val is None:
        return None
    val_str = str(val).strip()
    if val_str == "N/A" or val_str == "":
        return None
    if field_name in ['Founded_Year', 'International_Student']:
        try:
            return int(float(val_str))
        except:
            return None
    return val_str

for idx, row in enumerate(excel_rows):
    vs = str(row.get('Verification_Status', '')).lower()
    is_verified = "verified" in vs and "unverified" not in vs
    
    inst_type = str(row.get('Institution_Type', '')).lower()
    en_name = str(row.get('English_Name', '')).lower()
    is_college = "college" in inst_type or "college" in en_name
    
    pub_pri = str(row.get('Public_Private', '')).lower()
    mapped_type = "private" if "tư thục" in pub_pri or "private" in pub_pri else "public"
    
    if idx in excel_matched_indices:
        db_school = excel_matched_indices[idx]
        slug = db_school['id']
        used_slugs.add(slug)
        
        updated_school = {
            "id": slug,
            "university_id": row['University_ID'],
            "name_ko": row['Korean_Name'],
            "name_en": row['English_Name'],
            "name_vi": row['Vietnamese_Name'],
            "type": mapped_type,
            "region": normalize_region(row['Province']),
            "city": row['City'],
            "campus_address": clean_val(row['Address']),
            "website": clean_val(row['Website']),
            "previous_name": clean_val(row['Previous_Name']),
            "campus": clean_val(row['Campus']),
            "founded_year": clean_val(row['Founded_Year'], 'Founded_Year'),
            "international_student": clean_val(row['International_Student'], 'International_Student'),
            "notes": row['Notes'],
            "source": row['Source'],
            "last_verified": row['Last_Verified'],
            "verification_status": row['Verification_Status'],
            "is_verified": is_verified,
            "is_college": is_college,
            
            # Preserved detailed properties from old DB
            "ranking": db_school.get("ranking", 200),
            "tuition": db_school.get("tuition", {
                "humanities_social": None, "natural_sciences": None, "engineering": None, "arts_sports": None, "medicine_pharmacy": None
            }),
            "dorm_fee": db_school.get("dorm_fee"),
            "living_cost_est": db_school.get("living_cost_est"),
            "scholarships": db_school.get("scholarships", []),
            "description": db_school.get("description", ""),
            "accept_gdtx": db_school.get("accept_gdtx"),
            "visa_metropolitan": db_school.get("visa_metropolitan", False),
            "master_no_topik": db_school.get("master_no_topik", False),
            "custom_notes": db_school.get("custom_notes", ""),
            "top_1_percent": db_school.get("top_1_percent", False),
            "language_tuition_desc": db_school.get("language_tuition_desc"),
            "registration_fee_desc": db_school.get("registration_fee_desc"),
            "insurance_fee_desc": db_school.get("insurance_fee_desc"),
            "invoice_details": db_school.get("invoice_details"),
            "dorm_fee_desc": db_school.get("dorm_fee_desc"),
            "admission_conditions": db_school.get("admission_conditions"),
            "featured_majors": db_school.get("featured_majors"),
            "regional_restrictions": db_school.get("regional_restrictions", ""),
            "coordinates": db_school.get("coordinates", {"latitude": None, "longitude": None}),
            "majors_detail": db_school.get("majors_detail", [])
        }
        new_universities.append(updated_school)
    else:
        # Brand new school construction
        base_slug = make_slug(row['English_Name'])
        campus_val = clean_val(row.get('Campus'))
        if campus_val:
            campus_slug = make_slug(campus_val)
            if campus_slug and campus_slug not in base_slug:
                base_slug = f"{base_slug}_{campus_slug}"
                
        if not base_slug:
            base_slug = row['University_ID'].lower().replace('-', '')
        slug = base_slug
        cnt = 1
        while slug in used_slugs or any(u['id'] == slug for u in old_db):
            slug = f"{base_slug}_{cnt}"
            cnt += 1
        used_slugs.add(slug)
        
        new_school = {
            "id": slug,
            "university_id": row['University_ID'],
            "name_ko": row['Korean_Name'],
            "name_en": row['English_Name'],
            "name_vi": row['Vietnamese_Name'],
            "type": mapped_type,
            "region": normalize_region(row['Province']),
            "city": row['City'],
            "campus_address": clean_val(row['Address']),
            "website": clean_val(row['Website']),
            "previous_name": clean_val(row['Previous_Name']),
            "campus": clean_val(row['Campus']),
            "founded_year": clean_val(row['Founded_Year'], 'Founded_Year'),
            "international_student": clean_val(row['International_Student'], 'International_Student'),
            "notes": row['Notes'],
            "source": row['Source'],
            "last_verified": row['Last_Verified'],
            "verification_status": row['Verification_Status'],
            "is_verified": is_verified,
            "is_college": is_college,
            
            # Default detailed properties
            "ranking": 300 + idx,
            "tuition": {
                "humanities_social": None, "natural_sciences": None, "engineering": None, "arts_sports": None, "medicine_pharmacy": None
            },
            "dorm_fee": None,
            "living_cost_est": None,
            "scholarships": [],
            "description": "",
            "accept_gdtx": None,
            "visa_metropolitan": False,
            "master_no_topik": False,
            "custom_notes": "",
            "top_1_percent": False,
            "language_tuition_desc": None,
            "registration_fee_desc": None,
            "insurance_fee_desc": None,
            "invoice_details": None,
            "dorm_fee_desc": None,
            "admission_conditions": None,
            "featured_majors": None,
            "regional_restrictions": "",
            "coordinates": {"latitude": None, "longitude": None},
            "majors_detail": []
        }
        new_universities.append(new_school)

# Append unmatched old schools with needs_review = True
for old_s in unmatched_old_schools:
    old_s['needs_review'] = True
    if 'is_verified' not in old_s:
        old_s['is_verified'] = False
    if 'type' in old_s and old_s['type']:
        old_s['type'] = old_s['type'].lower()
    new_universities.append(old_s)

# 7. Write universities.js to targets
js_content = "export const universities = " + json.dumps(new_universities, indent=2, ensure_ascii=False) + ";\n"

with open(vite_db_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
with open(next_db_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\nWritten {len(new_universities)} universities to client and portal databases.")

# 8. Write import warnings & reports
warning_md = f"""# Import Warnings & Match Verification - {timestamp}

## Near Matches / Duplicate Candidates (Requires Manual Verification)
"""
if near_matches:
    for nm in near_matches:
        warning_md += f"""
### Excel: {nm['excel']['Korean_Name']} ({nm['excel']['English_Name']}) vs DB: {nm['db']['name_ko']} ({nm['db']['name_en']})
- Korean name similarity: {nm['sim_ko']:.2%}
- English name similarity: {nm['sim_en']:.2%}
- DB ID: {nm['db']['id']}
"""
else:
    warning_md += "\n*No ambiguous near matches detected.*\n"

warning_md += f"""
## Unmatched Old Schools Marked with `needs_review: true`
"""
if unmatched_old_schools:
    for u in unmatched_old_schools:
        warning_md += f"- **{u['name_ko']}** ({u['name_en']}) - ID: `{u['id']}`\n"
else:
    warning_md += "\n*All old schools were successfully matched.*\n"

with open('import_warnings.md', 'w', encoding='utf-8') as f:
    f.write(warning_md)

print("Import warnings written to import_warnings.md")
print("\n=== SUMMARY OF IMPORTED DATA ===")
print(f"Total schools in Excel: {len(excel_rows)}")
print(f"Successfully matched: {len(excel_matched_indices)}")
print(f"New schools added: {len(excel_rows) - len(excel_matched_indices)}")
print(f"Unmatched old schools (flagged needs_review): {len(unmatched_old_schools)}")
print(f"Total entries in final database: {len(new_universities)}")
