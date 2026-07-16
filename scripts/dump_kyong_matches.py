import json
import re

with open("d:/EASS/src/data/universities.js", "r", encoding="utf-8") as f:
    js_content = f.read()

match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
if match:
    universities = json.loads(match.group(1))
    
    # search for "kyong"
    kyong_matches = [u for u in universities if "kyong" in str(list(u.values())).lower()]
    print("=== KYONG MATCHES ===")
    for u in kyong_matches:
        print(f"  {u['id']}: {u['name_vi']} | {u['name_en']} | {u['name_ko']}")
        
    # search for "gyeong"
    gyeong_matches = [u for u in universities if "gyeong" in str(list(u.values())).lower()]
    print("\n=== GYEONG MATCHES ===")
    for u in gyeong_matches[:10]: # show first 10
        print(f"  {u['id']}: {u['name_vi']} | {u['name_en']} | {u['name_ko']}")
