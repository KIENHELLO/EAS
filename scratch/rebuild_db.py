import json
import re

# Load raw schools and coordinates
with open('scratch/unified_schools.json', 'r', encoding='utf-8') as f:
    unified_schools = json.load(f)

with open('scratch/db_schools.json', 'r', encoding='utf-8') as f:
    old_db = json.load(f)

# Load git_coords from school_coordinates.json
import os
coords_json_path = r"D:\EASS\src\data\school_coordinates.json"
if os.path.exists(coords_json_path):
    with open(coords_json_path, 'r', encoding='utf-8') as f:
        git_coords = json.load(f)
else:
    git_coords = {}

# Helper to normalize school names for matching
def clean(text):
    if not text:
        return ""
    text = str(text).lower()
    text = text.replace('-', '').replace(' ', '').replace('\'', '')
    text = text.replace('đạihọcquốcgia', '').replace('đạihọccônggiáo', '').replace('đạihọcnữsinh', '').replace('đạihọcnữ', '').replace('đạihọc', '')
    text = text.replace('caodẳngkỹthuật', '').replace('caodẳngy', '').replace('caodẳng', '').replace('trường', '')
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

id_overrides = {
    # Konkuk University
    "Đại học Konkuk ( KU )\n( 건국대학교 )": "konkuk",
    "Đại học Konkuk": "konkuk",
    
    # Hanyang University
    "Đại học Hanyang": "hanyang",
    
    # Dongguk University
    "Đại học Dongguk\n( 동국대 학교)": "dongguk",
    "Đại học Dongguk": "dongguk",
    
    # Hongik University
    "Đại học Hongik \n( 홍익대학교 )": "hongik",
    "Đại học Hongik": "hongik",
    
    # Kyungpook National University
    "Đại học Quốc gia Kyungpook\n( 경북대학교 )": "knu",
    "Đại học Quốc gia Kyungpook": "knu",
    
    # Seoul National University
    "Đại học Quốc gia Seoul": "snu",
    
    # KAIST
    "Viện Khoa học và Công nghệ Tiên tiến Hàn Quốc (KAIST)": "kaist",
    
    # Korea University
    "Đại học Korea": "korea",
    
    # Sangji University
    "Đại học Sangji": "sangji",
    "Cao đẳng Catholic Sangji": "sangji_catholic",
    
    # Myongji
    "Đại học Myongji": "myongji",
    "Cao đẳng Myongji": "myongji_college",
    
    # Ajou
    "Đại học Ajou": "ajou",
    "Đại học Ajou Motor - top 3": "ajou_motor",
    
    # Yonsei University
    "Đại học Yonsei": "yonsei",
    
    # Catholic University of Korea
    "Đại học Công giáo": "catholic",
    
    # Duksung Womans University
    "Đại học Nữ Duksung": "duksung",
    "Đại học Nữ sinh Duksung \n( 덕성여자대학교 0": "duksung",
    
    # Sookmyung Womans University
    "Đại học Nữ Sookmyung": "sookmyung",
    "Đại học nữ sinh Sookmyung": "sookmyung",
    
    # Sungshin Womans University
    "Đại học Nữ Sungshin": "sungshin",
    
    # Seokyeong University
    "Đại học Seolyong ( 서경대학교 )": "seolyong",
    "Đại học Seolyong\n( 서경대학교 )": "seolyong",
    
    # Pohang University of Science and Technology (POSTECH)
    "Đại học Khoa học và Công nghệ Pohang": "postech",
    "포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH)": "postech",
    
    # Sungkyunkwan University
    "Đại học Sungkyungwan": "skku",
    
    # Chung-Ang University
    "Đại học ChungAng": "cau",
    
    # Seoul Theological University
    "Đại học thần học SEOUL ( STU ) ( 서울신학대학교 )": "seoul_theological",
    "Đại học thần học SEOUL ( STU )\n( 서울신학대학교 ) ": "seoul_theological",
    "Đại học Thần học Seoul": "seoul_theological",
    
    # Pusan National University
    "Đại học Quốc gia Busan": "pusan",
    
    # Pukyong National University
    "Đại học Quốc gia Pukyong": "pukyong",
    
    # Changwon National University
    "Đại học Quốc gia Changwon": "changwon",
    
    # Youngsan University
    "Đại học Yeongsang - top 3": "youngsan",
    
    # Doowon Technical University College
    "Đại học Doowon - top 3": "top3_school_13",
    "Đại học kỹ thuật Doowon": "top3_school_13",
    
    # Jeju National University
    "Đại học Jeju - top 3": "jeju",
    "Đại học Jeju": "jeju",
    
    # Osan University
    "Đại học Osan": "osan_uni",
    
    # Daejeon University
    "Đại học Daejeon": "daejeon",
    
    # Paichai University
    "Đại học Paichai": "paichai",
    
    # Kyungil University
    "Đại học Kyungil": "kyungil",
    
    # Daegu Catholic University
    "Đại học Công giáo Daegu": "daegu_catholic",
    
    # Yeungnam University
    "Đại học Yeungnam": "yeungnam",
    "Đại học Yeungnam College": "yeungnam_college",
    
    # Ulsan University
    "Đại học Ulsan": "ulsan",
    "Đại học Khoa học Ulsan": "ulsan_science",
    
    # Wonkwang University
    "Đại học Wonkwang": "wonkwang",
    "Đại học Y tế Wonkwang": "wonkwang_health",
    
    # Jeonbuk National University
    "Đại học Quốc gia Jeonbuk": "jbnu",
    "Đại học Quốc gia Chonbuk": "jbnu",
    "Đại học học Khoa học Jeonbuk": "jeonbuk_science",
    
    # Yong In University
    "Đại học Yong In": "yongin",
    "Đại học Khoa học và Nghệ thuật Yongin": "nghethuatkhoaho",
    
    # Gangwon National University
    "Đại học Gangwon": "kangwon",
    "Đại học Quốc gia Kangwon": "kangwon",
    
    # Spelling & duplicate redirects
    "Đại học Kusan": "kunsan",
    "Đại học Sanji": "sangji",
    
    # Restricted schools variations
    "Đại học Dong Eui": "dongeui",
    "Đại học nữ Dongduk": "dongduk",
    "Đại học Mokpo": "mokpo",
    "Đại học Nghệ thuật Yewon": "nghethuatyewon",
    "Đại học Yuwon": "yuwon",
    "Đại học Chodang": "chodang",
    "Đại học Chongshin": "chongshin",
    "Đại học Văn hoá Keimyung": "vanhoakeimyung",
    "Đại học Khoa học Kyongbuk": "khoahockyongbuk",
    "Viện Công nghệ Geumoh": "viencongnghegeu",
    "Cao đẳng Y tế Daegu": "caodangytedaegu",
    "Cao đẳng Khoa học kỹ thuật Dongwon": "caodangkhoahock",
    "Cao đẳng Cheongam": "caodangcheongam",
    "Cao đẳng Catholic Sangji": "sangji_catholic",
    "Đại học Luật và Kinh doanh Quốc tế": "luatvakinhdoanh"
}

