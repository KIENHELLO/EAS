import json
import re

# Load geocoded schools
with open('scratch/geocoded_schools.json', 'r', encoding='utf-8') as f:
    geocoded = json.load(f)

# Load universities database to match IDs
with open('src/data/universities.js', 'r', encoding='utf-8') as f:
    db_content = f.read()

# Parse the minified JS using eval in node or raw parse in python
# A simple regex to get ID and name_vi from universities.js
import subprocess
result = subprocess.run(['node', 'scratch/inspect_db.cjs'], capture_output=True, text=True, encoding='utf-8')
lines = result.stdout.strip().split('\n')
db_schools = []
for line in lines:
    if 'ID:' in line:
        parts = line.split('|')
        uid = parts[0].split('ID:')[1].strip()
        name = parts[1].split('Name:')[1].strip()
        db_schools.append({'id': uid, 'name_vi': name})

# Helper to clean name
def clean(text):
    if not text: return ""
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

spelling_map = {
    "seolyong": "seokyeong",
    "seokyeong": "seokyeong",
    "pohang": "postech",
    "postech": "postech",
    "sungkyungwan": "sungkyunkwan",
    "sungkyunkwan": "sungkyunkwan",
    "chungang": "chungang",
    "ewha": "ewha",
    "pusan": "busan",
    "busan": "busan",
    "seoultheological": "seoultheological",
    "kyunghee": "kyunghee",
    "catholic": "catholic",
    "duksung": "duksung",
    "sookmyung": "sookmyung",
    "seoulwomens": "seoulwomens",
    "pukyong": "pukyong",
    "changwon": "changwon",
    "youngsan": "youngsan",
    "yeongsang": "youngsan",
    "doowon": "doowon",
    "jeju": "jeju",
    "osan": "osan",
}

def get_group_key(name):
    c_name = clean(name)
    for k, v in spelling_map.items():
        if k in c_name:
            return v
    return c_name

# Map of clean group key -> (lat, lon)
coords_by_key = {}
for s in geocoded:
    g_key = get_group_key(s['name'])
    coords_by_key[g_key] = {"lat": s['lat'], "lon": s['lon']}

# Now populate coordinates map for universities
final_coords = {}
unmatched = []
for db_s in db_schools:
    uid = db_s['id']
    name = db_s['name_vi']
    g_key = get_group_key(name)
    
    if g_key in coords_by_key:
        final_coords[uid] = coords_by_key[g_key]
    else:
        # Check close match
        matched_key = None
        for gk in coords_by_key:
            if gk in g_key or g_key in gk:
                matched_key = gk
                break
        if matched_key:
            final_coords[uid] = coords_by_key[matched_key]
        else:
            unmatched.append(db_s)

print(f"Matched coordinates for {len(final_coords)} / {len(db_schools)} database schools.")
print("Unmatched database schools:", unmatched)

# Save to school_coordinates.json
coords_json_path = "D:\\EASS\\src\\data\\school_coordinates.json"
with open(coords_json_path, 'w', encoding='utf-8') as f:
    json.dump(final_coords, f, ensure_ascii=False, indent=2)

with open("D:\\EASS\\kr-unituition-next\\src\\data\\school_coordinates.json", 'w', encoding='utf-8') as f:
    json.dump(final_coords, f, ensure_ascii=False, indent=2)

print("Saved school_coordinates.json successfully!")
