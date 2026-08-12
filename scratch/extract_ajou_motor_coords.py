import re

with open('kr-unituition-next/.next/server/app/universities/ajou_motor.rsc', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Look for float-like numbers that are in the range of Korean coordinates:
# Latitude: 35.xxxx to 37.xxxx
# Longitude: 126.xxxx to 129.xxxx
# Let's find all pairs of latitude and longitude in the file!
matches = re.findall(r'3[567]\.[0-9]+', content)
matches_lon = re.findall(r'12[6789]\.[0-9]+', content)

print("Potential Latitudes:", list(set(matches)))
print("Potential Longitudes:", list(set(matches_lon)))
