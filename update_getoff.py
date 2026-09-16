import json

path = 'src/data/protocol.json'
with open(path, encoding='utf-8') as f:
    data = json.load(f)

# Bus stop data verified via Kakao Map bus stop search (실시간 버스정보)
BUS = {
    'jangchung': {
        'kr': '🚌 파랑 144, 301 / 초록 7212 (장충체육관앞 정류장, 도보 3분)',
        'en': '🚌 Bus Blue 144, 301, Green 7212 (Jangchung Gymnasium stop, 3-min walk)',
    },
    'yaksu': {
        'kr': '🚌 파랑 142, 144 / 초록 6211 (약수역8번출구.신당사회복지관 정류장)',
        'en': '🚌 Bus Blue 142, 144, Green 6211 (Yaksu Stn. Exit 8 stop)',
    },
    'euljiro4ga': {
        'kr': '🚌 파랑 100, 152, 202, 261 (을지로4가 정류장, 도보 2분)',
        'en': '🚌 Bus Blue 100, 152, 202, 261 (Euljiro 4-ga stop, 2-min walk)',
    },
    'hoehyeon': {
        'kr': '🚌 파랑 104, 421, 463, 505, 507, 604 / 초록 7011, 7013A, 7013B (남대문시장.회현역 정류장)',
        'en': '🚌 Bus Blue 104, 421, 463, 505, 507, 604, Green 7011, 7013A, 7013B (Namdaemun Market.Hoehyeon Stn. stop)',
    },
    'sindang': {
        'kr': '🚌 파랑 202, 421, 463 / 초록 2012, 2013, 2014, 2015 (신당역1번출구.서울중앙시장 정류장)',
        'en': '🚌 Bus Blue 202, 421, 463, Green 2012, 2013, 2014, 2015 (Sindang Stn. Exit 1 stop)',
    },
    'chungmuro': {
        'kr': '🚌 파랑 104, 105, 140, 421, 463, 507, 604 / 초록 7011 (충무로역8번출구 정류장)',
        'en': '🚌 Bus Blue 104, 105, 140, 421, 463, 507, 604, Green 7011 (Chungmuro Stn. Exit 8 stop)',
    },
    'euljiroipgu': {
        'kr': '🚌 파랑 151, 162, 173, 201, 262, 506, 702A, 702B, 705 (을지로입구역.광교 정류장)',
        'en': '🚌 Bus Blue 151, 162, 173, 201, 262, 506, 702A, 702B, 705 (Euljiro 1(il)-ga Stn.Gwanggyo stop)',
    },
}

