import json

with open('scratch/geocoded_schools.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("Total entries in geocoded_schools.json:", len(data))
# find daejeon
daejeon = [s for s in data if 'daejeon' in s['name'].lower() or 'daejeon' in s.get('address_ko', '').lower()]
print("Daejeon matches in geocoded_schools.json:", len(daejeon))
if daejeon:
    print("Daejeon sample:", daejeon[0])

# count non-null
valid = [s for s in data if s.get('lat') is not None]
print("Valid coords count in geocoded_schools.json:", len(valid))
