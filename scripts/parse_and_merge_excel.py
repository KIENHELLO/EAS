import os
import re
import json
import unicodedata
import pandas as pd

# 1. Accent removal helper
def remove_accents(input_str):
    if not isinstance(input_str, str):
        return ""
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    only_ascii = nfkd_form.encode('ASCII', 'ignore').decode('utf-8')
    only_ascii = only_ascii.replace('đ', 'd').replace('Đ', 'd')
    return only_ascii

# 2. Text clean helper for name comparison
def clean_name(name):
    if not name or not isinstance(name, str):
        return ""
    # Remove text in parentheses
    name = re.sub(r'\(.*?\)', '', name)
    name = re.sub(r'\n', ' ', name)
    name = name.lower()
    name = remove_accents(name)
    # Remove common prefix/suffix words
    words_to_remove = ["dai hoc", "cao dang", "truong", "vien", "university", "college", "national", "womans", "womens", "quoc gia", "nu sinh", "nu gioi", "ky thuat"]
    for w in words_to_remove:
        name = name.replace(w, "")
    # Remove non-alphanumeric characters
    name = re.sub(r'[^a-z0-9]', '', name)
    return name

# 3. Spelling alias mapping (Excel cleaned name -> JS ID)
alias_map = {
    "seolyong": "seokyeong",
    "seokyeong": "seokyeong",
    "pohang": "postech",
    "busan": "pusan",
    "sungkyungwan": "skku",
    "sungkyunkwan": "skku",
    "chungang": "cau",
    "gangwon": "kangwon",
    "kangwon": "kangwon",
    "catholic": "catholic",
    "congma": "catholic", # "công giáo" -> "cong giao" -> "congma" or "conggiao"
    "conggiao": "catholic",
    "phatgiao": "dongguk", # Buddhist school is Dongguk
    "dongguk": "dongguk",
    "geumoh": "kumoh",
    "kumoh": "kumoh",
    "ytedaegu": "daegu_health",
    "ydaegu": "daegu_health",
    "daeguhealth": "daegu_health",
    "gimpo": "kimpo",
    "kimpo": "kimpo",
    "shinasan": "shinasan",
    "shingu": "shingu",
    "doowon": "doowon",
    "jangan": "jangan",
    "ansan": "ansan",
    "bucheon": "bucheon",
    "dongnam": "dongnam",
    "kyungmin": "kyungmin",
    "seojeong": "seojeong",
    "tongwon": "tongwon",
    "soongsil": "soongsil",
    "kookmin": "kookmin",
    "ajoumoto": "ajou_motor", # Ajou Motor College
    "ajomotor": "ajou_motor",
    "soonchunhyang": "soonchunhyang",
    "dongeui": "dongeui",
    "yongin": "yongin",
    "dongduk": "dongduk",
    "yewon": "yewon",
    "yuwon": "yuwon",
    "chodang": "chodang",
    "halla": "halla",
    "chongshin": "chongshin",
    "kyungpook": "knu",
    "kyungpooknational": "knu"
}

# 4. Regex parsing of KTX (Dorm fee)
def parse_dorm_fee(ktx_text):
    if pd.isna(ktx_text) or not isinstance(ktx_text, str):
        return None
    text = ktx_text.lower().replace('.', ',').replace(' ', '')
    # Match range or single number like 1,200,000 or 1,200,000-1,800,000
    nums = re.findall(r'(\d[\d,]+)', text)
    if nums:
        # Get first number or average of first two numbers
        try:
            val1 = int(nums[0].replace(',', ''))
            if len(nums) > 1:
                val2 = int(nums[1].replace(',', ''))
                # If they are like 1,200,000 and 1,800,000, average is 1,500,000
                return int((val1 + val2) / 2)
            return val1
        except Exception:
            pass
    return None

