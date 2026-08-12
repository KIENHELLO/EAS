with open('dist/index-hydrate.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_str = "var universities = ["
idx = content.find(start_str)
if idx != -1:
    # Find the matching closing bracket
    # We can walk the characters and count open/close brackets
    bracket_count = 1
    start_pos = idx + len(start_str)
    curr_pos = start_pos
    
    while bracket_count > 0 and curr_pos < len(content):
        char = content[curr_pos]
        if char == '[':
            bracket_count += 1
        elif char == ']':
            bracket_count -= 1
        curr_pos += 1
        
    array_content = start_str + content[start_pos:curr_pos]
    
    # Save as JSON by evaluating in Node
    eval_js = f"""
    {array_content}
    const fs = require('fs');
    fs.writeFileSync('scratch/restored_universities.json', JSON.stringify(universities, null, 2), 'utf8');
    console.log("Restored " + universities.length + " schools successfully!");
    """
    with open('scratch/eval_restore.cjs', 'w', encoding='utf-8') as f:
        f.write(eval_js)
        
    import subprocess
    res = subprocess.run(['node', 'scratch/eval_restore.cjs'], capture_output=True, text=True, encoding='utf-8')
    print("Node output:", res.stdout.strip())
    print("Node error:", res.stderr.strip())
else:
    print("Could not find 'var universities = [' in index-hydrate.js")
