import json
import subprocess

res = subprocess.run(['node', 'scratch/dump_to_json.cjs'], capture_output=True, text=True, encoding='utf-8')
db = json.loads(res.stdout.strip())
for u in db:
    print(f"{u['id']}: ko='{u.get('name_ko')}' en='{u.get('name_en')}'")
