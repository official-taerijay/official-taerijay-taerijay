# -*- coding: utf-8 -*-
import json
import sys
sys.path.insert(0, '/sessions/kind-clever-carson/mnt/taerijay-platform/tmp_work')
from add_haircare import load, save, make_item

beauty_tools_items = [
    ("다이소 뾰족한 나무 면봉 400개입", "Daiso Pointed Wooden Cotton Swabs 400pcs",
     "끝이 뾰족한 400개입 대용량 나무 면봉.", "A 400-piece large pack of wooden cotton swabs with a pointed tip.",
     "다이소", "1,000원", "메이크업 수정, 트러블 관리 등 다용도로 활용된다는 후기.", "Reviewers use it for makeup touch-ups, blemish care, and more.",
     "다이소 나무면봉▪다이소 뷰티소품▪뾰족한면봉▪다이소 화장솜 면봉", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("카이 EBR 눈썹칼 3개입", "Kai EBR Eyebrow Razor 3-Pack",
     "정교한 눈썹 정리를 위한 소형 눈썹칼 3개입.", "A 3-pack of compact eyebrow razors for precise eyebrow grooming.",
     "카이", "4,500원", "칼날이 작아 세밀하게 눈썹과 잔털을 정리하기 좋다는 후기.", "The small blade allows for fine, detailed grooming of brows and peach fuzz.",
     "다이소 카이 눈썹칼▪다이소 눈썹정리▪카이 EBR▪다이소 뷰티소품 추천", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 메이크업 긴형 수정 스틱 100개입", "Daiso Long Makeup Correction Stick 100pcs",
     "번진 아이라인, 마스카라 수정용 100개입 미니 면봉 스틱.", "A 100-piece pack of slim swab sticks for fixing smudged eyeliner and mascara.",
     "다이소", "1,000원", "솜이 작고 단단해 세밀한 수정 화장에 유용하다는 후기.", "The small, firm tip is praised as useful for detailed makeup touch-ups.",
     "다이소 수정스틱▪다이소 메이크업소품▪긴형 수정스틱▪다이소 뷰티소품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("꽁래쉬 노글루 속눈썹 05 슈가", "Kong Lash No-Glue False Eyelashes 05 Sugar",
     "접착제 없이 붙이는 노글루 타입 속눈썹 20개입.", "A 20-piece pack of glue-free false eyelashes for easy application.",
     "꽁래쉬", "3,000원", "초보자도 3분 이내로 쉽게 붙일 수 있다는 후기가 많음.", "Many reviewers say even beginners can apply them in under 3 minutes.",
     "다이소 꽁래쉬 속눈썹▪다이소 노글루속눈썹▪꽁래쉬 슈가▪다이소 뷰티소품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 내 맘대로 DIY 필링패드 70개입", "Daiso My Own DIY Peeling Pad 70pcs",
     "화장솜 없이 바로 사용하는 필링 패드 70개입.", "A 70-piece pack of peeling pads that can be used without extra cotton pads.",
     "다이소", "3,000원", "패드에 이미 필링 성분이 배어있어 간편하다는 후기.", "Convenient since the peeling solution is already soaked into the pad.",
     "다이소 필링패드▪다이소 뷰티소품▪내맘대로DIY▪다이소 각질케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 속눈썹 접착제 겸 쌍꺼풀액", "Daiso Eyelash Glue & Double Eyelid Liquid",
     "속눈썹 접착과 쌍꺼풀 성형을 겸하는 5ml 액상 제품.", "A 5ml liquid that works both as eyelash glue and a double-eyelid liquid.",
     "다이소", "2,000원", "1+1 용도로 활용도가 높다는 후기가 많은 뷰티소품.", "A versatile two-in-one beauty tool with many positive reviews.",
     "다이소 쌍꺼풀액▪다이소 속눈썹접착제▪다이소 뷰티소품▪다이소 아이메이크업", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("소미썸 사각 펄프 화장솜 400개입", "Somisum Square Pulp Cotton Pads 400pcs",
     "스킨팩 용도로도 사용하는 400개입 대용량 화장솜.", "A 400-piece large pack of cotton pads also used for skin-soaking masks.",
     "소미썸", "3,000원", "얇고 스킨 흡수가 적어 팩 용도로 쓰기 좋다는 후기.", "Its thin texture absorbs less toner, making it good for pad-mask use.",
     "다이소 소미썸 화장솜▪다이소 화장솜▪소미썸 펄프화장솜▪다이소 뷰티소품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 일반형 양면 쌍꺼풀 테이프 44개입", "Daiso Standard Double-Sided Eyelid Tape 44pcs",
     "레이스 없이 사용하는 양면 쌍꺼풀 테이프 44개입.", "A 44-piece pack of double-sided eyelid tape usable without eyelid lace.",
     "다이소", "1,000원", "밀착력이 좋아 하루종일 쌍꺼풀 라인이 유지된다는 후기.", "Praised for strong adhesion that keeps the eyelid crease in place all day.",
     "다이소 쌍꺼풀테이프▪다이소 아이메이크업▪양면쌍꺼풀테이프▪다이소 뷰티소품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 개별포장 듀얼 종이 면봉 뾰족형 굴곡형 100개입", "Daiso Individually Wrapped Dual Paper Swabs Pointed & Curved 100pcs",
     "위생적인 개별포장 종이 면봉 100개입.", "A 100-piece pack of individually wrapped paper cotton swabs for hygienic use.",
     "다이소", "1,000원", "여행용으로 파우치에 챙기기 좋다는 후기가 많음.", "Frequently praised as convenient to carry in a travel pouch.",
     "다이소 종이면봉▪다이소 개별포장 면봉▪듀얼면봉▪다이소 뷰티소품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 브러쉬세척 스펀지패드", "Daiso Brush Cleaning Sponge Pad",
     "메이크업 브러시 세척용 스펀지 패드.", "A sponge pad designed for cleaning makeup brushes.",
     "다이소", "1,000원", "브러시에 남은 화장품 잔여물을 세척할 때 유용하다는 후기.", "Useful for scrubbing off leftover makeup residue from brushes.",
     "다이소 브러시세척패드▪다이소 뷰티소품▪브러쉬클리너▪다이소 메이크업소품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 믹싱 팔레트 스패츌러 포켓 세트", "Daiso Mixing Palette Spatula Pocket Set",
     "파운데이션 등을 섞을 때 쓰는 팔레트와 스패츌러 세트.", "A palette-and-spatula set used for mixing foundation and other products.",
     "다이소", "2,000원", "스패츌러가 양면형이라 활용도가 높다는 후기.", "The double-sided spatula is noted as especially versatile.",
     "다이소 믹싱팔레트▪다이소 뷰티소품▪스패츌러세트▪다이소 메이크업소품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 고급 메탈릭 속눈썹 뷰러", "Daiso Premium Metallic Eyelash Curler",
     "메탈 소재로 만든 속눈썹 뷰러.", "An eyelash curler made from a premium metallic material.",
     "다이소", "1,500원", "고정력이 좋아 컬이 오래 유지된다는 후기가 있음.", "Reviewers note it holds the eyelash curl well throughout the day.",
     "다이소 속눈썹뷰러▪다이소 뷰티소품▪메탈릭뷰러▪다이소 아이메이크업 도구", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 원터치케이스 블랙 종이 면봉 200개입", "Daiso One-Touch Case Black Paper Swabs 200pcs",
     "원터치 케이스에 담긴 200개입 블랙 종이 면봉.", "A 200-piece pack of black paper cotton swabs in a one-touch dispenser case.",
     "다이소", "1,000원", "케이스형이라 위생적으로 보관하며 사용할 수 있다는 후기.", "The case design allows for hygienic storage and easy dispensing.",
     "다이소 블랙면봉▪다이소 원터치케이스▪종이면봉▪다이소 뷰티소품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 브러시 앤 퍼프 클리너", "Daiso Brush & Puff Cleaner",
     "브러시와 퍼프를 함께 세척하는 클렌징 용액.", "A cleansing solution formulated to wash both brushes and makeup puffs.",
     "다이소", "3,000원", "세정력이 좋아 퍼프가 깨끗해진다는 후기가 많은 제품.", "Widely praised for strong cleansing power that leaves puffs spotless.",
     "다이소 브러시클리너▪다이소 퍼프클리너▪뷰티소품 세정▪다이소 메이크업 도구 세척", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
    ("다이소 개별포장 블랙 종이 면봉 굴곡형 120개입", "Daiso Individually Wrapped Black Curved Paper Swabs 120pcs",
     "굴곡형 팁의 개별포장 블랙 면봉 120개입.", "A 120-piece pack of individually wrapped black cotton swabs with a curved tip.",
     "다이소", "1,000원", "블랙헤드 압출 등 각질/피지 관리에 사용하기 좋다는 후기.", "Reviewers use it for tasks like blackhead extraction and pore care.",
     "다이소 블랙면봉▪다이소 개별포장▪굴곡형면봉▪다이소 뷰티소품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪BeautyTools"),
]

data = load()
existing = set(item['title_kr'] for item in data)
added = 0
for args in beauty_tools_items:
    if args[0] in existing:
        continue
    data.append(make_item("beauty-tools", "뷰티 소품", "Beauty Tools", 9, *args))
    existing.add(args[0])
    added += 1
save(data)
print("beauty-tools added:", added)
