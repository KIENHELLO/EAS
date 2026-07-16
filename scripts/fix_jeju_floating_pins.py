import json
import os
import random

paths = [
    "d:/EASS/src/data/school_coordinates.json",
    "d:/EASS/kr-unituition-next/src/data/school_coordinates.json"
]

# We want to pull any Jeju mock school that is too far north (in the sea) southwards,
# and generally distribute Jeju mock schools safely on land.
# Safe land box for Jeju city area:
# lat: 33.42 to 33.49
# lon: 126.43 to 126.56

jeju_mocks = [
    "mock_uni_84", "mock_uni_101", "mock_uni_118", 
    "mock_uni_135", "mock_uni_152", "mock_uni_169", 
    "mock_uni_186", "mock_uni_203"
]

for path in paths:
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            coords = json.load(f)
            
        print(f"Modifying Jeju coords in {path}...")
        for idx, mid in enumerate(jeju_mocks):
            if mid in coords:
                # Assign a safe, spread-out coordinate on land
                # Spread out by index to prevent overlaps
                lat = 33.44 + (idx * 0.007)
                lon = 126.45 + (idx * 0.012)
                coords[mid] = {
                    "lat": round(lat, 6),
                    "lon": round(lon, 6)
                }
                print(f"  {mid} -> lat: {coords[mid]['lat']}, lon: {coords[mid]['lon']}")
                
        with open(path, "w", encoding="utf-8") as f:
            json.dump(coords, f, ensure_ascii=False, indent=2)

print("Successfully fixed Jeju floating pins!")
