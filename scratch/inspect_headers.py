import openpyxl

files = ["TOP1%.xlsx", "TO2%.xlsx", "top3.xlsx", "TruongNoTOPIK.xlsx", "danhsachtruonghanche.xlsx"]

for f in files:
    wb = openpyxl.load_workbook(f, data_only=True)
    sheet = wb.active
    rows = list(sheet.iter_rows(values_only=True))
    print(f"\nFile: {f}")
    # Print the first 5 rows to see where headers and data start
    for idx, r in enumerate(rows[:5]):
        non_empty = [f"Col {i}: {v}" for i, v in enumerate(r) if v is not None]
        print(f"  Row {idx}: {', '.join(non_empty[:8])} ...")
