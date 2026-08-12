import openpyxl
import os
import re

files_config = {
    "TOP1%.xlsx": {"name_col": 2, "start_row": 3},
    "TO2%.xlsx": {"name_col": 2, "start_row": 4},
    "top3.xlsx": {"name_col": 1, "start_row": 2},
    "TruongNoTOPIK.xlsx": {"name_col": 1, "start_row": 2},
    "danhsachtruonghanche.xlsx": {"name_col": 1, "start_row": 2},
    "diachitop1%.xlsx": {"name_col": 2, "start_row": 3},
    "diachitop2%.xlsx": {"name_col": 2, "start_row": 4},
    "diachitop3%.xlsx": {"name_col": 1, "start_row": 2}
}

def clean_name(name):
    if not name: return ""
    name = str(name).replace('\n', ' ').strip()
    # remove duplicate spaces
    name = re.sub(r'\s+', ' ', name)
    return name

all_schools_by_file = {}
all_unique_names = set()

for f, cfg in files_config.items():
    if os.path.exists(f):
        wb = openpyxl.load_workbook(f, data_only=True)
        sheet = wb.active
        rows = list(sheet.iter_rows(values_only=True))
        
        names = []
        name_col = cfg["name_col"]
        start_row = cfg["start_row"]
        
        for r in rows[start_row:]:
            school_name = r[name_col]
            if not school_name or 'TÊN TRƯỜNG' in str(school_name) or str(school_name).strip() == '':
                continue
            
            # Lọc bỏ dòng tiêu đề khu vực miền trung / nam của diachitop2%
            if f == "diachitop2%.xlsx" and ("MIỀN" in str(school_name) or "KHU VỰC" in str(school_name)):
                continue
            if f == "TO2%.xlsx" and ("MIỀN" in str(school_name) or "KHU VỰC" in str(school_name)):
                continue
                
            name_val = clean_name(school_name)
            names.append(name_val)
            all_unique_names.add(name_val)
            
        all_schools_by_file[f] = names
        print(f"File: {f} | Loaded {len(names)} schools.")

print(f"\nTotal unique school names across all files: {len(all_unique_names)}")
print("First 20 unique school names:")
for n in sorted(list(all_unique_names))[:20]:
    print(f"  - {n}")
