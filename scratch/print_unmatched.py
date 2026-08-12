import json

with open('scratch/analysis_results.json', 'r', encoding='utf-8') as f:
    results = json.load(f)

manual_review = results['manual_review']
print(f"Total manual review items: {len(manual_review)}")
print("First 20 items:")
for item in manual_review[:20]:
    print(f"- School: {item['name']} | Reason: {item['reason']} | Source: {item['source']}")
    print(f"  Detail: {item['detail']}")
