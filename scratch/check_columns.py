import openpyxl

wb = openpyxl.load_workbook('diachitop2%.xlsx', data_only=True)
sheet = wb.active
rows = list(sheet.iter_rows(values_only=True))

for idx, r in enumerate(rows[4:10]):
    print(f"Row {idx+4}:")
    for c_idx, val in enumerate(r):
        if val is not None:
            print(f"  Col {c_idx}: {val}")
