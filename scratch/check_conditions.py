import json

db = json.loads(open('src/data/universities.js', 'r', encoding='utf-8').read().replace('export const universities =', '').replace(';', '').strip())
count = 0
for u in db:
    conds = u.get('admission_conditions')
    if conds and conds.strip() != "":
        print(f"School: {u['name_vi'].replace(chr(10), ' ')} -> Conditions: {conds.replace(chr(10), ' ')}")
        count += 1
        if count >= 10:
            break
