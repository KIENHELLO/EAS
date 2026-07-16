import re
import unicodedata

samples = [
    "5,200,000 KRW PHÍ NHẬP HỌC 70,000KRW  INVOICE BAO GỒM 6 THÁNG HỌC PHÍ + BẢO HIỂM",
    "5,200,000 - PHÍ NHẠP HỌC 60.000 KRW - INVOICE BỒM 1 NĂM HỌC PHÍ",
    "HỌC PHÍ 5,200,000KRW - BẢ HIỂM 150,000KRW  - INVOICE GỒM 1 NĂM HỌC PHÍ",
    "HỌC PHÍ 6,000,000-6,400,000KRW - HỌC PHÍ 150,000KRW BẢO HIỂM - INVOICE GỒM 1 NĂM HỌC PHÍ + BẢO HIỂM",
    "HỌC PHÍ 6,400,000-6,800,000KRW - BẢO HIỂM 150,000KRW",
    "HỌC PHÍ 4,400,000-4,800,000KRW - BẢO HIỂM 150,000KRW",
    "4,800,000 - PHÍ NHẬP HỌC 100.000 KRW - BẢO HIỂM 150.000 KRW"
]

def remove_accents(input_str):
    if not isinstance(input_str, str):
        return ""
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    only_ascii = nfkd_form.encode('ASCII', 'ignore').decode('utf-8')
    only_ascii = only_ascii.replace('đ', 'd').replace('Đ', 'd')
    return only_ascii

def parse_invoice(text):
    if not isinstance(text, str):
        return None
    text_clean = remove_accents(text.lower().replace('.', ','))
    
    # 1. Parse Tuition (Học phí)
    tuition = ""
    # Try matching explicit tuition text first
    t_match = re.search(r'(?:hoc\s+phi|hoc\s+phi\s+he\s+tieng|hp)\s*([\d,]+(?:\s*-\s*[\d,]+)?)\s*(?:krw|đ|usd)?', text_clean)
    if t_match:
        tuition = t_match.group(1).strip()
    else:
        # Check first number matching 3M-8M KRW
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
                
    # Remove tuition string from text_clean to avoid false matches
    if tuition:
        text_clean = text_clean.replace(tuition, '')
        
    # 2. Parse Insurance (Bảo hiểm)
    insurance = ""
    ins_match = re.search(r'(?:bao\s+hiem|ba\s+hiem|bh|y\s+te|insurance)\s*([\d,]+)', text_clean)
    if ins_match:
        insurance = ins_match.group(1).strip()
        text_clean = text_clean.replace(insurance, '')
    else:
        # Fallback to search for typical values: 100k, 150k, 200k, 250k, 300k
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
        # Fallback search for typical values: 50k, 60k, 70k, 80k, 100k
        reg_nums = re.findall(r'(50,000|60,000|70,000|80,000|100,000)', text_clean)
        if reg_nums:
            reg_fee = reg_nums[0]
            
    return {
        "tuition": tuition,
        "insurance": insurance,
        "reg_fee": reg_fee
    }

for s in samples:
    print(f"\nText: {s}")
    print(parse_invoice(s))
