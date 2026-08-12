import json
import subprocess

# Dump universities to JSON using Node
node_to_json = """
const fs = require('fs');
const content = fs.readFileSync('src/data/universities.js', 'utf8');
const universities = eval(content.replace('export const universities =', 'module.exports ='));
console.log(JSON.stringify(universities));
"""
with open('scratch/dump_to_json.cjs', 'w', encoding='utf-8') as f:
    f.write(node_to_json)

result = subprocess.run(['node', 'scratch/dump_to_json.cjs'], capture_output=True, text=True, encoding='utf-8')
universities = json.loads(result.stdout.strip())

# Group by region
by_region = {}
for u in universities:
    r = u.get('region', 'Khác')
    if r not in by_region:
        by_region[r] = []
    by_region[r].append(u)

# Print a nice report
report_lines = []
report_lines.append("======================================================================")
report_lines.append(f"BÁO CÁO THỐNG KÊ CHI TIẾT CSDL TRƯỜNG HỌC ({len(universities)} TRƯỜNG THỰC TẾ)")
report_lines.append("======================================================================\n")

for region, schools in sorted(by_region.items()):
    report_lines.append(f"--- KHU VỰC: {region.upper()} ({len(schools)} trường) ---")
    for idx, s in enumerate(sorted(schools, key=lambda x: x['id']), 1):
        uid = s['id']
        name = s['name_vi']
        t_social = s['tuition'].get('humanities_social')
        t_eng = s['tuition'].get('engineering')
        lat = s['coordinates'].get('latitude')
        lon = s['coordinates'].get('longitude')
        is_col = s.get('is_college', False)
        type_str = "Cao đẳng" if is_col else ("Công lập" if s.get('type') == 'public' else "Tư thục")
        
        report_lines.append(f"  {idx}. ID: {uid:<20} | Tên: {name:<50} | Loại: {type_str:<8} | Tọa độ: {lat:.5f}, {lon:.5f} | Học phí XH: {t_social or 'N/A'} KRW")
    report_lines.append("")

with open('scratch/db_schools_report.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(report_lines))

print(f"Report compiled successfully! Listed {len(universities)} schools grouped by regions.")
