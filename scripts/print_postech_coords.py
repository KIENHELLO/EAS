import json

coord_path = "d:/EASS/kr-unituition-next/src/data/school_coordinates.json"
with open(coord_path, "r", encoding="utf-8") as cf:
    coords = json.load(cf)

print("POSTECH ('postech') coordinates:", coords.get("postech"))
