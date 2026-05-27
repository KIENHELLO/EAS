import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseSchools = [
  {
    id: "snu",
    name_en: "Seoul National University",
    name_ko: "서울대학교",
    name_vi: "Đại học Quốc gia Seoul",
    type: "public",
    region: "Seoul",
    ranking: 1,
    campus_address: "1 Gwanak-ro, Gwanak-gu, Seoul",
    website: "https://www.snu.ac.kr",
    tuition: {
      humanities_social: 2442000,
      natural_sciences: 2975000,
      engineering: 2998000,
      arts_sports: 3624000,
      medicine_pharmacy: 5038000
    },
    dorm_fee: 1200000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng Chính phủ Hàn Quốc (GKS)",
      "Học bổng GSNU (cho sinh viên quốc tế xuất sắc)",
      "Học bổng hỗ trợ sinh hoạt phí từ đối tác liên kết"
    ],
    description: "Trường đại học quốc gia danh giá nhất Hàn Quốc, đứng đầu trong bộ ba bầu trời 'SKY'. Trường có thế mạnh toàn diện về nghiên cứu, công nghệ và các ngành y dược khoa học cơ bản.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "kaist",
    name_en: "KAIST (Korea Advanced Institute of Science and Technology)",
    name_ko: "한국과학기술원",
    name_vi: "Viện Khoa học & Công nghệ Tiên tiến Hàn Quốc",
    type: "public",
    region: "Daejeon",
    ranking: 2,
    campus_address: "291 Daehak-ro, Yuseong-gu, Daejeon",
    website: "https://www.kaist.ac.kr",
    tuition: {
      humanities_social: 3400000,
      natural_sciences: 3400000,
      engineering: 3430000,
      arts_sports: 3400000,
      medicine_pharmacy: null
    },
    dorm_fee: 900000,
    living_cost_est: 650000,
    scholarships: [
      "Học bổng KAIST Toàn phần (miễn 100% học phí và hỗ trợ sinh hoạt phí hàng tháng)",
      "Học bổng Chính phủ Hàn Quốc (GKS)"
    ],
    description: "Viện nghiên cứu khoa học công nghệ hàng đầu châu Á. Hầu hết sinh viên quốc tế tại KAIST đều được miễn học phí 100% nếu duy trì kết quả học tập đạt chuẩn.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "yonsei",
    name_en: "Yonsei University",
    name_ko: "연세대학교",
    name_vi: "Đại học Yonsei",
    type: "private",
    region: "Seoul",
    ranking: 3,
    campus_address: "50 Yonsei-ro, Seodaemun-gu, Seoul",
    website: "https://www.yonsei.ac.kr",
    tuition: {
      humanities_social: 4350000,
      natural_sciences: 5220000,
      engineering: 5650000,
      arts_sports: 6200000,
      medicine_pharmacy: 7400000
    },
    dorm_fee: 1600000,
    living_cost_est: 900000,
    scholarships: [
      "Học bổng Underwood International College (UIC)",
      "Học bổng Global Leaders",
      "Học bổng khuyến khích học tập dựa trên kết quả kỳ trước (30% - 100%)"
    ],
    description: "Một trong ba trường đại học tư thục lâu đời và danh giá nhất Hàn Quốc ('SKY'). Nổi tiếng với khuôn viên tuyệt đẹp và chương trình đào tạo quốc tế hóa cao.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "korea",
    name_en: "Korea University",
    name_ko: "고려대학교",
    name_vi: "Đại học Korea",
    type: "private",
    region: "Seoul",
    ranking: 4,
    campus_address: "145 Anam-ro, Seongbuk-gu, Seoul",
    website: "https://www.korea.ac.kr",
    tuition: {
      humanities_social: 4210000,
      natural_sciences: 5080000,
      engineering: 5410000,
      arts_sports: 5800000,
      medicine_pharmacy: 6990000
    },
    dorm_fee: 1500000,
    living_cost_est: 850000,
    scholarships: [
      "Học bổng Toàn cầu (Global Korea Scholarship & KU Global Scholarship)",
      "Học bổng Học thuật Xuất sắc (miễn 50% - 100% học phí)",
      "Học bổng nhu cầu tài chính (Financial Aid)"
    ],
    description: "Mảnh ghép cuối cùng của bộ ba 'SKY'. Nổi tiếng với cộng đồng cựu sinh viên vô cùng lớn mạnh và các ngành kinh doanh, luật và kỹ thuật hàng đầu.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "skku",
    name_en: "Sungkyunkwan University",
    name_ko: "성균관대학교",
    name_vi: "Đại học Sungkyunkwan",
    type: "private",
    region: "Seoul",
    ranking: 5,
    campus_address: "25-2 Sungkyunkwan-ro, Jongno-gu, Seoul",
    website: "https://www.skku.edu",
    tuition: {
      humanities_social: 4120000,
      natural_sciences: 4890000,
      engineering: 5250000,
      arts_sports: 5450000,
      medicine_pharmacy: 6730000
    },
    dorm_fee: 1400000,
    living_cost_est: 850000,
    scholarships: [
      "Học bổng Samsung (Hỗ trợ đặc biệt cho khối ngành Công nghệ & Kỹ thuật)",
      "Học bổng nhập học cho sinh viên quốc tế (20% - 50% học phí)",
      "Học bổng kết quả học tập xuất sắc hàng kỳ"
    ],
    description: "Trường đại học có lịch sử lâu đời nhất Hàn Quốc (thành lập năm 1398 dưới triều đại Joseon). Hiện được đầu tư mạnh mẽ bởi tập đoàn Samsung, cực mạnh về công nghệ bán dẫn và kỹ thuật.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "hanyang",
    name_en: "Hanyang University",
    name_ko: "한양대학교",
    name_vi: "Đại học Hanyang",
    type: "private",
    region: "Seoul",
    ranking: 6,
    campus_address: "222 Wangsimni-ro, Seongdong-gu, Seoul",
    website: "https://www.hanyang.ac.kr",
    tuition: {
      humanities_social: 3950000,
      natural_sciences: 4720000,
      engineering: 5120000,
      arts_sports: 5350000,
      medicine_pharmacy: 6480000
    },
    dorm_fee: 1350000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng Quốc tế Hanyang (HISP - miễn 30%, 50%, 70% hoặc 100% học phí)",
      "Học bổng năng lực tiếng Hàn (TOPIK 5 đạt 50%, TOPIK 6 đạt 100% học phí kỳ đầu)",
      "Học bổng Hanyang Excellence"
    ],
    description: "Được mệnh danh là 'cái nôi kỹ sư' của Hàn Quốc, nơi đào tạo ra lượng CEO lớn nhất cho các tập đoàn công nghệ. Có chính sách học bổng học tập và TOPIK rất cởi mở cho sinh viên Việt Nam.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "khu",
    name_en: "Kyung Hee University",
    name_ko: "경희대학교",
    name_vi: "Đại học Kyung Hee",
    type: "private",
    region: "Seoul",
    ranking: 7,
    campus_address: "26 Kyungheedae-ro, Dongdaemun-gu, Seoul",
    website: "https://www.khu.ac.kr",
    tuition: {
      humanities_social: 3820000,
      natural_sciences: 4550000,
      engineering: 4950000,
      arts_sports: 5200000,
      medicine_pharmacy: 6350000
    },
    dorm_fee: 1300000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng nhập học cho sinh viên quốc tế (miễn 100% học phí kỳ đầu cho SV đạt điểm cao)",
      "Học bổng khuyến khích TOPIK",
      "Học bổng trao đổi học tập lý thuyết và nghiên cứu"
    ],
    description: "Trường đại học có kiến trúc kiểu Gothic lộng lẫy nhất Hàn Quốc. Đặc biệt xuất sắc trong ngành Y học cổ truyền, Du lịch & Khách sạn, Nghệ thuật biểu diễn.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "ewha",
    name_en: "Ewha Womans University",
    name_ko: "이화여자대학교",
    name_vi: "Đại học Nữ giới Ewha",
    type: "private",
    region: "Seoul",
    ranking: 8,
    campus_address: "52 Ewhayeodae-gil, Seodaemun-gu, Seoul",
    website: "https://www.ewha.ac.kr",
    tuition: {
      humanities_social: 4100000,
      natural_sciences: 4850000,
      engineering: 5190000,
      arts_sports: 5380000,
      medicine_pharmacy: 6620000
    },
    dorm_fee: 1450000,
    living_cost_est: 850000,
    scholarships: [
      "Học bổng Ewha Global Partnership Program (EGPP - toàn phần cho nữ sinh nước đang phát triển)",
      "Học bổng Merit Scholarship cho sinh viên xuất sắc",
      "Học bổng TOPIK"
    ],
    description: "Đại học nữ lớn nhất thế giới, cái nôi của rất nhiều nữ chính trị gia và phu nhân tổng thống Hàn Quốc. Trường có học phí tương đối cao nhưng nhiều quỹ học bổng riêng.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "sogang",
    name_en: "Sogang University",
    name_ko: "서강대학교",
    name_vi: "Đại học Sogang",
    type: "private",
    region: "Seoul",
    ranking: 9,
    campus_address: "35 Baekbeom-ro, Mapo-gu, Seoul",
    website: "http://www.sogang.ac.kr",
    tuition: {
      humanities_social: 3850000,
      natural_sciences: 4620000,
      engineering: 4980000,
      arts_sports: 4700000,
      medicine_pharmacy: null
    },
    dorm_fee: 1500000,
    living_cost_est: 850000,
    scholarships: [
      "Học bổng Sogang Global Fellowship",
      "Học bổng học thuật dựa trên GPA kỳ trước (25% - 100% học phí)"
    ],
    description: "Trường đại học công giáo uy tín tại Seoul với tiêu chuẩn học tập vô cùng khắt khe bậc nhất Hàn Quốc. Thế mạnh vượt trội về Kinh tế học, Truyền thông và Nhân văn.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "cau",
    name_en: "Chung-Ang University",
    name_ko: "중앙대학교",
    name_vi: "Đại học Trung ương (Chung-Ang)",
    type: "private",
    region: "Seoul",
    ranking: 10,
    campus_address: "84 Heukseok-ro, Dongjak-gu, Seoul",
    website: "https://neweng.cau.ac.kr",
    tuition: {
      humanities_social: 3790000,
      natural_sciences: 4500000,
      engineering: 4890000,
      arts_sports: 5150000,
      medicine_pharmacy: 6300000
    },
    dorm_fee: 1300000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng CAU Global Scholarship (giảm 30% - 100% học phí tùy kết quả TOPIK & hồ sơ)",
      "Học bổng khuyến học kỳ tiếp theo cho sinh viên giữ điểm tích lũy xuất sắc"
    ],
    description: "Số một Hàn Quốc về truyền thông, nghệ thuật biểu diễn, nhiếp ảnh và sân khấu điện ảnh. Trường thu hút rất đông sinh viên Việt Nam và các nghệ sĩ nổi tiếng K-biz.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "pusan",
    name_en: "Pusan National University",
    name_ko: "부산대학교",
    name_vi: "Đại học Quốc gia Pusan",
    type: "public",
    region: "Busan",
    ranking: 11,
    campus_address: "2 Busandaehak-ro 63beon-gil, Geumjeong-gu, Busan",
    website: "https://www.pusan.ac.kr",
    tuition: {
      humanities_social: 1810000,
      natural_sciences: 2280000,
      engineering: 2450000,
      arts_sports: 2600000,
      medicine_pharmacy: 3450000
    },
    dorm_fee: 1100000,
    living_cost_est: 600000,
    scholarships: [
      "Học bổng hỗ trợ sinh viên quốc tế (PNU International Scholarship)",
      "Học bổng TOPIK xuất sắc",
      "Học bổng miễn giảm học phí cho SV gia đình khó khăn"
    ],
    description: "Trường đại học quốc gia lớn thứ 2 Hàn Quốc, tọa lạc tại thành phố cảng Busan. Chi phí học tập cực kỳ rẻ so với các trường tư thục tại Seoul, trong khi chất lượng giảng dạy thuộc hàng top đầu đất nước.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "knu",
    name_en: "Kyungpook National University",
    name_ko: "경북대학교",
    name_vi: "Đại học Quốc gia Kyungpook",
    type: "public",
    region: "Daegu",
    ranking: 12,
    campus_address: "80 Daehak-ro, Buk-gu, Daegu",
    website: "https://en.knu.ac.kr",
    tuition: {
      humanities_social: 1780000,
      natural_sciences: 2180000,
      engineering: 2380000,
      arts_sports: 2500000,
      medicine_pharmacy: 3300000
    },
    dorm_fee: 950000,
    living_cost_est: 550000,
    scholarships: [
      "Học bổng KNU KPG (Kyungpook Global Scholarship)",
      "Học bổng TOPIK đạt cấp 4 trở lên miễn giảm học phí kỳ đầu"
    ],
    description: "Tọa lạc tại thành phố Daegu, là đại diện xuất sắc của các trường đại học quốc gia miền Trung Nam. Rất nhiều sinh viên Việt Nam chọn trường này vì học phí siêu tiết kiệm và sinh hoạt phí dễ chịu.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "hufs",
    name_en: "Hankuk University of Foreign Studies",
    name_ko: "한국외국어대학교",
    name_vi: "Đại học Ngoại ngữ Hankuk (HUFS)",
    type: "private",
    region: "Seoul",
    ranking: 13,
    campus_address: "107 Imun-ro, Dongdaemun-gu, Seoul",
    website: "http://www.hufs.ac.kr",
    tuition: {
      humanities_social: 3620000,
      natural_sciences: 4250000,
      engineering: 4680000,
      arts_sports: 4300000,
      medicine_pharmacy: null
    },
    dorm_fee: 1250000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng HUFS International (giảm từ 30% đến 100% học phí)",
      "Học bổng TOPIK điểm cao kỳ đầu"
    ],
    description: "Trường đại học nghiên cứu ngôn ngữ, quan hệ quốc tế và khoa học xã hội hàng đầu Hàn Quốc. Đào tạo hơn 45 ngôn ngữ trên thế giới và nổi tiếng với khoa tiếng Việt lâu đời.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "dongguk",
    name_en: "Dongguk University",
    name_ko: "동국대학교",
    name_vi: "Đại học Dongguk",
    type: "private",
    region: "Seoul",
    ranking: 14,
    campus_address: "30 Pildong-ro 1-gil, Jung-gu, Seoul",
    website: "https://www.dongguk.edu",
    tuition: {
      humanities_social: 3820000,
      natural_sciences: 4480000,
      engineering: 4900000,
      arts_sports: 5100000,
      medicine_pharmacy: 6100000
    },
    dorm_fee: 1380000,
    living_cost_est: 820000,
    scholarships: [
      "Học bổng Phật giáo (dành cho đối tượng đặc biệt)",
      "Học bổng kết quả thi TOPIK và GPA đầu vào (30% - 60% học phí)"
    ],
    description: "Đại học Phật giáo uy tín hàng đầu nằm ngay trung tâm thủ đô Seoul. Có thế mạnh vượt trội về Điện ảnh, Khoa học Máy tính và Quản trị Kinh doanh.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "konkuk",
    name_en: "Konkuk University",
    name_ko: "건국대학교",
    name_vi: "Đại học Konkuk",
    type: "private",
    region: "Seoul",
    ranking: 15,
    campus_address: "120 Neungdong-ro, Gwangjin-gu, Seoul",
    website: "http://www.konkuk.ac.kr",
    tuition: {
      humanities_social: 3900000,
      natural_sciences: 4600000,
      engineering: 5050000,
      arts_sports: 5120000,
      medicine_pharmacy: 6280000
    },
    dorm_fee: 1420000,
    living_cost_est: 830000,
    scholarships: [
      "Học bổng TOPIK đầu vào (TOPIK 3 đạt 30%, TOPIK 6 đạt 100% học phí)",
      "Học bổng trao đổi văn hóa quốc tế Konkuk"
    ],
    description: "Nổi tiếng với khuôn viên rộng lớn và hồ nước tuyệt đẹp ngay trung tâm Seoul. Trường có thế mạnh về nông lâm nghiệp, công nghệ sinh học và các ngành thời trang, nghệ thuật.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "sejong",
    name_en: "Sejong University",
    name_ko: "세종대학교",
    name_vi: "Đại học Sejong",
    type: "private",
    region: "Seoul",
    ranking: 16,
    campus_address: "209 Neungdong-ro, Gwangjin-gu, Seoul",
    website: "https://www.sejong.ac.kr",
    tuition: {
      humanities_social: 3720000,
      natural_sciences: 4320000,
      engineering: 4790000,
      arts_sports: 4950000,
      medicine_pharmacy: null
    },
    dorm_fee: 1280000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng Sejong International Scholarship (30% - 100% học phí cho SV giỏi học thuật)",
      "Học bổng ưu tiên tiếng Anh (IELTS/TOEFL) và chứng chỉ TOPIK"
    ],
    description: "Trường đại học tư thục nổi bật tại Seoul. Đứng số một Hàn Quốc về Quản trị Du lịch & Khách sạn, đồng thời phát triển cực mạnh về Hoạt hình (Animation) và Kỹ thuật phần mềm.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "kookmin",
    name_en: "Kookmin University",
    name_ko: "국민대학교",
    name_vi: "Đại học Kookmin",
    type: "private",
    region: "Seoul",
    ranking: 17,
    campus_address: "77 Jeongneung-ro, Seongbuk-gu, Seoul",
    website: "https://www.kookmin.ac.kr",
    tuition: {
      humanities_social: 3680000,
      natural_sciences: 4290000,
      engineering: 4750000,
      arts_sports: 4980000,
      medicine_pharmacy: null
    },
    dorm_fee: 1150000,
    living_cost_est: 780000,
    scholarships: [
      "Học bổng Sungkok (do người sáng lập tài trợ)",
      "Học bổng TOPIK đạt điểm đầu vào (lên tới 50% học phí)"
    ],
    description: "Trường tư thục đầu tiên được thành lập sau khi Hàn Quốc giải phóng. Thiết kế Công nghiệp và Kỹ thuật Cơ khí (ô tô) của Kookmin nằm ở top đầu của cả nước.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "ajou",
    name_en: "Ajou University",
    name_ko: "아주대학교",
    name_vi: "Đại học Ajou",
    type: "private",
    region: "Gyeonggi",
    ranking: 18,
    campus_address: "206 World cup-ro, Yeongtong-gu, Suwon, Gyeonggi-do",
    website: "https://www.ajou.ac.kr",
    tuition: {
      humanities_social: 3750000,
      natural_sciences: 4420000,
      engineering: 4850000,
      arts_sports: 4600000,
      medicine_pharmacy: 6380000
    },
    dorm_fee: 1220000,
    living_cost_est: 700000,
    scholarships: [
      "Học bổng Ajou Global (miễn 100% học phí học kỳ đầu cho hồ sơ ưu tú)",
      "Học bổng TOPIK và ưu tú ngoại ngữ"
    ],
    description: "Tọa lạc tại thành phố Suwon vệ tinh đáng sống, ngay sát văn phòng lớn của Samsung. Cực mạnh về Kỹ thuật, Công nghệ Thông tin và Y học.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "inha",
    name_en: "Inha University",
    name_ko: "인하대학교",
    name_vi: "Đại học Inha",
    type: "private",
    region: "Incheon",
    ranking: 19,
    campus_address: "100 Inha-ro, Michuhol-gu, Incheon",
    website: "https://www.inha.ac.kr",
    tuition: {
      humanities_social: 3650000,
      natural_sciences: 4350000,
      engineering: 4780000,
      arts_sports: 4890000,
      medicine_pharmacy: 6150000
    },
    dorm_fee: 1200000,
    living_cost_est: 720000,
    scholarships: [
      "Học bổng toàn cầu Inha (Global Scholarship - hỗ trợ 50% - 100% học phí)",
      "Học bổng nghiên cứu xuất sắc của khoa"
    ],
    description: "Trường đại học do hãng hàng không Korean Air thành lập tại thành phố cảng Incheon. Dẫn đầu về các ngành Logistics, Kỹ thuật Hàng không Vũ trụ và Kỹ thuật Hóa học.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "postech",
    name_en: "POSTECH (Pohang University of Science and Technology)",
    name_ko: "포항공과대학교",
    name_vi: "Đại học Khoa học & Công nghệ Pohang (POSTECH)",
    type: "private",
    region: "Gyeongbuk",
    ranking: 20,
    campus_address: "77 Cheongam-ro, Nam-gu, Pohang, Gyeongsangbuk-do",
    website: "https://www.postech.ac.kr",
    tuition: {
      humanities_social: 3200000,
      natural_sciences: 3200000,
      engineering: 3200000,
      arts_sports: null,
      medicine_pharmacy: null
    },
    dorm_fee: 850000,
    living_cost_est: 600000,
    scholarships: [
      "Học bổng Tổng thống và Quỹ thép POSCO hỗ trợ miễn 100% học phí",
      "Trợ cấp sinh hoạt phí hàng tháng cho sinh viên nghiên cứu khoa học"
    ],
    description: "Đại học nghiên cứu kỹ thuật chất lượng hàng đầu thế giới được tập đoàn POSCO sáng lập. Rất kén sinh viên đầu vào nhưng chế độ tài trợ học tập và nghiên cứu cực kỳ tốt.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "unist",
    name_en: "UNIST (Ulsan National Institute of Science and Technology)",
    name_ko: "울산과학기술원",
    name_vi: "Viện Khoa học & Công nghệ Quốc gia Ulsan (UNIST)",
    type: "public",
    region: "Ulsan",
    ranking: 21,
    campus_address: "50 UNIST-gil, Eonyang-eup, Ulju-gun, Ulsan",
    website: "https://www.unist.ac.kr",
    tuition: {
      humanities_social: 3150000,
      natural_sciences: 3150000,
      engineering: 3180000,
      arts_sports: null,
      medicine_pharmacy: null
    },
    dorm_fee: 800000,
    living_cost_est: 600000,
    scholarships: [
      "Học bổng UNIST Scholarship (hầu hết sinh viên quốc tế giữ GPA tốt được miễn phí 100%)",
      "Hỗ trợ sinh hoạt phí từ các quỹ thí nghiệm nghiên cứu"
    ],
    description: "Trường đại học nghiên cứu quốc tế giảng dạy 100% bằng tiếng Anh tại Ulsan. Thế mạnh về Năng lượng sạch, Vật liệu mới và Kỹ thuật Nano.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "gist",
    name_en: "GIST (Gwangju Institute of Science and Technology)",
    name_ko: "광주과학기술원",
    name_vi: "Viện Khoa học & Công nghệ Gwangju (GIST)",
    type: "public",
    region: "Gwangju",
    ranking: 22,
    campus_address: "123 Cheomdan-gwagiro, Buk-gu, Gwangju",
    website: "https://www.gist.ac.kr",
    tuition: {
      humanities_social: 3250000,
      natural_sciences: 3250000,
      engineering: 3280000,
      arts_sports: null,
      medicine_pharmacy: null
    },
    dorm_fee: 750000,
    living_cost_est: 580000,
    scholarships: [
      "Học bổng GIST Toàn phần (miễn 100% học phí, đài thọ vé máy bay và hỗ trợ sinh hoạt phí)",
      "Học bổng Chính phủ GKS"
    ],
    description: "Được tài trợ mạnh mẽ bởi chính phủ Hàn Quốc nhằm nghiên cứu và phát triển khoa học ứng dụng miền Tây Nam. Môi trường nghiên cứu hiện đại, tỷ lệ giảng viên/sinh viên lý tưởng.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "chonnam",
    name_en: "Chonnam National University",
    name_ko: "전남대학교",
    name_vi: "Đại học Quốc gia Chonnam",
    type: "public",
    region: "Gwangju",
    ranking: 23,
    campus_address: "77 Yongbong-ro, Buk-gu, Gwangju",
    website: "https://www.jnu.ac.kr",
    tuition: {
      humanities_social: 1750000,
      natural_sciences: 2150000,
      engineering: 2320000,
      arts_sports: 2450000,
      medicine_pharmacy: 3250000
    },
    dorm_fee: 900000,
    living_cost_est: 550000,
    scholarships: [
      "Học bổng CNU Global Scholarship (giảm 50% - 100% kỳ đầu dựa trên hồ sơ)",
      "Học bổng khuyến học dựa trên xếp hạng học thuật"
    ],
    description: "Tọa lạc tại thành phố ánh sáng Gwangju, đây là một trong những trường đại học quốc gia lâu đời và phát triển bền vững nhất tại khu vực Tây Nam bộ.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "jbnu",
    name_en: "Jeonbuk National University",
    name_ko: "전북대학교",
    name_vi: "Đại học Quốc gia Jeonbuk",
    type: "public",
    region: "Jeonbuk",
    ranking: 25,
    campus_address: "567 Baekje-daero, Deokjin-gu, Jeonju, Jeollabuk-do",
    website: "https://www.jbnu.ac.kr",
    tuition: {
      humanities_social: 1720000,
      natural_sciences: 2120000,
      engineering: 2280000,
      arts_sports: 2380000,
      medicine_pharmacy: 3200000
    },
    dorm_fee: 880000,
    living_cost_est: 530000,
    scholarships: [
      "Học bổng hỗ trợ sinh viên quốc tế (lên tới 100% học phí)",
      "Học bổng TOPIK khuyến khích"
    ],
    description: "Tọa lạc tại thành phố cổ Jeonju, nổi tiếng với nét đẹp truyền thống và văn hóa ẩm thực Hàn Quốc. Trường có khuôn viên rộng nhất nhì nước và học phí rất thấp.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "kangwon",
    name_en: "Kangwon National University",
    name_ko: "강원대학교",
    name_vi: "Đại học Quốc gia Kangwon",
    type: "public",
    region: "Gangwon",
    ranking: 26,
    campus_address: "1 Kangwondaehak-gil, Chuncheon-si, Gangwon-do",
    website: "https://www.kangwon.ac.kr",
    tuition: {
      humanities_social: 1700000,
      natural_sciences: 2080000,
      engineering: 2220000,
      arts_sports: 2350000,
      medicine_pharmacy: 3150000
    },
    dorm_fee: 820000,
    living_cost_est: 520000,
    scholarships: [
      "Học bổng KNU Global (đầu vào và GPA hàng kỳ)",
      "Học bổng miễn giảm tiền ở ký túc xá"
    ],
    description: "Trường đại học quốc gia đại diện cho tỉnh Gangwon, cách thủ đô Seoul 1 tiếng đi tàu điện ngầm. Chi phí sinh hoạt tại thành phố Chuncheon cực kỳ rẻ và trong lành.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "jeju",
    name_en: "Jeju National University",
    name_ko: "제주대학교",
    name_vi: "Đại học Quốc gia Jeju",
    type: "public",
    region: "Jeju",
    ranking: 27,
    campus_address: "102 Jejudaehak-ro, Jeju-si, Jeju-do",
    website: "https://www.jejunu.ac.kr",
    tuition: {
      humanities_social: 1680000,
      natural_sciences: 2050000,
      engineering: 2180000,
      arts_sports: 2290000,
      medicine_pharmacy: 3100000
    },
    dorm_fee: 780000,
    living_cost_est: 550000,
    scholarships: [
      "Học bổng giao lưu văn hóa quốc tế Jeju (JNU)",
      "Học bổng kết quả kiểm tra năng lực tiếng Hàn TOPIK"
    ],
    description: "Nằm trên hòn đảo du lịch Jeju nổi tiếng thế giới. Có những ngành học độc đáo như Khoa học biển, Du lịch nghỉ dưỡng, Chăn nuôi ngựa và Y dược nhiệt đới.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "uos",
    name_en: "University of Seoul",
    name_ko: "서울시립대학교",
    name_vi: "Đại học Seoul (UOS)",
    type: "public",
    region: "Seoul",
    ranking: 28,
    campus_address: "163 Seoulsiripdae-ro, Dongdaemun-gu, Seoul",
    website: "https://www.uos.ac.kr",
    tuition: {
      humanities_social: 1022000,
      natural_sciences: 1225000,
      engineering: 1350000,
      arts_sports: 1610000,
      medicine_pharmacy: null
    },
    dorm_fee: 1100000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng hỗ trợ sinh viên thủ đô Seoul",
      "Học bổng miễn giảm học phí toàn phần cho SV quốc tế đạt GPA xuất sắc"
    ],
    description: "Được quản lý và tài trợ trực tiếp bởi chính quyền Thành phố Seoul. Học phí của UOS thuộc hàng siêu rẻ (chỉ bằng 1/4 trường tư thục) nhưng yêu cầu đầu vào rất khắt khe.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "soongsil",
    name_en: "Soongsil University",
    name_ko: "숭실대학교",
    name_vi: "Đại học Soongsil",
    type: "private",
    region: "Seoul",
    ranking: 29,
    campus_address: "369 Sangdo-ro, Dongjak-gu, Seoul",
    website: "https://www.ssu.ac.kr",
    tuition: {
      humanities_social: 3690000,
      natural_sciences: 4320000,
      engineering: 4790000,
      arts_sports: 4650000,
      medicine_pharmacy: null
    },
    dorm_fee: 1290000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng Soongsil Global (hỗ trợ 30% - 100% học phí)",
      "Học bổng TOPIK đầu vào"
    ],
    description: "Trường đại học tư thục hiện đại tại Seoul. Soongsil nổi danh là trường đại học đầu tiên thành lập khoa Khoa học Máy tính tại Hàn Quốc, là điểm sáng đào tạo CNTT.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  },
  {
    id: "yeungnam",
    name_en: "Yeungnam University",
    name_ko: "영남대학교",
    name_vi: "Đại học Yeungnam",
    type: "private",
    region: "Gyeongbuk",
    ranking: 30,
    campus_address: "280 Daehak-ro, Gyeongsan-si, Gyeongsangbuk-do",
    website: "https://www.yu.ac.kr",
    tuition: {
      humanities_social: 3200000,
      natural_sciences: 3950000,
      engineering: 4350000,
      arts_sports: 4480000,
      medicine_pharmacy: 5850000
    },
    dorm_fee: 850000,
    living_cost_est: 530000,
    scholarships: [
      "Học bổng Yeungnam Global (hỗ trợ giảm học phí dựa vào kết quả học tập)",
      "Học bổng TOPIK khuyến khích"
    ],
    description: "Đại học tư thục lớn nhất khu vực Daegu/Gyeongbuk. Có khuôn viên xanh cực kỳ rộng lớn và có rất nhiều chương trình đào tạo kỹ thuật, quản lý chất lượng liên kết doanh nghiệp.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: ""
  }
];

