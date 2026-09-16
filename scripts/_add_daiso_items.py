# -*- coding: utf-8 -*-
import json

PATH = "src/data/daiso.json"

with open(PATH, encoding="utf-8") as f:
    data = json.load(f)

before_count = len(data)

new_items = []

# ========== bodycare (sub_order 7) ==========
new_items.append({
    "sub": "bodycare",
    "title_kr": "우레아 10 풋크림 100ml",
    "title_en": "Urea 10 Foot Cream 100ml",
    "desc_kr": "요소(우레아) 10% 함유로 발뒤꿈치 각질과 건조함을 집중 케어하는 풋크림. 다이소몰 풋케어 카테고리 스테디셀러로 꾸준히 재구매되는 가성비템.",
    "desc_en": "A foot cream containing 10% urea that intensively cares for cracked heels and dry skin. A steady bestseller in Daiso Mall's foot care category, known for its value and repeat purchases.",
    "brand_kr": "다이소",
    "price_kr": "2,000원",
    "tips_kr": "밤에 두껍게 바르고 양말을 신은 채 자면 각질 관리 효과가 더 좋다는 후기가 많음.",
    "tips_en": "Many reviewers recommend applying a thick layer at night and sleeping with socks on for better exfoliating results.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 바디케어/풋케어 코너에서 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 2,000원▪⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available in the body care/foot care section at Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 2,000 KRW▪⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 우레아 10 풋크림▪다이소 풋크림▪우레아 풋크림▪다이소 바디케어▪다이소 각질 관리",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "바디케어",
    "sub_en": "Body Care",
    "sub_free": "",
    "sub_order": 7
})

new_items.append({
    "sub": "bodycare",
    "title_kr": "아트릭스 핸드크림 75ml",
    "title_en": "Atrix Hand Cream 75ml",
    "desc_kr": "국민 핸드크림으로 알려진 아트릭스가 다이소 전용 용량으로 입점한 제품. 건조한 손을 산뜻하게 보습하며 저렴한 가격으로 부담 없이 재구매 가능.",
    "desc_en": "Atrix, a widely loved national hand cream brand, sold at Daiso in a special size. It moisturizes dry hands without a greasy feel, and the low price makes repeat purchases easy.",
    "brand_kr": "아트릭스",
    "price_kr": "3,000원",
    "tips_kr": "손 뿐 아니라 팔꿈치, 무릎 등 건조한 부위 어디든 사용 가능.",
    "tips_en": "Can be used not just on hands but also on dry areas like elbows and knees.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 바디케어 코너에서 아트릭스 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 3,000원▪⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the body care section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 3,000 KRW▪⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 아트릭스 핸드크림▪아트릭스▪다이소 핸드크림▪다이소 바디케어",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪HandCream",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "바디케어",
    "sub_en": "Body Care",
    "sub_free": "",
    "sub_order": 7
})

new_items.append({
    "sub": "bodycare",
    "title_kr": "[로지립스]바세린 립 테라피 4.8g",
    "title_en": "[Rosy Lips] Vaseline Lip Therapy 4.8g",
    "desc_kr": "페트롤리움 젤리 성분의 스틱형 립밤으로 입술뿐 아니라 건조한 손끝, 팔꿈치 등에도 사용 가능한 다용도 보습템. 다이소몰 립메이크업 카테고리 판매 상품.",
    "desc_en": "A stick-type lip balm made with petroleum jelly, versatile enough to use on dry fingertips and elbows as well as lips. Sold in Daiso Mall's lip makeup category.",
    "brand_kr": "바세린",
    "price_kr": "3,000원",
    "tips_kr": "무향·무색 제형이라 향에 예민한 사람도 부담 없이 사용 가능.",
    "tips_en": "Fragrance-free and colorless, making it suitable even for those sensitive to scents.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 바디케어/립메이크업 코너에서 바세린 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 3,000원▪⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the body care/lip makeup section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 3,000 KRW▪⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 바세린 립 테라피▪바세린 로지립스▪다이소 바세린▪다이소 바디케어▪다이소 립밤",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪LipBalm",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "바디케어",
    "sub_en": "Body Care",
    "sub_free": "",
    "sub_order": 7
})

