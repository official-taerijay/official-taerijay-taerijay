# -*- coding: utf-8 -*-
import json

PATH = "src/data/protocol.json"

with open(PATH, encoding="utf-8") as f:
    data = json.load(f)

# Mapping by title_kr (exact match against file) -> (getoff_kr, getoff_en)
updates = {}

# ---- Anguk Station cluster (Insadong / Bukchon / Samcheong) ----
# Confirmed: Anguk Stn Line 3 Exit 6 -> Insadong-gil entrance (walk ~3min)
# Confirmed buses at Anguk Stn/Jongno Police Station/Insadong stop: Blue 109, 151, 162, 172, 401, 406, 704
# Blue 601, Green 606(actually blue), mall bus Jongno01/02 at Exit 2 stop
# We'll use the well-confirmed set: Blue 102,171,172,272 not confirmed - stick to what was verified:
# Verified from search: Blue 171 (Anguk Stn/Jongno Police Station/Insadong stop), Blue 109, Blue 601 (separate stop),
# Village bus Jongno01, Jongno02 at Exit 2 stop [01-805]

updates["경인미술관 전통다원"] = (
    "🚇 지하철 3호선 안국역 6번 출구 하차 (도보 3분, 인사동길 초입) / 🚌 마을버스 종로02 안국역 정류장 하차",
    "🚇 Subway Line 3 Anguk Stn. (Exit 6, 3-min walk to Insadong-gil entrance) / 🚌 Village Bus Jongno02 at Anguk Stn. stop"
)
updates["옛찻집"] = (
    "🚇 지하철 3호선 안국역 6번 출구 하차 (도보 3분, 인사동길 진입) / 🚌 마을버스 종로02 안국역 정류장 하차",
    "🚇 Subway Line 3 Anguk Stn. (Exit 6, 3-min walk into Insadong-gil) / 🚌 Village Bus Jongno02 at Anguk Stn. stop"
)
updates["산촌 본점"] = (
    "🚇 지하철 3호선 안국역 6번 출구 하차 (도보 5분, 인사동길 안쪽) / 🚌 마을버스 종로02 안국역 정류장 하차",
    "🚇 Subway Line 3 Anguk Stn. (Exit 6, 5-min walk inside Insadong-gil) / 🚌 Village Bus Jongno02 at Anguk Stn. stop"
)
updates["오설록 티하우스 MMCA"] = (
    "🚇 지하철 3호선 안국역 하차 (1번 출구, 도보 10분, 국립현대미술관 서울관 방향) / 🚌 마을버스 종로02 안국역 정류장 하차",
    "🚇 Subway Line 3 Anguk Stn. (Exit 1, 10-min walk toward MMCA Seoul) / 🚌 Village Bus Jongno02 at Anguk Stn. stop"
)
updates["블루보틀 삼청"] = (
    "🚇 지하철 3호선 안국역 2번 출구 하차 (도보 10분, 삼청동길 방향) / 🚌 마을버스 종로02 안국역 정류장 하차",
    "🚇 Subway Line 3 Anguk Stn. (Exit 2, 10-min walk toward Samcheong-dong-gil) / 🚌 Village Bus Jongno02 at Anguk Stn. stop"
)
updates["블루보틀 삼청 한옥"] = (
    "🚇 지하철 3호선 안국역 1번 출구 하차 (도보 12분, 북촌로 방향) / 🚌 마을버스 종로02 안국역 정류장 하차",
    "🚇 Subway Line 3 Anguk Stn. (Exit 1, 12-min walk toward Bukchon-ro) / 🚌 Village Bus Jongno02 at Anguk Stn. stop"
)
updates["카페 레이어드 (안국점)"] = (
    "🚇 지하철 3호선 안국역 하차 (2번 출구, 도보 5분, 북촌로2길) / 🚌 마을버스 종로02 안국역 정류장 하차",
    "🚇 Subway Line 3 Anguk Stn. (Exit 2, 5-min walk, Bukchon-ro 2-gil) / 🚌 Village Bus Jongno02 at Anguk Stn. stop"
)

