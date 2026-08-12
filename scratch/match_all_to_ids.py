import json
import re

with open('scratch/geocoded_schools.json', 'r', encoding='utf-8') as f:
    schools = json.load(f)

with open('scratch/db_schools.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# Normalize text for matching
def clean(text):
    if not text: return ""
    text = text.lower()
    text = text.replace('-', '').replace(' ', '').replace('\'', '')
    text = text.replace('đạihọcquốcgia', '').replace('đạihọccônggiáo', '').replace('đạihọcnữsinh', '').replace('đạihọcnữ', '').replace('đạihọc', '')
    text = text.replace('caodẳngkỹthuật', '').replace('caodẳngy', '').replace('caodẳng', '').replace('trường', '')
    # strip vietnamese accents
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

# Overrides for exact IDs
id_overrides = {
    "đại học seolyong ( 서경대학교 )": "seokyeong",
    "đại học khoa học và công nghệ pohang": "postech",
    "포항공과대학교 (đại học khoa học & công nghệ pohang - postech)": "postech",
    "đại học sungkyungwan": "skku",
    "đại học chungang": "cau",
    "đại học nữ sungshin": "sungshin_womens", # let's check actual ID in DB
    "đại học nữ sinh ewha ( 이화여자대학교 )": "ewha",
    "đại học quốc gia busan": "pusan",
    "đại học thần học seoul ( stu ) ( 서울신학대학교 )": "seoul_theological",
    "đại học kyunghee": "kyung_hee",
    "đại học công giáo": "catholic",
    "đại học nữ duksung": "duksung_womens",
    "đại học nữ sookmyung": "sookmyung_womens",
    "đại học nữ seoul": "seoul_womens",
    "đại học quốc gia pukyong": "pukyong",
    "đại học quốc gia changwon": "changwon",
    "đại học yeungsang - top 3": "youngsan",
    "đại học doowon - top 3": "doowon_tech",
    "đại học jeju - top 3": "jeju",
    "đại học osan": "osan_uni",
}

# Let's inspect all school IDs in DB containing parts of names
db_by_clean_vi = {}
db_by_clean_en = {}
for u in db:
    db_by_clean_vi[clean(u['name_vi'])] = u['id']
    db_by_clean_en[clean(u['name_en'])] = u['id']

matched_count = 0
unmatched_schools = []

for s in schools:
    name = s['name']
    name_l = name.lower().strip()
    
    found_id = None
    
    # Try overrides first
    if name_l in id_overrides:
        found_id = id_overrides[name_l]
    elif clean(name) in db_by_clean_vi:
        found_id = db_by_clean_vi[clean(name)]
    elif clean(name) in db_by_clean_en:
        found_id = db_by_clean_en[clean(name)]
    else:
        # Substring matching
        for clean_name, s_id in db_by_clean_vi.items():
            if clean_name and clean(name) and (clean_name in clean(name) or clean(name) in clean_name):
                found_id = s_id
                break
                
    if found_id:
        matched_count += 1
        s['db_id'] = found_id
    else:
        unmatched_schools.append(name)

print(f"Matched: {matched_count} / {len(schools)}")
print(f"Unmatched: {len(unmatched_schools)}")
if unmatched_schools:
    print("Unmatched:")
    for u in unmatched_schools[:15]:
        print(f"  - {u}")
