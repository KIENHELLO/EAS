import json

old_db = json.loads(open('src/data/universities.backup.2026-08-12_12-53-39.js', 'r', encoding='utf-8').read().replace('export const universities =', '').replace(';', '').strip())
new_db = json.loads(open('src/data/universities.js', 'r', encoding='utf-8').read().replace('export const universities =', '').replace(';', '').strip())

matched_ids = set()
for u in new_db:
    if not u.get('needs_review'):
        matched_ids.add(u['id'])

print("Total in old DB:", len(old_db))
print("Matched IDs count:", len(matched_ids))

unmatched_old = [u for u in old_db if u['id'] not in matched_ids]
print("Unmatched in old DB:", len(unmatched_old))
for u in unmatched_old[:20]:
    print(f"ID={u['id']}, name_vi={u['name_vi']}, name_ko={u['name_ko']}, name_en={u['name_en']}, tuition={u['tuition']}")
