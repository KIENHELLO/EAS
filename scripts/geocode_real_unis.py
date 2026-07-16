import urllib.request
import urllib.parse
import json
import time

schools = {
    "uni_1": {"ko": "가천대학교", "en": "Gachon University"},
    "uni_2": {"ko": "단국대학교", "en": "Dankook University"},
    "uni_3": {"ko": "조선대학교", "en": "Chosun University"},
    "uni_4": {"ko": "동아대학교", "en": "Dong-A University"},
    "uni_5": {"ko": "부경대학교", "en": "Pukyong University"},
    "uni_6": {"ko": "울산대학교", "en": "Ulsan University"},
    "uni_7": {"ko": "창원대학교", "en": "Changwon University"},
    "uni_8": {"ko": "순천향대학교", "en": "Soonchunhyang University"},
    "uni_9": {"ko": "한림대학교", "en": "Hallym University"},
    "uni_10": {"ko": "명지대학교", "en": "Myongji University"},
    "uni_11": {"ko": "상명대학교", "en": "Sangmyung University"}
}

def geocode(name):
    try:
        url = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(name)}&format=json&limit=1"
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'KR-UniTuition/2.0 (contact@eas-tuition.com)'}
        )
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode('utf-8'))
            if data:
                return {
                    "lat": float(data[0]["lat"]),
                    "lon": float(data[0]["lon"])
                }
    except Exception as e:
        print(f"Error geocoding {name}: {e}")
    return None

results = {}
for uid, info in schools.items():
    print(f"Geocoding {info['ko']}...")
    coords = geocode(info["ko"])
    if not coords:
        coords = geocode(info["en"])
    results[uid] = coords
    print(f"  Result: {coords}")
    time.sleep(1) # rate limit

print("\nAll results:")
print(json.dumps(results, indent=2))