region_overrides = {
    "chodang": "Jeonnam",
    "caodangkhoahock": "Gyeongnam",
    "caodangcheongam": "Jeonnam",
    "viencongnghegeu": "Gyeongbuk",
    "khoahockyongbuk": "Gyeongbuk",
    "mokpo": "Jeonnam",
    "yuwon": "Chungbuk",
    "dongeui": "Busan",
    "yongin": "Gyeonggi",
    "nghethuatyewon": "Gyeonggi",
    "luatvakinhdoanh": "Gyeonggi",
    "caodangytedaegu": "Daegu",
    "vanhoakeimyung": "Daegu",
    "sahmyook": "Seoul",
    "khoahocvacongng": "Gyeongnam"
}

coord_overrides = {
    "sahmyook": {"latitude": 37.6429, "longitude": 127.1075},
    "caodangcheongam": {"latitude": 34.9312, "longitude": 127.4988},
    "chodang": {"latitude": 34.9918, "longitude": 126.4380},
    "mokpo": {"latitude": 34.9130, "longitude": 126.4376},
    "yuwon": {"latitude": 36.1741, "longitude": 127.6970},
    "dongeui": {"latitude": 35.1436, "longitude": 129.0345},
    "yongin": {"latitude": 37.2285, "longitude": 127.1685},
    "nghethuatyewon": {"latitude": 37.8923, "longitude": 127.0621},
    "luatvakinhdoanh": {"latitude": 37.6698, "longitude": 126.8924},
    "caodangkhoahock": {"latitude": 35.4056, "longitude": 129.0722},
    "caodangytedaegu": {"latitude": 35.9221, "longitude": 128.5583},
    "chongshin": {"latitude": 37.4883, "longitude": 126.9680},
    "dongduk": {"latitude": 37.6063, "longitude": 127.0428},
    "seoul_theological": {"latitude": 37.4795, "longitude": 126.7890},
    "khoahocvacongng": {"latitude": 35.1804, "longitude": 128.0926},
    "khoahockyongbuk": {"latitude": 36.0097, "longitude": 128.4121},
    "vanhoakeimyung": {"latitude": 35.8558, "longitude": 128.4889}
}