# 5. Regex parsing of INVOICE details
def parse_invoice(text):
    if pd.isna(text) or not isinstance(text, str):
        return {
            "tuition": "",
            "insurance": "",
            "reg_fee": ""
        }
    text_clean = remove_accents(text.lower().replace('.', ','))
    
    # 1. Parse Tuition (Học phí)
    tuition = ""
    t_match = re.search(r'(?:hoc\s+phi|hp)\s*([\d,]+(?:\s*-\s*[\d,]+)?)\s*(?:krw|đ|usd)?', text_clean)
    if t_match:
        tuition = t_match.group(1).strip()
    else:
        nums = re.findall(r'(\d[\d,]+(?:\s*-\s*[\d,]+)?)', text_clean)
        for num in nums:
            clean_num = num.replace(',', '').replace(' ', '')
            if '-' in clean_num:
                parts = clean_num.split('-')
                if len(parts[0]) >= 7:
                    tuition = num
                    break
            elif len(clean_num) >= 7:
                tuition = num
                break
                
    if tuition:
        text_clean = text_clean.replace(tuition, '')
        
    # 2. Parse Insurance (Bảo hiểm)
    insurance = ""
    ins_match = re.search(r'(?:bao\s+hiem|ba\s+hiem|bh|y\s+te|insurance)\s*([\d,]+)', text_clean)
    if ins_match:
        insurance = ins_match.group(1).strip()
        text_clean = text_clean.replace(insurance, '')
    else:
        ins_nums = re.findall(r'(1[0-9]0,000|2[0-9]0,000|300,000|150,000|250,000)', text_clean)
        if ins_nums:
            insurance = ins_nums[0]
            text_clean = text_clean.replace(insurance, '')
            
    # 3. Parse Registration Fee (Phí nhập học)
    reg_fee = ""
    reg_match = re.search(r'(?:nhap\s+hoc|ghi\s+danh|dki|dang\s+ky|dky|enrollment)\s*([\d,]+)', text_clean)
    if reg_match:
        reg_fee = reg_match.group(1).strip()
    else:
        reg_nums = re.findall(r'(50,000|60,000|70,000|80,000|100,000)', text_clean)
        if reg_nums:
            reg_fee = reg_nums[0]
            
    return {
        "tuition": tuition,
        "insurance": insurance,
        "reg_fee": reg_fee
    }

# 6. Load universities.js
print("Loading universities.js...")
with open("d:/EASS/src/data/universities.js", "r", encoding="utf-8") as f:
    js_content = f.read()

match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
if not match:
    print("Error: Could not parse universities array.")
    exit(1)

universities = json.loads(match.group(1))
print(f"Loaded {len(universities)} universities from JS database.")

# Map clean names to existing schools
existing_by_clean_name = {}
for u in universities:
    c_vi = clean_name(u["name_vi"])
    c_en = clean_name(u["name_en"])
    c_ko = clean_name(u["name_ko"])
    
    if c_vi:
        existing_by_clean_name[c_vi] = existing_by_clean_name.get(c_vi, []) + [u]
    if c_en:
        existing_by_clean_name[c_en] = existing_by_clean_name.get(c_en, []) + [u]
    if c_ko:
        existing_by_clean_name[c_ko] = existing_by_clean_name.get(c_ko, []) + [u]

# Find a school by its name or ID
def find_schools(raw_name):
    c_name = clean_name(raw_name)
    if not c_name:
        return []
        
    # Check alias map
    if c_name in alias_map:
        target_id = alias_map[c_name]
        return [u for u in universities if u["id"] == target_id or u["id"].startswith(f"mock_uni_") and clean_name(u["name_vi"]) == clean_name(raw_name)]
        
    # Check exact clean name match
    if c_name in existing_by_clean_name:
        return existing_by_clean_name[c_name]
        
    # Substring match
    for k, schools in existing_by_clean_name.items():
        if c_name in k or k in c_name:
            return schools
            
    return []

