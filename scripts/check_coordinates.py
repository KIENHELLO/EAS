import json
import os

with open("d:/EASS/src/data/universities.js", "r", encoding="utf-8") as f:
    js_content = f.read()

import re
match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
if match:
    universities = json.loads(match.group(1))
    
    # Load coordinates
    coord_path = "d:/EASS/kr-unituition-next/src/data/school_coordinates.json"
    if os.path.exists(coord_path):
        with open(coord_path, "r", encoding="utf-8") as cf:
            coords = json.load(cf)
        print("Total coordinates in school_coordinates.json:", len(coords))
        
        # Check missing coordinates
        missing = []
        for u in universities:
            uid = u["id"]
            if uid not in coords:
                missing.append(u["name_vi"])
                
        print("Missing coordinates count:", len(missing))
        if missing:
            print("Missing coordinates for:", missing[:15])
            
        # Count by region in universities
        regions = {}
        for u in universities:
            regions[u["region"]] = regions.get(u["region"], 0) + 1
        print("\nUniversities by region:")
        for r, count in sorted(regions.items(), key=lambda x: x[1], reverse=True):
            print(f"  {r}: {count}")
            
        # Check how many have lat=37.5665, lon=126.9780 (default Seoul coords) or other defaults
        default_coords = 0
        for uid, coord in coords.items():
            if abs(coord["lat"] - 37.5665) < 0.0001 and abs(coord["lon"] - 126.9780) < 0.0001:
                default_coords += 1
        print("\nSchools using default Seoul coordinates:", default_coords)
