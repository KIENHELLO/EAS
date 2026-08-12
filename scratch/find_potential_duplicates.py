import json
import subprocess
from math import radians, cos, sin, asin, sqrt

# Load schools
result = subprocess.run(['node', 'scratch/dump_to_json.cjs'], capture_output=True, text=True, encoding='utf-8')
universities = json.loads(result.stdout.strip())

def haversine(lon1, lat1, lon2, lat2):
    # Calculate the great circle distance between two points on the earth
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a)) 
    r = 6371 # Radius of earth in kilometers
    return c * r

# Find coordinates proximity duplicates
close_pairs = []
for i in range(len(universities)):
    for j in range(i + 1, len(universities)):
        u1 = universities[i]
        u2 = universities[j]
        c1 = u1['coordinates']
        c2 = u2['coordinates']
        if c1.get('latitude') and c2.get('latitude'):
            dist = haversine(c1['longitude'], c1['latitude'], c2['longitude'], c2['latitude'])
            if dist < 0.1: # less than 100 meters
                close_pairs.append((dist, u1, u2))

print("=========================================================")
print("POTENTIAL DUPLICATES BY GEOGRAPHIC PROXIMITY (<100m)")
print("=========================================================")
for dist, u1, u2 in sorted(close_pairs, key=lambda x: x[0]):
    print(f"Distance: {dist*1000:.1f} meters")
    print(f"  School 1: ID: {u1['id']:<20} | Name: {u1['name_vi']}")
    print(f"  School 2: ID: {u2['id']:<20} | Name: {u2['name_vi']}")
    print()

# Find duplicate names by clean edit distance or overlap
print("=========================================================")
print("POTENTIAL DUPLICATES BY NAME SIMILARITY")
print("=========================================================")
for i in range(len(universities)):
    for j in range(i + 1, len(universities)):
        u1 = universities[i]
        u2 = universities[j]
        n1 = u1['name_vi'].replace('Đại học', '').replace('Cao đẳng', '').replace(' ', '').lower()
        n2 = u2['name_vi'].replace('Đại học', '').replace('Cao đẳng', '').replace(' ', '').lower()
        if n1 == n2 or (len(n1) > 4 and len(n2) > 4 and (n1 in n2 or n2 in n1)):
            print(f"  Match:")
            print(f"    School 1: ID: {u1['id']:<20} | Name: {u1['name_vi']}")
            print(f"    School 2: ID: {u2['id']:<20} | Name: {u2['name_vi']}")
            print()
