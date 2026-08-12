import urllib.request
import json
import time

lat, lon = 37.4507128, 127.1288495
url = f"https://nominatim.openstreetmap.org/reverse?lat={lat}&lon={lon}&format=json&accept-language=ko"

req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'EAS-Korea-Tuition-Agent/1.0 (kient@koreaedu.vn)'}
)

try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode('utf-8'))
        print("Address data:")
        print(json.dumps(data, indent=2, ensure_ascii=False))
except Exception as e:
    print(f"Error reverse geocoding: {e}")
