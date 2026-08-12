import json

with open('src/data/school_coordinates.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("daejeon in school_coordinates.json:", 'daejeon' in data)
if 'daejeon' in data:
    print("daejeon coordinates:", data['daejeon'])

print("number of keys with non-null coords in school_coordinates.json:", len([k for k, v in data.items() if v.get('lat') is not None]))
