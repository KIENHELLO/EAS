import json
import re
import os

with open("d:/EASS/src/data/universities.js", "r", encoding="utf-8") as f:
    js_content = f.read()

match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
if not match:
    print("Failed to find universities")
    exit(1)
universities = json.loads(match.group(1))

coord_path = "d:/EASS/kr-unituition-next/src/data/school_coordinates.json"
with open(coord_path, "r", encoding="utf-8") as cf:
    coords = json.load(cf)

# 1. Duplicates check
print("=== DUPLICATES AUDIT ===")
name_counts = {}
for u in universities:
    name = u["name_vi"]
    name_counts[name] = name_counts.get(name, []) + [u["id"]]

duplicates = {name: ids for name, ids in name_counts.items() if len(ids) > 1}
print(f"Found {len(duplicates)} names with duplicate entries.")
for name, ids in list(duplicates.items())[:10]:
    print(f"  - '{name}': {ids}")

# 2. Missing coordinates
print("\n=== MISSING COORDINATES AUDIT ===")
missing = []
for u in universities:
    uid = u["id"]
    if uid not in coords:
        missing.append(u)
print(f"Found {len(missing)} schools missing coordinates:")
for u in missing:
    print(f"  - {u['id']}: {u['name_vi']} | Region: {u['region']}")

# 3. Coordinate misalignment check
# We can check if the coordinates belong to the approximate bounding box of the region
# Let's define approx boxes for some regions
region_boxes = {
    "Seoul": {"lat_min": 37.4, "lat_max": 37.7, "lon_min": 126.7, "lon_max": 127.3},
    "Busan": {"lat_min": 35.0, "lat_max": 35.4, "lon_min": 128.7, "lon_max": 129.3},
    "Daegu": {"lat_min": 35.6, "lat_max": 36.1, "lon_min": 128.3, "lon_max": 128.8},
}

print("\n=== COORDINATE LOCATION AUDIT ===")
misaligned = []
for u in universities:
    uid = u["id"]
    region = u["region"]
    if uid in coords:
        lat = coords[uid]["lat"]
        lon = coords[uid]["lon"]
        
        # Check against bounding box if region is in region_boxes
        if region in region_boxes:
            box = region_boxes[region]
            if not (box["lat_min"] <= lat <= box["lat_max"] and box["lon_min"] <= lon <= box["lon_max"]):
                misaligned.append((u, lat, lon))

print(f"Found {len(misaligned)} schools whose coordinates are outside their region bounding box:")
for u, lat, lon in misaligned[:15]:
    print(f"  - {u['id']}: {u['name_vi']} ({u['region']}) is at lat={lat}, lon={lon}")
