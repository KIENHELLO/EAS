import json
import os

coords_to_add = {
    "caoangyeungjin": {"lat": 35.896263, "lon": 128.621935},
    "caoangkimpo": {"lat": 37.708892, "lon": 126.549247},
    "caoangshingu": {"lat": 37.443093, "lon": 127.168536}
}

paths = [
    "d:/EASS/src/data/school_coordinates.json",
    "d:/EASS/kr-unituition-next/src/data/school_coordinates.json"
]

for path in paths:
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            coords = json.load(f)
            
        print(f"File {path}: original count {len(coords)}")
        for uid, val in coords_to_add.items():
            coords[uid] = val
            
        # Also clean up uni_206 coordinate if it is in the file
        if "uni_206" in coords:
            del coords["uni_206"]
            
        print(f"File {path}: new count {len(coords)}")
        
        with open(path, "w", encoding="utf-8") as f:
            json.dump(coords, f, ensure_ascii=False, indent=2)
            
print("Successfully updated coordinates in both JSON files!")
