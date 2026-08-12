import json
import subprocess
import openpyxl
import re

res = subprocess.run(['node', 'scratch/dump_to_json.cjs'], capture_output=True, text=True, encoding='utf-8')
old_db = json.loads(res.stdout.strip())

wb = openpyxl.load_workbook('MASTER_DATABASE_DAI_HOC_CAO_DANG_HAN_QUOC_2026.xlsx', data_only=True)
sheet = wb['MASTER_DATABASE']
rows = list(sheet.iter_rows(values_only=True))
headers = rows[0]
excel_rows = [{headers[i]: r[i] for i in range(len(headers))} for r in rows[1:] if r[0]]

old_id_to_hangeul = {
    "top3_school_8": "경기대학교", # Kyonggi
    "top3_school_20": "경동대학교", # Kyungdong
    "top3_school_2": "안산대학교", # Ansan
    "top3_school_3": "부천대학교", # Bucheon
    "top3_school_4": "동남보건대학교", # Dongnam Health
    "top3_school_6": "장안대학교", # Jangan
    "top3_school_9": "경민대학교", # Kyungmin
    "top3_school_10": "서정대학교", # Seojeong
    "top3_school_11": "신안산대학교", # Shin Ansan
    "top3_school_13": "두원공과대학교", # Doowon Technical
    "top3_school_14": "동원대학교", # Tongwon
    "top3_school_15": "용인예술과학대학교", # Yongin Arts & Sci
    "top3_school_16": "광주여자대학교", # Kwangju Women's
    "top3_school_17": "송원대학교", # Songwon
    "top3_school_18": "강릉영동대학교", # Gangneung Yeongdong
    "top3_school_19": "한라대학교", # Halla
    "top3_school_22": "송호대학교", # Songho
    "top3_school_23": "강원도립대학교", # Gangwon State
    "top3_school_1": "중앙승가대학교", 
    "top3_school_21": "상지대학교", # Sangji
    "caoangyeungjin": "영진전문대학교", # Yeungjin
    "caoangkimpo": "김포대학교", # Kimpo
    "caoangshingu": "신구대학교", # Shingu
    "caoangshingu_83": "신구대학교",
    "saungonnguquoct": "서울외국어대학원대학교", 
    "sausunhakup": "선학유피대학원대학교", 
    "viencaohocngonn": "서울외국어대학원대학교",
    "caodangcheongam": "청암대학교",
    "caodangytedaegu": "대구보건대학교",
    "caodangkhoahock": "동원과학기술대학교",
    "keimyung": "계명대학교",
    "gachon": "가천대학교",
    "kwangwoon": "광운대학교",
    "gangneungwonju": "강릉원주대학교",
    "sahmyook": "삼육대학교",
    "khoahoccongnghe": "서울과학기술대학교",
    "sungkyul": "성결대학교",
    "shinhan": "신한대학교",
    "kinhthanhhanquo": "한국성서대학교",
    "ngoainguhankuk": "한국외국어대학교",
    "hanyangerica": "한양대학교 ERICA",
    "konyang": "건양대학교",
    "koreacososejong": "고려대학교",
    "kongju": "공주대학교",
    "giaothonghanquo": "한국교통대학교",
    "hanbat": "한밭대학교",
    "nazarene": "나사렛대학교",
    "daejeon": "대전대학교",
    "mokwon": "목원대학교",
    "dankook": "단국대학교",
    "soonchunhyang": "순천향대학교",
    "woosong": "우송대학교",
    "joobu": "중부대학교",
    "giaoduckythuath": "한국기술교육대학교",
    "hannam": "한남대학교",
    "hanseo": "한서대학교",
    "hoseo": "호서대학교",
    "kyungnam": "경남대학교",
    "kyungsang": "경상국립대학교",
    "kyungsung": "경성대학교",
    "kyungwoon": "경운대학교",
    "gwangju": "광주대학교",
    "gyeongguk": "경북대학교",
    "pukyong": "부경대학교",
    "sunchon": "순천대학교",
    "changwon": "창원대학교",
    "daegu_catholic": "대구가톨릭대학교",
    "daeshin": "대신대학교",
    "donggukwise": "동국대학교",
    "tongmyung": "동명대학교",
    "dongseo": "동서대학교",
    "donga": "동아대학교",
    "silla": "신라대학교",
    "widuk": "위덕대학교",
    "inje": "인제대학교",
    "chosun": "조선대학교",
    "kyungin": "경인여자대학교",
    "dongwon": "동원대학교",
    "myongji_college": "명지전문대학",
    "osan_uni": "오산대학교",
    "nghethuatkhoaho": "용인예술과학대학교",
    "induk": "인덕대학교",
    "hocviennghethua": "서울예술대학교",
    "wonkwang_health": "원광보건대학교",
    "jeonbuk_science": "전북과학대학교",
    "thongtinkyungna": "경남정보대학교",
    "khoahocdongeui": "동의과학대학교",
    "yeungnam_college": "영남이공대학교",
    "ulsan_science": "울산과학대학교",
    "luatvakinhdoanh": "국제법률경영대학원대학교",
    "dongshintop": "동신대학교",
    "kosintop": "고신대학교",
    "masantop": "마산대학교",
    "howontop": "호원대학교",
    "ajou_motor": "아주자동차대학교",
    "dongmyung": "동명대학교",
    "phimanhhanquoc": "한국영상대학교",
    "khoahocvacongng": "경남과학기술대학교",
    "dongeui": "동의대학교",
    "yongin": "용인대학교",
    "dongduk": "동덕여자대학교",
    "mokpo": "목포대학교",
    "nghethuatyewon": "예원예술대학교",
    "yuwon": "유원대학교",
    "chodang": "초당대학교",
    "chongshin": "총신대학교",
    "vanhoakeimyung": "계명문화대학교",
    "khoahockyongbuk": "경북과학대학교",
    "viencongnghegeu": "금오공과대학교",
}

