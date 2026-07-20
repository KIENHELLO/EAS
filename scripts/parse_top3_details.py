import openpyxl
import json
import re

wb = openpyxl.load_workbook('top3.xlsx', data_only=True)
sheet = wb.active

schools = []
for idx, row in enumerate(sheet.iter_rows(values_only=True), start=1):
    if not row or idx in [1, 2]: continue
    vals = [str(c).strip() if c is not None else '' for c in row]
    if len(vals) < 3 or not vals[1]: continue
    
    stt = vals[0]
    name_raw = vals[1]
    top_val = vals[2] if len(vals) > 2 else '3'
    region_raw = vals[3] if len(vals) > 3 else ''
    majors_raw = vals[4] if len(vals) > 4 else ''
    invoice_raw = vals[5] if len(vals) > 5 else ''
    ktx_raw = vals[6] if len(vals) > 6 else ''
    notes_raw = vals[7] if len(vals) > 7 else ''
    
    schools.append({
        "stt": stt,
        "name_raw": name_raw,
        "region_raw": region_raw,
        "majors_raw": majors_raw,
        "invoice_raw": invoice_raw,
        "ktx_raw": ktx_raw,
        "notes_raw": notes_raw
    })

print(f"Extracted {len(schools)} schools from top3.xlsx:")
for s in schools:
    print(f"STT {s['stt']:2s} | {s['name_raw']:35s} | Region: {s['region_raw']:25s} | Majors: {s['majors_raw'][:30]}")
