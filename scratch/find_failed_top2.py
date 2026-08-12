import openpyxl
import re

wb = openpyxl.load_workbook('diachitop2%.xlsx', data_only=True)
sheet = wb.active
rows = list(sheet.iter_rows(values_only=True))

from extract_coords import extract_lat_long

print("Schools in diachitop2%.xlsx with missing/failed coordinates:")
for idx, r in enumerate(rows):
    if idx < 4:
        continue
    school_name = r[2]
    if not school_name:
        continue
    url = r[11]
    lat, lon = extract_lat_long(url)
    if not lat or not lon:
        print(f"Row {idx}: {school_name} | URL: {url}")