# ========== perfume (sub_order 8) ==========
new_items.append({
    "sub": "perfume",
    "title_kr": "데일리콤마 벨로 드 퍼퓸 기프트세트 퓨어블루(고체향수+크림퍼퓸)",
    "title_en": "Daily Comma Bello de Parfum Gift Set Pure Blue (Solid Perfume + Cream Perfume)",
    "desc_kr": "고체 향수와 크림 퍼퓸을 함께 구성한 데일리콤마의 기프트세트. 퓨어블루 향으로 산뜻한 프레시 계열을 선호하는 사람에게 어울리며 휴대성이 좋아 선물용으로도 인기.",
    "desc_en": "A Daily Comma gift set pairing a solid perfume with a cream perfume. The Pure Blue scent suits those who like fresh, clean fragrances, and its portability makes it a popular gift item.",
    "brand_kr": "데일리콤마",
    "price_kr": "5,000원",
    "tips_kr": "고체 향수는 손목이나 목 뒤에 가볍게 두드려 바르면 은은하게 지속됨.",
    "tips_en": "Lightly dab the solid perfume onto your wrists or the back of your neck for a subtle, lasting scent.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 향수 코너에서 데일리콤마 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 5,000원▪⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the perfume section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 5,000 KRW▪⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 데일리콤마 벨로 드 퍼퓸 기프트세트▪데일리콤마 퓨어블루▪다이소 향수 기프트세트▪다이소 고체향수",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪Perfume",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "향수",
    "sub_en": "Perfume",
    "sub_free": "",
    "sub_order": 8
})

new_items.append({
    "sub": "perfume",
    "title_kr": "데일리콤마 벨로 드 퍼퓸 기프트세트 슈가클라우드(고체향수+크림퍼퓸)",
    "title_en": "Daily Comma Bello de Parfum Gift Set Sugar Cloud (Solid Perfume + Cream Perfume)",
    "desc_kr": "고체 향수와 크림 퍼퓸을 함께 구성한 데일리콤마의 기프트세트. 슈가클라우드 향으로 달콤하고 포근한 향을 선호하는 사람에게 어울리는 구성.",
    "desc_en": "A Daily Comma gift set pairing a solid perfume with a cream perfume. The Sugar Cloud scent suits those who prefer sweet, cozy fragrances.",
    "brand_kr": "데일리콤마",
    "price_kr": "5,000원",
    "tips_kr": "크림 퍼퓸은 고체 향수보다 지속력이 짧으니 외출 전 덧발라주는 것을 추천.",
    "tips_en": "The cream perfume has a shorter lasting power than the solid perfume, so reapplying before heading out is recommended.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 향수 코너에서 데일리콤마 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 5,000원▪⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the perfume section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 5,000 KRW▪⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 데일리콤마 벨로 드 퍼퓸 기프트세트▪데일리콤마 슈가클라우드▪다이소 향수 기프트세트▪다이소 고체향수",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪Perfume",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "향수",
    "sub_en": "Perfume",
    "sub_free": "",
    "sub_order": 8
})

new_items.append({
    "sub": "perfume",
    "title_kr": "[플라워블러쉬]데일리콤마 벨로 드 퍼퓸 핸드크림 50ml",
    "title_en": "[Flower Blush] Daily Comma Bello de Parfum Hand Cream 50ml",
    "desc_kr": "향수 라인과 세트로 즐길 수 있는 데일리콤마의 퍼퓸 핸드크림. 3종 특허 성분을 함유해 보습과 함께 은은한 플라워블러쉬 향이 지속되는 제품.",
    "desc_en": "A perfumed hand cream from Daily Comma designed to pair with their fragrance line. Contains three patented ingredients for moisture, with a lingering Flower Blush scent.",
    "brand_kr": "데일리콤마",
    "price_kr": "2,000원",
    "tips_kr": "같은 향의 데일리콤마 향수 라인과 레이어링하면 향의 지속력이 좋아짐.",
    "tips_en": "Layering with the matching Daily Comma perfume line helps the scent last longer.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 향수/핸드케어 코너에서 데일리콤마 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 2,000원▪⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the perfume/hand care section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 2,000 KRW▪⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 데일리콤마 벨로 드 퍼퓸 핸드크림▪데일리콤마 플라워블러쉬▪다이소 퍼퓸 핸드크림▪다이소 향수",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪Perfume",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "향수",
    "sub_en": "Perfume",
    "sub_free": "",
    "sub_order": 8
})

