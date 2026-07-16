import json
import os

real_coords = {
  "uni_1": {
    "lat": 37.4237153,
    "lon": 126.6866286
  },
  "uni_2": {
    "lat": 37.319288,
    "lon": 127.1289665
  },
  "uni_3": {
    "lat": 35.1412134,
    "lon": 126.9303491
  },
  "uni_4": {
    "lat": 35.1154117,
    "lon": 128.9675937
  },
  "uni_5": {
    "lat": 35.1159916,
    "lon": 129.090102
  },
  "uni_6": {
    "lat": 35.5442371,
    "lon": 129.2567134
  },
  "uni_7": {
    "lat": 35.2448472,
    "lon": 128.6951022
  },
  "uni_8": {
    "lat": 36.769988,
    "lon": 126.9316341
  },
  "uni_9": {
    "lat": 37.88316,
    "lon": 127.73725
  },
  "uni_10": {
    "lat": 37.5810967,
    "lon": 126.9240265
  },
  "uni_11": {
    "lat": 36.833,
    "lon": 127.1789962
  }
}

paths = [
    "d:/EASS/src/data/school_coordinates.json",
    "d:/EASS/kr-unituition-next/src/data/school_coordinates.json"
]

for path in paths:
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            coords = json.load(f)
            
        for uid, val in real_coords.items():
            coords[uid] = val
            
        with open(path, "w", encoding="utf-8") as f:
            json.dump(coords, f, ensure_ascii=False, indent=2)

print("Successfully updated coordinates for the 11 real universities!")
