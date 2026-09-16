import json

path = "/sessions/kind-clever-carson/mnt/taerijay-platform/src/data/protocol.json"
with open(path, encoding="utf-8") as f:
    data = json.load(f)

by_title = {d['title_kr']: d for d in data}

# updates: title_kr -> dict of fields to set
updates = {
    '고궁 (본점/비빔밥)': {
        'title_en': 'Gogung (Main Branch)',
        'hours_kr': '매일 11:00~21:00 (라스트오더 20:30)',
        'desc_kr': '45년 전통의 전주 대표 비빔밥 전문점, 고궁상차림과 고궁전골이 대표메뉴',
    },
    '전주 종합경기장 화심순두부': {
        'title_en': 'Hwasim Sundubu (Jeonju Sports Complex)',
        'hours_kr': '매일 05:00~22:00',
        'desc_kr': '완주 화심두부 본가에서 이어진 순두부백반 전문점',
    },
    '전주 백제간장게장': {
        'title_en': 'Baekje Ganjang Gejang',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주에서 간장게장을 전문으로 하는 게장 정식 식당',
    },
    '전주 효자막창 (본점)': {
        'title_en': 'Hyoja Makchang (Main Branch)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주객사 인근 한우 곱창·막창구이 전문점',
    },
    '전주 효자문 (갈비탕)': {
        'title_en': 'Hyojamun (Galbitang)',
        'hours_kr': '10:30~21:00 (브레이크타임 15:00~16:30, 월요일 휴무)',
        'desc_kr': '전주 영화의 거리에서 30년 넘게 이어온 한우 갈비탕·불갈비 전문점',
    },
    '전주 상산고 앞 베테랑': {
        'title_en': 'Veteran (Sangsan High School)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '1977년부터 이어온 전주 대표 칼국수·콩국수 노포',
    },
    '전주 태평집 (소바/콩국수)': {
        'title_en': 'Taepyeongjip (Soba/Kongguksu)',
        'hours_kr': '11:00~17:00 (월요일 휴무)',
        'desc_kr': '비빔소바와 콩국수로 유명한 전주 덕진구 국수 맛집',
    },
    '전주 일신옥 (콩나물국밥)': {
        'title_en': 'Ilsinok (Kongnamul Gukbap)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 전통 콩나물국밥을 내는 완산구 국밥집',
    },
    '전주 삼식이네갈비': {
        'title_en': 'Samsigine Galbi',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 완산구에서 숯불갈비를 전문으로 하는 고깃집',
    },
    '전주 남부시장 조점례피순대 2호점': {
        'title_en': 'Jojeomnye Pisundae Nambu Market Branch 2',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '1972년부터 이어온 전주 남부시장 대표 피순대·순대국밥 맛집',
    },
    '전주 대성동 옛날옴팡집': {
        'title_en': 'Yennal Ompangjip (Daeseong-dong)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '청국장백반으로 유명한 전주 로컬 노포',
    },
    '전주 아중리 한일옥': {
        'title_en': 'Hanilok (Ajung-ri)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 아중리에 위치한 한식 백반 전문점',
    },
    '전주 혁신도시 기와': {
        'title_en': 'Giwa (Innovation City)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 혁신도시의 한식 고깃집',
    },
    '완주 소양 화심두부삼거리 본점': {
        'title_en': 'Hwasim Dubu Samgeori Main Branch',
        'hours_kr': '매일 08:40~20:00 (연중무휴, 명절 등 휴무 가능)',
        'desc_kr': '완주 소양 화심마을에서 시작된 원조 순두부·두부 전문점',
    },
    '전주 풍남옥 (본점)': {
        'title_en': 'Pungnamok (Main Branch)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '콩나물국밥을 전문으로 하는 전주 태조로의 국밥집',
    },
    '전주 교동시래청': {
        'title_en': 'Gyodong Siraecheong',
        'hours_kr': '수~월 08:00~20:30 (화요일 휴무, 라스트오더 20:00)',
        'desc_kr': '시래기국과 떡갈비를 함께 내는 전주 한옥마을 한정식집',
    },
    '전주 다우랑 (수제만두)': {
        'title_en': 'Dawoorang (Handmade Dumplings)',
        'hours_kr': '10:00~21:00',
        'desc_kr': '새우만두·부추만두 등 다양한 수제만두를 파는 한옥마을 테이크아웃 전문점',
    },
    '전주 한옥마을 교동석갈비': {
        'title_en': 'Gyodong Seok-galbi',
        'hours_kr': '11:00~20:30 (브레이크타임 15:30~16:00, 라스트오더 20:00)',
        'desc_kr': '돌판에 구워내는 석갈비와 연잎밥이 대표메뉴인 한옥마을 갈비집',
    },
    '전주 서신동 한옥떡갈비': {
        'title_en': 'Hanok Tteokgalbi (Seosin-dong)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '한옥마을 떡갈비 전문점의 서신동 지점',
    },
    '전주 평화동 김판곤명품옥돔': {
        'title_en': 'Kim Pangon Myeongpum Okdom',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '제주 옥돔구이를 전문으로 하는 평화동 생선구이 맛집',
    },
    '전주 객리단길 폴스커피': {
        'title_en': "Falls Coffee (Gaekridan-gil)",
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 객리단길의 개성있는 로스터리 카페',
    },
    '전주 객사 카페 샬롯': {
        'title_en': 'Cafe Charlotte (Gaeksa)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 객사 인근의 아기자기한 분위기의 디저트 카페',
    },
    '전주 한옥마을 카페 달': {
        'title_en': 'Cafe Dal (Hanok Village)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 한옥마을 은행로에 위치한 감성 카페',
    },
    '전주 한옥마을 너울': {
        'title_en': 'Neoul (Hanok Village)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '경기전길에 위치한 한옥마을 전통찻집 겸 카페',
    },
    '전주 한옥마을 찻집 소담': {
        'title_en': 'Chatjip Sodam (Hanok Village)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '향교길에 위치한 전통 다과를 즐길 수 있는 한옥 찻집',
    },
    '전주 혁신도시 리프커피': {
        'title_en': 'Leaf Coffee (Innovation City)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 혁신도시 안전로의 동네 커피 전문점',
    },
    '전주 송천동 캔버스': {
        'title_en': 'Canvas (Songcheon-dong)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 송천중앙로에 위치한 갤러리형 카페',
    },
    '전주 에코시티 카페 레이크': {
        'title_en': 'Cafe Lake (Eco City)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 에코시티 세병호수 인근의 호수뷰 카페',
    },
    '전주 평화동 대형카페 오늘': {
        'title_en': 'Cafe Oneul (Pyeonghwa-dong)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '모악산 뷰를 즐길 수 있는 평화동 대형 카페',
    },
    '전주 삼천동 카페 리원': {
        'title_en': 'Cafe Riwon (Samcheon-dong)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 삼천동 용머리로에 위치한 카페',
    },
    '전주 완산칠봉 밑 한옥카페 뜰': {
        'title_en': "Hanok Cafe Tteul (Wansanchilbong)",
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '완산칠봉 아래 자리한 한옥 정원 카페',
    },
    '완주 소양 아원고택 카페': {
        'title_en': 'Awon Gotaek Cafe (Soyang)',
        'hours_kr': '아원갤러리 11:00~17:00 (입장마감 15:45), 아원고택 12:00~16:00',
        'desc_kr': '전통 한옥과 갤러리가 어우러진 완주 소양 고택 카페, 입장료 있음',
    },
    '완주 구이 모악산 카페 갤러리': {
        'title_en': 'Moaksan Gallery Cafe (Gui)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '모악산 자락에 위치한 갤러리 겸 카페',
    },
    '완주 삼례문화예술촌 카페': {
        'title_en': 'Samnye Culture Art Village Cafe',
        'hours_kr': '월~토 10:00~21:00 (라스트오더 20:30), 일 10:00~18:00 (라스트오더 17:30)',
        'desc_kr': '옛 삼례양곡창고를 개조한 문화예술촌 내 로스터리 카페',
    },
    '전주 덕진공원 카페 연화정': {
        'title_en': 'Cafe Yeonhwajeong (Deokjin Park)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '덕진공원 연꽃과 어우러진 연화정도서관 인근 카페',
    },
    '전주 서신동 커피에반하다': {
        'title_en': 'Coffee-e Banhada (Seosin-dong)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 서신로에 위치한 동네 커피 전문점',
    },
    '전주 하가지구 카페 몽땅': {
        'title_en': 'Cafe Mongttang (Haga District)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 하가지구 가련산로의 아기자기한 카페',
    },
    '전주 아중리 카페 어반': {
        'title_en': 'Cafe Urban (Ajung-ri)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '아중호수 인근에 위치한 도심형 감성 카페',
    },
    '전주 효자동 베이커리카페 명장': {
        'title_en': 'Bakery Cafe Myeongjang (Hyoja-dong)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 효자로의 베이커리 전문 카페',
    },
    '전주 서곡 카페 그리너리': {
        'title_en': 'Cafe Greenery (Seogok)',
        'hours_kr': '영업시간 확인 필요',
        'desc_kr': '전주 서곡 천잠로에 위치한 식물이 가득한 카페',
    },
}

missing = [k for k in updates if k not in by_title]
print("missing from data:", missing)

changed = 0
for title, fields in updates.items():
    item = by_title.get(title)
    if not item:
        continue
    for k, v in fields.items():
        item[k] = v
    changed += 1

print("changed:", changed)

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write("\n")

print("done")