# Create new school template
def create_new_school(raw_name, region, featured_majors, top_level, is_restricted=False):
    slug = clean_name(raw_name)
    if not slug:
        slug = "uni_" + str(len(universities) + 1)
        
    # Region translation
    reg_vi = region if pd.notna(region) else "Gyeonggi"
    
    # Determine type (public/private)
    type_school = "private"
    if "quoc gia" in remove_accents(raw_name.lower()) or "cong lap" in remove_accents(raw_name.lower()) or "national" in raw_name.lower():
        type_school = "public"
        
    is_metro = reg_vi.lower() in ["seoul", "gyeonggi", "incheon", "bucheon", "suwon", "ansan"]
    
    return {
        "id": slug,
        "name_en": raw_name + " (English)",
        "name_ko": raw_name + " (Korean)",
        "name_vi": raw_name,
        "type": type_school,
        "region": reg_vi,
        "ranking": 100,
        "campus_address": reg_vi + ", South Korea",
        "website": "https://google.com",
        "tuition": {
            "humanities_social": None,
            "natural_sciences": None,
            "engineering": None,
            "arts_sports": None,
            "medicine_pharmacy": None
        },
        "dorm_fee": None,
        "living_cost_est": 700000 if is_metro else 500000,
        "scholarships": [],
        "description": f"Trường đại học đào tạo uy tín tại khu vực {reg_vi}.",
        "accept_gdtx": "top2" if top_level == 2 else ("top3" if top_level == 3 else None),
        "visa_metropolitan": is_metro,
        "master_no_topik": False,
        "custom_notes": f"Trường thuộc nhóm TOP {top_level}%",
        "top_1_percent": top_level == 1,
        "is_restricted_school": is_restricted
    }

# 7. Merge excel data
print("\n=== Processing Excel files ===")

# Read TOP 1%
path_top1 = "d:/EASS/TOP1%.xlsx"
if os.path.exists(path_top1):
    print("Parsing TOP1%.xlsx...")
    df = pd.read_excel(path_top1)
    # The name is in Unnamed: 2
    for idx, row in df.iterrows():
        name = row["Unnamed: 2"]
        if pd.isna(name) or not isinstance(name, str) or "TÊN" in name or name.strip() == "":
            continue
            
        matched_schools = find_schools(name)
        invoice = row["Unnamed: 5"]
        ktx = row["Unnamed: 6"]
        conds = row["Unnamed: 7"]
        notes = row["Unnamed: 10"]
        majors = row["Unnamed: 4"]
        
        parsed_inv = parse_invoice(invoice)
        parsed_dorm = parse_dorm_fee(ktx)
        
        if matched_schools:
            for u in matched_schools:
                u["top_1_percent"] = True
                u["accept_gdtx"] = None # Top 1 has no GDTX flag
                u["language_tuition_desc"] = f"{parsed_inv['tuition']} KRW/năm" if parsed_inv['tuition'] else ""
                u["registration_fee_desc"] = f"{parsed_inv['reg_fee']} KRW" if parsed_inv['reg_fee'] else ""
                u["insurance_fee_desc"] = f"{parsed_inv['insurance']} KRW/năm" if parsed_inv['insurance'] else ""
                u["invoice_details"] = str(invoice) if pd.notna(invoice) else ""
                u["dorm_fee_desc"] = str(ktx) if pd.notna(ktx) else ""
                if parsed_dorm:
                    u["dorm_fee"] = parsed_dorm
                u["admission_conditions"] = str(conds) if pd.notna(conds) else ""
                u["featured_majors"] = str(majors) if pd.notna(majors) else ""
                u["regional_restrictions"] = str(notes) if pd.notna(notes) else ""
        else:
            # Create new school
            new_s = create_new_school(name, row.get("Unnamed: 3", "Seoul"), majors, 1)
            new_s["language_tuition_desc"] = f"{parsed_inv['tuition']} KRW/năm" if parsed_inv['tuition'] else ""
            new_s["registration_fee_desc"] = f"{parsed_inv['reg_fee']} KRW" if parsed_inv['reg_fee'] else ""
            new_s["insurance_fee_desc"] = f"{parsed_inv['insurance']} KRW/năm" if parsed_inv['insurance'] else ""
            new_s["invoice_details"] = str(invoice) if pd.notna(invoice) else ""
            new_s["dorm_fee_desc"] = str(ktx) if pd.notna(ktx) else ""
            if parsed_dorm:
                new_s["dorm_fee"] = parsed_dorm
            new_s["admission_conditions"] = str(conds) if pd.notna(conds) else ""
            new_s["featured_majors"] = str(majors) if pd.notna(majors) else ""
            new_s["regional_restrictions"] = str(notes) if pd.notna(notes) else ""
            universities.append(new_s)