# ========== beauty-tools (sub_order 9) ==========
new_items.append({
    "sub": "beauty-tools",
    "title_kr": "[광채물먹]퍼피 광채쿠션 워터퍼프",
    "title_en": "[Glow Water-Soaked] Puffy Glow Cushion Water Puff",
    "desc_kr": "물에 적시면 볼록하게 부풀어 오르는 워터퍼프로, 쿠션 파운데이션을 얇고 밀착력 있게 발라주는 것이 특징. 출시 이후 다이소 매장과 온라인몰에서 가장 먼저 품절되는 뷰티소품으로 꼽힌다.",
    "desc_en": "A water puff that plumps up when soaked in water, applying cushion foundation thinly with strong adherence. Known as one of the beauty tools that sells out first at Daiso stores and online.",
    "brand_kr": "다이소",
    "price_kr": "1,000원",
    "tips_kr": "사용 전 찬물에 완전히 적신 뒤 꼭 짜서 사용하면 밀착력이 더 좋아짐.",
    "tips_en": "Soak fully in cold water and squeeze out excess before use for even better adherence.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 메이크업소품 코너에서 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 1,000원▪⚠️ 품절이 잦은 인기 상품이므로 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the makeup tools section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 1,000 KRW▪⚠️ Frequently sells out, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 퍼피 광채쿠션 워터퍼프▪다이소 워터퍼프▪다이소 뷰티소품▪다이소 퍼프",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "뷰티 소품",
    "sub_en": "Beauty Tools",
    "sub_free": "",
    "sub_order": 9
})

new_items.append({
    "sub": "beauty-tools",
    "title_kr": "그로우어스 롱래스팅 클리어 앤 틴팅 2IN1 래쉬세럼",
    "title_en": "Growus Long Lasting Clear & Tinting 2-in-1 Lash Serum",
    "desc_kr": "블랙 젤 제형의 틴팅 세럼과 속눈썹 영양 세럼이 합쳐진 2in1 제품. 다이소와 그로우어스 협업 라인 중 하나로, 다이소몰 전체 판매 랭킹 1위에 오르며 월평균 2만 개가 판매되는 스테디 인기템.",
    "desc_en": "A 2-in-1 product combining a black gel tinting serum with a lash-nourishing serum. Part of the Daiso x Growus collaboration line, it topped Daiso Mall's overall sales ranking and sells around 20,000 units monthly.",
    "brand_kr": "그로우어스",
    "price_kr": "5,000원",
    "tips_kr": "속눈썹 뿌리부터 끝까지 빗듯이 발라주면 마스카라를 한 듯한 또렷한 효과를 볼 수 있음.",
    "tips_en": "Apply from root to tip like combing for a mascara-like defined effect.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 아이메이크업 코너에서 그로우어스 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 5,000원▪⚠️ 인기 상품으로 품절이 잦아 재입고 알림 신청 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the eye makeup section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 5,000 KRW▪⚠️ Frequently sells out due to popularity — restock alerts are recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 그로우어스 래쉬세럼▪그로우어스 틴팅 래쉬세럼▪다이소 속눈썹 영양제▪다이소 뷰티소품",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "뷰티 소품",
    "sub_en": "Beauty Tools",
    "sub_free": "",
    "sub_order": 9
})

new_items.append({
    "sub": "beauty-tools",
    "title_kr": "워터 퍼프 2개입&케이스 세트",
    "title_en": "Water Puff 2-Piece & Case Set",
    "desc_kr": "휴대용 케이스가 함께 구성된 워터퍼프 세트로, 외출 시에도 위생적으로 보관하며 파운데이션을 덧바를 수 있는 실용템.",
    "desc_en": "A water puff set that comes with a portable case, allowing hygienic storage and touch-ups on the go.",
    "brand_kr": "다이소",
    "price_kr": "1,000원",
    "tips_kr": "케이스에 통풍구가 없는 경우가 많으니 완전히 건조 후 보관하는 것을 권장.",
    "tips_en": "Many cases lack ventilation, so it's best to fully dry the puff before storing it.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 메이크업소품 코너에서 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 1,000원▪⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the makeup tools section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 1,000 KRW▪⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 워터퍼프 케이스 세트▪다이소 퍼프 세트▪다이소 뷰티소품▪다이소 메이크업소품",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "뷰티 소품",
    "sub_en": "Beauty Tools",
    "sub_free": "",
    "sub_order": 9
})

