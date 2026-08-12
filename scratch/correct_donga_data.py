import json

# 1. Correct in geocoded_schools.json
with open('scratch/geocoded_schools.json', 'r', encoding='utf-8') as f:
    schools = json.load(f)

for s in schools:
    if s['name'].strip() == 'Đại học Dong-A':
        s['lat'] = 35.11619
        s['lon'] = 128.96733
        s['address_ko'] = "부산광역시 사하구 낙동대로550번길 37 (하단동, 동아대학교)"
        s['postcode'] = "49315"
        s['status'] = "Thành công (Đã sửa lỗi vị trí)"
        print("Corrected Dong-A in geocoded_schools.json")

with open('scratch/geocoded_schools.json', 'w', encoding='utf-8') as f:
    json.dump(schools, f, ensure_ascii=False, indent=2)

# 2. Correct in unified_schools.json
with open('scratch/unified_schools.json', 'r', encoding='utf-8') as f:
    unified = json.load(f)

corrected_unified = 0
for u in unified:
    if u['name_vi'] == 'Đại học Dong-A':
        u['lat'] = 35.11619
        u['lon'] = 128.96733
        u['address_ko'] = "부산광역시 사하구 낙동대로550번길 37 (하단동, 동아대학교)"
        u['postcode'] = "49315"
        u['maps_link'] = "https://www.google.com/maps/place/Dong-A+University+Seunghak+Campus/data=!3m1!4b1!4m6!3m5!1s0x3568ec517596b4bf:0x7b5ab063bf0254cb!8m2!3d35.11619!4d128.96733"
        corrected_unified += 1
        print("Corrected Dong-A in unified_schools.json")

with open('scratch/unified_schools.json', 'w', encoding='utf-8') as f:
    json.dump(unified, f, ensure_ascii=False, indent=2)

print(f"Corrected: {corrected_unified} entries in unified_schools.json")
