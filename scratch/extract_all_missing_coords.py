import os
import re
import json

coords_json_path = "D:\\EASS\\src\\data\\school_coordinates.json"
with open(coords_json_path, 'r', encoding='utf-8') as f:
    git_coords = json.load(f)

print("Initial coordinates keys count:", len(git_coords))

# Let's inspect the universities directory
dir_path = 'kr-unituition-next/.next/server/app/universities'
html_slugs = [f.replace('.html', '') for f in os.listdir(dir_path) if f.endswith('.html')]

extracted_count = 0
for slug in html_slugs:
    if slug not in git_coords or git_coords[slug].get('lat') is None:
        # Search in the corresponding .rsc file
        rsc_path = os.path.join(dir_path, f"{slug}.rsc")
        if os.path.exists(rsc_path):
            with open(rsc_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            lat_m = re.findall(r'3[3456789]\.[0-9]+', content)
            lon_m = re.findall(r'12[45678901]\.[0-9]+', content)
            if lat_m and lon_m:
                lat = float(lat_m[0])
                lon = float(lon_m[0])
                git_coords[slug] = {"lat": lat, "lon": lon}
                print(f"Extracted coordinates for missing school '{slug}': lat={lat}, lon={lon}")
                extracted_count += 1
            else:
                print(f"Could not find coordinates pattern in {rsc_path}")
        else:
            print(f"No rsc file found for {slug}")

print(f"Extracted coordinates for {extracted_count} missing schools.")
# Save back to school_coordinates.json to preserve them permanently!
with open(coords_json_path, 'w', encoding='utf-8') as f:
    json.dump(git_coords, f, ensure_ascii=False, indent=2)

# Also save to Next.js portal path
with open("D:\\EASS\\kr-unituition-next\\src\\data\\school_coordinates.json", 'w', encoding='utf-8') as f:
    json.dump(git_coords, f, ensure_ascii=False, indent=2)

print("Saved school_coordinates.json successfully!")
