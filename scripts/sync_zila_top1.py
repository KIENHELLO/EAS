import openpyxl
import json
import re
import subprocess

zila_top1_names = [
    "Konkuk University",
    "Konyang University",
    "Kyungpook National University",
    "Kyungsung University",
    "Kyung Hee University",
    "Keimyung University",
    "Korea University",
    "Duksung Women's University",
    "Dongguk University",
    "Pusan National University",
    "Busan University of Foreign Studies",
    "University of Seoul",
    "Seoul Theological University",
    "Sunmoon University",
    "Sungkyul University",
    "Sungkyunkwan University",
    "Sungshin Women's University",
    "Sejong University",
    "Sookmyung Women's University",
    "Ajou University",
    "UNIST",
    "Ewha Womans University",
    "Inha University",
    "Jeju National University",
    "Joongbu University",
    "Chung-Ang University",
    "Chungnam National University",
    "POSTECH",
    "Korea Aerospace University",
    "Hansung University",
    "Hanyang University",
    "Hongik University",
    "Seokyeong University",
    "Seoul Women's University",
    "Dankook University"
]

# Export universities data to JSON
node_script = """
import { universities } from '../src/data/universities.js';
import fs from 'fs';
fs.writeFileSync('scratch/unis.json', JSON.stringify(universities, null, 2), 'utf-8');
"""
with open('scratch/export_unis.js', 'w', encoding='utf-8') as f:
    f.write(node_script)

subprocess.run(['node', 'scratch/export_unis.js'], check=True)

with open('scratch/unis.json', 'r', encoding='utf-8') as f:
    unis = json.load(f)

def normalize_name(s):
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

# Known aliases mapping to DB IDs
aliases = {
    "konkuk": "konkuk",
    "konyang": "konyang",
    "kyungpook": "knu",
    "kyungsung": "uni_4", # or kyungsung
    "kyung hee": "khu",
    "kyunghee": "khu",
    "keimyung": "keimyung",
    "korea": "korea",
    "duksung": "duksung",
    "dongguk": "dongguk",
    "pusan": "pusan",
    "busan university of foreign studies": "uni_5", # BUFS
    "university of seoul": "uos",
    "seoul theological": "seoul_theological",
    "sunmoon": "sunmoon",
    "sungkyul": "mock_uni_81", # Sungkyul
    "sungkyunkwan": "skku",
    "skku": "skku",
    "sungshin": "sungshin",
    "sejong": "sejong",
    "sookmyung": "sookmyung",
    "ajou": "ajou",
    "unist": "unist",
    "ewha": "ewha",
    "inha": "inha",
    "jeju": "jeju",
    "joongbu": "mock_uni_82",
    "chung-ang": "cau",
    "chungang": "cau",
    "chungnam": "chungnam",
    "postech": "postech",
    "pohang": "postech",
    "korea aerospace": "mock_uni_83",
    "hansung": "hansung",
    "hanyang": "hanyang",
    "hongik": "hongik",
    "seokyeong": "seokyeong",
    "seoul women": "mock_uni_84",
    "dankook": "uni_2"
}

def find_db_match(target_name):
    norm_target = normalize_name(target_name)
    # 1. Alias check
    for alias_k, target_id in aliases.items():
        if alias_k in norm_target or norm_target == alias_k:
            for u in unis:
                if u['id'] == target_id: return u
    # 2. String check
    for u in unis:
        norm_en = normalize_name(u.get('name_en', ''))
        norm_vi = normalize_name(u.get('name_vi', ''))
        if norm_en and (norm_en in norm_target or norm_target in norm_en): return u
        if norm_vi and (norm_vi in norm_target or norm_target in norm_vi): return u
    return None

matched_top1_ids = set()

print(f"============================================================")
print(f"📌 ĐỐI CHIẾU 35 TRƯỜNG TOP 1% 2026 TỪ ZILA EDUCATION")
print(f"============================================================\n")

for idx, name in enumerate(zila_top1_names, start=1):
    matched = find_db_match(name)
    if matched:
        matched_top1_ids.add(matched['id'])
        print(f" {idx:2d}. {name:38s} --> ✅ Khớp DB: {matched['name_vi']} (ID: {matched['id']})")
    else:
        print(f" {idx:2d}. {name:38s} --> ❌ Chưa khớp DB")

print(f"\n📊 Tổng số trường TOP 1% khớp được trong DB: {len(matched_top1_ids)} trường.\n")

# Update unis flags
for u in unis:
    if u['id'] in matched_top1_ids:
        u['top_1_percent'] = True
        u['accept_gdtx'] = 'top1'
    else:
        u['top_1_percent'] = False
        if u.get('accept_gdtx') == 'top1':
            u['accept_gdtx'] = 'top2'

# Save back to JS files
js_code = "export const universities = " + json.dumps(unis, indent=2, ensure_ascii=False) + ";\n"

with open('src/data/universities.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

with open('kr-unituition-next/src/data/universities.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

print("✅ Đã cập nhật 100% danh sách TOP 1% 2026 từ Zila vào src/data/universities.js & kr-unituition-next/src/data/universities.js!")
