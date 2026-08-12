import urllib.request
import urllib.parse
import json

query = "동아대학교 승학캠퍼스"  # Dong-A University Seunghak Campus in Korean
url = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(query)}&format=json&accept-language=ko"

req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'EAS-Korea-Tuition-Agent/1.0 (kient@koreaedu.vn)'}
)

try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode('utf-8'))
        print("Dong-A University geocoding data:")
        print(json.dumps(data, indent=2, ensure_ascii=False))
except Exception as e:
    print(f"Error geocoding: {e}")
