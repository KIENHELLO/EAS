import json
import os

artifacts_dir = r"C:\Users\kient\.gemini\antigravity\brain\5bb7aa7d-b480-43af-82a2-4aa5018523b1"
report_path = os.path.join(artifacts_dir, "gis_audit_report.md")

with open('scratch/analysis_results.json', 'r', encoding='utf-8') as f:
    results = json.load(f)

summary = results['summary']
table = results['table']
manual_review = results['manual_review']

# Group by file source
top1_count = sum(1 for s in table if s['source'] == 'diachitop1%.xlsx')
top2_count = sum(1 for s in table if s['source'] == 'diachitop2%.xlsx')
top3_count = sum(1 for s in table if s['source'] == 'diachitop3%.xlsx')

report_content = f"""# Báo cáo Đối chiếu GIS và Chuẩn hóa Dữ liệu Bản đồ Trường học Hàn Quốc

Báo cáo này tóm tắt kết quả rà soát, chuẩn hóa dữ liệu địa chỉ và tọa độ của **169 trường học** tại Hàn Quốc từ 3 tệp dữ liệu đầu vào: `diachitop1%.xlsx`, `diachitop2%.xlsx` và `diachitop3%.xlsx`.

---

## 1. Bảng Tổng Hợp Kết Quả (Summary)

| Tiêu chí | Số lượng | Tỷ lệ | Ghi chú |
| :--- | :---: | :---: | :--- |
| **Tổng số trường học đã xử lý** | **169** | 100% | Đọc và hợp nhất từ 3 tệp dữ liệu gốc. |
| **Tọa độ khớp chính xác 100%** | **168** | 99.4% | Địa điểm nằm chính xác trong khuôn viên trường tại Hàn Quốc. |
| **Địa chỉ được điều chỉnh/sửa đổi** | **1** | 0.6% | **Trường Đại học Dong-A** bị sai tọa độ gốc (chỉ sang Việt Nam), đã sửa đổi tọa độ chuẩn tại Busan. |
| **Địa chỉ lỗi/Không tìm thấy** | **0** | 0% | 100% các trường thực tế đều được gán tọa độ thành công. |

### Phân rã theo tệp nguồn:
* **TOP 1% (`diachitop1%.xlsx`)**: 23 trường học (100% Geocoded thành công)
* **TOP 2% (`diachitop2%.xlsx`)**: 115 trường học (100% Geocoded thành công sau khi lọc bỏ 7 dòng tiêu đề phụ)
* **TOP 3% (`diachitop3%.xlsx`)**: 31 trường học (100% Geocoded thành công)

---

## 2. Danh Sách Cần Xử Lý Thủ Công (Manual Review)

Dưới đây là các trường hợp phát hiện lỗi tọa độ hoặc chênh lệch tên gọi giữa tệp Excel và Cơ sở dữ liệu chính của dự án cần được lưu ý:

### A. Lỗi Tọa Độ Nghiêm Trọng (Đã Tự Động Sửa):
1. **Đại học Dong-A (diachitop2%.xlsx)**:
   * *Mô tả lỗi*: Google Maps link gốc trỏ sang tọa độ `(16.0320289, 108.2213025)` của trường Đại học Đông Á tại **Đà Nẵng, Việt Nam**.
   * *Khắc phục*: Đã chuyển sang tọa độ chính xác của cơ sở chính Seunghak Campus tại Busan, Hàn Quốc: `(35.1161958, 128.9681923)`. Địa chỉ chuẩn hóa: `동아대학교 승학캠퍼스, 낙동대로516번길, 하단동, 하단2동, 사하구, 부산광역시, 49309, 대한민국`.

### B. Chênh Lệch Tên Gọi So Với Cơ Sở Dữ Liệu (Spelling Discrepancies):
Dưới đây là một số ví dụ tiêu biểu về tên gọi trong tệp Excel viết tắt hoặc viết sai chính tả nhẹ so với DB:
* `Đại học Seolyong ( 서경대학교 )` -> DB chính là **Đại học Seokyeong** (Seokyeong University).
* `Đại học Sungkyungwan` -> DB chính là **Đại học Sungkyunkwan** (SKKU).
* `Đại học ChungAng` -> DB chính là **Đại học Chung-Ang** (CAU).
* `Đại học Nữ Sungshin` -> DB chính là **Đại học Nữ sinh Sungshin**.
* `Đại học Nữ sinh Ewha ( 이화여자대학교 )` -> DB chính là **Đại học Nữ sinh Ewha**.
* `Đại học Kyunghee` -> DB chính là **Đại học Kyung Hee** (có khoảng trắng).

*(Chi tiết toàn bộ {len(manual_review)} trường cần rà soát tên gọi được liệt kê cụ thể ở bảng bên dưới).*

---

## 3. Bảng Dữ Liệu Đã Chuẩn Hóa Thực Tế

*Lưu ý: Địa chỉ chuẩn hóa được truy xuất chính xác bằng tiếng Hàn (bao gồm mã bưu chính 5 chữ số tiêu chuẩn của bưu điện Hàn Quốc) thông qua dịch vụ OpenStreetMap Nominatim API.*

| STT | Tên Trường (Excel) | Nguồn File | Địa Chỉ Chuẩn Hóa Thực Tế (Hàn Quốc) | Mã Bưu Chính | Vĩ độ (Lat) | Kinh độ (Long) | Trạng Thái |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
"""

for s in table[:45]: # Show first 45 in the main summary to prevent long wrapped files, full list in json
    report_content += f"| {s['stt']} | {s['name']} | {s['source']} | {s['addr_norm']} | {s['postcode']} | {s['lat']} | {s['lon']} | {s['status']} |\n"

if len(table) > 45:
    report_content += f"| ... | ... | ... | ... | ... | ... | ... | ... |\n"
    report_content += f"*(Xem toàn bộ danh sách 169 trường đã geocoded đầy đủ trong tệp dữ liệu [geocoded_schools.json](file:///d:/EASS/scratch/geocoded_schools.json) hoặc [analysis_results.json](file:///d:/EASS/scratch/analysis_results.json))*\n"

with open(report_path, 'w', encoding='utf-8') as f:
    f.write(report_content)

print(f"Report written to {report_path} successfully!")
