import json
import collections

with open('scratch/unified_schools.json', 'r', encoding='utf-8') as f:
    schools = json.load(f)

# Normalize text matching overrides
id_overrides = {
    "Đại học Seolyong ( 서경대학교 )": "seokyeong",
    "Đại học Khoa học và Công nghệ Pohang": "postech",
    "포항공과대학교 (Đại học Khoa học & Công nghệ Pohang - POSTECH)": "postech",
    "Đại học Sungkyungwan": "skku",
    "Đại học ChungAng": "cau",
    "Đại học Nữ Sungshin": "sungshin_womens",
    "Đại học Nữ sinh Ewha ( 이화여자대학교 )": "ewha",
    "Đại học Quốc gia Busan": "pusan",
    "Đại học thần học SEOUL ( STU ) ( 서울신학대학교 )": "seoul_theological",
    "Đại học Kyunghee": "kyung_hee",
    "Đại học Công giáo": "catholic",
    "Đại học Nữ Duksung": "duksung_womens",
    "Đại học Nữ Sookmyung": "sookmyung_womens",
    "Đại học Nữ Seoul": "seoul_womens",
    "Đại học Quốc gia Pukyong": "pukyong",
    "Đại học Quốc gia Changwon": "changwon",
    "Đại học Yeongsang - top 3": "youngsan",
    "Đại học Doowon - top 3": "doowon_tech",
    "Đại học Jeju - top 3": "jeju",
    "Đại học Osan": "osan_uni",
}

def clean(text):
    if not text: return ""
    text = str(text).lower()
    text = text.replace('-', '').replace(' ', '').replace('\'', '')
    text = text.replace('đạihọcquốcgia', '').replace('đạihọccônggiáo', '').replace('đạihọcnữsinh', '').replace('đạihọcnữ', '').replace('đạihọc', '')
    text = text.replace('caodẳngkỹthuật', '').replace('caodẳngy', '').replace('caodẳng', '').replace('trường', '')
    return text

# Find matches for each school and group by target ID
id_groups = collections.defaultdict(list)

for s in schools:
    name = s['name_vi']
    target_id = None
    if name in id_overrides:
        target_id = id_overrides[name]
    else:
        target_id = clean(name)
        
    id_groups[target_id].append(s)

print("Inspecting duplicate IDs in unified schools:")
for target_id, group in id_groups.items():
    if len(group) > 1:
        print(f"\nID Group: '{target_id}' | Count: {len(group)}")
        for idx, item in enumerate(group):
            print(f"  [{idx+1}] Name: '{item['name_vi']}' | File: '{item['file_sources']}' | Region: '{item['region']}' | Lat/Lon: {item['lat']}, {item['lon']}")