# ========== gender-care (sub_order 10) ==========
new_items.append({
    "sub": "gender-care",
    "title_kr": "퓨어 깨끗한 생리대 10매입",
    "title_en": "Pure Kkaekkeuthan Sanitary Pads 10-pack",
    "desc_kr": "다이소가 깨끗한나라와 협업해 선보인 초저가 생리대로 10매에 1,000원. 천연유래 펄프 흡수체를 적용했고 위생용품 기준 및 규격 시험, 유해물질 안전성 검사를 거쳐 생산된다.",
    "desc_en": "An ultra-low-cost sanitary pad developed by Daiso in collaboration with Kkaekkeuthan-nara, priced at 1,000 KRW for 10 pads. Made with natural pulp absorbent material and produced under hygiene product standards and safety testing for harmful substances.",
    "brand_kr": "깨끗한나라",
    "price_kr": "1,000원",
    "tips_kr": "소포장(10매) 구성이라 휴대용이나 비상용으로 여러 개 구매해두기 좋음.",
    "tips_en": "The small 10-pack size makes it convenient to buy several for travel or emergency use.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 생리/위생용품 코너에서 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 1,000원▪⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the sanitary/hygiene products section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 1,000 KRW▪⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 퓨어 깨끗한 생리대▪다이소 생리대▪깨끗한나라 다이소▪다이소 여성용품",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪WomensCare",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "남성용품·여성용품",
    "sub_en": "Men & Women Care",
    "sub_free": "",
    "sub_order": 10
})

new_items.append({
    "sub": "gender-care",
    "title_kr": "귀애랑 울트라슬림 생리대(대형) 10개입",
    "title_en": "Kwiaerang Ultra Slim Sanitary Pads (Large) 10-pack",
    "desc_kr": "얇으면서도 흡수력을 갖춘 울트라슬림 타입 생리대로 다이소 생리/위생용품 코너의 스테디셀러. 대형 사이즈로 야간이나 생리량이 많은 날 사용하기 좋다.",
    "desc_en": "An ultra-slim sanitary pad that stays thin while offering solid absorption, a steady seller in Daiso's sanitary products section. The large size is suited for nighttime or heavy-flow days.",
    "brand_kr": "귀애랑",
    "price_kr": "3,000원",
    "tips_kr": "야간용으로 쓸 경우 날개형 제품과 함께 겹쳐 쓰면 새는 것을 방지할 수 있음.",
    "tips_en": "For nighttime use, layering with a winged pad can help prevent leaks.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 생리/위생용품 코너에서 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 3,000원▪⚠️ 매장별 재고가 다를 수 있으니 방문 전 다이소몰 재고 확인 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the sanitary/hygiene products section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 3,000 KRW▪⚠️ Stock varies by branch, so checking Daiso Mall inventory beforehand is recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 귀애랑 생리대▪다이소 울트라슬림 생리대▪다이소 여성용품▪다이소 생리대",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪WomensCare",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "남성용품·여성용품",
    "sub_en": "Men & Women Care",
    "sub_free": "",
    "sub_order": 10
})

new_items.append({
    "sub": "gender-care",
    "title_kr": "TS 탈모케어 샴푸 300g",
    "title_en": "TS Hair Loss Care Shampoo 300g",
    "desc_kr": "탈모 증상 완화 기능성 샴푸로 설페이트·파라벤 무첨가 제형. 남성 소비자들 사이에서 다이소 품절 대란템으로 화제가 된 헤어케어 라인 중 하나.",
    "desc_en": "A functional shampoo formulated to relieve hair loss symptoms, free of sulfates and parabens. One of the hair care items that gained buzz among male customers as a Daiso sellout item.",
    "brand_kr": "TS",
    "price_kr": "5,000원",
    "tips_kr": "두피에 충분히 마사지하듯 도포한 뒤 3~5분 정도 두었다가 헹구면 효과적.",
    "tips_en": "Massage thoroughly into the scalp, leave on for 3-5 minutes, then rinse for best results.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 헤어케어 코너에서 TS 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능▪💰 가격대: 5,000원▪⚠️ 인기 상품으로 품절이 잦아 재입고 알림 신청 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the hair care section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr)▪💰 Price: 5,000 KRW▪⚠️ Frequently sells out due to popularity — restock alerts are recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 TS 탈모케어 샴푸▪TS 샴푸 다이소▪다이소 남성용품▪다이소 탈모샴푸",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪MensCare",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "남성용품·여성용품",
    "sub_en": "Men & Women Care",
    "sub_free": "",
    "sub_order": 10
})

