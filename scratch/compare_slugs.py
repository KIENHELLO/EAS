import os
import json

# Get slugs from the HTML files under .next
html_slugs = [f.replace('.html', '') for f in os.listdir('kr-unituition-next/.next/server/app/universities') if f.endswith('.html')]
print("Total HTML slugs:", len(html_slugs))

# Load current universities.js slugs
import subprocess
result = subprocess.run(['node', 'scratch/inspect_db.cjs'], capture_output=True, text=True, encoding='utf-8')
lines = result.stdout.strip().split('\n')
db_slugs = []
for line in lines:
    if 'ID:' in line:
        # line: "146. ID: chongshin | Name: ..."
        parts = line.split('|')
        slug = parts[0].split('ID:')[1].strip()
        db_slugs.append(slug)

print("Total DB slugs:", len(db_slugs))

# Find difference
diff = set(html_slugs) - set(db_slugs)
print("HTML slugs not in DB:", diff)

diff2 = set(db_slugs) - set(html_slugs)
print("DB slugs not in HTML:", diff2)
