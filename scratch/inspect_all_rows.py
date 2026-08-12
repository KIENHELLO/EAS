import openpyxl
import os

files = ['diachitop1%.xlsx', 'diachitop2%.xlsx', 'diachitop3%.xlsx']

for f in files:
    wb = openpyxl.load_workbook(f, data_only=True)
    sheet = wb.active
    print(f"\n======================================")
    print(f"FILE: {f} (Sheet: {sheet.title})")
    print(f"======================================")
    
    rows = list(sheet.iter_rows(values_only=True))
    print(f"Total rows: {len(rows)}")
    
    # Print the first 15 rows to check headers and starting data
    for idx, r in enumerate(rows[:20]):
        # Filter out rows that are entirely None to make it easier to read
        if any(x is not None for x in r):
            # Print index and the row, but truncate very long fields (like maps links) for cleaner view
            cleaned_row = [str(x)[:50] if x is not None else None for x in r]
            print(f"Row {idx}: {cleaned_row}")
