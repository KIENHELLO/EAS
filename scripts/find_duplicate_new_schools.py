import json
import re

with open("d:/EASS/src/data/universities.js", "r", encoding="utf-8") as f:
    js_content = f.read()

match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
if match:
    universities = json.loads(match.group(1))
    
    new_school_ids = ["uni_206", "caoangyeungjin", "caoangkimpo", "caoangshingu"]
    for nid in new_school_ids:
        new_s = next((u for u in universities if u["id"] == nid), None)
        if new_s:
            print(f"\nNew School: {new_s['id']} | name_vi: {new_s['name_vi']} | name_en: {new_s['name_en']}")
            # Search for similar names in existing schools
            cleaned_new_vi = new_s['name_vi'].lower().replace("cao đẳng", "").replace("đại học", "").strip()
            # Try to match
            for u in universities:
                if u["id"] in new_school_ids:
                    continue
                clean_old_vi = u["name_vi"].lower().replace("cao đẳng", "").replace("đại học", "").strip()
                if cleaned_new_vi in clean_old_vi or clean_old_vi in cleaned_new_vi:
                    print(f"  Potential duplicate: {u['id']} | name_vi: {u['name_vi']} | name_en: {u['name_en']}")
