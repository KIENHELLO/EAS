import json
import re

# Read src/data/universities.js
with open("d:/EASS/src/data/universities.js", "r", encoding="utf-8") as f:
    js_content = f.read()

match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
if match:
    universities = json.loads(match.group(1))
    
    # search for "경기" or "kyonggi" or "gyeonggi" or "kyunggi"
    search_terms = ["kyong", "gyeong", "kyung", "경기", "seok", "서경", "hong", "홍익", "ewha", "이화", "postech", "포항", "pusan", "부산", "sung", "성균", "chung", "중앙"]
    for term in search_terms:
        matches = [u for u in universities if term in str(u.values()).lower()]
        print(f"Term: {term} -> Matches count: {len(matches)}")
        if len(matches) > 0 and len(matches) < 5:
            for m in matches:
                print(f"  {m['id']}: {m['name_vi']} | {m['name_en']} | {m['name_ko']}")
