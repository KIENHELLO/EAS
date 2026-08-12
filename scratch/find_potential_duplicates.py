import json
import re

db = json.loads(open('src/data/universities.js', 'r', encoding='utf-8').read().replace('export const universities =', '').replace(';', '').strip())

unmatched_old = [u for u in db if u.get('needs_review') is True]
active_new = [u for u in db if not u.get('needs_review')]

def extract_hangeul(text):
    if not text:
        return ""
    matches = re.findall(r'[\uac00-\ud7a3]+', text)
    return "".join(matches)

potential_matches = []
for old in unmatched_old:
    old_ko = extract_hangeul(old.get('name_ko', ''))
    if not old_ko:
        old_ko = extract_hangeul(old.get('name_vi', ''))
    
    if old_ko:
        for new in active_new:
            new_ko = extract_hangeul(new.get('name_ko', ''))
            if old_ko == new_ko and old_ko != "":
                potential_matches.append((old, new))
                break

print(f"Found {len(potential_matches)} potential matches:")
for old, new in potential_matches:
    print(f"Old: ID={old['id']}, name_vi='{old['name_vi'].replace(chr(10), ' ')}' -> New: ID={new['id']}, name_vi='{new['name_vi']}'")
