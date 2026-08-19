# -*- coding: utf-8 -*-
import json
import sys
sys.path.insert(0, '/sessions/kind-clever-carson/mnt/taerijay-platform/tmp_work')
from add_haircare import load, save, make_item

soldout_items = [
    ("VT 리들샷 500 페이셜 부스팅 퍼스트 앰플", "VT Reedle Shot 500 Facial Boosting First Ampoule",
     "500 니들 자극 기술을 적용한 고농축 부스팅 앰플.", "A high-concentration boosting ampoule using 500-needle stimulation technology.",
     "VT COSMETICS", "5,000원", "2023년 출시 초도물량이 2주 만에 완판돼 다이소 뷰티 품절대란의 시초로 꼽히는 제품.", "Considered the product that kicked off Daiso's beauty sellout craze after its initial stock sold out within two weeks of the 2023 launch.",
     "다이소 VT 리들샷500▪다이소 품절템▪VT코스메틱 리들샷▪다이소 화제상품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("VT 리들샷 앰플 트러블 진정 라인", "VT Reedle Shot Ampoule Troubled Skin Calming Line",
     "트러블 피부 진정에 특화된 VT 리들샷 라인 앰플.", "An ampoule from the VT Reedle Shot line formulated to calm troubled, blemish-prone skin.",
     "VT COSMETICS", "5,000원", "리들샷 시리즈 인기에 힘입어 다이소·올리브영 매대에서 자주 품절되는 라인.", "Riding the popularity of the Reedle Shot line, this variant frequently sells out at Daiso and Olive Young.",
     "다이소 VT 리들샷 트러블▪다이소 품절템▪VT코스메틱▪다이소 화제상품", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("줌 바이 정샘물 세범 다운 쿠션", "Jum by Jung Saem Mool Sebum Down Cushion",
     "메이크업 아티스트 정샘물과 협업한 피지 컨트롤 쿠션.", "A sebum-control cushion foundation from the collaboration line with makeup artist Jung Saem Mool.",
     "정샘물", "5,000원", "출시 직후 온오프라인 매장에서 재고가 빠르게 소진된 협업 히트작.", "A collaboration hit whose stock sold out rapidly at both online and offline stores right after launch.",
     "다이소 정샘물 세범다운쿠션▪다이소 줌바이정샘물▪정샘물 콜라보▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("줌 바이 정샘물 프렙 스킨 패드", "Jum by Jung Saem Mool Prep Skin Pad",
     "메이크업 전 피부결 정돈용 프렙 패드.", "A prep pad used to smooth the skin before makeup application.",
     "정샘물", "3,000원", "줌 바이 정샘물 라인 8종 중 하나로 출시 직후 일시 품절된 제품.", "One of eight items in the Jum by Jung Saem Mool line that went temporarily out of stock right after release.",
     "다이소 정샘물 프렙패드▪다이소 줌바이정샘물▪정샘물 콜라보▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("손앤박 아티 워터 글로우 틴트", "Son & Park Ati Water Glow Tint",
     "촉촉한 수분감의 워터 타입 립&치크 틴트.", "A water-type lip and cheek tint with a dewy, hydrating finish.",
     "손앤박", "4,000원", "손앤박 아티 컬러밤 시리즈의 인기에 힘입어 전 색상 품절을 기록한 제품.", "Sold out across all shades, riding the popularity of the Son & Park Ati color balm series.",
     "다이소 손앤박 워터글로우틴트▪다이소 손앤박▪아티틴트▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("손앤박 아티 워터 블러 틴트", "Son & Park Ati Water Blur Tint",
     "블러 마무리감의 워터 타입 립 틴트.", "A water-type lip tint that leaves a soft, blurred matte finish.",
     "손앤박", "4,000원", "다이소 손앤박 컬러 제품 라인 중 품절이 잦은 인기 색조 제품.", "One of the frequently sold-out color items in Daiso's Son & Park lineup.",
     "다이소 손앤박 워터블러틴트▪다이소 손앤박▪아티틴트▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("메디필 비타민 멜라 토닝 패드 2.0", "Mediheal Vitamin Mela Toning Pad 2.0",
     "비타민 성분이 담긴 토닝 클렌징 패드.", "A toning cleansing pad infused with vitamin ingredients.",
     "메디필", "5,000원", "다이소와 메디필의 콜라보로 출시되자마자 품절 대란을 일으킨 제품.", "A Daiso x Mediheal collaboration item that triggered a sellout frenzy immediately after release.",
     "다이소 메디필 토닝패드▪다이소 메디필 콜라보▪비타민멜라▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("더페이스샵 바디 필링 미스트", "The Face Shop Body Peeling Mist",
     "저자극 각질 제거가 가능한 스프레이형 바디 필링 미스트.", "A spray-type body peeling mist designed for gentle exfoliation.",
     "더페이스샵", "5,000원", "저자극 각질케어 컨셉으로 출시 직후 뷰티 커뮤니티에서 입소문을 탄 제품.", "Gained buzz in beauty communities right after launch thanks to its gentle exfoliation concept.",
     "다이소 더페이스샵 필링미스트▪다이소 더페이스샵 콜라보▪바디필링▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("큐어소나 래디언스 글로우 앰플", "Curesona Radiance Glow Ampoule",
     "속광 트렌드에 맞춘 붉은색 패키지의 글로우 앰플.", "A glow ampoule in red packaging designed for the dewy-skin ('sok-gwang') trend.",
     "큐어소나", "5,000원", "재고가 있을 때 바로 사야 하는 '빨간 앰플'로 불리며 실시간 검색어에 자주 오른 제품.", "Nicknamed the 'red ampoule you buy the moment it's in stock,' frequently trending in Daiso Mall searches.",
     "다이소 큐어소나 글로우앰플▪다이소 래디언스글로우▪큐어소나▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("더랩바이블랑두 클리어 히알 물광 크림", "The Lab by Blanc Doux Clear Hyal Glow Skin Crystal Cream",
     "속광 피부 표현에 초점을 둔 5,000원대 물광 크림.", "A 5,000-won dewy-glow cream focused on achieving glass-skin radiance.",
     "더랩바이블랑두", "5,000원", "속광 트렌드와 맞물려 출시 직후 품절 대란을 일으킨 백화점급 품질의 저가 크림.", "A department-store-quality low-price cream that sold out immediately, riding the dewy-skin trend.",
     "다이소 더랩바이블랑두 물광크림▪다이소 클리어히알▪물광크림 품절▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
    ("본셉 비타씨 동결 건조 더블샷 앰플 키트", "Bonsep Vitamin C Freeze-Dried Double Shot Ampoule Kit",
     "동결건조 파우더와 앰플을 혼합해 사용하는 비타민C 앰플 키트.", "A vitamin C ampoule kit that mixes freeze-dried powder with a base ampoule before use.",
     "본셉", "5,000원", "다이소몰 재입고 알림 신청 1위에 오를 정도로 수요가 높은 제품.", "Topped Daiso Mall's restock-alert requests, reflecting exceptionally high demand.",
     "다이소 본셉 비타씨앰플▪다이소 본셉 콜라보▪동결건조앰플▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
]

data = load()
existing = set(item['title_kr'] for item in data)
added = 0
for args in soldout_items:
    if args[0] in existing:
        continue
    data.append(make_item("soldout-items", "품절 대란템·시즌 한정판", "Viral & Seasonal", 11, *args))
    existing.add(args[0])
    added += 1
save(data)
print("soldout-items added:", added)