def clean_ko_excel(name):
    if not name:
        return ""
    name = re.sub(r'\(.*?\)', '', str(name))
    name = name.replace("국립", "") # Strip National prefix
    hangeul_parts = re.findall(r'[\uac00-\ud7a3a-zA-Z0-9]+', name)
    if hangeul_parts:
        return "".join(parts).lower() if 'parts' in locals() else "".join(hangeul_parts).lower()
    return "".join(str(name).split()).lower()

def clean_ko_db(name, school_id=None):
    if school_id and school_id in old_id_to_hangeul:
        val = old_id_to_hangeul[school_id]
        val = val.replace("국립", "")
        hangeul_parts = re.findall(r'[\uac00-\ud7a3a-zA-Z0-9]+', val)
        return "".join(hangeul_parts).lower()
    if not name:
        return ""
    hangeul_parts = re.findall(r'[\uac00-\ud7a3a-zA-Z0-9]+', str(name))
    if hangeul_parts:
        return "".join(hangeul_parts).lower()
    return "".join(str(name).split()).lower()

clean_en = lambda n: re.sub(r'[^a-zA-Z0-9]', '', re.sub(r'\(.*?\)', '', str(n))).lower()

matched_ids = set()
excel_matched = {}

# Step 1: Korean Name Match
for idx, r in enumerate(excel_rows):
    ex_ko = clean_ko_excel(r['Korean_Name'])
    if not ex_ko:
        continue
    matched_school = None
    for u in old_db:
        db_ko = clean_ko_db(u.get('name_ko'), u.get('id'))
        if db_ko == ex_ko:
            matched_school = u
            break
    if matched_school:
        excel_matched[idx] = matched_school
        matched_ids.add(matched_school['id'])

print(f"Korean Name Matched: {len(excel_matched)}")

# Step 2: English Name Match
english_matches_count = 0
for idx, r in enumerate(excel_rows):
    if idx in excel_matched:
        continue
    ex_en = clean_en(r['English_Name'])
    if not ex_en:
        continue
    matched_school = None
    for u in old_db:
        if u['id'] in matched_ids:
            continue
        db_en = clean_en(u.get('name_en'))
        if db_en == ex_en or clean_en(u.get('id')) == ex_en:
            matched_school = u
            break
    if matched_school:
        excel_matched[idx] = matched_school
        matched_ids.add(matched_school['id'])
        english_matches_count += 1

print(f"English Name Matched: {english_matches_count}")
print(f"Total Matched: {len(excel_matched)}")
print(f"Unmatched old DB: {len([u for u in old_db if u['id'] not in matched_ids])}")
print("Unmatched IDs in old DB:")
for u in old_db:
    if u['id'] not in matched_ids:
        print(f"  - {u['id']} ({u['name_ko']})")