# ---- Gyeongbokgung Station cluster (Seochon / Hyoja-ro / Jahamun-ro) ----
# Confirmed Exit 3 stop '경복궁역' buses: Green 1020, 1711, 7016, 7018, 7022, 7212
updates["토속촌 삼계탕"] = (
    "🚇 지하철 3호선 경복궁역 2번 출구 하차 (도보 5분) / 🚌 초록 1020, 1711, 7016, 7018, 7022, 7212 경복궁역 정류장 하차",
    "🚇 Subway Line 3 Gyeongbokgung Stn. (Exit 2, 5-min walk) / 🚌 Bus Green 1020, 1711, 7016, 7018, 7022, 7212 at Gyeongbokgung Stn. stop"
)
updates["카멜커피 서촌점"] = (
    "🚇 지하철 3호선 경복궁역 3번 출구 하차 (도보 10분) / 🚌 초록 1020, 1711, 7016, 7018, 7022, 7212 경복궁역 정류장 하차",
    "🚇 Subway Line 3 Gyeongbokgung Stn. (Exit 3, 10-min walk) / 🚌 Bus Green 1020, 1711, 7016, 7018, 7022, 7212 at Gyeongbokgung Stn. stop"
)
updates["통인동커피공방 위켄드"] = (
    "🚇 지하철 3호선 경복궁역 하차 (2번 출구, 도보 8분, 자하문로1길) / 🚌 초록 1020, 1711, 7016, 7018, 7022, 7212 경복궁역 정류장 하차",
    "🚇 Subway Line 3 Gyeongbokgung Stn. (Exit 2, 8-min walk, Jahamun-ro 1-gil) / 🚌 Bus Green 1020, 1711, 7016, 7018, 7022, 7212 at Gyeongbokgung Stn. stop"
)
updates["인텔리젠시아 서촌"] = (
    "🚇 지하철 3호선 경복궁역 2번 출구 하차 (도보 7분, 자하문로) / 🚌 초록 1020, 1711, 7016, 7018, 7022, 7212 경복궁역 정류장 하차",
    "🚇 Subway Line 3 Gyeongbokgung Stn. (Exit 2, 7-min walk, Jahamun-ro) / 🚌 Bus Green 1020, 1711, 7016, 7018, 7022, 7212 at Gyeongbokgung Stn. stop"
)
updates["서촌계단집"] = (
    "🚇 지하철 3호선 경복궁역 2번 출구 하차 (도보 8분, 자하문로1길) / 🚌 초록 1020, 1711, 7016, 7018, 7022, 7212 경복궁역 정류장 하차",
    "🚇 Subway Line 3 Gyeongbokgung Stn. (Exit 2, 8-min walk, Jahamun-ro 1-gil) / 🚌 Bus Green 1020, 1711, 7016, 7018, 7022, 7212 at Gyeongbokgung Stn. stop"
)

