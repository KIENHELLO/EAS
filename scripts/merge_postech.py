import json
import re

# Load universities.js
path = "d:/EASS/src/data/universities.js"
with open(path, "r", encoding="utf-8") as f:
    js_content = f.read()

match = re.search(r'export const universities = (\[.*\]);', js_content, re.DOTALL)
if not match:
    print("Error: Could not parse universities array.")
    exit(1)

universities = json.loads(match.group(1))
print("Original count:", len(universities))

postech = next((u for u in universities if u["id"] == "postech"), None)
uni_206 = next((u for u in universities if u["id"] == "uni_206"), None)

if postech and uni_206:
    print("Found both postech and uni_206. Merging...")
    # Merge fields
    fields_to_copy = [
        "language_tuition_desc", "registration_fee_desc", "insurance_fee_desc",
        "invoice_details", "dorm_fee_desc", "admission_conditions",
        "featured_majors", "regional_restrictions", "is_restricted_school"
    ]
    for field in fields_to_copy:
        if field in uni_206:
            postech[field] = uni_206[field]
            
    # Remove uni_206
    universities = [u for u in universities if u["id"] != "uni_206"]
    print("New count:", len(universities))
    
    # Save back
    js_out = f"export const universities = {json.dumps(universities, ensure_ascii=False, indent=2)};\n"
    with open("d:/EASS/src/data/universities.js", "w", encoding="utf-8") as out_f:
        out_f.write(js_out)
    with open("d:/EASS/kr-unituition-next/src/data/universities.js", "w", encoding="utf-8") as out_f:
        out_f.write(js_out)
    print("Successfully merged postech duplicate and updated both databases!")
else:
    print("Could not find both postech and uni_206.")
