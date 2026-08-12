import os
import re
import json

found_arrays = []

for root, dirs, files in os.walk('kr-unituition-next/.next/server'):
    for f in files:
        if f.endswith('.js'):
            p = os.path.join(root, f)
            try:
                with open(p, 'r', encoding='utf-8') as file_obj:
                    content = file_obj.read()
                    if 'var universities = [' in content or 'const universities = [' in content:
                        print(f"Found 'universities = [' in: {p}")
                        # Let's extract the array
                        start_idx = content.find('universities = [')
                        if start_idx == -1:
                            start_idx = content.find('universities=[')
                        
                        # Find matching brackets
                        bracket_count = 1
                        pos = content.find('[', start_idx) + 1
                        while bracket_count > 0 and pos < len(content):
                            if content[pos] == '[':
                                bracket_count += 1
                            elif content[pos] == ']':
                                bracket_count -= 1
                            pos += 1
                        
                        array_str = content[start_idx:pos]
                        # check if it looks like the database (contains konkuk)
                        if 'konkuk' in array_str and len(array_str) > 100000:
                            print(f"  Valid database array found in {p}! Length: {len(array_str)}")
                            found_arrays.append((p, array_str))
            except Exception as e:
                pass

if found_arrays:
    # Use the first one
    p, array_str = found_arrays[0]
    eval_js = f"""
    const fs = require('fs');
    const {array_str};
    fs.writeFileSync('scratch/restored_next_universities.json', JSON.stringify(universities, null, 2), 'utf8');
    console.log("Extracted " + universities.length + " schools!");
    """
    with open('scratch/eval_restore_next.cjs', 'w', encoding='utf-8') as f:
        f.write(eval_js)
    
    import subprocess
    res = subprocess.run(['node', 'scratch/eval_restore_next.cjs'], capture_output=True, text=True, encoding='utf-8')
    print("Node output:", res.stdout.strip())
    print("Node error:", res.stderr.strip())
else:
    print("Could not find universities array in Next.js build .js files.")