# Read TOP 2%
path_top2 = "d:/EASS/TO2%.xlsx"
if os.path.exists(path_top2):
    print("Parsing TO2%.xlsx...")
    df = pd.read_excel(path_top2)
    for idx, row in df.iterrows():
        name = row["Unnamed: 2"]
        if pd.isna(name) or not isinstance(name, str) or "TÊN" in name or name.strip() == "":
            continue
            
        matched_schools = find_schools(name)
        invoice = row["Unnamed: 5"]
        ktx = row["Unnamed: 6"]
        conds = row["Unnamed: 7"]
        notes = row["Unnamed: 9"] # restricted regions
        majors = row["Unnamed: 4"]
        
        parsed_inv = parse_invoice(invoice)
        parsed_dorm = parse_dorm_fee(ktx)
        
        if matched_schools:
            for u in matched_schools:
                u["accept_gdtx"] = "top2"
                u["top_1_percent"] = False
                u["language_tuition_desc"] = f"{parsed_inv['tuition']} KRW/năm" if parsed_inv['tuition'] else ""
                u["registration_fee_desc"] = f"{parsed_inv['reg_fee']} KRW" if parsed_inv['reg_fee'] else ""
                u["insurance_fee_desc"] = f"{parsed_inv['insurance']} KRW/năm" if parsed_inv['insurance'] else ""
                u["invoice_details"] = str(invoice) if pd.notna(invoice) else ""
                u["dorm_fee_desc"] = str(ktx) if pd.notna(ktx) else ""
                if parsed_dorm:
                    u["dorm_fee"] = parsed_dorm
                u["admission_conditions"] = str(conds) if pd.notna(conds) else ""
                u["featured_majors"] = str(majors) if pd.notna(majors) else ""
                u["regional_restrictions"] = str(notes) if pd.notna(notes) else ""
        else:
            new_s = create_new_school(name, row.get("Unnamed: 3", "Gyeonggi"), majors, 2)
            new_s["language_tuition_desc"] = f"{parsed_inv['tuition']} KRW/năm" if parsed_inv['tuition'] else ""
            new_s["registration_fee_desc"] = f"{parsed_inv['reg_fee']} KRW" if parsed_inv['reg_fee'] else ""
            new_s["insurance_fee_desc"] = f"{parsed_inv['insurance']} KRW/năm" if parsed_inv['insurance'] else ""
            new_s["invoice_details"] = str(invoice) if pd.notna(invoice) else ""
            new_s["dorm_fee_desc"] = str(ktx) if pd.notna(ktx) else ""
            if parsed_dorm:
                new_s["dorm_fee"] = parsed_dorm
            new_s["admission_conditions"] = str(conds) if pd.notna(conds) else ""
            new_s["featured_majors"] = str(majors) if pd.notna(majors) else ""
            new_s["regional_restrictions"] = str(notes) if pd.notna(notes) else ""
            universities.append(new_s)

