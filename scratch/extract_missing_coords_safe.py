import os
import re
import json

coords_json_path = "D:\\EASS\\src\\data\\school_coordinates.json"
with open(coords_json_path, 'r', encoding='utf-8') as f:
    git_coords = json.load(f)

print("Starting coordinates count:", len(git_coords))

missing_slugs = ['ajou_motor', 'myongji_college', 'viencaohocngonn']
dir_path = 'kr-unituition-next/.next/server/app/universities'

for slug in missing_slugs:
    rsc_path = os.path.join(dir_path, f"{slug}.rsc")
    if os.path.exists(rsc_path):
        with open(rsc_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        # Find floats matching Korean bounds
        # Latitude: 34-38
        # Longitude: 125-129
        lat_m = re.findall(r'3[45678]\.[0-9]+', content)
        lon_m = re.findall(r'12[56789]\.[0-9]+', content)
        if lat_m and lon_m:
            lat = float(lat_m[0])
            lon = float(lon_m[0])
            git_coords[slug] = {"lat": lat, "lon": lon}
            print(f"Extracted for {slug}: lat={lat}, lon={lon}")
        else:
            print(f"Could not extract coordinates for {slug} in rsc.")
    else:
        print(f"No rsc file found for {slug}")

print("Final coordinates count:", len(git_coords))

# Save to Vite and Next.js paths
with open(coords_json_path, 'w', encoding='utf-8') as f:
    json.dump(git_coords, f, ensure_ascii=False, indent=2)

with open("D:\\EASS\\kr-unituition-next\\src\\data\\school_coordinates.json", 'w', encoding='utf-8') as f:
    json.dump(git_coords, f, ensure_ascii=False, indent=2)

print("Saved school_coordinates.json successfully!")
