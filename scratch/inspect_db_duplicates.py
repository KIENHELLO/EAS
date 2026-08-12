import json
import collections

with open('src/data/universities.js', 'r', encoding='utf-8') as f:
    content = f.read()
    content = content.replace('export const universities = ', '').strip().rstrip(';')
    db = json.loads(content)

id_groups = collections.defaultdict(list)
for u in db:
    id_groups[u['id']].append(u)

print("Duplicate IDs and their mapped schools in rebuilt DB:")
for school_id, group in id_groups.items():
    if len(group) > 1:
        print(f"\nID: '{school_id}' | Count: {len(group)}")
        for idx, u in enumerate(group):
            print(f"  [{idx+1}] name_vi: '{u['name_vi']}' | region: '{u['region']}' | accept_gdtx: '{u['accept_gdtx']}'")
