import json

coord_path = "d:/EASS/src/data/school_coordinates.json"
with open(coord_path, "r", encoding="utf-8") as f:
    coords = json.load(f)

print("Gachon ('uni_1') coordinates:", coords.get("uni_1"))
