import os
import pandas as pd

files = {
    "TO2%.xlsx": "Sheet1",
    "TOP1%.xlsx": "Sheet1",
    "top3.xlsx": "Sheet1",
    "TruongNoTOPIK.xlsx": "Sheet1",
    "danhsachtruonghanche.xlsx": "Sheet1"
}

for name, sheet in files.items():
    path = os.path.join("d:/EASS", name)
    if os.path.exists(path):
        print(f"\n=== {name} ({sheet}) ===")
        df = pd.read_excel(path, sheet_name=sheet)
        print("Columns:", list(df.columns))
        print("Shape:", df.shape)
        # Find row index where header is (often row 0 or 1 contains TÊN TRƯỜNG or similar)
        print("First 5 rows raw:")
        print(df.iloc[:5])
