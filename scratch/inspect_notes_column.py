import openpyxl

wb = openpyxl.load_workbook('MASTER_DATABASE_DAI_HOC_CAO_DANG_HAN_QUOC_2026.xlsx', data_only=True)
sheet = wb['MASTER_DATABASE']
rows = list(sheet.iter_rows(values_only=True))
headers = rows[0]
notes_idx = headers.index('Notes')
name_idx = headers.index('Vietnamese_Name')

print("Headers:", headers)
print("Non-empty Notes samples (first 30):")
count = 0
for row in rows[1:]:
    notes = row[notes_idx]
    if notes is not None and str(notes).strip() != "" and str(notes).strip() != "N/A":
        print(f"School: {row[name_idx]} -> Notes: {notes}")
        count += 1
        if count >= 30:
            break
