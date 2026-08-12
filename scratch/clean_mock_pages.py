import json
import os
import subprocess

# Load active school IDs
result = subprocess.run(['node', 'scratch/dump_to_json.cjs'], capture_output=True, text=True, encoding='utf-8')
universities = json.loads(result.stdout.strip())
active_ids = {u['id'] for u in universities}

pages_dir = 'src/pages/university'
deleted_files = []

if os.path.exists(pages_dir):
    for f in os.listdir(pages_dir):
        if f.endswith('.jsx'):
            school_id = f[:-4]
            if school_id not in active_ids or 'mock' in school_id.lower() or 'test' in school_id.lower():
                file_path = os.path.join(pages_dir, f)
                os.remove(file_path)
                deleted_files.append(f)

print(f"Deleted {len(deleted_files)} redundant/mock school page files from src/pages/university.")
if deleted_files:
    print("Files deleted:", deleted_files[:10], "...and more" if len(deleted_files) > 10 else "")
