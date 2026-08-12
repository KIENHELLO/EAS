import json

content = open('src/data/universities.js', 'r', encoding='utf-8').read()
db = json.loads(content.replace('export const universities =', '').replace(';', '').strip())
targets = ['ewha', 'hanyang', 'korea', 'snu', 'kaist', 'gachon', 'yonsei', 'konkuk', 'skku', 'cau']
for u in db:
    if u['id'] in targets:
        print(f"{u['id']}: name_vi='{u['name_vi']}' top_1%={u.get('top_1_percent')} accept_gdtx={u.get('accept_gdtx')}")