# Map old DB by ID and clean names
db_by_id = {u['id']: u for u in old_db}
db_by_clean_vi = {}
db_by_clean_en = {}
for u in old_db:
    if 'mock_uni' in u['id']:
        continue
    db_by_clean_vi[clean(u['name_vi'])] = u
    db_by_clean_en[clean(u['name_en'])] = u

# We will build the new universities list
new_universities = []
coords_map = {}

# Keep track of generated IDs to prevent duplicate IDs across different schools
generated_ids = set()

def make_clean_id(name):
    # E.g. "Đại học Kwangwoon" -> "kwangwoon"
    c = clean(name)
    # limit length and keep only a-z
    c = re.sub(r'[^a-z]', '', c)
    if not c:
        c = "uni"
    base = c[:15]
    res_id = base
    counter = 1
    while res_id in generated_ids:
        res_id = f"{base}_{counter}"
        counter += 1
    generated_ids.add(res_id)
    return res_id

matched_count = 0
added_count = 0
merged_count = 0

for s in unified_schools:
    name = s['name_vi']
    
    # Try to find a match in the old database (ONLY non-mock)
    found_db = None
    
    # 1. Try manual override ID first
    if name in id_overrides:
        o_id = id_overrides[name]
        if o_id in db_by_id:
            found_db = db_by_id[o_id]
            
    # 2. Try clean exact matching
    if not found_db:
        c_name = clean(name)
        if c_name in db_by_clean_vi:
            found_db = db_by_clean_vi[c_name]
        elif c_name in db_by_clean_en:
            found_db = db_by_clean_en[c_name]
            
    # Junior College check
    is_college = s.get('is_college', False) or ('cao đẳng' in name.lower() or 
                  'college' in name.lower() or 
                  'doowon' in name.lower() or 
                  'shingu' in name.lower() or 
                  'yeungjin' in name.lower() or 
                  'kimpo' in name.lower() or 
                  'sangji' in name.lower() or 
                  'induk' in name.lower() or 
                  'dongwon' in name.lower() or 
                  'motor' in name.lower())
                  
    # Construct school record
    new_school = {}
    
    if found_db:
        school_id = found_db['id']
        
        # Check if this school ID was already added in this run (e.g. duplicate source entry representing same school)
        existing = next((x for x in new_universities if x['id'] == school_id), None)
        if existing:
            # Merge! Consolidate flags
            merged_count += 1
            existing['top_1_percent'] = existing['top_1_percent'] or s['is_top1']
            existing['master_no_topik'] = existing['master_no_topik'] or s['is_no_topik']
            existing['is_restricted_school'] = existing['is_restricted_school'] or s['is_restricted']
            if s['is_top1']:
                existing['accept_gdtx'] = 'top1'
            elif s['is_top2'] and existing['accept_gdtx'] != 'top1':
                existing['accept_gdtx'] = 'top2'
            elif s['is_top3'] and existing['accept_gdtx'] not in ('top1', 'top2'):
                existing['accept_gdtx'] = 'top3'
            
            # Merge text overrides if they were missing or smaller
            if s['tuition_desc'] and not existing.get('invoice_details'):
                existing['invoice_details'] = s['tuition_desc']
            if s['dorm_desc'] and not existing.get('dorm_fee_desc'):
                existing['dorm_fee_desc'] = s['dorm_desc']
            continue
            
        # Match! Copy detailed properties from old DB
        matched_count += 1
        generated_ids.add(school_id)
        
        # Merge properties
        new_school.update(found_db)
        
        # Override with exact values from Excel
        clean_name_vi = name
        if is_college:
            clean_name_vi = name.replace('Đại học', 'Cao đẳng')
            
        new_school['name_vi'] = clean_name_vi
        
        if is_college:
            clean_name_en = found_db.get('name_en', name)
            if not 'college' in clean_name_en.lower():
                clean_name_en = clean_name_en.replace('University', 'College').replace('Đại học', '').strip()
                if 'top 3' in clean_name_en:
                    clean_name_en = clean_name_en.replace('- top 3', '').strip()
                if not 'college' in clean_name_en.lower():
                    clean_name_en = clean_name_en + " College (Korea)"
            new_school['name_en'] = clean_name_en

        new_school['region'] = normalize_region(found_db.get('region') or s['region'] or "Seoul")
        new_school['campus_address'] = s['address_ko'] or found_db.get('campus_address') or 'Korea'
        new_school['accept_gdtx'] = 'top1' if s['is_top1'] else ('top2' if s['is_top2'] else ('top3' if s['is_top3'] else None))
        new_school['top_1_percent'] = s['is_top1']
        new_school['master_no_topik'] = s['is_no_topik']
        new_school['is_restricted_school'] = s['is_restricted']
        
        excel_lat = s.get('lat')
        excel_lon = s.get('lon')
        if excel_lat is not None and excel_lon is not None:
            new_school['coordinates'] = { "latitude": excel_lat, "longitude": excel_lon }
        elif school_id in git_coords and git_coords[school_id].get('lat') is not None:
            new_school['coordinates'] = {
                "latitude": git_coords[school_id]['lat'],
                "longitude": git_coords[school_id]['lon']
            }
        else:
            old_coords = found_db.get('coordinates')
            if old_coords and old_coords.get('latitude') is not None:
                new_school['coordinates'] = old_coords
            else:
                new_school['coordinates'] = { "latitude": None, "longitude": None }
        if school_id in region_overrides:
            new_school['region'] = region_overrides[school_id]
        if school_id in coord_overrides:
            new_school['coordinates'] = coord_overrides[school_id]
            
        if s['tuition_desc']:
            new_school['invoice_details'] = s['tuition_desc']
        if s['dorm_desc']:
            new_school['dorm_fee_desc'] = s['dorm_desc']
        if s['admission_conditions']:
            new_school['admission_conditions'] = s['admission_conditions']
        if s['featured_majors']:
            new_school['featured_majors'] = s['featured_majors']
        if s['notes']:
            new_school['custom_notes'] = s['notes']
            
    else:
        # New school! Create clean entry
        added_count += 1
        if name in id_overrides:
            school_id = id_overrides[name]
            generated_ids.add(school_id)
        else:
            school_id = make_clean_id(name)
        
        clean_name_vi = name
        clean_name_en = name + " (Korea)"
        if is_college:
            clean_name_vi = name.replace('Đại học', 'Cao đẳng')
            clean_name_en = clean_name_vi.replace('Cao đẳng', '').strip()
            if 'top 3' in clean_name_en:
                clean_name_en = clean_name_en.replace('- top 3', '').strip()
            clean_name_en = clean_name_en + " College (Korea)"
            
        new_school = {
            "id": school_id,
            "name_vi": clean_name_vi,
            "name_en": clean_name_en,
            "name_ko": name,
            "type": "private", # Default private
            "region": normalize_region(s['region'] or "Seoul"),
            "ranking": 150 + added_count,
            "campus_address": s['address_ko'] or "Korea",
            "website": "https://www.studyinkorea.go.kr",
            "tuition": {
                "humanities_social": 2400000,
                "natural_sciences": 2700000,
                "engineering": 2900000,
                "arts_sports": 3100000,
                "medicine_pharmacy": None
            },
            "dorm_fee": 1000000,
            "living_cost_est": 3500000,
            "scholarships": [
                "Học bổng khuyến học kì đầu cho du học sinh",
                "Học bổng thành tích dựa trên GPA"
            ],
            "accept_gdtx": 'top1' if s['is_top1'] else ('top2' if s['is_top2'] else ('top3' if s['is_top3'] else None)),
            "visa_metropolitan": True,
            "master_no_topik": s['is_no_topik'],
            "top_1_percent": s['is_top1'],
            "is_restricted_school": s['is_restricted'],
            "featured_majors": s['featured_majors'] or ( "Kỹ thuật, thẩm mỹ, du lịch" if is_college else "Kinh doanh, công nghệ, truyền thông" ),
            "custom_notes": s['notes'] or "Đồng bộ từ CSDL 2026",
            "invoice_details": s['tuition_desc'] or "HỌC PHÍ 4,800,000-5,200,000KRW - BẢO HIỂM 150,000KRW",
            "dorm_fee_desc": s['dorm_desc'] or "800,000-1,200,000KRW",
            "admission_conditions": s['admission_conditions'] or "GPA từ 6.5 trở lên",
            "coordinates": {
                "latitude": s['lat'] if s['lat'] is not None else (git_coords[school_id]['lat'] if (school_id in git_coords and git_coords[school_id].get('lat') is not None) else None),
                "longitude": s['lon'] if s['lon'] is not None else (git_coords[school_id]['lon'] if (school_id in git_coords and git_coords[school_id].get('lon') is not None) else None)
            },
            "majors_detail": [
                {
                    "category": "humanities_social",
                    "faculty_name_vi": "Khoa Nhân văn & Xã hội",
                    "faculty_name_ko": "인문사회대학",
                    "tuition_krw": 2400000,
                    "majors": [
                        { "name_vi": "Quản trị Kinh doanh", "name_ko": "경영학과", "is_hot": True },
                        { "name_vi": "Ngôn ngữ Hàn Quốc", "name_ko": "한국어학과", "is_hot": True }
                    ]
                }
            ]
        }
        if school_id in region_overrides:
            new_school['region'] = region_overrides[school_id]
        if school_id in coord_overrides:
            new_school['coordinates'] = coord_overrides[school_id]
            
        if school_id == 'kaist':
            new_school['type'] = 'public'
            new_school['ranking'] = 2
            new_school['website'] = 'https://www.kaist.ac.kr'
            new_school['name_en'] = 'Korea Advanced Institute of Science and Technology (KAIST)'
            new_school['name_ko'] = '한국과학기술원'
            new_school['campus_address'] = '291 Daehak-ro, Yuseong-gu, Daejeon'
            new_school['tuition'] = {
                "humanities_social": 6000000,
                "natural_sciences": 6800000,
                "engineering": 6800000,
                "arts_sports": 6800000,
                "medicine_pharmacy": None
            }
            new_school['majors_detail'] = [
                {
                    "category": "engineering",
                    "faculty_name_vi": "Khoa Kỹ thuật & CNTT",
                    "faculty_name_ko": "공과대학",
                    "tuition_krw": 3400000,
                    "majors": [
                        { "name_vi": "Khoa học máy tính", "name_ko": "전산학부", "is_hot": True },
                        { "name_vi": "Kỹ thuật điện", "name_ko": "전기및전자공학부", "is_hot": True },
                        { "name_vi": "Kỹ thuật cơ khí", "name_ko": "기계공학과", "is_hot": True }
                    ]
                },
                {
                    "category": "natural_sciences",
                    "faculty_name_vi": "Khoa Khoa học Tự nhiên",
                    "faculty_name_ko": "자연과학대학",
                    "tuition_krw": 3400000,
                    "majors": [
                        { "name_vi": "Vật lý", "name_ko": "물리학과", "is_hot": False },
                        { "name_vi": "Hóa học", "name_ko": "화학과", "is_hot": False }
                    ]
                }
            ]
            
    new_universities.append(new_school)
    # Save coordinates map for frontend
    final_coords = new_school.get('coordinates', {})
    coords_map[school_id] = {
        "lat": final_coords.get('latitude') if final_coords else None,
        "lon": final_coords.get('longitude') if final_coords else None
    }

