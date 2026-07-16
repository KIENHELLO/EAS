import json
import re

with open("d:/EASS/src/data/universities.js", "r", encoding="utf-8") as f:
    js_content = f.read()

match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
if match:
    universities = json.loads(match.group(1))
    
    # Load coordinates
    coord_path = "d:/EASS/src/data/school_coordinates.json"
    with open(coord_path, "r", encoding="utf-8") as cf:
        coords = json.load(cf)
        
    # Get all Jeju schools
    jeju_schools = [u for u in universities if u["region"] == "Jeju"]
    print("=== JEJU SCHOOLS ===")
    for u in jeju_schools:
        uid = u["id"]
        coord = coords.get(uid)
        print(f"ID: {uid} | name_vi: {u['name_vi']} | name_en: {u['name_en']}")
        print(f"  Coords: {coord}")
        print(f"  Campus Address: {u.get('campus_address')}")