const customSchools = [
  {
    id: "nazarene",
    name_en: "Korea Nazarene University",
    name_ko: "나사렛대학교",
    name_vi: "Đại học Nazarene (Chungnam)",
    type: "private",
    region: "Chungnam",
    ranking: 45,
    campus_address: "48 Wolbong-ro, Seobuk-gu, Cheonan, Chungcheongnam-do",
    website: "http://www.kornu.ac.kr",
    tuition: {
      humanities_social: 3500000,
      natural_sciences: 4100000,
      engineering: 4400000,
      arts_sports: 4500000,
      medicine_pharmacy: null
    },
    dorm_fee: 1050000,
    living_cost_est: 580000,
    scholarships: [
      "Học bổng sinh viên quốc tế (giảm 30% - 50% học phí)",
      "Học bổng hỗ trợ sinh hoạt phí"
    ],
    description: "Đại học tư thục nổi bật tại Cheonan, Chungnam. Trường có chính sách tuyển sinh cởi mở và nằm trong nhóm trường Top 2% nhận học sinh hệ Giáo dục thường xuyên (GDTX).",
    accept_gdtx: "top2",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường thuộc nhóm Top 2% nhận học sinh GDTX"
  },
  {
    id: "kyungil",
    name_en: "Kyungil University",
    name_ko: "경일대학교",
    name_vi: "Đại học Kyungil (Daegu)",
    type: "private",
    region: "Daegu",
    ranking: 48,
    campus_address: "50 Gyeongil-ro, Hayang-eup, Gyeongsan, Gyeongsangbuk-do",
    website: "https://www.kiu.ac.kr",
    tuition: {
      humanities_social: 3400000,
      natural_sciences: 4000000,
      engineering: 4300000,
      arts_sports: 4400000,
      medicine_pharmacy: 5500000
    },
    dorm_fee: 900000,
    living_cost_est: 530000,
    scholarships: [
      "Học bổng TOPIK đầu vào (giảm 30% - 100% học phí)",
      "Học bổng khuyến học GPA"
    ],
    description: "Nằm tại khu vực Daegu/Gyeongsan, nổi bật với hệ thống cơ sở vật chất hiện đại. Đây là trường Top 2% nhận học sinh GDTX của Việt Nam.",
    accept_gdtx: "top2",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường thuộc nhóm Top 2% nhận học sinh GDTX tại Daegu"
  },
  {
    id: "dongseo",
    name_en: "Dongseo University",
    name_ko: "동서대학교",
    name_vi: "Đại học Dongseo (Busan)",
    type: "private",
    region: "Busan",
    ranking: 38,
    campus_address: "47 Jurye-ro, Sasang-gu, Busan",
    website: "https://www.dongseo.ac.kr",
    tuition: {
      humanities_social: 3600000,
      natural_sciences: 4200000,
      engineering: 4500000,
      arts_sports: 4700000,
      medicine_pharmacy: null
    },
    dorm_fee: 1100000,
    living_cost_est: 600000,
    scholarships: [
      "Học bổng Dongseo Global (30% - 50% học phí)",
      "Học bổng TOPIK xuất sắc"
    ],
    description: "Đại học tư thục nổi tiếng tại Busan với thế mạnh vượt trội về Truyền thông đa phương tiện, Hoạt hình và CNTT. Nằm trong nhóm trường Top 2% nhận học sinh GDTX.",
    accept_gdtx: "top2",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường thuộc nhóm Top 2% nhận học sinh GDTX tại Busan"
  },
  {
    id: "paichai",
    name_en: "Paichai University",
    name_ko: "배재대학교",
    name_vi: "Đại học Paichai (Daejeon)",
    type: "private",
    region: "Daejeon",
    ranking: 52,
    campus_address: "155-40 Baejae-ro, Seo-gu, Daejeon",
    website: "https://www.pcu.ac.kr",
    tuition: {
      humanities_social: 3300000,
      natural_sciences: 3900000,
      engineering: 4200000,
      arts_sports: 4300000,
      medicine_pharmacy: null
    },
    dorm_fee: 980000,
    living_cost_est: 600000,
    scholarships: [
      "Học bổng Paichai International (giảm từ 30% - 70% học phí)",
      "Học bổng tiếng Hàn TOPIK"
    ],
    description: "Một trong những trường đại học hiện đại đầu tiên của Hàn Quốc tại Daejeon. Trường thuộc nhóm Top 2% nhận học sinh GDTX, có chi phí học tập vừa phải.",
    accept_gdtx: "top2",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường thuộc nhóm Top 2% nhận học sinh GDTX tại Daejeon"
  },
  {
    id: "seoultech",
    name_en: "Seoul National University of Science and Technology",
    name_ko: "서울과학기술대학교",
    name_vi: "Đại học Khoa học & Công nghệ Quốc gia Seoul",
    type: "public",
    region: "Seoul",
    ranking: 22,
    campus_address: "232 Gongneung-ro, Nowon-gu, Seoul",
    website: "https://www.seoultech.ac.kr",
    tuition: {
      humanities_social: 2200000,
      natural_sciences: 2500000,
      engineering: 2750000,
      arts_sports: 2900000,
      medicine_pharmacy: null
    },
    dorm_fee: 1150000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng SeoulTech President (toàn phần)",
      "Học bổng GPA xuất sắc"
    ],
    description: "Trường đại học công lập uy tín tại Seoul chuyên về khối ngành Kỹ thuật và Nghệ thuật ứng dụng. Đặc biệt, đây là trường công lập hiếm hoi trong nhóm Top 2% chấp nhận học sinh GDTX.",
    accept_gdtx: "top2",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường công lập nhóm Top 2% nhận học sinh GDTX tại Seoul"
  },
  {
    id: "catholic",
    name_en: "Catholic University of Korea",
    name_ko: "가톨릭대학교",
    name_vi: "Đại học Công giáo Hàn Quốc",
    type: "private",
    region: "Gyeonggi",
    ranking: 31,
    campus_address: "43 Jibong-ro, Wonmi-gu, Bucheon, Gyeonggi-do",
    website: "https://www.catholic.ac.kr",
    tuition: {
      humanities_social: 3800000,
      natural_sciences: 4400000,
      engineering: 4700000,
      arts_sports: 4900000,
      medicine_pharmacy: 6200000
    },
    dorm_fee: 1300000,
    living_cost_est: 700000,
    scholarships: [
      "Học bổng Catholic Global",
      "Học bổng thành tích học tập tốt hàng kỳ"
    ],
    description: "Trường đại học tư thục danh tiếng giáp ranh Seoul. Có thế mạnh vượt trội về Y khoa và Công nghệ sinh học. Thuộc nhóm trường Top 2% nhận học sinh GDTX.",
    accept_gdtx: "top2",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường thuộc nhóm Top 2% nhận học sinh GDTX"
  },
  {
    id: "chungnam",
    name_en: "Chungnam National University",
    name_ko: "충남대학교",
    name_vi: "Đại học Quốc gia Chungnam",
    type: "public",
    region: "Daejeon",
    ranking: 24,
    campus_address: "99 Daehak-ro, Yuseong-gu, Daejeon",
    website: "https://plus.cnu.ac.kr",
    tuition: {
      humanities_social: 1770000,
      natural_sciences: 2170000,
      engineering: 2350000,
      arts_sports: 2480000,
      medicine_pharmacy: 3280000
    },
    dorm_fee: 920000,
    living_cost_est: 600000,
    scholarships: [
      "Học bổng CNU Merit Scholarship",
      "Học bổng hỗ trợ phí ký túc xá cho sinh viên quốc tế"
    ],
    description: "Một trường quốc gia tiêu biểu nằm tại thành phố Daejeon - 'thung lũng Silicon' của Hàn Quốc. Có thế mạnh vượt trội về Công nghệ sinh học và Khoa học nông nghiệp.",
    accept_gdtx: "top2",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường trong nhóm Top 2% nhận học sinh GDTX"
  },
  {
    id: "konyang",
    name_en: "Konyang University",
    name_ko: "건양대학교",
    name_vi: "Đại học Konyang (Chungnam)",
    type: "private",
    region: "Chungnam",
    ranking: 55,
    campus_address: "121 Daehak-ro, Nonsan, Chungcheongnam-do",
    website: "https://www.konyang.ac.kr",
    tuition: {
      humanities_social: 3400000,
      natural_sciences: 4000000,
      engineering: 4250000,
      arts_sports: 4200000,
      medicine_pharmacy: 6000000
    },
    dorm_fee: 900000,
    living_cost_est: 550000,
    scholarships: [
      "Học bổng Konyang Global",
      "Học bổng khuyến khích ngoại ngữ TOPIK"
    ],
    description: "Nổi tiếng with thế mạnh đào tạo Y tế, Điều dưỡng và các khối ngành chăm sóc sức khỏe. Thuộc nhóm trường Top 2% nhận học sinh GDTX.",
    accept_gdtx: "top2",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường thuộc nhóm Top 2% nhận học sinh GDTX"
  },
  {
    id: "keimyung",
    name_en: "Keimyung University",
    name_ko: "계명대학교",
    name_vi: "Đại học Keimyung (Daegu)",
    type: "private",
    region: "Daegu",
    ranking: 34,
    campus_address: "1095 Dalgubeol-daero, Dalseo-gu, Daegu",
    website: "https://www.kmu.ac.kr",
    tuition: {
      humanities_social: 3600000,
      natural_sciences: 4200000,
      engineering: 4550000,
      arts_sports: 4800000,
      medicine_pharmacy: 6100000
    },
    dorm_fee: 980000,
    living_cost_est: 550000,
    scholarships: [
      "Học bổng ngoại ngữ TOPIK đầu vào",
      "Học bổng hữu nghị Keimyung"
    ],
    description: "Trường đại học tư thục nổi tiếng tại Daegu với kiến trúc gạch đỏ phương Tây vô cùng lộng lẫy (từng là bối cảnh phim Boys Over Flowers). Thuộc nhóm trường Top 3% nhận học sinh GDTX.",
    accept_gdtx: "top3",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường thuộc nhóm Top 3% nhận học sinh GDTX tại Daegu"
  },
  {
    id: "inje",
    name_en: "Inje University",
    name_ko: "인제대학교",
    name_vi: "Đại học Inje (Gimhae)",
    type: "private",
    region: "Gyeongnam",
    ranking: 42,
    campus_address: "197 Inje-ro, Gimhae, Gyeongsangnam-do",
    website: "https://www.inje.ac.kr",
    tuition: {
      humanities_social: 3500000,
      natural_sciences: 4100000,
      engineering: 4400000,
      arts_sports: 4450000,
      medicine_pharmacy: 6000000
    },
    dorm_fee: 950000,
    living_cost_est: 550000,
    scholarships: [
      "Học bổng Inje Global (30% - 70% học phí)",
      "Học bổng hỗ trợ ký túc xá"
    ],
    description: "Tọa lạc tại Gimhae gần Busan, sở hữu hệ thống bệnh viện Paik Hospital lớn bậc nhất Hàn Quốc. Thuộc nhóm trường Top 3% nhận học sinh GDTX.",
    accept_gdtx: "top3",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường thuộc nhóm Top 3% nhận học sinh GDTX"
  },
  {
    id: "sangji",
    name_en: "Sangji University",
    name_ko: "상지대학교",
    name_vi: "Đại học Sangji (Gangwon)",
    type: "private",
    region: "Gangwon",
    ranking: 62,
    campus_address: "83 Sangjidae-gil, Wonju-si, Gangwon-do",
    website: "https://www.sangji.ac.kr",
    tuition: {
      humanities_social: 3400000,
      natural_sciences: 4000000,
      engineering: 4300000,
      arts_sports: 4400000,
      medicine_pharmacy: 5800000
    },
    dorm_fee: 850000,
    living_cost_est: 520000,
    scholarships: [
      "Học bổng sinh viên quốc tế Sangji",
      "Học bổng ưu tiên TOPIK"
    ],
    description: "Trường đại học tư thục lớn tại thành phố Wonju, Gangwon. Chi phí sinh hoạt thấp, thuộc nhóm trường Top 3% nhận học sinh hệ GDTX.",
    accept_gdtx: "top3",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường thuộc nhóm Top 3% nhận học sinh GDTX tại Gangwon"
  },
  {
    id: "seoulventure",
    name_en: "Seoul Venture University",
    name_ko: "서울벤처대학원대학교",
    name_vi: "Đại học Seoul Venture (Seoul)",
    type: "private",
    region: "Seoul",
    ranking: 70,
    campus_address: "9 Bongeunsa-ro 22-gil, Gangnam-gu, Seoul",
    website: "http://www.svu.ac.kr",
    tuition: {
      humanities_social: 4000000,
      natural_sciences: null,
      engineering: null,
      arts_sports: null,
      medicine_pharmacy: null
    },
    dorm_fee: 1400000,
    living_cost_est: 850000,
    scholarships: [
      "Học bổng phát triển doanh nghiệp",
      "Học bổng nghiên cứu khoa học"
    ],
    description: "Trường đại học chuyên đào tạo bậc cao học (Thạc sĩ, Tiến sĩ) tọa lạc ngay quận Gangnam sầm uất của Seoul. Thuộc nhóm trường Top 3% nhận học sinh hệ GDTX ở bậc sau đại học.",
    accept_gdtx: "top3",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường cao học tại Gangnam, nhóm Top 3% nhận học sinh GDTX"
  },
  {
    id: "chonnam_science",
    name_en: "Chonnam Science College",
    name_ko: "전남과학대학교",
    name_vi: "Cao đẳng Khoa học Chonnam (Gwangju)",
    type: "private",
    region: "Gwangju",
    ranking: 75,
    campus_address: "19 Okwa-gil, Okwa-myeon, Gokseong-gun, Jeollanam-do",
    website: "http://www.cntc.ac.kr",
    tuition: {
      humanities_social: 2400000,
      natural_sciences: 2800000,
      engineering: 2900000,
      arts_sports: 3000000,
      medicine_pharmacy: 3400000
    },
    dorm_fee: 750000,
    living_cost_est: 530000,
    scholarships: [
      "Học bổng nghề nghiệp Chonnam Science",
      "Học bổng ưu tiên ký túc xá"
    ],
    description: "Trường cao đẳng khoa học kỹ thuật ứng dụng nổi tiếng với các ngành nghề thực hành thực tiễn. Thuộc nhóm trường Top 3% nhận học sinh hệ GDTX.",
    accept_gdtx: "top3",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường Cao đẳng nghề nhóm Top 3% nhận học sinh GDTX"
  },
  {
    id: "sangji_catholic",
    name_en: "Sangji Catholic College",
    name_ko: "가톨릭상지대학교",
    name_vi: "Cao đẳng Công giáo Sangji (Gangwon)",
    type: "private",
    region: "Gangwon",
    ranking: 78,
    campus_address: "163 Sangji-gil, Andong, Gyeongsangbuk-do",
    website: "https://www.csj.ac.kr",
    tuition: {
      humanities_social: 2300000,
      natural_sciences: 2700000,
      engineering: 2800000,
      arts_sports: 2800000,
      medicine_pharmacy: 3200000
    },
    dorm_fee: 800000,
    living_cost_est: 500000,
    scholarships: [
      "Học bổng Công giáo khuyến học",
      "Học bổng nghề kỹ thuật"
    ],
    description: "Trường cao đẳng công giáo đào tạo thực hành lâu đời tại Andong. Nhóm trường Top 3% nhận học sinh GDTX với chi phí cực thấp.",
    accept_gdtx: "top3",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Trường Cao đẳng Công giáo Andong, nhóm Top 3% nhận học sinh GDTX"
  },
  {
    id: "gangdong",
    name_en: "Gangdong College",
    name_ko: "강동대학교",
    name_vi: "Cao đẳng Gangdong (Chungbuk)",
    type: "private",
    region: "Chungbuk",
    ranking: 80,
    campus_address: "278 Daehak-ro, Saenggeuk-myeon, Eumseong-gun, Chungcheongbuk-do",
    website: "https://www.gangdong.ac.kr",
    tuition: {
      humanities_social: 2200000,
      natural_sciences: 2600000,
      engineering: 2700000,
      arts_sports: 2800000,
      medicine_pharmacy: 3300000
    },
    dorm_fee: 800000,
    living_cost_est: 520000,
    scholarships: [
      "Học bổng hướng nghề Gangdong",
      "Học bổng TOPIK đầu vào"
    ],
    description: "Trường cao đẳng nghề thực hành nằm tại khu vực Eumseong, Chungbuk. Thuộc nhóm trường Top 3% nhận học sinh GDTX, chi phí sinh hoạt vừa túi tiền.",
    accept_gdtx: "top3",
    visa_metropolitan: false,
    master_no_topik: false,
    custom_notes: "Cao đẳng nghề tỉnh Chungbuk, nhóm Top 3% nhận học sinh GDTX"
  },
  {
    id: "jeonju",
    name_en: "Jeonju University",
    name_ko: "전주대학교",
    name_vi: "Đại học Jeonju",
    type: "private",
    region: "Jeonbuk",
    ranking: 40,
    campus_address: "303 Cheonjam-ro, Wansan-gu, Jeonju, Jeollabuk-do",
    website: "https://www.jj.ac.kr",
    tuition: {
      humanities_social: 2778000,
      natural_sciences: 2778000,
      engineering: 2778000,
      arts_sports: 2778000,
      medicine_pharmacy: null
    },
    dorm_fee: 880000,
    living_cost_est: 530000,
    scholarships: [
      "Học bổng Visa Đại đô thị ưu đãi",
      "Học bổng kết quả học tập xuất sắc"
    ],
    description: "Đại học tư thục nổi bật tại Jeonju. Đây là trường thuộc danh sách diện Visa Đại đô thị, nổi bật với khối ngành Công nghệ & Phương tiện di động tương lai.",
    accept_gdtx: null,
    visa_metropolitan: true,
    master_no_topik: false,
    custom_notes: "Ngành nổi bật: Công nghệ và phương tiện di động tương lai (Học phí đồng nhất 2.778.000 KRW)"
  },
  {
    id: "dongeui_science",
    name_en: "Dongeui Science University",
    name_ko: "동의과학대학교",
    name_vi: "Cao đẳng Công nghệ Dongeui",
    type: "private",
    region: "Busan",
    ranking: 58,
    campus_address: "54 Yangji-ro, Busanjin-gu, Busan",
    website: "https://www.dit.ac.kr",
    tuition: {
      humanities_social: 2455000,
      natural_sciences: 2455000,
      engineering: 2455000,
      arts_sports: 2455000,
      medicine_pharmacy: 2455000
    },
    dorm_fee: 1050000,
    living_cost_est: 600000,
    scholarships: [
      "Học bổng hợp tác phát triển vùng Busan",
      "Học bổng tiếng Hàn TOPIK"
    ],
    description: "Trường cao đẳng công nghệ thực hành uy tín hàng đầu tại trung tâm Busan. Thuộc diện Visa Đại đô thị, thu hút đông sinh viên Việt Nam cho khối ngành Cơ khí và Điều dưỡng.",
    accept_gdtx: null,
    visa_metropolitan: true,
    master_no_topik: false,
    custom_notes: "Ngành nổi bật: Cơ khí và Điều dưỡng (Học phí đồng nhất 2.455.000 KRW)"
  },
  {
    id: "kyungnam_it",
    name_en: "Kyungnam College of Information & Technology",
    name_ko: "경남정보대학교",
    name_vi: "Cao đẳng CNTT Kyungnam",
    type: "private",
    region: "Busan",
    ranking: 60,
    campus_address: "45 Jurye-ro, Sasang-gu, Busan",
    website: "https://www.kit.ac.kr",
    tuition: {
      humanities_social: 3468000,
      natural_sciences: 3468000,
      engineering: 3468000,
      arts_sports: 3468000,
      medicine_pharmacy: 3468000
    },
    dorm_fee: 1100000,
    living_cost_est: 600000,
    scholarships: [
      "Học bổng công nghệ thông tin Kyungnam",
      "Hỗ trợ chỗ ở ký túc xá cho SV nước ngoài"
    ],
    description: "Trường đào tạo kỹ thuật thực hành lâu đời tại Busan. Thuộc diện Visa Đại đô thị, đào tạo xuất sắc các chuyên ngành: Khoa điện, Cơ khí, Ô tô điện, Kỹ thuật điện tử, Điều dưỡng.",
    accept_gdtx: null,
    visa_metropolitan: true,
    master_no_topik: false,
    custom_notes: "Ngành nổi bật: Điện, Cơ khí, Ô tô điện, Kỹ thuật điện tử, Điều dưỡng (Học phí 3.468.000 KRW)"
  },
  {
    id: "kunjang",
    name_en: "Kunjang College",
    name_ko: "군장대학교",
    name_vi: "Cao đẳng Kunjang (Gunsan)",
    type: "private",
    region: "Jeonbuk",
    ranking: 85,
    campus_address: "608 Kunjangdae-gil, Seongsan-myeon, Gunsan, Jeollabuk-do",
    website: "https://www.kunjang.ac.kr",
    tuition: {
      humanities_social: 2400000,
      natural_sciences: 2500000,
      engineering: 2600000,
      arts_sports: 2500000,
      medicine_pharmacy: 2750000
    },
    dorm_fee: 800000,
    living_cost_est: 530000,
    scholarships: [
      "Học bổng y khoa Kunjang",
      "Học bổng TOPIK đầu vào"
    ],
    description: "Tọa lạc tại Gunsan, trường cao đẳng có truyền thống đào tạo các ngành kỹ thuật đóng tàu và y khoa thực hành. Thuộc diện Visa Đại đô thị, ngành nổi bật nhất là Điều dưỡng.",
    accept_gdtx: null,
    visa_metropolitan: true,
    master_no_topik: false,
    custom_notes: "Ngành nổi bật: Điều dưỡng (Học phí Y khoa/Điều dưỡng: 2.750.000 KRW)"
  },
  {
    id: "baekseok",
    name_en: "Baekseok University",
    name_ko: "백석대학교",
    name_vi: "Đại học Baekseok",
    type: "private",
    region: "Chungnam",
    ranking: 36,
    campus_address: "76 Munam-ro, Dongnam-gu, Cheonan, Chungcheongnam-do",
    website: "https://www.bu.ac.kr",
    tuition: {
      humanities_social: 3200000,
      natural_sciences: 3500000,
      engineering: 3800000,
      arts_sports: 3900000,
      medicine_pharmacy: 3799000
    },
    dorm_fee: 1050000,
    living_cost_est: 580000,
    scholarships: [
      "Học bổng Baekseok Global Leaders",
      "Học bổng giới thiệu tôn giáo & hữu nghị quốc tế"
    ],
    description: "Đại học tổng hợp danh tiếng tại Cheonan. Trường thuộc diện Visa Đại đô thị (với ngành Điều dưỡng học phí 3.799.000 KRW) và cũng tuyển sinh hệ Thạc sĩ CNTT nợ TOPIK.",
    accept_gdtx: null,
    visa_metropolitan: true,
    master_no_topik: true,
    custom_notes: "Diện Visa Đại đô thị & Thạc sĩ nợ TOPIK (Điều dưỡng: 3.799.000 KRW, Thạc sĩ IT nợ TOPIK)"
  },
  {
    id: "hosan",
    name_en: "Hosan College",
    name_ko: "호산대학교",
    name_vi: "Cao đẳng Hosan (Gyeongbuk)",
    type: "private",
    region: "Gyeongbuk",
    ranking: 88,
    campus_address: "15 Gyeongil-ro, Hayang-eup, Gyeongsan, Gyeongsangbuk-do",
    website: "https://www.hosan.ac.kr",
    tuition: {
      humanities_social: 1800000,
      natural_sciences: 1900000,
      engineering: 1950000,
      arts_sports: 1900000,
      medicine_pharmacy: 2000000
    },
    dorm_fee: 750000,
    living_cost_est: 500000,
    scholarships: [
      "Học bổng chuyên khoa y tế Hosan",
      "Hỗ trợ tiền ăn ở ký túc xá"
    ],
    description: "Tọa lạc tại thành phố Gyeongsan gần Daegu, là trường đào tạo khối sức khỏe chất lượng. Thuộc diện Visa Đại đô thị, ngành nổi bật nhất là Điều dưỡng với học phí chỉ 2.000.000 KRW.",
    accept_gdtx: null,
    visa_metropolitan: true,
    master_no_topik: false,
    custom_notes: "Ngành nổi bật: Điều dưỡng (Học phí cực tốt: 2.000.000 KRW)"
  },
  {
    id: "kyongbuk_science",
    name_en: "Kyongbuk Science College",
    name_ko: "경북과학대학교",
    name_vi: "Cao đẳng Khoa học Kyongbuk",
    type: "private",
    region: "Gyeongbuk",
    ranking: 90,
    campus_address: "520 Jisan-ro, Gisung-myeon, Chilgok-gun, Gyeongsangbuk-do",
    website: "https://www.kbsc.ac.kr",
    tuition: {
      humanities_social: 1900000,
      natural_sciences: 2000000,
      engineering: 2050000,
      arts_sports: 2000000,
      medicine_pharmacy: 2105000
    },
    dorm_fee: 780000,
    living_cost_est: 520000,
    scholarships: [
      "Học bổng khoa học kỹ thuật Kyongbuk",
      "Học bổng TOPIK"
    ],
    description: "Trường cao đẳng công nghệ thực hành tại Chilgok, Gyeongbuk. Thuộc diện Visa Đại đô thị với chương trình đào tạo Điều dưỡng học phí chỉ 2.105.000 KRW.",
    accept_gdtx: null,
    visa_metropolitan: true,
    master_no_topik: false,
    custom_notes: "Ngành nổi bật: Điều dưỡng (Học phí: 2.105.000 KRW)"
  },
  {
    id: "kyungbuk_college",
    name_en: "Kyungbuk College",
    name_ko: "경북전문대학교",
    name_vi: "Cao đẳng Kyungbuk",
    type: "private",
    region: "Gyeongbuk",
    ranking: 92,
    campus_address: "315 Daehak-ro, Yeongju, Gyeongsangbuk-do",
    website: "https://www.kbc.ac.kr",
    tuition: {
      humanities_social: 1800000,
      natural_sciences: 1950000,
      engineering: 2000000,
      arts_sports: 1900000,
      medicine_pharmacy: 2000000
    },
    dorm_fee: 780000,
    living_cost_est: 500000,
    scholarships: [
      "Học bổng đào tạo nghề toàn cầu",
      "Học bổng hỗ trợ sinh hoạt phí"
    ],
    description: "Được biết đến với chất lượng đào tạo nghề kỹ thuật và y tế chuẩn quốc gia tại Yeongju. Thuộc diện Visa Đại đô thị, ngành nổi bật: Kỹ thuật toàn cầu & Điều dưỡng học phí 2.000.000 KRW.",
    accept_gdtx: null,
    visa_metropolitan: true,
    master_no_topik: false,
    custom_notes: "Ngành nổi bật: Kỹ thuật toàn cầu & Điều dưỡng (Học phí đồng giá 2.000.000 KRW)"
  },
  {
    id: "hansung",
    name_en: "Hansung University",
    name_ko: "한성대학교",
    name_vi: "Đại học Hansung",
    type: "private",
    region: "Seoul",
    ranking: 35,
    campus_address: "116 Samseongyo-ro 16-gil, Seongbuk-gu, Seoul",
    website: "https://www.hansung.ac.kr",
    tuition: {
      humanities_social: 1050000,
      natural_sciences: 4300000,
      engineering: 4700000,
      arts_sports: 4800000,
      medicine_pharmacy: null
    },
    dorm_fee: 1300000,
    living_cost_est: 800000,
    scholarships: [
      "Học bổng hỗ trợ thạc sĩ toàn cầu",
      "Học bổng TOPIK khuyến học sau khi nhập học"
    ],
    description: "Đại học uy tín nằm ngay tại thủ đô Seoul. Nổi bật với chương trình Thạc sĩ nợ TOPIK chuyên ngành Tư vấn quản lý toàn cầu với mức học phí cực kỳ thấp chỉ 1.050.000 KRW.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: true,
    custom_notes: "Tuyển Thạc sĩ nợ TOPIK ngành Tư vấn quản lý toàn cầu (Học phí chỉ 1.050.000 KRW)"
  },
  {
    id: "bufs",
    name_en: "Busan University of Foreign Studies",
    name_ko: "부산외국어대학교",
    name_vi: "Đại học Ngoại ngữ Busan",
    type: "private",
    region: "Busan",
    ranking: 44,
    campus_address: "65 Geumsem-ro 485beon-gil, Geumjeong-gu, Busan",
    website: "https://www.bufs.ac.kr",
    tuition: {
      humanities_social: 3200000,
      natural_sciences: 3600000,
      engineering: 3800000,
      arts_sports: 3700000,
      medicine_pharmacy: 3600000
    },
    dorm_fee: 1050000,
    living_cost_est: 600000,
    scholarships: [
      "Học bổng hữu nghị BUFS",
      "Học bổng thạc sĩ nợ TOPIK ưu đãi"
    ],
    description: "Đại học tư thục đào tạo ngoại ngữ hàng đầu tại Busan. Trường tuyển sinh hệ Thạc sĩ nợ TOPIK cho các ngành: Ngôn ngữ quốc tế, Y học tổng hợp, Trị liệu tự nhiên.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: true,
    custom_notes: "Tuyển Thạc sĩ nợ TOPIK ngành Ngôn ngữ quốc tế, Y học tổng hợp, Trị liệu tự nhiên"
  },
  {
    id: "wonkwang",
    name_en: "Wonkwang University",
    name_ko: "원광대학교",
    name_vi: "Đại học Wonkwang",
    type: "private",
    region: "Jeonbuk",
    ranking: 37,
    campus_address: "460 Iksan-daero, Iksan, Jeollabuk-do",
    website: "https://www.wku.ac.kr",
    tuition: {
      humanities_social: 3100000,
      natural_sciences: 3700000,
      engineering: 4100000,
      arts_sports: 3400000,
      medicine_pharmacy: 5600000
    },
    dorm_fee: 850000,
    living_cost_est: 530000,
    scholarships: [
      "Học bổng thiết kế nghệ thuật Wonkwang",
      "Học bổng TOPIK thạc sĩ"
    ],
    description: "Trường đại học tư thục quy mô lớn tại Iksan, Jeonbuk. Nổi bật với chương trình tuyển sinh Thạc sĩ nợ TOPIK các khối ngành đặc thù: Thiết kế làm đẹp, Sáng tác văn học.",
    accept_gdtx: null,
    visa_metropolitan: false,
    master_no_topik: true,
    custom_notes: "Tuyển Thạc sĩ nợ TOPIK ngành Thiết kế làm đẹp, Sáng tác văn học"
  }
];

// Merge logic
const customIds = new Set(customSchools.map(s => s.id));
const filteredBase = baseSchools.filter(s => !customIds.has(s.id));
const mergedUniversities = [...filteredBase, ...customSchools];

// Output to file
const outputFilePath = path.join(__dirname, '../src/data/universities.js');
const fileContent = `// TỆP DỮ LIỆU ĐẦY ĐỦ 55 TRƯỜNG ĐƯỢC ĐỒNG BỘ TỪ GOOGLE SHEET VÀ CÁC NGUỒN CHÍNH THỐNG
export const universities = ${JSON.stringify(mergedUniversities, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileContent, 'utf-8');
console.log(`[ĐỒNG BỘ THÀNH CÔNG] Đã ghi đè dữ liệu ${mergedUniversities.length} trường đại học vào tệp ${outputFilePath}`);