# ========== soldout-items (sub_order 11) ==========
new_items.append({
    "sub": "soldout-items",
    "title_kr": "줌 바이 정샘물 광프렙 부스터 품절 대란",
    "title_en": "Zoom by Jung Saem Mool Gwang Prep Booster Sellout",
    "desc_kr": "메이크업 아티스트 정샘물과 다이소의 협업 라인 '줌 바이 정샘물' 출시 직후 광프렙 부스터, 톤프렙 부스터, 프렙 스킨패드 등 8개 제품이 온라인몰에서 잇달아 품절된 사건. 기존 정샘물 브랜드 2만~5만원대 제품을 5,000원대로 선보이며 화제를 모았다.",
    "desc_en": "Right after the launch of 'Zoom by Jung Saem Mool,' a collaboration between makeup artist Jung Saem Mool and Daiso, eight products including the Gwang Prep Booster, Tone Prep Booster, and Prep Skin Pad sold out repeatedly online. The line offered items normally priced at 20,000-50,000 KRW under the original brand for around 5,000 KRW, sparking major buzz.",
    "brand_kr": "줌 바이 정샘물",
    "price_kr": "5,000원",
    "tips_kr": "품절이 매우 잦으므로 다이소몰 재입고 알림 신청 후 오전 오픈 시간대에 접속하는 것이 구매 확률을 높이는 방법으로 알려져 있음.",
    "tips_en": "Since it sells out very frequently, signing up for Daiso Mall restock alerts and checking right at opening time in the morning is known to improve your chances of purchasing.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 화장품 코너에서 줌 바이 정샘물 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능하나 품절이 잦음▪💰 가격대: 5,000원▪⚠️ 출시 직후 조기 품절 사례가 많아 재입고 알림 신청 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the cosmetics section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr), though it sells out quickly▪💰 Price: 5,000 KRW▪⚠️ Frequently sells out shortly after launch — restock alerts are recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 줌 바이 정샘물▪정샘물 광프렙 부스터▪다이소 정샘물 품절▪다이소 품절템",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪SoldOut",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "품절 대란템·시즌 한정판",
    "sub_en": "Viral & Seasonal",
    "sub_free": "",
    "sub_order": 11
})

new_items.append({
    "sub": "soldout-items",
    "title_kr": "다이소 홀리카홀리카 소프튠 팔레트 품절 대란",
    "title_en": "Daiso Holika Holika Softune Palette Sellout",
    "desc_kr": "뷰티 브랜드 홀리카홀리카가 다이소에 처음 입점하며 선보인 '소프튠' 아이섀도 팔레트·틴트 라인. 저렴한 가격에 백화점 브랜드급 발색을 구현했다는 입소문으로 출시와 동시에 매장·온라인몰에서 빠르게 품절됐다.",
    "desc_en": "Beauty brand Holika Holika's first Daiso collaboration line, 'Softune,' featuring eyeshadow palettes and tints. Word spread that it delivered department-store-level color payoff at a fraction of the price, causing it to sell out quickly both in stores and online right after launch.",
    "brand_kr": "홀리카홀리카",
    "price_kr": "5,000원",
    "tips_kr": "SNS에서 재입고 소식이 빠르게 공유되니 다이소몰 알림 신청과 커뮤니티 정보를 함께 확인하는 것을 추천.",
    "tips_en": "Restock news spreads quickly on social media, so it helps to sign up for Daiso Mall alerts and follow community updates.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 화장품 코너에서 홀리카홀리카 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능하나 품절이 잦음▪💰 가격대: 5,000원▪⚠️ 출시 직후 조기 품절 사례가 많아 재입고 알림 신청 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the cosmetics section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr), though it sells out quickly▪💰 Price: 5,000 KRW▪⚠️ Frequently sells out shortly after launch — restock alerts are recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 홀리카홀리카▪홀리카홀리카 소프튠▪다이소 홀리카홀리카 품절▪다이소 품절템",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪SoldOut",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "품절 대란템·시즌 한정판",
    "sub_en": "Viral & Seasonal",
    "sub_free": "",
    "sub_order": 11
})