updates = {
    111: {  # 라연 - 서울신라호텔, 동대입구역
        'getoff_kr': '🚇 지하철 3호선 동대입구역 하차 (5번 출구, 도보 8분, 무료 셔틀버스 운행) / ' + BUS['jangchung']['kr'],
        'getoff_en': '🚇 Subway Line 3 Dongguk Univ. Stn. (Exit 5, 8-min walk, free shuttle available) / ' + BUS['jangchung']['en'],
    },
    116: {  # 우래옥 - 을지로4가역
        'getoff_kr': '🚇 지하철 2·5호선 을지로4가역 4번 출구 (도보 1분) / ' + BUS['euljiro4ga']['kr'],
        'getoff_en': 'Euljiro 4(sa)-ga Station (Lines 2,5) Exit 4 (1min walk) / ' + BUS['euljiro4ga']['en'],
    },
    119: {  # 금돼지식당 - 약수역
        'getoff_kr': '🚇 지하철 3·6호선 약수역 인근 (도보 3–5분) / ' + BUS['yaksu']['kr'],
        'getoff_en': 'Near Yaksu Station (Lines 3, 6) (3-5min walk) / ' + BUS['yaksu']['en'],
    },
    122: {  # 커피 한약방 - 을지로3가역
        'getoff_kr': '🚇 지하철 2·3호선 을지로3가역 / ' + BUS['euljiro4ga']['kr'],
        'getoff_en': '🚇 Euljiro 3(sam)-ga Station (Line 2, 3) / ' + BUS['euljiro4ga']['en'],
    },
    233: {  # 시골집 - 을지로3가역
        'getoff_kr': '🚇 을지로3가역 하차 / ' + BUS['euljiro4ga']['kr'],
        'getoff_en': '🚇 Get off at Euljiro 3-ga Station / ' + BUS['euljiro4ga']['en'],
    },
    275: {  # 챔프커피 - 을지로3가역
        'getoff_kr': '🚇 2·3호선 을지로3가역 3번 출구 도보 3분 / ' + BUS['euljiro4ga']['kr'],
        'getoff_en': '🚇 Euljiro 3-ga Station (Lines 2, 3) Exit 3, 3-min walk / ' + BUS['euljiro4ga']['en'],
    },
    296: {  # 만선호프 을지로본점 - 을지로3가역
        'getoff_kr': '🚇 지하철 2·3호선 을지로3가역 / ' + BUS['euljiro4ga']['kr'],
        'getoff_en': '🚇 Euljiro 3-ga Station (Line 2, 3) / ' + BUS['euljiro4ga']['en'],
    },
    297: {  # 조선옥 - 을지로3가역
        'getoff_kr': '🚇 지하철 2·3호선 을지로3가역 6번 출구 / ' + BUS['euljiro4ga']['kr'],
        'getoff_en': '🚇 Euljiro 3-ga Station (Line 2, 3) Exit 6 / ' + BUS['euljiro4ga']['en'],
    },
    298: {  # 평래옥 - 을지로4가역
        'getoff_kr': '🚇 지하철 2·5호선 을지로4가역 / ' + BUS['euljiro4ga']['kr'],
        'getoff_en': '🚇 Euljiro 4-ga Station (Line 2, 5) / ' + BUS['euljiro4ga']['en'],
    },
    299: {  # 평양면옥 (장충동) - 동대입구역
        'getoff_kr': '🚇 지하철 3호선 동대입구역 / ' + BUS['jangchung']['kr'],
        'getoff_en': '🚇 Dongguk Univ. Station (Line 3) / ' + BUS['jangchung']['en'],
    },
    355: {  # 카페 죠지 - 을지로3가역
        'getoff_kr': '🚇 지하철 2·3호선 을지로3가역 / ' + BUS['euljiro4ga']['kr'],
        'getoff_en': '🚇 Euljiro 3-ga Stn (Line 2/3) / ' + BUS['euljiro4ga']['en'],
    },
    388: {  # 블루보틀 명동 - 명동역
        'getoff_kr': '🚇 4호선 명동역 6번 출구 / ' + BUS['hoehyeon']['kr'],
        'getoff_en': '🚇 Line 4 Myeongdong Station Exit 6 / ' + BUS['hoehyeon']['en'],
    },
    401: {  # 카멜커피 신세계백화점 본점 - 회현역
        'getoff_kr': '🚇 4호선 회현역 7번 출구 / ' + BUS['hoehyeon']['kr'],
        'getoff_en': '🚇 Line 4 Hoehyeon Station Exit 7 / ' + BUS['hoehyeon']['en'],
    },
    406: {  # 인텔리젠시아 명동 - 명동역
        'getoff_kr': '🚇 4호선 명동역 5번 출구 / ' + BUS['hoehyeon']['kr'],
        'getoff_en': '🚇 Line 4 Myeongdong Station Exit 5 / ' + BUS['hoehyeon']['en'],
    },
    507: {  # 하동관 명동본점 - 명동역
        'getoff_kr': '🚇 지하철 4호선 명동역 / ' + BUS['hoehyeon']['kr'],
        'getoff_en': '🚇 Subway Line 4 Myeongdong Station / ' + BUS['hoehyeon']['en'],
    },
    536: {  # 마복림할머니 막내아들네 - 신당역
        'getoff_kr': '🚇 2·6호선 신당역 하차 / ' + BUS['sindang']['kr'],
        'getoff_en': '🚇 Get off at Sindang Station (Line 2, 6) / ' + BUS['sindang']['en'],
    },
    537: {  # 동대문엽기떡볶이 본점 - 신당역
        'getoff_kr': '🚇 2·6호선 신당역 하차 / ' + BUS['sindang']['kr'],
        'getoff_en': '🚇 Get off at Sindang Station (Line 2, 6) / ' + BUS['sindang']['en'],
    },
    585: {  # 남포면옥 - 을지로입구역/을지로3가역
        'getoff_kr': '🚇 지하철 2호선 을지로입구역 (도보 5분) / 2·3호선 을지로3가역 (도보 6분) / ' + BUS['euljiroipgu']['kr'],
        'getoff_en': '🚇 Subway Line 2 Euljiro 1(il)-ga Stn. (5-min walk) / Lines 2·3 Euljiro 3-ga Stn. (6-min walk) / ' + BUS['euljiroipgu']['en'],
    },
    590: {  # 충무로돼지갈비 - 충무로역
        'getoff_kr': '🚇 지하철 3·4호선 충무로역 8번 출구 (도보 3분) / ' + BUS['chungmuro']['kr'],
        'getoff_en': '🚇 Subway Lines 3·4 Chungmuro Stn. Exit 8 (3-min walk) / ' + BUS['chungmuro']['en'],
    },
    594: {  # 중화요리 일품향 - 명동역
        'getoff_kr': '🚇 지하철 4호선 명동역 (도보 5분) / ' + BUS['hoehyeon']['kr'],
        'getoff_en': '🚇 Subway Line 4 Myeongdong Stn. (5-min walk) / ' + BUS['hoehyeon']['en'],
    },
    595: {  # 약수동 빵사부 찰빵 - 약수역
        'getoff_kr': '🚇 지하철 3·6호선 약수역 (도보 5분) / ' + BUS['yaksu']['kr'],
        'getoff_en': '🚇 Subway Lines 3·6 Yaksu Stn. (5-min walk) / ' + BUS['yaksu']['en'],
    },
    598: {  # 신당동 마복림할머니막내아들네 - 신당역
        'getoff_kr': '🚇 지하철 2·6호선 신당역 (도보 6분) / ' + BUS['sindang']['kr'],
        'getoff_en': '🚇 Subway Lines 2·6 Sindang Stn. (6-min walk) / ' + BUS['sindang']['en'],
    },
    599: {  # 남대문 가메골손왕만두 - 회현역
        'getoff_kr': '🚇 지하철 4호선 회현역 5번 출구 (도보 5분, 남대문시장 내) / ' + BUS['hoehyeon']['kr'],
        'getoff_en': '🚇 Subway Line 4 Hoehyeon Stn. Exit 5 (5-min walk, inside Namdaemun Market) / ' + BUS['hoehyeon']['en'],
    },
    607: {  # 센터커피 (명동점) - 명동역
        'getoff_kr': '🚇 지하철 4호선 명동역 (도보 5분) / ' + BUS['hoehyeon']['kr'],
        'getoff_en': '🚇 Subway Line 4 Myeongdong Stn. (5-min walk) / ' + BUS['hoehyeon']['en'],
    },
}

names_check = ['라연','우래옥','금돼지식당','커피 한약방','시골집','챔프커피 제3작업실','만선호프 을지로본점','조선옥','평래옥','평양면옥 (장충동)','카페 죠지','블루보틀 명동','카멜커피 신세계백화점 본점','인텔리젠시아 명동','하동관 명동본점','마복림할머니 막내아들네','동대문엽기떡볶이 본점','남포면옥','충무로돼지갈비','중화요리 일품향','약수동 빵사부 찰빵','신당동 마복림할머니막내아들네','남대문 가메골손왕만두','센터커피 (명동점)']

count = 0
for idx, upd in updates.items():
    item = data[idx]
    old_kr = item.get('getoff_kr', '')
    item['getoff_kr'] = upd['getoff_kr']
    item['getoff_en'] = upd['getoff_en']
    count += 1
    print(f"[{idx}] {item.get('title_kr')}: updated")

print(f"\nTotal updated: {count}")
print(f"Total items in data: {len(data)}")

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Saved.")