print(f"Rebuild completed:")
print(f"  Matched and migrated: {matched_count}")
print(f"  Merged duplicates: {merged_count}")
print(f"  Newly added: {added_count}")
print(f"  Total schools in final DB: {len(new_universities)}")
print(f"  Total coordinate mappings: {len(coords_map)}")

# Write updated files
output_js = f"export const universities = {json.dumps(new_universities, ensure_ascii=False, indent=2)};\n"

# Write to Vite frontend
fs_js_path = r"D:\EASS\src\data\universities.js"
fs_coords_path = r"D:\EASS\src\data\school_coordinates.json"
with open(fs_js_path, 'w', encoding='utf-8') as f:
    f.write(output_js)
with open(fs_coords_path, 'w', encoding='utf-8') as f:
    json.dump(coords_map, f, ensure_ascii=False, indent=2)

# Write to Next.js portal
next_js_path = r"D:\EASS\kr-unituition-next\src\data\universities.js"
next_coords_path = r"D:\EASS\kr-unituition-next\src\data\school_coordinates.json"
with open(next_js_path, 'w', encoding='utf-8') as f:
    f.write(output_js)
with open(next_coords_path, 'w', encoding='utf-8') as f:
    json.dump(coords_map, f, ensure_ascii=False, indent=2)

print("Saved universities.js and school_coordinates.json in both Vite client and Next.js portal successfully!")