new_items.append({
    "sub": "soldout-items",
    "title_kr": "다이소 실크테라피(바이오실크) 헤어라인 품절 대란",
    "title_en": "Daiso Silk Therapy (BioSilk) Hair Line Sellout",
    "desc_kr": "프리미엄 헤어케어 브랜드 실크테라피(바이오실크)가 다이소에 5종(노워시 트리트먼트, 앰플에센스, 앰플트리트먼트, 히트인핸서 헤어밀크·트리트먼트)을 3,000~5,000원대로 출시. 정가 2만~4만원대인 제품이 대폭 할인된 가격에 풀리며 판매 시작과 동시에 품절 사태를 빚었다.",
    "desc_en": "Premium hair care brand Silk Therapy (BioSilk) launched five products at Daiso — a no-wash treatment, ampoule essence, ampoule treatment, and heat enhancer hair milk/treatment — priced between 3,000 and 5,000 KRW. Since these normally retail for 20,000-40,000 KRW, they sold out almost immediately after release.",
    "brand_kr": "실크테라피(바이오실크)",
    "price_kr": "3,000원~5,000원",
    "tips_kr": "노워시 트리트먼트는 젖은 머리에 소량만 발라도 향과 윤기 효과가 좋다는 후기가 많음.",
    "tips_en": "Many reviews note that even a small amount of the no-wash treatment on damp hair gives a good scent and shine effect.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 헤어케어 코너에서 실크테라피 제품 구매 가능▪💳 다이소몰(daisomall.co.kr) 온라인 구매도 가능하나 품절이 잦음▪💰 가격대: 3,000원~5,000원▪⚠️ 출시 직후 조기 품절 사례가 많아 재입고 알림 신청 추천▪📌 매장 및 홈페이지/웹사이트 현황에 따라 언어가 지원됨",
    "buy_en": "🏪 Available at the hair care section in Daiso stores nationwide▪💳 Also purchasable online via Daiso Mall (daisomall.co.kr), though it sells out quickly▪💰 Price range: 3,000-5,000 KRW▪⚠️ Frequently sells out shortly after launch — restock alerts are recommended▪📌 Language support varies by store and website/homepage availability",
    "keywords_kr": "다이소 실크테라피▪바이오실크 다이소▪다이소 헤어케어 품절▪다이소 품절템",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪SoldOut",
    "web": "https://www.daisomall.co.kr/",
    "sub_kr": "품절 대란템·시즌 한정판",
    "sub_en": "Viral & Seasonal",
    "sub_free": "",
    "sub_order": 11
})

# ========== taxfree-instant (sub_order 0, sub_free TRUE, no "web" field) ==========
new_items.append({
    "sub": "taxfree-instant",
    "title_kr": "다이소 서울역점 즉시환급",
    "title_en": "Daiso Seoul Station Branch Instant Tax Refund",
    "desc_kr": "서울 용산구 동자동 서울역 1번 출구 바로 옆에 위치한 다이소 서울역점. KTX와 공항철도 이용객이 몰리는 교통 허브 매장으로 외국인 관광객 방문이 잦다. 매장이 외국인 면세판매장으로 지정된 경우 여권 제시 후 즉시환급(부가세 차감 결제) 가능.",
    "desc_en": "Daiso's Seoul Station branch is located right next to Exit 1 of Seoul Station in Dongja-dong, Yongsan-gu. As a store in a major transit hub used by KTX and airport railroad passengers, it sees frequent visits from foreign tourists. If the store is registered as a tax-free shop for foreigners, instant refund (VAT deducted at checkout) is available upon showing your passport.",
    "brand_kr": "다이소",
    "price_kr": "",
    "tips_kr": "매장마다 면세판매장 지정 여부가 다르므로 계산 전 직원에게 Tax Refund 가능 여부 확인 필수. 기차 시간에 쫓기지 않도록 여유 있게 방문하는 것을 추천.",
    "tips_en": "Tax-free registration varies by branch, so always confirm Tax Refund availability with staff before checkout. It's best to visit with some time to spare so you're not rushed by your train schedule.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 중 외국인 면세판매장으로 지정된 지점에서만 즉시환급 가능▪🛂 계산 전 직원에게 Tax Refund 가능 여부 반드시 확인▪💳 다이소몰(daisomall.co.kr) 온라인 구매는 즉시환급 대상 아님▪📌 매장마다 지정 여부와 정책이 다르니 방문 전 확인 권장",
    "buy_en": "🏪 Instant tax refund is only available at Daiso branches registered as tax-free shops for foreigners▪🛂 Always confirm Tax Refund availability with staff before checkout▪💳 Online purchases via Daiso Mall (daisomall.co.kr) are not eligible for instant refund▪📌 Policies vary by branch, so check in advance",
    "keywords_kr": "다이소 세금환급▪다이소 즉시환급▪다이소 택스리펀드▪다이소 외국인 면세▪다이소 서울역점 즉시환급",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪TaxFree▪KoreaTaxRefund",
    "sub_kr": "매장 즉시 세금환급",
    "sub_en": "Instant Tax Refund",
    "sub_free": "TRUE",
    "sub_order": 0
})