# ---- Gwanghwamun Station cluster ----
# Confirmed at '광화문(세종문화회관)' stop: Blue 103,150,401,402,406,470,600,602,700,704,707,720 / Green 1711,7016,7018,7019,7022,7212
# Confirmed at '종로1가' stop: Blue 101,103,109,150,160,260,270,271,273,370,470,501,601,606,720,721 / Green 1020,7212
updates["광화문 직장인 회식 성지 (무교동낙지 등 무교동 낙지골목)"] = (
    "🚇 지하철 5호선 광화문역 3번 출구 하차 / 🚇 지하철 1호선 종각역 3-1번 출구 하차 (도보 5분) / 🚌 파랑 101, 103, 150, 160, 260, 270, 271, 273, 370, 470, 501, 601, 606, 720, 721 · 초록 1020, 7212 종로1가 정류장 하차",
    "🚇 Subway Line 5 Gwanghwamun Stn. Exit 3 / 🚇 Subway Line 1 Jonggak Stn. Exit 3-1 (5-min walk) / 🚌 Bus Blue 101, 103, 150, 160, 260, 270, 271, 273, 370, 470, 501, 601, 606, 720, 721 · Green 1020, 7212 at Jongno 1-ga stop"
)
updates["블루보틀 광화문"] = (
    "🚇 지하철 5호선 광화문역 5번 출구 하차 (도보 3분) / 🚌 파랑 103, 150, 401, 402, 406, 470, 600, 602, 700, 704, 707, 720 · 초록 1711, 7016, 7018, 7019, 7022, 7212 광화문(세종문화회관) 정류장 하차",
    "🚇 Subway Line 5 Gwanghwamun Stn. Exit 5 (3-min walk) / 🚌 Bus Blue 103, 150, 401, 402, 406, 470, 600, 602, 700, 704, 707, 720 · Green 1711, 7016, 7018, 7019, 7022, 7212 at Gwanghwamun (Sejong Center) stop"
)
updates["펠트커피 (광화문점)"] = (
    "🚇 지하철 5호선 광화문역 하차 (2번 출구, 도보 5분, 종로 방향) / 🚇 지하철 1호선 종각역 3-1번 출구 하차 (도보 8분) / 🚌 파랑 101, 103, 150, 160, 260, 270, 271, 273, 370, 470, 501, 601, 606, 720, 721 · 초록 1020, 7212 종로1가 정류장 하차",
    "🚇 Subway Line 5 Gwanghwamun Stn. (Exit 2, 5-min walk toward Jongno) / 🚇 Subway Line 1 Jonggak Stn. (Exit 3-1, 8-min walk) / 🚌 Bus Blue 101, 103, 150, 160, 260, 270, 271, 273, 370, 470, 501, 601, 606, 720, 721 · Green 1020, 7212 at Jongno 1-ga stop"
)
updates["포비 (광화문점)"] = (
    "🚇 지하철 5호선 광화문역 하차 (2번 출구, 도보 6분) / 🚇 지하철 1호선 종각역 3-1번 출구 하차 (도보 7분) / 🚌 파랑 101, 103, 150, 160, 260, 270, 271, 273, 370, 470, 501, 601, 606, 720, 721 · 초록 1020, 7212 종로1가 정류장 하차",
    "🚇 Subway Line 5 Gwanghwamun Stn. (Exit 2, 6-min walk) / 🚇 Subway Line 1 Jonggak Stn. (Exit 3-1, 7-min walk) / 🚌 Bus Blue 101, 103, 150, 160, 260, 270, 271, 273, 370, 470, 501, 601, 606, 720, 721 · Green 1020, 7212 at Jongno 1-ga stop"
)

# ---- Jonggak Station ----
updates["이문설농탕"] = (
    "🚇 지하철 1호선 종각역 3-1번 출구 하차 (도보 3분) / 🚇 지하철 3호선 안국역 6번 출구 하차 (도보 10분) / 🚌 파랑 101, 103, 150, 160, 260, 270, 271, 273, 370, 470, 501, 601, 606, 720, 721 · 초록 1020, 7212 종로1가 정류장 하차",
    "🚇 Subway Line 1 Jonggak Stn. (Exit 3-1, 3-min walk) / 🚇 Subway Line 3 Anguk Stn. (Exit 6, 10-min walk) / 🚌 Bus Blue 101, 103, 150, 160, 260, 270, 271, 273, 370, 470, 501, 601, 606, 720, 721 · Green 1020, 7212 at Jongno 1-ga stop"
)

