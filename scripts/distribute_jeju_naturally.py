import json
import os

paths = [
    "d:/EASS/src/data/school_coordinates.json",
    "d:/EASS/kr-unituition-next/src/data/school_coordinates.json"
]

natural_jeju_coords = {
    "mock_uni_84": {"lat": 33.481232, "lon": 126.481923},  # Nohyeong-dong
    "mock_uni_101": {"lat": 33.488923, "lon": 126.498231}, # Yeon-dong
    "mock_uni_118": {"lat": 33.446892, "lon": 126.488923}, # Jeju Museum of Art
    "mock_uni_135": {"lat": 33.483921, "lon": 126.518923}, # Ora-dong
    "mock_uni_152": {"lat": 33.499621, "lon": 126.531188}, # Jeju City Hall area
    "mock_uni_169": {"lat": 33.469521, "lon": 126.545612}, # Ara-dong
    "mock_uni_186": {"lat": 33.461234, "lon": 126.329841}, # Aewol-eup
    "mock_uni_203": {"lat": 33.534892, "lon": 126.638291}  # Jocheon-eup
}

for path in paths:
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            coords = json.load(f)
            
        print(f"Applying natural Jeju coords to {path}...")
        for mid, val in natural_jeju_coords.items():
            coords[mid] = val
            
        with open(path, "w", encoding="utf-8") as f:
            json.dump(coords, f, ensure_ascii=False, indent=2)

print("Successfully distributed Jeju coordinates naturally!")