new_items.append({
    "sub": "taxfree-instant",
    "title_kr": "다이소 고속터미널점 즉시환급",
    "title_en": "Daiso Express Bus Terminal Branch Instant Tax Refund",
    "desc_kr": "서울 서초구 반포동 서울고속버스터미널 지하 1층에 위치한 다이소 고속터미널점. 서울 매장 중 최대 규모(약 650평)로, 전국 60여 개 도시로 향하는 고속버스와 인천공항 리무진 이용객이 오가는 교통 허브 매장. 매장이 외국인 면세판매장으로 지정된 경우 여권 제시 후 즉시환급(부가세 차감 결제) 가능.",
    "desc_en": "Daiso's Express Bus Terminal branch is located in the basement level of Seoul Express Bus Terminal in Banpo-dong, Seocho-gu. It's the largest Daiso store in Seoul (about 650 pyeong), located in a transit hub used by intercity buses to roughly 60 cities nationwide and Incheon Airport limousine buses. If the store is registered as a tax-free shop for foreigners, instant refund (VAT deducted at checkout) is available upon showing your passport.",
    "brand_kr": "다이소",
    "price_kr": "",
    "tips_kr": "매장 규모가 커서 원하는 상품을 찾는 데 시간이 걸릴 수 있으니 버스 시간을 여유 있게 잡고 방문하는 것을 추천.",
    "tips_en": "Since the store is quite large, finding items can take time — plan extra time around your bus schedule when visiting.",
    "publish_at": "",
    "getoff_kr": "",
    "getoff_en": "",
    "direction_kr": "",
    "direction_en": "",
    "buy_kr": "🏪 전국 다이소 매장 중 외국인 면세판매장으로 지정된 지점에서만 즉시환급 가능▪🛂 계산 전 직원에게 Tax Refund 가능 여부 반드시 확인▪💳 다이소몰(daisomall.co.kr) 온라인 구매는 즉시환급 대상 아님▪📌 매장마다 지정 여부와 정책이 다르니 방문 전 확인 권장",
    "buy_en": "🏪 Instant tax refund is only available at Daiso branches registered as tax-free shops for foreigners▪🛂 Always confirm Tax Refund availability with staff before checkout▪💳 Online purchases via Daiso Mall (daisomall.co.kr) are not eligible for instant refund▪📌 Policies vary by branch, so check in advance",
    "keywords_kr": "다이소 세금환급▪다이소 즉시환급▪다이소 택스리펀드▪다이소 외국인 면세▪다이소 고속터미널점 즉시환급",
    "hashtags": "Daiso▪DaisoKorea▪DaisoHaul▪TaxFree▪KoreaTaxRefund",
    "sub_kr": "매장 즉시 세금환급",
    "sub_en": "Instant Tax Refund",
    "sub_free": "TRUE",
    "sub_order": 0
})

assert len(new_items) == 17, f"Expected 17 new items, got {len(new_items)}"

data.extend(new_items)

with open(PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("before:", before_count, "after:", len(data), "added:", len(new_items))
