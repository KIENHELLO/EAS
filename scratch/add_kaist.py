import json

# Load unified_schools.json
with open('scratch/unified_schools.json', 'r', encoding='utf-8') as f:
    schools = json.load(f)

# Check if KAIST already exists to prevent duplicate addition
exists = any(s['name_vi'] == 'Viện Khoa học và Công nghệ Tiên tiến Hàn Quốc (KAIST)' for s in schools)
if not exists:
    kaist = {
        "original_names": ["한국과학기술원", "KAIST"],
        "name_vi": "Viện Khoa học và Công nghệ Tiên tiến Hàn Quốc (KAIST)",
        "file_sources": ["manual_add"],
        "is_top1": True,
        "is_top2": False,
        "is_top3": False,
        "is_no_topik": False,
        "is_restricted": False,
        "is_college": False,
        "region": "Daejeon",
        "tuition_desc": "HỌC PHÍ HỆ TIẾNG: Không tuyển sinh hệ tiếng đại trà. HỌC PHÍ CHUYÊN NGÀNH: ~6,800,000 KRW/năm.",
        "dorm_desc": "1,200,000 KRW/năm",
        "admission_conditions": "GPA từ 8.5/10 trở lên, IELTS tối thiểu 6.5 hoặc TOPIK 5/6.",
        "featured_majors": "Khoa học máy tính, Kỹ thuật điện, Kỹ thuật cơ khí, Công nghệ sinh học...",
        "notes": "Học bổng KAIST Quốc tế miễn 100% học phí cho sinh viên duy trì GPA ổn định.",
        "maps_link": "https://www.google.com/maps/place/KAIST+Main+Campus/data=!3m1!4b1!4m6!3m5!1s0x356549a2a7a5c88b:0x5e0b0e5d0cd5c3b9!8m2!3d36.3741!4d127.3601",
        "lat": 36.3741,
        "lon": 127.3601,
        "address_ko": "대전광역시 유성구 대학로 291",
        "postcode": "34141"
    }
    schools.append(kaist)
    with open('scratch/unified_schools.json', 'w', encoding='utf-8') as f:
        json.dump(schools, f, ensure_ascii=False, indent=2)
    print("Added KAIST entry to unified_schools.json successfully!")
else:
    print("KAIST already exists in unified_schools.json.")
