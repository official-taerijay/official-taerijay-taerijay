# -*- coding: utf-8 -*-
import json

PATH = '/sessions/kind-clever-carson/mnt/taerijay-platform/src/data/daiso.json'

def load():
    with open(PATH, encoding='utf-8') as f:
        return json.load(f)

def save(data):
    with open(PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def make_item(sub, sub_kr, sub_en, sub_order, title_kr, title_en, desc_kr, desc_en,
              brand_kr, price_kr, tips_kr, tips_en, keywords_kr, hashtags):
    price_num = price_kr.replace('원', '').replace(',', '')
    buy_kr = (f"🏪 전국 다이소 매장 화장품/생활용품 코너에서 {brand_kr} 제품 구매 가능▪"
              f"💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪"
              f"💰 가격대: {price_kr}▪"
              f"⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪"
              f"📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨")
    buy_en = (f"🏪 Available at the {brand_kr} section in Daiso stores nationwide▪"
              f"💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪"
              f"💰 Price: {price_num} KRW▪"
              f"⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪"
              f"📌 Language support varies by store and website/homepage availability")
    return {
        "sub": sub,
        "title_kr": title_kr,
        "title_en": title_en,
        "desc_kr": desc_kr,
        "desc_en": desc_en,
        "brand_kr": brand_kr,
        "price_kr": price_kr,
        "tips_kr": tips_kr,
        "tips_en": tips_en,
        "publish_at": "",
        "getoff_kr": "",
        "getoff_en": "",
        "direction_kr": "",
        "direction_en": "",
        "buy_kr": buy_kr,
        "buy_en": buy_en,
        "keywords_kr": keywords_kr,
        "hashtags": hashtags,
        "web": "https://www.daisomall.co.kr/",
        "sub_kr": sub_kr,
        "sub_en": sub_en,
        "sub_free": "",
        "sub_order": sub_order,
    }

haircare_items = [
    ("그로우어스 롱 래스팅 노워시 헤어에센스 밤 미라클", "Growers Long Lasting No-Wash Hair Essence Balm Miracle",
     "씻어내지 않고 젖은 모발에 발라 마무리하는 100ml 노워시 헤어에센스 밤.", "A 100ml no-rinse hair essence balm applied to damp hair before drying.",
     "그로우어스", "3,000원", "장미향이 은은하고 반곱슬 머리를 차분하게 정돈해줘 인기.", "Popular for its subtle rose scent and ability to calm frizzy, semi-curly hair.",
     "다이소 그로우어스 노워시 헤어에센스▪다이소 헤어밤▪그로우어스 미라클▪다이소 헤어에센스 추천", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("정직한실험실 엑스퍼트 너리싱 헤어 마스크", "Honest Lab Expert Nourishing Hair Mask",
     "손상모 영양 공급에 초점을 맞춘 250ml 대용량 헤어 마스크.", "A 250ml large-capacity hair mask focused on nourishing damaged hair.",
     "정직한실험실", "5,000원", "5분간 헤어캡을 씌우고 씻어내면 찰랑임이 살아난다는 후기 다수.", "Many reviewers note noticeably silkier hair after 5 minutes under a shower cap.",
     "다이소 정직한실험실 헤어마스크▪다이소 헤어팩▪정직한실험실 너리싱▪다이소 손상모 케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("정직한실험실 엑스퍼트 하이드레이팅 헤어 마스크", "Honest Lab Expert Hydrating Hair Mask",
     "산뜻한 마무리감의 250ml 수분 공급 헤어 마스크.", "A 250ml moisture-boosting hair mask with a light, airy finish.",
     "정직한실험실", "5,000원", "무거운 제품보다 산뜻한 마무리를 원하는 사람에게 추천.", "Recommended for those who prefer a lighter finish over heavier hair masks.",
     "다이소 정직한실험실 하이드레이팅 마스크▪다이소 헤어팩▪정직한실험실▪다이소 수분 헤어케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("리노이아 실크 트리트먼트", "Rinoia Silk Treatment",
     "머릿결을 매끄럽게 정돈해주는 150ml 트리트먼트.", "A 150ml treatment that smooths and refines hair texture.",
     "리노이아", "3,000원", "가격 대비 효과가 바로 느껴진다는 후기가 많은 스테디셀러.", "A steady seller with many reviews noting immediate results for the price.",
     "다이소 리노이아 실크 트리트먼트▪다이소 트리트먼트▪리노이아▪다이소 헤어케어 추천", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("모다모다 블루비오틴 스칼프 캡슐 트리트먼트", "Modamoda Blue Biotin Scalp Capsule Treatment",
     "비오틴 캡슐 알갱이가 함유된 200ml 두피용 트리트먼트.", "A 200ml scalp treatment containing biotin capsule beads.",
     "모다모다", "5,000원", "뻣뻣한 머릿결을 부드럽게 만들어준다는 후기가 있는 다이소 인기 제품.", "A popular Daiso item noted for softening stiff, coarse hair.",
     "다이소 모다모다 트리트먼트▪다이소 두피케어▪모다모다 블루비오틴▪다이소 스칼프 트리트먼트", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("리노이아 노워시 앰플 에센스", "Rinoia No-Wash Ampoule Essence",
     "씻어내지 않고 사용하는 200ml 스프레이형 앰플 에센스.", "A 200ml spray-type ampoule essence used without rinsing.",
     "리노이아", "5,000원", "분사 후 모발에 가볍게 흡수시켜 가벼운 마무리감을 원할 때 사용.", "Sprayed and lightly absorbed into hair for a light, non-greasy finish.",
     "다이소 리노이아 노워시 앰플▪다이소 헤어에센스▪리노이아▪다이소 스프레이 헤어케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("실크테라피 히트 인핸서 헤어 트리트먼트", "Silk Therapy Heat Enhancer Hair Treatment",
     "고데기 등 열 스타일링 전 사용하는 100ml 꾸덕한 텍스처의 트리트먼트.", "A 100ml thick-textured treatment used before heat styling with irons.",
     "실크테라피", "5,000원", "제형이 꾸덕한 편이라 손상모에 효과가 좋다는 후기가 있음.", "Its thick texture is noted to work especially well on damaged hair.",
     "다이소 실크테라피 트리트먼트▪다이소 열보호 헤어케어▪실크테라피▪다이소 헤어 트리트먼트", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("TS 실키케어 트리트먼트", "TS Silky Care Treatment",
     "TS샴푸와 함께 쓰기 좋은 300g 대용량 트리트먼트.", "A 300g large-capacity treatment designed to pair with TS shampoo.",
     "TS", "5,000원", "샴푸와 세트로 구매해 함께 쓰면 가성비가 좋다는 후기.", "Often bought as a set with the matching shampoo for better value.",
     "다이소 TS 트리트먼트▪다이소 헤어케어▪TS 실키케어▪다이소 샴푸 세트", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("RGIII 레드진생 스칼프 헤어팩", "RGIII Red Ginseng Scalp Hair Pack",
     "홍삼 추출물이 함유된 200ml 두피 전용 헤어팩.", "A 200ml scalp-focused hair pack containing red ginseng extract.",
     "RGIII", "5,000원", "두피에도 사용 가능해 자극 없이 편하게 쓸 수 있다는 후기.", "Reviewers note it can be used directly on the scalp without irritation.",
     "다이소 RGIII 헤어팩▪다이소 두피케어▪RGIII 레드진생▪다이소 탈모케어 헤어팩", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("리노이아 워터 트리트먼트", "Rinoia Water Treatment",
     "가볍게 흡수되는 200ml 워터 타입 트리트먼트.", "A 200ml water-type treatment that absorbs quickly and lightly.",
     "리노이아", "5,000원", "저렴한 가격 대비 평균 이상의 효과라는 평이 많은 제품.", "Widely reviewed as delivering above-average results for the price.",
     "다이소 리노이아 워터 트리트먼트▪다이소 헤어케어▪리노이아▪다이소 워터 트리트먼트", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("헤어플러스 단백질 본드 앰플 에센스 플라워 가든", "Hair Plus Protein Bond Ampoule Essence Flower Garden",
     "장미향이 나는 65ml 단백질 본드 앰플 에센스.", "A 65ml protein-bond ampoule essence with a rose fragrance.",
     "헤어플러스", "5,000원", "손상모 개선용으로 찾는 사람이 많은 향 좋은 헤어에센스.", "A fragrant hair essence popular among those targeting damaged hair repair.",
     "다이소 헤어플러스 앰플에센스▪다이소 헤어케어▪헤어플러스 단백질본드▪다이소 헤어에센스", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("케라시스 어드밴스드 10X 리페어 앰플 헤어팩", "Kerasys Advanced 10X Repair Ampoule Hair Pack",
     "손상모 결 정돈에 초점을 맞춘 150ml 앰플형 헤어팩.", "A 150ml ampoule-type hair pack focused on smoothing damaged hair.",
     "케라시스", "3,000원", "장마철 등 습한 날씨에 부스스한 머리 정돈용으로 추천.", "Recommended for taming frizz during humid or rainy weather.",
     "다이소 케라시스 리페어 헤어팩▪다이소 헤어팩▪케라시스 10X▪다이소 손상모 케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("그로우어스 롱 래스팅 노워시 헤어에센스 밤 딥 모이스춰", "Growers Long Lasting No-Wash Hair Essence Balm Deep Moisture",
     "수분 부족으로 푸석한 모발을 위한 100ml 노워시 헤어에센스 밤.", "A 100ml no-rinse hair essence balm for hair that feels dry from lack of moisture.",
     "그로우어스", "3,000원", "크림이나 로션처럼 가벼운 텍스처로 끈적임이 적다는 후기.", "Noted for a lightweight, cream-like texture with little stickiness.",
     "다이소 그로우어스 딥모이스춰▪다이소 헤어에센스▪그로우어스▪다이소 수분 헤어케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("RGIII 레드진생 스칼프 토닉", "RGIII Red Ginseng Scalp Tonic",
     "6년근 홍삼 성분이 함유된 100ml 두피 토닉.", "A 100ml scalp tonic formulated with 6-year-old red ginseng extract.",
     "RGIII", "3,000원", "탈모 증상 완화에 도움을 준다는 기능성 화장품으로 인기.", "Popular as a functional cosmetic aimed at easing hair-loss symptoms.",
     "다이소 RGIII 스칼프토닉▪다이소 탈모케어▪RGIII 레드진생▪다이소 두피토닉", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("그로우어스 롱 래스팅 노워시 헤어에센스 밤 컬링", "Growers Long Lasting No-Wash Hair Essence Balm Curling",
     "펌 머리 컬 유지에 초점을 맞춘 100ml 노워시 밤.", "A 100ml no-rinse balm formulated to help maintain perm curls.",
     "그로우어스", "3,000원", "노워시 타입이라 드라이 없이 편하게 바로 사용 가능.", "The no-rinse formula makes it convenient to apply without blow-drying.",
     "다이소 그로우어스 컬링밤▪다이소 헤어에센스▪그로우어스▪다이소 펌 헤어케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("정직한실험실 엑스퍼트 하이드레이팅 노워시 트리트먼트", "Honest Lab Expert Hydrating No-Wash Treatment",
     "씻어내지 않고 사용하는 120ml 수분 공급 트리트먼트.", "A 120ml no-rinse treatment delivering moisture without washout.",
     "정직한실험실", "3,000원", "향이 좋고 머릿결이 부드러워진다는 후기가 많은 제품.", "Frequently praised for its pleasant scent and softening effect on hair.",
     "다이소 정직한실험실 노워시 트리트먼트▪다이소 헤어케어▪정직한실험실▪다이소 노워시 헤어제품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("정직한실험실 엑스퍼트 너리싱 노워시 트리트먼트", "Honest Lab Expert Nourishing No-Wash Treatment",
     "영양 공급에 초점을 둔 120ml 노워시 트리트먼트.", "A 120ml no-rinse treatment focused on nourishing hair strands.",
     "정직한실험실", "3,000원", "가볍게 발리고 잘 엉키지 않게 도와준다는 후기.", "Reviewers note it applies lightly and helps reduce tangling.",
     "다이소 정직한실험실 너리싱 트리트먼트▪다이소 헤어케어▪정직한실험실▪다이소 노워시 트리트먼트", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("스카이보틀 딥 모이스처 퍼퓸 노워시 트리트먼트 라이크 어 넥타린", "Skybottle Deep Moisture Perfume No-Wash Treatment Like a Nectarine",
     "향에 초점을 맞춘 100ml 퍼퓸 노워시 트리트먼트.", "A 100ml fragrance-forward no-wash treatment with a perfume-like scent.",
     "스카이보틀", "3,000원", "다이소에서 쉽게 구할 수 있는 접근성 좋은 향수 트리트먼트.", "Valued for being an easily accessible, perfume-scented treatment at Daiso.",
     "다이소 스카이보틀 트리트먼트▪다이소 퍼퓸 헤어케어▪스카이보틀 넥타린▪다이소 향수 트리트먼트", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("쿤달 리치 퍼퓸 트리트먼트 화이트머스크", "Kundal Rich Perfume Treatment White Musk",
     "화이트머스크 향이 특징인 트리트먼트.", "A treatment defined by its signature white musk fragrance.",
     "쿤달", "5,000원", "향이 은은하고 자극적이지 않아 데일리로 무난하게 사용 가능.", "The subtle, non-overpowering scent makes it suitable for everyday use.",
     "다이소 쿤달 트리트먼트▪다이소 퍼퓸 헤어케어▪쿤달 화이트머스크▪다이소 향수 헤어제품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
    ("프리그리드 매트앤스무스 컬크림", "Freegrid Matte & Smooth Curl Cream",
     "펌 머리 컬 고정에 사용하는 110ml 컬크림.", "A 110ml curl cream used to define and hold permed curls.",
     "프리그리드", "3,000원", "고정력이 좋고 대용량이라 가성비 좋다는 후기가 많음.", "Widely praised for strong hold and great value given its large volume.",
     "다이소 프리그리드 컬크림▪다이소 헤어스타일링▪프리그리드 매트앤스무스▪다이소 펌 헤어제품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HairCare"),
]

data = load()
existing = set(item['title_kr'] for item in data)
added = 0
for args in haircare_items:
    if args[0] in existing:
        continue
    data.append(make_item("haircare", "헤어케어", "Hair Care", 6, *args))
    existing.add(args[0])
    added += 1
save(data)
print("haircare added:", added)
