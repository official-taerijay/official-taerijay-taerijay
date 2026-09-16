# -*- coding: utf-8 -*-
import json

path = 'src/data/protocol.json'
data = json.load(open(path, encoding='utf-8'))

updates = {
    "고궁 (본점/비빔밥)": {
        "kr": "🚌 전주 시내버스 다수 노선 '송천중앙시장·고궁본점' 인근 정류장 하차 (덕진구 송천동 중심가, 정류장 도보 3분 이내)",
        "en": "🚌 Take any Jeonju city bus to a stop near 'Songcheon Central Market/Gogung Main Branch' (central Songcheon-dong, Deokjin-gu — about a 3-min walk from the stop)"
    },
    "전주 종합경기장 화심순두부": {
        "kr": "🚌 전주 시내버스 401·402·403번 '월드컵경기장(종합경기장)' 정류장 하차 후 도보 이동",
        "en": "🚌 Take Jeonju city bus No. 401, 402, or 403 and get off at 'World Cup Stadium (Sports Complex)' stop, then walk"
    },
    "전주 태평집 (소바/콩국수)": {
        "kr": "🚌 전주 시내버스로 '태평동' 인근 정류장 하차 후 조경단로까지 도보 이동 (정확한 노선번호는 카카오맵·전주 버스 앱에서 '태평동' 정류장 검색 권장)",
        "en": "🚌 Take a Jeonju city bus to a stop near 'Taepyeong-dong', then walk to Jogyeongdan-ro (check the exact route number by searching 'Taepyeong-dong' stop on Kakao Map or the Jeonju bus app)"
    },
    "전주 아중리 한일옥": {
        "kr": "🚌 전주 시내버스로 '아중리·아중호수' 인근 정류장 하차 후 아중로까지 도보 이동 (정확한 노선번호는 카카오맵·전주 버스 앱에서 '아중리' 정류장 검색 권장)",
        "en": "🚌 Take a Jeonju city bus to a stop near 'Ajung-ri/Ajung Lake', then walk to Ajung-ro (check the exact route number by searching 'Ajung-ri' stop on Kakao Map or the Jeonju bus app)"
    },
    "완주 소양 화심두부삼거리 본점": {
        "kr": "🚌 전주 시내버스 79번 종점 '금산사' 방면 노선 또는 완주 농어촌버스 소양 방면 노선이 전진로를 경유하나, 배차가 뜸한 농촌 구간이므로 '화심두부삼거리' 인근 하차 후 도보 이동을 권장하며 자가용·택시 이용이 더 편리",
        "en": "🚌 Jeonju city bus No. 79 (toward Geumsansa) and Wanju rural buses toward Soyang pass along Jeonjin-ro, but service is infrequent in this rural stretch — get off near 'Hwasim Dubu Samgeori' and walk, or a car/taxi is more convenient"
    },
    "전주 혁신도시 리프커피": {
        "kr": "🚌 전주 시내버스로 혁신도시 내 '안전로' 인근 정류장 하차 (정확한 노선번호는 카카오맵·전주 버스 앱에서 '전주혁신도시' 정류장 검색 권장)",
        "en": "🚌 Take a Jeonju city bus to a stop near 'Anjeon-ro' in Innovation City (check the exact route number by searching 'Jeonju Innovation City' stop on Kakao Map or the Jeonju bus app)"
    },
    "전주 송천동 캔버스": {
        "kr": "🚌 전주 시내버스 87·89번 등 송천동종점 방면 노선이 송천중앙로를 경유, '송천동' 인근 정류장 하차 후 도보 이동",
        "en": "🚌 Jeonju city bus No. 87, 89, and other routes toward Songcheon-dong terminus run along Songcheon-jungang-ro — get off near 'Songcheon-dong' stop and walk"
    },
    "전주 에코시티 카페 레이크": {
        "kr": "🚌 전주 시내버스 559번이 에코시티(에코더샵1차·에코자이2차·에코스위첸) 경유, '세병호수길' 인근 정류장 하차 후 도보 이동",
        "en": "🚌 Jeonju city bus No. 559 runs through Eco City (Eco The Sharp 1, Eco Xi 2, Eco Suwichen) — get off near 'Sebyeong Lake-gil' stop and walk"
    },
    "전주 삼천동 카페 리원": {
        "kr": "🚌 전주 시내버스로 '삼천동·용머리로' 인근 정류장 하차 후 도보 이동 (정확한 노선번호는 카카오맵·전주 버스 앱에서 '삼천동' 정류장 검색 권장)",
        "en": "🚌 Take a Jeonju city bus to a stop near 'Samcheon-dong/Yongmeori-ro', then walk (check the exact route number by searching 'Samcheon-dong' stop on Kakao Map or the Jeonju bus app)"
    },
    "전주 완산칠봉 밑 한옥카페 뜰": {
        "kr": "🚌 전주 시내버스 다수 노선 '완산동간이정류소' 하차 후 완산칠봉(꽃동산) 방면 도보 이동, 또는 전주한옥마을 순환 관광버스 999번 이용 후 도보 연계",
        "en": "🚌 Take any Jeonju city bus to 'Wansan-dong Simplified Stop', then walk toward Wansanchilbong (Kkotdongsan), or take Jeonju Hanok Village tour bus No. 999 and walk the rest of the way"
    },
    "완주 소양 아원고택 카페": {
        "kr": "🚌 완주 농어촌버스 소양 50번(오성리~소양) 이용 후 '소양' 정류장 하차, 송광수만로까지는 도보로 거리가 있어 택시 연계 권장 (삼례공용버스터미널에서 차량 약 29분 거리)",
        "en": "🚌 Take Wanju rural bus Soyang Route 50 (Oseong-ri~Soyang) and get off at 'Soyang' stop; Songgwangsuman-ro is a further walk, so a taxi connection is recommended (about a 29-min drive from Samnye Bus Terminal)"
    },
    "완주 구이 모악산 카페 갤러리": {
        "kr": "🚌 전주고속버스터미널에서 970·971번(상학·구이 방면) 승차 후 모악산관광단지 인근 정류장 하차, 완주 마을버스 구이90·91·92번도 이용 가능",
        "en": "🚌 From Jeonju Express Bus Terminal, take bus No. 970 or 971 (toward Sanghak/Gui) and get off near Moaksan Tourist Complex; Wanju village buses Gui 90/91/92 are also an option"
    },
    "완주 삼례문화예술촌 카페": {
        "kr": "🚌 완주 농어촌버스 삼례31·삼례32번 등 삼례터미널·삼례역 경유 노선 이용 후 '삼례터미널' 하차, 삼례문화예술촌까지 도보 이동 (전주에서 시내버스로도 삼례 방면 수시 왕래)",
        "en": "🚌 Take Wanju rural bus Samnye 31 or Samnye 32 (via Samnye Terminal/Samnye Station) and get off at 'Samnye Terminal', then walk to Samnye Culture & Art Village (Jeonju city buses also run frequently toward Samnye)"
    },
    "전주 덕진공원 카페 연화정": {
        "kr": "🚌 전주 시내버스 752번 등 '덕진공원' 정류장 경유 노선 하차 후 도보 이동",
        "en": "🚌 Take Jeonju city bus No. 752 or other routes serving the 'Deokjin Park' stop, then walk"
    },
    "전주 서신동 커피에반하다": {
        "kr": "🚌 전주 시내버스로 '서신동' 인근 정류장 하차 후 서신로까지 도보 이동 (정확한 노선번호는 카카오맵·전주 버스 앱에서 '서신동' 정류장 검색 권장)",
        "en": "🚌 Take a Jeonju city bus to a stop near 'Seosin-dong', then walk to Seosin-ro (check the exact route number by searching 'Seosin-dong' stop on Kakao Map or the Jeonju bus app)"
    },
    "전주 하가지구 카페 몽땅": {
        "kr": "🚌 전주 시내버스로 '하가지구' 인근 정류장 하차 후 가련산로까지 도보 이동 (정확한 노선번호는 카카오맵·전주 버스 앱에서 '하가지구' 정류장 검색 권장)",
        "en": "🚌 Take a Jeonju city bus to a stop near 'Haga District', then walk to Garyeonsan-ro (check the exact route number by searching 'Haga District' stop on Kakao Map or the Jeonju bus app)"
    },
    "전주 아중리 카페 어반": {
        "kr": "🚌 전주 시내버스로 '아중리·아중호수' 인근 정류장 하차 후 아중호수길까지 도보 이동 (정확한 노선번호는 카카오맵·전주 버스 앱에서 '아중리' 정류장 검색 권장)",
        "en": "🚌 Take a Jeonju city bus to a stop near 'Ajung-ri/Ajung Lake', then walk to Ajunghosu-gil (check the exact route number by searching 'Ajung-ri' stop on Kakao Map or the Jeonju bus app)"
    },
    "전주 효자동 베이커리카페 명장": {
        "kr": "🚌 전주 시내버스 다수 노선 '한마음병원·전주병원'(효자로) 정류장 하차 후 도보 이동, 효자동은 전주대·전주비전대 방면 노선이 많아 배차가 잦은 편",
        "en": "🚌 Take any Jeonju city bus to the 'Hanmaeum Hospital/Jeonju Hospital' stop on Hyoja-ro, then walk — Hyoja-dong has frequent service since many routes head toward Jeonju University and Jeonju Vision University"
    },
    "전주 서곡 카페 그리너리": {
        "kr": "🚌 전주 시내버스로 '서곡·천잠로' 인근 정류장 하차 후 도보 이동 (정확한 노선번호는 카카오맵·전주 버스 앱에서 '서곡' 정류장 검색 권장)",
        "en": "🚌 Take a Jeonju city bus to a stop near 'Seogok/Cheonjam-ro', then walk (check the exact route number by searching 'Seogok' stop on Kakao Map or the Jeonju bus app)"
    },
}

count = 0
matched_titles = set()
for d in data:
    t = d.get('title_kr')
    if t in updates and d.get('sub') in ('restaurant','cafe') and ('전북' in d.get('addr_kr','') or '전라북도' in d.get('addr_kr','')) and not d.get('getoff_kr','').strip():
        d['getoff_kr'] = updates[t]['kr']
        d['getoff_en'] = updates[t]['en']
        count += 1
        matched_titles.add(t)

print("Updated:", count)
missing = set(updates.keys()) - matched_titles
print("Missing matches:", missing)

json.dump(data, open(path, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
print("Total records:", len(data))
