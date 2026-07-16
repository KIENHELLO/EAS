import os

search_terms = ["kyonggi", "gyeonggi", "kyunggi", "경기"]
for root, dirs, files in os.walk("d:/EASS"):
    # skip node_modules and .git
    if "node_modules" in root or ".git" in root or "dist" in root:
        continue
    for file in files:
        if file.endswith((".js", ".jsx", ".ts", ".tsx", ".csv", ".json")):
            path = os.path.join(root, file)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read().lower()
                for term in search_terms:
                    if term in content:
                        print(f"Term: '{term}' found in: {path}")
            except Exception as e:
                pass
