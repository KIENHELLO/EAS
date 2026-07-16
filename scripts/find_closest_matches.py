import json
import re
import os
import pandas as pd
from difflib import get_close_matches

# Load universities.js
with open("d:/EASS/src/data/universities.js", "r", encoding="utf-8") as f:
    js_content = f.read()

match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
if not match:
    print("Failed to find universities array")
    exit(1)

universities = json.loads(match.group(1))
js_names = [u["name_vi"] for u in universities] + [u["name_en"] for u in universities]
name_to_school = {}
for u in universities:
    name_to_school[u["name_vi"].lower()] = u
    name_to_school[u["name_en"].lower()] = u

def clean(text):
    return text.lower().replace("đại học", "").replace("cao đẳng", "").strip()

clean_js_names = {clean(u["name_vi"]): u for u in universities}

excel_files = ["TO2%.xlsx", "TOP1%.xlsx", "top3.xlsx", "TruongNoTOPIK.xlsx", "danhsachtruonghanche.xlsx"]
unmatched_names = set()

for file in excel_files:
    path = os.path.join("d:/EASS", file)
    if os.path.exists(path):
        xl = pd.ExcelFile(path)
        df = xl.parse(xl.sheet_names[0])
        # Find name col
        name_col = None
        for col in df.columns:
            sample_vals = df[col].dropna().astype(str).tolist()[:5]
            if any("Đại học" in val or "Cao đẳng" in val or "snu" in val.lower() for val in sample_vals):
                name_col = col
                break
        if name_col is None:
            for col in df.columns:
                c_lower = str(col).lower()
                if "tên trường" in c_lower or "trường" in c_lower:
                    name_col = col
                    break
        if name_col is None:
            name_col = df.columns[2] if len(df.columns) > 2 else df.columns[0]
            
        for _, row in df.iterrows():
            val = row[name_col]
            if pd.notna(val) and isinstance(val, str) and val.strip() != "" and "TÊN TRƯỜNG" not in val and "TRƯỜNG" not in val:
                unmatched_names.add(val.strip())

print(f"Total unique names in excel files: {len(unmatched_names)}")

# Find closest matches
matches_found = []
no_matches = []

for ex_name in sorted(unmatched_names):
    cleaned_ex = clean(ex_name)
    cleaned_ex_no_paren = re.sub(r'\(.*?\)', '', cleaned_ex).strip()
    
    # Exact match on cleaned name
    if cleaned_ex in clean_js_names:
        matches_found.append((ex_name, clean_js_names[cleaned_ex]["name_vi"]))
        continue
    if cleaned_ex_no_paren in clean_js_names:
        matches_found.append((ex_name, clean_js_names[cleaned_ex_no_paren]["name_vi"]))
        continue
        
    # Substring match
    found = False
    for js_clean_name, school in clean_js_names.items():
        if cleaned_ex_no_paren and (cleaned_ex_no_paren in js_clean_name or js_clean_name in cleaned_ex_no_paren):
            matches_found.append((ex_name, school["name_vi"]))
            found = True
            break
            
    if not found:
        # Fuzzy match
        close_keys = get_close_matches(cleaned_ex_no_paren, list(clean_js_names.keys()), n=1, cutoff=0.5)
        if close_keys:
            matches_found.append((ex_name, clean_js_names[close_keys[0]]["name_vi"] + f" (Fuzzy: {close_keys[0]})"))
        else:
            no_matches.append(ex_name)

print(f"\nMatches Found: {len(matches_found)}")
for m in matches_found[:20]:
    print(f"  Excel: {m[0].replace('\n', ' ')}  ==>  JS: {m[1]}")
    
print(f"\nNo Matches Found: {len(no_matches)}")
for nm in no_matches[:20]:
    print(f"  {nm.replace('\n', ' ')}")
