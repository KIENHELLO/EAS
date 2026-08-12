import openpyxl
import os

files = [
    "TOP1%.xlsx",
    "TO2%.xlsx",
    "top3.xlsx",
    "TruongNoTOPIK.xlsx",
    "danhsachtruonghanche.xlsx",
    "diachitop1%.xlsx",
    "diachitop2%.xlsx",
    "diachitop3%.xlsx"
]

print("Analyzing row counts and columns of each XLSX file:")
for f in files:
    if os.path.exists(f):
        wb = openpyxl.load_workbook(f, data_only=True)
        sheet = wb.active
        # Filter out empty rows
        rows = [r for r in sheet.iter_rows(values_only=True) if any(val is not None for val in r)]
        print(f"  File: {f} | Rows: {len(rows)} | Columns: {len(rows[0]) if len(rows) > 0 else 0}")
    else:
        print(f"  File: {f} | File not found!")
