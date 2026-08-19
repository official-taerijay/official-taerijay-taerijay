# -*- coding: utf-8 -*-
import json
import sys
sys.path.insert(0, '/sessions/kind-clever-carson/mnt/taerijay-platform/tmp_work')
from add_haircare import load, save, make_item

bodycare_items = [
    ("오릭스 퍼퓸 바디로션 바질 향", "Orix Perfume Body Lotion Basil",
     "산뜻한 바질 향이 나는 500ml 대용량 바디로션.", "A 500ml large-capacity body lotion with a fresh basil scent.",
     "오릭스", "3,000원", "향수 향과 비슷하다는 후기가 많은 히노끼향 자매 제품.", "Often compared to a designer perfume scent, a companion to the hinoki version.",
     "다이소 오릭스 바디로션▪다이소 바디로션 추천▪오릭스 바질향▪다이소 퍼퓸 바디로션", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("도브 뷰티 크림", "Dove Beauty Cream",
     "파우더리한 향의 250ml 바디크림.", "A 250ml body cream with a soft, powdery fragrance.",
     "도브", "5,000원", "흡수가 빠르고 유분감이 적어 데일리로 쓰기 좋다는 후기.", "Noted for fast absorption and a light, non-greasy finish for everyday use.",
     "다이소 도브 바디크림▪다이소 바디케어▪도브 뷰티크림▪다이소 도브 제품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("본셉 레티놀 탄력샷 바디 괄사 세럼", "Bonsep Retinol Firming Shot Body Gua Sha Serum",
     "괄사 롤러가 부착된 100ml 바디 탄력 세럼.", "A 100ml body firming serum with a built-in gua sha roller applicator.",
     "본셉", "5,000원", "세럼을 바르면서 동시에 마사지할 수 있어 편리하다는 후기.", "Reviewers like being able to massage while applying the serum in one step.",
     "다이소 본셉 바디세럼▪다이소 괄사▪본셉 레티놀▪다이소 바디 탄력케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("본셉 비타씨 미백샷 바디 괄사 세럼", "Bonsep Vitamin C Brightening Shot Body Gua Sha Serum",
     "비타민C 성분이 담긴 100ml 괄사 롤러형 바디 세럼.", "A 100ml gua sha roller-type body serum containing vitamin C.",
     "본셉", "5,000원", "겨드랑이, 팔, 종아리 등 뭉친 부위 마사지용으로 인기.", "Popular for massaging tense areas like underarms, arms, and calves.",
     "다이소 본셉 미백샷▪다이소 괄사세럼▪본셉 비타씨▪다이소 바디케어 추천", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("본셉 디판테놀 리페어샷 바디 괄사 세럼", "Bonsep D-Panthenol Repair Shot Body Gua Sha Serum",
     "진정 성분 판테놀이 함유된 100ml 괄사형 바디 세럼.", "A 100ml gua sha-type body serum containing soothing D-panthenol.",
     "본셉", "5,000원", "쿨링감이 있어 여름철 마사지용으로 쓰기 좋다는 후기.", "Its cooling sensation makes it popular for summer massage use.",
     "다이소 본셉 리페어샷▪다이소 괄사세럼▪본셉 판테놀▪다이소 바디 진정케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("VT COSMETICS 리들샷 비클리어 톤온 바디로션", "VT Cosmetics Reedle Shot B-Clear Tone-On Body Lotion",
     "톤 개선에 초점을 둔 200ml 리들샷 라인 바디로션.", "A 200ml body lotion from the Reedle Shot line focused on evening skin tone.",
     "VT COSMETICS", "5,000원", "묽은 제형으로 산뜻하게 발리고 흡수가 빠르다는 후기.", "Its watery texture is noted to apply lightly and absorb quickly.",
     "다이소 VT 리들샷 바디로션▪다이소 VT코스메틱▪리들샷 톤온▪다이소 바디로션 추천", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("VT COSMETICS 리들샷 비클리어 소프트 바디로션", "VT Cosmetics Reedle Shot B-Clear Soft Body Lotion",
     "거칠어진 피부결 진정에 초점을 둔 200ml 바디로션.", "A 200ml body lotion focused on soothing rough, uneven skin texture.",
     "VT COSMETICS", "5,000원", "팔꿈치, 발꿈치 등 거친 부위에 바르면 부드러워진다는 후기.", "Reviewers note it softens rough areas like elbows and heels.",
     "다이소 VT 리들샷 소프트▪다이소 VT코스메틱▪리들샷 바디로션▪다이소 민감성 바디케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("데일리콤마 벨로 드 퍼퓸 바디로션 세이지아쿠아", "Daily Comma Bello de Perfume Body Lotion Sage Aqua",
     "아쿠아틱한 향이 특징인 500ml 퍼퓸 바디로션.", "A 500ml perfume body lotion featuring a fresh aquatic scent.",
     "데일리콤마", "5,000원", "묽지 않고 밀키한 제형으로 향 지속력이 좋다는 후기.", "Noted for a milky, non-watery texture and long-lasting fragrance.",
     "다이소 데일리콤마 바디로션▪다이소 퍼퓸바디로션▪데일리콤마 세이지아쿠아▪다이소 향수바디로션", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("애경 바세린 데일리 모이스처 로션", "Aekyung Vaseline Daily Moisture Lotion",
     "가성비 좋은 180ml 데일리 모이스처 로션.", "A budget-friendly 180ml daily moisture lotion.",
     "애경 바세린", "2,000원", "흡수가 빠르고 향이 은은해 얼굴과 몸 모두에 사용 가능.", "Fast-absorbing with a subtle scent, usable on both face and body.",
     "다이소 바세린 로션▪다이소 애경▪바세린 데일리모이스처▪다이소 저가 로션 추천", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("부케가르니 데일리퍼퓸 바디로션 플라워샵", "Bouquet Garni Daily Perfume Body Lotion Flower Shop",
     "은은한 플로럴 향의 600ml 대용량 바디로션.", "A 600ml large-capacity body lotion with a soft floral scent.",
     "부케가르니", "5,000원", "보습력과 향 모두 만족스럽다는 후기가 많은 가성비 제품.", "A value pick with many reviews praising both moisture and fragrance.",
     "다이소 부케가르니 바디로션▪다이소 플라워샵▪부케가르니 데일리퍼퓸▪다이소 대용량 바디로션", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("스카이보틀 퍼퓸 바디 그릭요거트 네이키드 페어", "Skybottle Perfume Body Greek Yogurt Naked Pear",
     "은은한 살냄새 컨셉의 120ml 퍼퓸 바디로션.", "A 120ml perfume body lotion designed for a subtle 'skin scent' effect.",
     "스카이보틀", "5,000원", "인기 향이라 일시 품절되기도 했다는 후기가 있는 제품.", "Reportedly sold out temporarily due to high demand for the scent.",
     "다이소 스카이보틀 바디로션▪다이소 퍼퓸바디▪스카이보틀 네이키드페어▪다이소 향수바디로션 추천", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("바세린 슈퍼푸드 피치 바디로션", "Vaseline Superfood Peach Body Lotion",
     "상큼한 복숭아 향의 390ml 바디로션.", "A 390ml body lotion with a bright, fresh peach fragrance.",
     "바세린", "10,900원", "향은 좋지만 지성 피부에 더 적합하다는 후기가 있음.", "Praised for its scent, though reviewers suggest it suits oilier skin types best.",
     "다이소 바세린 피치로션▪다이소 슈퍼푸드▪바세린 바디로션▪다이소 복숭아향 로션", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("싸이닉 파워 옴므 블랙 립밤", "Cynic Power Homme Black Lip Balm",
     "발색 립밤 기능을 겸한 4g 남녀공용 립밤.", "A dual-purpose 4g lip balm that also adds a natural tint.",
     "싸이닉", "3,000원", "검정 스틱이지만 바르면 자연스러운 혈색이 돈다는 후기.", "Despite the black stick, it leaves a natural rosy tint when applied.",
     "다이소 싸이닉 립밤▪다이소 옴므 립밤▪싸이닉 파워옴므▪다이소 남성 립밤", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("프렙 바이 비레디 헬시톤 혈색 립밤 매트", "Prep by Beready Healthy Tone Lip Balm Matte",
     "매트한 마무리의 4.2g 혈색 립밤.", "A 4.2g tinted lip balm with a matte finish.",
     "프렙 바이 비레디", "3,000원", "입술 pH에 따라 자연스럽게 색이 올라오는 게 특징.", "Its color adapts naturally based on individual lip pH.",
     "다이소 프렙바이비레디 립밤▪다이소 혈색립밤▪프렙 헬시톤▪다이소 매트립밤", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("프렙 바이 비레디 헬시톤 혈색 립밤 촉촉", "Prep by Beready Healthy Tone Lip Balm Moist",
     "촉촉한 마무리의 4.2g 혈색 립밤.", "A 4.2g tinted lip balm with a moisturizing, glossy finish.",
     "프렙 바이 비레디", "3,000원", "보습력이 좋아 갈라진 입술에도 부담 없이 사용 가능.", "Its moisturizing formula is gentle enough for chapped lips.",
     "다이소 프렙바이비레디 촉촉립밤▪다이소 혈색립밤▪프렙 헬시톤▪다이소 보습립밤", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
    ("클리덤 저분자 콜라겐 아이 마사지 앰플", "Clidum Low-Molecular Collagen Eye Massage Ampoule",
     "눈가 마사지에 특화된 저분자 콜라겐 아이 앰플.", "A low-molecular collagen eye ampoule designed specifically for eye-area massage.",
     "클리덤", "3,000원", "롤러 타입으로 눈가 붓기와 피로감 케어에 사용.", "Its roller applicator is used to help with under-eye puffiness and fatigue.",
     "다이소 클리덤 아이앰플▪다이소 아이케어▪클리덤 콜라겐▪다이소 눈가 마사지", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BodyCare"),
]

data = load()
existing = set(item['title_kr'] for item in data)
added = 0
for args in bodycare_items:
    if args[0] in existing:
        continue
    data.append(make_item("bodycare", "바디케어", "Body Care", 7, *args))
    existing.add(args[0])
    added += 1
save(data)
print("bodycare added:", added)
