import json
import re

# 1. Update universities.js in both projects
paths = [
    "d:/EASS/src/data/universities.js",
    "d:/EASS/kr-unituition-next/src/data/universities.js"
]

for path in paths:
    with open(path, "r", encoding="utf-8") as f:
        js_content = f.read()

    match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
    if match:
        universities = json.loads(match.group(1))
        
        for u in universities:
            if u["id"] == "uni_7":
                u["region"] = "Gyeongnam"
                u["campus_address"] = "경상남도 창원시 의창구 창원대학로 20"
                u["description"] = "Trường đại học công lập đào tạo đa ngành hàng đầu tại khu vực Gyeongnam."
            elif u["id"] == "uni_8":
                u["region"] = "Chungnam"
                u["campus_address"] = "충청남도 아산시 신창면 순천향로 22"
                u["description"] = "Trường đại học tư thục danh tiếng tại khu vực Chungnam."
                
        js_out = f"export const universities = {json.dumps(universities, ensure_ascii=False, indent=2)};\n"
        with open(path, "w", encoding="utf-8") as f:
            f.write(js_out)
        print(f"Updated regions in {path}")

# 2. Update Sangmyung University (uni_11) coordinates to Seoul campus in both JSON files
coord_paths = [
    "d:/EASS/src/data/school_coordinates.json",
    "d:/EASS/kr-unituition-next/src/data/school_coordinates.json"
]

for cp in coord_paths:
    with open(cp, "r", encoding="utf-8") as f:
        coords = json.load(f)
        
    coords["uni_11"] = {"lat": 37.602633, "lon": 126.955212} # Seoul campus
    
    with open(cp, "w", encoding="utf-8") as f:
        json.dump(coords, f, ensure_ascii=False, indent=2)
    print(f"Updated uni_11 coords in {cp}")
