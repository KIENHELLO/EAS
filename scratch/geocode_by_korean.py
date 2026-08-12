import json
import urllib.request
import urllib.parse
import time

korean_names = {
    "Đại học Dongmyung": "동명대학교",
    "Đại học Phim ảnh Hàn Quốc": "한국영상대학교",
    "Đại học Sau đại học Ngôn ngữ Quốc tế": "국제영어대학원대학교",
    "Đại học Quốc gia khoa học và công nghệ  Gyeongnam": "경남과학기술대학교",
    "Đại học Kusan": "군산대학교",
    "Đại học Yong In": "용인대학교",
    "Đại học Nghệ thuật Yewon": "예원예술대학교",
    "Đại học Yuwon": "유원대학교",
    "Đại học Văn hoá Keimyung": "계명문화대학교",
    "Đại học Khoa học Kyongbuk": "경북과학대학교",
    "Viện Công nghệ Geumoh": "금오공과대학교",
    "Cao đẳng Y tế Daegu": "대구보건대학교",
    "Cao đẳng Khoa học kỹ thuật Dongwon": "동원과학기술대학교",
    "Cao đẳng Cheongam": "청암대학교",
    "Đại học Luật và Kinh doanh Quốc tế": "국제법률경영대학원대학교",
    "Cao đẳng Catholic Sangji": "가톨릭상지대학교"
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
    
    # Always correct coordinates for these manual schools to ensure high accuracy
    if name in korean_names:
        ko_query = korean_names[name]
        print(f"Geocoding Korean query for {name} -> {ko_query}")
        geo_data = geocode_osm(ko_query)
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

print(f"\nKorean name geocoding completed! Resolved/Updated: {resolved_count}")
print(f"Total geocoded now: {sum(1 for s in schools if s['lat'] and s['lon'])} / {len(schools)}")
