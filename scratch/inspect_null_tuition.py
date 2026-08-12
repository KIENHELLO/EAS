import json

db = json.loads(open('src/data/universities.js', 'r', encoding='utf-8').read().replace('export const universities =', '').replace(';', '').strip())
null_t = []
for u in db:
    t = u.get('tuition', {})
    if all(val is None for val in t.values()):
        null_t.append(u)

print("Total schools with null tuition:", len(null_t))
print("Sample null tuition schools (first 20):")
for u in null_t[:20]:
    print(f"ID={u['id']}, name_vi='{u['name_vi']}', type={u['type']}, region={u['region']}, ranking={u['ranking']}")
