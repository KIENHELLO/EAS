import json
import urllib.request
import urllib.parse
import time

manual_queries = {
    "Đại học Dongmyung": "Tongmyung University",
    "Đại học Phim ảnh Hàn Quốc": "Korea University of Media Arts",
    "Đại học Sau đại học Ngôn ngữ Quốc tế": "International Graduate School of English",
    "Đại học Quốc gia khoa học và công nghệ  Gyeongnam": "Gyeongnam National University of Science and Technology",
    "Đại học Kusan": "Kunsan National University",
    "Đại học Yong In": "Yong In University",
    "Đại học Nghệ thuật Yewon": "Yewon Arts University",
    "Đại học Yuwon": "Yuwon University",
    "Đại học Văn hoá Keimyung": "Keimyung College",
    "Đại học Khoa học Kyongbuk": "Kyongbuk Science College",
    "Viện Công nghệ Geumoh": "Kumoh National Institute of Technology",
    "Cao đẳng Y tế Daegu": "Daegu Health College",
    "Cao đẳng Khoa học kỹ thuật Dongwon": "Dongwon Institute of Science and Technology",
    "Cao đẳng Cheongam": "Cheongam College",
    "Đại học Luật và Kinh doanh Quốc tế": "Transnational Law and Business University"
}

with open('scratch/unified_schools.json', 'r', encoding='utf-8') as f:
    schools = json.load(f)

# Load cache
CACHE_FILE = 'scratch/geocoding_cache.json'
try:
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)
except Exception:
    cache = {}

def save_cache():
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

def geocode_osm(query):
    if query in cache:
        return cache[query]
        
    url = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(query)}&format=json&accept-language=ko&limit=1"
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'EAS-Korea-Tuition-Agent/1.0 (kient@koreaedu.vn)'}
    )
    
    for attempt in range(3):
        try:
            time.sleep(1.2)
            with urllib.request.urlopen(req, timeout=10) as response:
                data = json.loads(response.read().decode('utf-8'))
                if data:
                    cache[query] = data[0]
                    save_cache()
                    return data[0]
        except Exception as e:
            print(f"  [Attempt {attempt+1}] Error geocoding {query}: {e}")
            time.sleep(2)
    return None

resolved_count = 0
for s in schools:
    name = s['name_vi']
    if not s['lat'] or not s['lon']:
        if name in manual_queries:
            q = manual_queries[name]
            print(f"Geocoding manual query for {name} -> {q}")
            geo_data = geocode_osm(q)
            if geo_data:
                s['lat'] = float(geo_data['lat'])
                s['lon'] = float(geo_data['lon'])
                s['address_ko'] = geo_data.get('display_name', '')
                s['postcode'] = geo_data.get('address', {}).get('postcode', '')
                resolved_count += 1
                print(f"  SUCCESS: {name} -> {s['lat']}, {s['lon']}")
            else:
                print(f"  FAILED: {name}")

# Save updated schools back
with open('scratch/unified_schools.json', 'w', encoding='utf-8') as f:
    json.dump(schools, f, ensure_ascii=False, indent=2)

print(f"\nManual geocoding completed! Resolved: {resolved_count}")
print(f"Total geocoded now: {sum(1 for s in schools if s['lat'] and s['lon'])} / {len(schools)}")