# Read TOP 3%
path_top3 = "d:/EASS/top3.xlsx"
if os.path.exists(path_top3):
    print("Parsing top3.xlsx...")
    df = pd.read_excel(path_top3)
    for idx, row in df.iterrows():
        name = row["Tên trường"]
        if pd.isna(name) or not isinstance(name, str) or "Tên trường" in name or name.strip() == "":
            continue
            
        matched_schools = find_schools(name)
        invoice = row["INVOICE"]
        ktx = row["KTX"]
        conds = row["Điều kiện tuyển sinh"]
        notes = row.get("Unnamed: 9", "") # restricted regions
        majors = row["Ngành nổi bật"]
        
        parsed_inv = parse_invoice(invoice)
        parsed_dorm = parse_dorm_fee(ktx)
        
        if matched_schools:
            for u in matched_schools:
                u["accept_gdtx"] = "top3"
                u["top_1_percent"] = False
                u["language_tuition_desc"] = f"{parsed_inv['tuition']} KRW/năm" if parsed_inv['tuition'] else ""
                u["registration_fee_desc"] = f"{parsed_inv['reg_fee']} KRW" if parsed_inv['reg_fee'] else ""
                u["insurance_fee_desc"] = f"{parsed_inv['insurance']} KRW/năm" if parsed_inv['insurance'] else ""
                u["invoice_details"] = str(invoice) if pd.notna(invoice) else ""
                u["dorm_fee_desc"] = str(ktx) if pd.notna(ktx) else ""
                if parsed_dorm:
                    u["dorm_fee"] = parsed_dorm
                u["admission_conditions"] = str(conds) if pd.notna(conds) else ""
                u["featured_majors"] = str(majors) if pd.notna(majors) else ""
                u["regional_restrictions"] = str(notes) if pd.notna(notes) else ""
        else:
            new_s = create_new_school(name, row.get("Khu vực", "Gyeonggi"), majors, 3)
            new_s["language_tuition_desc"] = f"{parsed_inv['tuition']} KRW/năm" if parsed_inv['tuition'] else ""
            new_s["registration_fee_desc"] = f"{parsed_inv['reg_fee']} KRW" if parsed_inv['reg_fee'] else ""
            new_s["insurance_fee_desc"] = f"{parsed_inv['insurance']} KRW/năm" if parsed_inv['insurance'] else ""
            new_s["invoice_details"] = str(invoice) if pd.notna(invoice) else ""
            new_s["dorm_fee_desc"] = str(ktx) if pd.notna(ktx) else ""
            if parsed_dorm:
                new_s["dorm_fee"] = parsed_dorm
            new_s["admission_conditions"] = str(conds) if pd.notna(conds) else ""
            new_s["featured_majors"] = str(majors) if pd.notna(majors) else ""
            new_s["regional_restrictions"] = str(notes) if pd.notna(notes) else ""
            universities.append(new_s)

# Read TruongNoTOPIK.xlsx
path_notopik = "d:/EASS/TruongNoTOPIK.xlsx"
if os.path.exists(path_notopik):
    print("Parsing TruongNoTOPIK.xlsx...")
    df = pd.read_excel(path_notopik)
    for idx, row in df.iterrows():
        name = row["TRƯỜNG"]
        if pd.isna(name) or not isinstance(name, str) or name.strip() == "":
            continue
            
        matched_schools = find_schools(name)
        if matched_schools:
            for u in matched_schools:
                u["master_no_topik"] = True

# Read danhsachtruonghanche.xlsx (Restricted Visa Schools)
path_restricted = "d:/EASS/danhsachtruonghanche.xlsx"
if os.path.exists(path_restricted):
    print("Parsing danhsachtruonghanche.xlsx...")
    df = pd.read_excel(path_restricted)
    for idx, row in df.iterrows():
        name = row["Tên trường"]
        if pd.isna(name) or not isinstance(name, str) or name.strip() == "":
            continue
            
        matched_schools = find_schools(name)
        if matched_schools:
            for u in matched_schools:
                u["is_restricted_school"] = True

# Write back to src/data/universities.js
# Let's clean up any malformed keys like "name_vi: " or "visa_metropolitan: "
for u in universities:
    for k in list(u.keys()):
        if k.endswith(": "):
            clean_key = k[:-2]
            u[clean_key] = u[k]
            del u[k]

print(f"\nFinal universities count: {len(universities)}")

# Output updated universities array
output_path = "d:/EASS/src/data/universities.js"
js_out = f"export const universities = {json.dumps(universities, ensure_ascii=False, indent=2)};\n"

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_out)

# Write copy to kr-unituition-next/src/data/universities.js
output_path_next = "d:/EASS/kr-unituition-next/src/data/universities.js"
with open(output_path_next, "w", encoding="utf-8") as f:
    f.write(js_out)

print("Successfully written updated databases to both Vite and Next.js applications!")