# ---- Jongno 3-ga Station cluster (Ikseon-dong / Susupyo-ro) ----
updates["해천어부"] = (
    "🚇 지하철 1·3·5호선 종로3가역 4번 출구 하차 (도보 3분)",
    "🚇 Subway Line 1, 3, 5 Jongno 3-ga Stn. (Exit 4, 3-min walk)"
)
updates["동백양과점"] = (
    "🚇 지하철 1·3·5호선 종로3가역 4번 출구 하차 (도보 3분)",
    "🚇 Subway Line 1, 3, 5 Jongno 3-ga Stn. (Exit 4, 3-min walk)"
)
updates["간판없는가게 익선동"] = (
    "🚇 지하철 1·3·5호선 종로3가역 4번 출구 하차 (도보 3분, 익선동 한옥거리)",
    "🚇 Subway Line 1, 3, 5 Jongno 3-ga Stn. (Exit 4, 3-min walk to Ikseon-dong hanok street)"
)
updates["하이웨스트 (익선점)"] = (
    "🚇 지하철 1·3·5호선 종로3가역 4번 출구 하차 (도보 3분, 익선동 한옥거리)",
    "🚇 Subway Line 1, 3, 5 Jongno 3-ga Stn. (Exit 4, 3-min walk to Ikseon-dong hanok street)"
)

# ---- Jongno 5-ga / Dongdaemun cluster (Gwangjang Market / Nakji-golmok) ----
updates["진옥화할매원조닭한마리"] = (
    "🚇 지하철 1·4호선 동대문역 하차 (8번 출구, 도보 5분) / 🚇 지하철 1호선 종로5가역 하차 (9번 출구, 도보 7분)",
    "🚇 Subway Line 1, 4 Dongdaemun Stn. (Exit 8, 5-min walk) / 🚇 Subway Line 1 Jongno 5(o)-ga Stn. (Exit 9, 7-min walk)"
)
updates["명동닭한마리 시조점"] = (
    "🚇 지하철 1호선 종로5가역 하차 (9번 출구, 도보 5분) / 🚇 지하철 1·4호선 동대문역 하차 (8번 출구, 도보 7분)",
    "🚇 Subway Line 1 Jongno 5(o)-ga Stn. (Exit 9, 5-min walk) / 🚇 Subway Line 1, 4 Dongdaemun Stn. (Exit 8, 7-min walk)"
)
updates["순희네빈대떡"] = (
    "🚇 지하철 1호선 종로5가역 하차 (8번 출구, 도보 1분, 광장시장 동문)",
    "🚇 Subway Line 1 Jongno 5(o)-ga Stn. (Exit 8, 1-min walk to Gwangjang Market east gate)"
)
updates["광장시장 순희네빈대떡"] = (
    "🚇 지하철 1호선 종로5가역 하차 (8번 출구, 도보 1분, 광장시장 동문)",
    "🚇 Subway Line 1 Jongno 5(o)-ga Stn. (Exit 8, 1-min walk to Gwangjang Market east gate)"
)
updates["광장시장 육회자매집"] = (
    "🚇 지하철 1호선 종로5가역 하차 (8번 출구, 도보 2분, 광장시장 내부)",
    "🚇 Subway Line 1 Jongno 5(o)-ga Stn. (Exit 8, 2-min walk into Gwangjang Market)"
)
updates["창진동해장국"] = (
    "🚇 지하철 1호선 종각역 하차 (3-1번 출구, 도보 5분) / 🚇 지하철 3호선 안국역 하차 (6번 출구, 도보 8분)",
    "🚇 Subway Line 1 Jonggak Stn. (Exit 3-1, 5-min walk) / 🚇 Subway Line 3 Anguk Stn. (Exit 6, 8-min walk)"
)

print(len(updates), "entries prepared")

changed = []
title_set = set(updates.keys())
for item in data:
    t = item.get("title_kr")
    if t in updates:
        kr, en = updates[t]
        item["getoff_kr"] = kr
        item["getoff_en"] = en
        changed.append(t)

missing = title_set - set(changed)
print("changed:", len(changed))
print("missing (not found in data):", missing)

with open(PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("saved")
