import json

with open('scratch/geocoded_schools.json', 'r', encoding='utf-8') as f:
    schools = json.load(f)

# Load existing DB to cross-reference
with open('scratch/db_schools.json', 'r', encoding='utf-8') as f:
    db_schools = json.load(f)

# Build a mapping of school names in DB (both Vietnamese and English)
db_map = {}
for u in db_schools:
    db_map[u['name_vi'].lower().strip()] = u
    db_map[u['name_en'].lower().strip()] = u

print(f"Total geocoded records: {len(schools)}")

summary = {
    'total': len(schools),
    'success': 0,
    'failed': 0,
    'corrected_location': 0,
    'unmatched_name': 0
}

manual_review = []
normalized_table = []

# South Korea bounding box
# Lat: 33.0 to 39.0
# Lon: 124.0 to 132.0
def is_in_korea(lat, lon):
    return 33.0 <= lat <= 39.0 and 124.0 <= lon <= 132.0

for s in schools:
    name = s['name']
    lat = s['lat']
    lon = s['lon']
    addr = s['address_ko']
    postcode = s['postcode']
    source = s['file_source']
    
    # 1. Check if geocoding was successful
    geocoded_ok = s['status'].startswith('Thành công') and addr != ""
    
    # 2. Check if coordinates fall outside South Korea
    outside_korea = False
    if geocoded_ok:
        if not is_in_korea(lat, lon):
            outside_korea = True
            
    # 3. Check for name spelling anomalies or mismatches
    name_clean = name.replace('\n', ' ').strip().lower()
    
    # Check if we can find it in our DB
    matched_db = None
    # exact check
    if name_clean in db_map:
        matched_db = db_map[name_clean]
    else:
        # Fuzzy check: see if any word overlaps
        for db_name, u in db_map.items():
            if name_clean in db_name or db_name in name_clean:
                matched_db = u
                break
                
    flag_type = "OK"
    notes = ""
    
    if outside_korea:
        geocoded_ok = False
        summary['failed'] += 1
        flag_type = "Lỗi tọa độ (Ngoài Hàn Quốc)"
        notes = f"Tọa độ ({lat}, {lon}) nằm ngoài Hàn Quốc. Bản đồ gốc chỉ tới địa điểm ở quốc gia khác (ví dụ: Việt Nam)."
        manual_review.append({
            'name': name,
            'reason': 'Tọa độ ngoài Hàn Quốc',
            'detail': f"Địa điểm thực tế: {addr or 'Chưa rõ'}. Tọa độ: {lat}, {lon}. Có vẻ link Google Maps bị trỏ nhầm sang trường trùng tên ở Việt Nam hoặc nước khác.",
            'source': source
        })
    elif not geocoded_ok:
        summary['failed'] += 1
        flag_type = "Thất bại"
        notes = "Không tìm thấy địa chỉ/tọa độ hợp lệ từ Google Maps link."
        manual_review.append({
            'name': name,
            'reason': 'Geocoding thất bại',
            'detail': f"Google Maps link: {s['url_orig'] or 'Trống'}",
            'source': source
        })
    else:
        summary['success'] += 1
        
        # Check if name is slightly different from DB (spelling audit)
        if not matched_db:
            summary['unmatched_name'] += 1
            flag_type = "Tên chưa khớp DB"
            notes = "Tên trường viết tắt hoặc viết khác so với DB gốc (ví dụ: Seolyong vs Seokyeong, ChungAng vs Chung-Ang)."
            manual_review.append({
                'name': name,
                'reason': 'Tên trường chưa khớp DB',
                'detail': f"Tên gốc trong Excel: '{name}'. Cần chuẩn hóa lại tên tiếng Việt/Anh chuẩn.",
                'source': source
            })
        else:
            # Check if region matches
            pass
            
    # Add to table
    normalized_table.append({
        'stt': s['stt'],
        'name': name,
        'source': source,
        'addr_orig': s['region_orig'] or 'Chưa rõ',
        'addr_norm': addr if geocoded_ok else 'N/A',
        'postcode': postcode if (geocoded_ok and postcode) else 'N/A',
        'lat': lat if geocoded_ok else 'N/A',
        'lon': lon if geocoded_ok else 'N/A',
        'status': "Thành công" if geocoded_ok else f"Thất bại ({flag_type})",
        'notes': notes
    })

# Save results
analysis_results = {
    'summary': summary,
    'table': normalized_table,
    'manual_review': manual_review
}

with open('scratch/analysis_results.json', 'w', encoding='utf-8') as f:
    json.dump(analysis_results, f, ensure_ascii=False, indent=2)

print("\n--- Summary ---")
print(f"Total: {summary['total']}")
print(f"Success: {summary['success']}")
print(f"Failed/Errors: {summary['failed']}")
print(f"Unmatched Names: {summary['unmatched_name']}")
print(f"Manual Review Items: {len(manual_review)}")
