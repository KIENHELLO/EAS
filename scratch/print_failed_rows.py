import openpyxl

wb = openpyxl.load_workbook('diachitop2%.xlsx', data_only=True)
sheet = wb.active
rows = list(sheet.iter_rows(values_only=True))

failed_rows = [44, 72, 108, 121, 128, 144, 149]

for r_idx in failed_rows:
    if r_idx < len(rows):
        print(f"Row {r_idx}: {rows[r_idx]}")
