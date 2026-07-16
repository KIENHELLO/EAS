import json
import re

# Read src/data/universities.js and parse it as a JSON-like structure
with open("d:/EASS/src/data/universities.js", "r", encoding="utf-8") as f:
    content = f.read()

# Try to extract the first 3 school objects
# Clean up JS export syntax to parse as JSON
match = re.search(r'export const universities = (\[.*\]);', content, re.DOTALL)
if match:
    js_arr = match.group(1)
    # Convert js array/objects to valid JSON (double quotes for keys, etc.)
    # A simple way is to use python to evaluate it or use dirty json parsing,
    # but let's write a python script that will run in Node to output the structure!
    pass
