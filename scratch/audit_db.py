import json
import subprocess
import os

# Let's read src/data/universities.js and extract the JSON array via Node to JSON
node_to_json = """
const fs = require('fs');
const content = fs.readFileSync('src/data/universities.js', 'utf8');
const universities = eval(content.replace('export const universities =', 'module.exports ='));
console.log(JSON.stringify(universities));
"""
with open('scratch/dump_to_json.cjs', 'w', encoding='utf-8') as f:
    f.write(node_to_json)

result = subprocess.run(['node', 'scratch/dump_to_json.cjs'], capture_output=True, text=True, encoding='utf-8')
try:
    universities = json.loads(result.stdout.strip())
except Exception as e:
    print(f"Error parsing JSON: {e}")
    print(f"Node output: {result.stdout[:200]}")
    exit(1)

print(f"Auditing {len(universities)} universities from universities.js:\n")

errors = []
warnings = []

# 1. IDs unique check
ids = [u.get('id') for u in universities if u.get('id')]
seen_ids = set()
for uid in ids:
    if uid in seen_ids:
        errors.append(f"Duplicate ID found: '{uid}'")
    seen_ids.add(uid)

# 2. Duplicate Korean_Name (Hangeul) check
hangeul_names = [u.get('name_ko') for u in universities if u.get('name_ko')]
seen_hangeuls = set()
for h_name in hangeul_names:
    # Normalize by stripping whitespaces
    norm_h = h_name.strip()
    if norm_h in seen_hangeuls:
        errors.append(f"Duplicate Korean Name (Hangeul) found: '{h_name}'")
    seen_hangeuls.add(norm_h)

# 3. Stats counters
verified_count = 0
unverified_count = 0
needs_review_count = 0

for u in universities:
    uid = u.get('id')
    name_vi = u.get('name_vi', 'Unknown')
    
    # 4. Check missing ID
    if not uid:
        errors.append(f"School '{name_vi}' is missing 'id'")
        continue

    # 5. Stats
    if u.get('is_verified') is True:
        verified_count += 1
    elif u.get('is_verified') is False:
        unverified_count += 1
    else:
        warnings.append(f"School '{name_vi}' ({uid}) is missing 'is_verified' boolean field")

    if u.get('needs_review') is True:
        needs_review_count += 1

    # 6. Basic fields check (campus_address and website can be null now)
    for field in ['name_vi', 'name_en', 'name_ko', 'region', 'coordinates']:
        if not u.get(field):
            errors.append(f"School '{name_vi}' ({uid}) is missing required field: '{field}'")
            
    # 7. Coordinates check
    coords = u.get('coordinates')
    if coords:
        lat = coords.get('latitude')
        lon = coords.get('longitude')
        # Allow null coordinates for new schools if they couldn't be geocoded yet,
        # but if they are present, they must be within Korea
        if lat is not None and lon is not None:
            if not (33.0 <= float(lat) <= 39.0) or not (124.0 <= float(lon) <= 131.0):
                errors.append(f"School '{name_vi}' ({uid}) coordinates out of Korea range: lat={lat}, lon={lon}")
                
    # 8. Tuition check
    tuition = u.get('tuition')
    if not tuition:
        warnings.append(f"School '{name_vi}' ({uid}) has no 'tuition' dictionary")
    else:
        for t_key in ['humanities_social', 'natural_sciences', 'engineering', 'arts_sports']:
            val = tuition.get(t_key)
            if val is not None:
                try:
                    float(val)
                except ValueError:
                    errors.append(f"School '{name_vi}' ({uid}) has non-numeric tuition for '{t_key}': '{val}'")

    # 9. Check if any mock schools exist
    if 'mock' in str(uid).lower() or 'test' in str(uid).lower():
        warnings.append(f"School '{name_vi}' ({uid}) appears to be a mock or test school")

    # 10. Check visa properties
    val = u.get('accept_gdtx')
    if val not in [None, 'top1', 'top2', 'top3']:
        errors.append(f"School '{name_vi}' ({uid}) has invalid 'accept_gdtx': '{val}'")

print(f"Audit Results:")
print(f"  Total Errors: {len(errors)}")
print(f"  Total Warnings: {len(warnings)}")
print(f"  Verified schools (is_verified = true): {verified_count}")
print(f"  Unverified schools (is_verified = false): {unverified_count}")
print(f"  Schools needing review (needs_review = true): {needs_review_count}")

if errors:
    print("\nERRORS FOUND:")
    for err in errors:
        print(f"  - [ERROR] {err}")
    exit(1)
else:
    print("\nNo critical database errors found! Validation passed successfully.")

if warnings:
    print("\nWARNINGS:")
    for warn in warnings:
        print(f"  - [WARNING] {warn}")
