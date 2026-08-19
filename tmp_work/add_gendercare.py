# -*- coding: utf-8 -*-
import json
import sys
sys.path.insert(0, '/sessions/kind-clever-carson/mnt/taerijay-platform/tmp_work')
from add_haircare import load, save, make_item

gender_items = [
    ("더랩 바이 블랑두 클리어 히알 옴므 선크림 SPF50 PA++++", "The Lab by Blanc Doux Clear Hyal Homme Sunscreen SPF50 PA++++",
     "선세럼처럼 가벼운 35ml 남성용 선크림.", "A 35ml men's sunscreen with a lightweight, serum-like texture.",
     "더랩 바이 블랑두", "5,000원", "백탁 없이 촉촉하게 발려 끈적임을 싫어하는 남성에게 추천.", "Leaves no white cast and applies smoothly, ideal for men who dislike stickiness.",
     "다이소 더랩바이블랑두 옴므 선크림▪다이소 남성 선크림▪클리어히알 옴므▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("더랩 바이 블랑두 클리어 히알 옴므 올인원 에멀전", "The Lab by Blanc Doux Clear Hyal Homme All-in-One Emulsion",
     "간편하게 바르는 120ml 남성용 올인원 에멀전.", "A 120ml men's all-in-one emulsion for a simple skincare routine.",
     "더랩 바이 블랑두", "5,000원", "저분자 히알루론산 성분으로 산뜻하게 수분을 채워준다는 후기.", "Reviewers note it delivers moisture lightly thanks to low-molecular hyaluronic acid.",
     "다이소 더랩바이블랑두 옴므 에멀전▪다이소 남성 스킨케어▪클리어히알 올인원▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("더랩 바이 블랑두 클리어 히알 옴므 토너", "The Lab by Blanc Doux Clear Hyal Homme Toner",
     "면도 후 진정에 좋은 남성용 토너.", "A men's toner well suited for soothing skin after shaving.",
     "더랩 바이 블랑두", "5,000원", "저분자 히알루론산이 속당김 없이 수분을 채워준다는 후기.", "Low-molecular hyaluronic acid is noted to hydrate without tightness.",
     "다이소 더랩바이블랑두 옴므 토너▪다이소 남성 토너▪클리어히알 토너▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("더랩 바이 블랑두 클리어 히알 옴므 클렌징 폼", "The Lab by Blanc Doux Clear Hyal Homme Cleansing Foam",
     "쫀쫀한 거품의 남성용 저자극 클렌징 폼.", "A gentle men's cleansing foam known for its dense, cushiony lather.",
     "더랩 바이 블랑두", "5,000원", "세정 후에도 속건조 없이 편안한 마무리감이라는 후기.", "Noted to leave skin feeling comfortable and non-tight even after cleansing.",
     "다이소 더랩바이블랑두 옴므 클렌징폼▪다이소 남성 클렌저▪클리어히알 폼클렌저▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("프렙 바이 비레디 헬시톤 커버로션 SPF30 PA+++", "Prep by Beready Healthy Tone Cover Lotion SPF30 PA+++",
     "톤 커버와 자외선 차단을 겸한 남성용 로션.", "A men's lotion that combines tone-up coverage with sun protection.",
     "프렙 바이 비레디", "5,000원", "백탁 없이 자연스럽게 톤을 정리해준다는 후기 다수.", "Many reviewers praise it for evening out skin tone without a white cast.",
     "다이소 프렙바이비레디 커버로션▪다이소 남성 톤업▪헬시톤 로션▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("다이소 올리브팜 헤어 왁스 슈퍼하드", "Daiso Olive Farm Hair Wax Super Hard",
     "강한 고정력의 50g 남성용 헤어 왁스.", "A 50g men's hair wax offering a strong, long-lasting hold.",
     "다이소", "2,000원", "적은 양으로도 고정력이 좋고 덜 건조하다는 후기.", "Noted for strong hold with just a small amount, and less drying than gels.",
     "다이소 올리브팜 헤어왁스▪다이소 남성 헤어왁스▪올리브팜 슈퍼하드▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("BRTC 스킨 랩 옴므 시리즈 토너", "BRTC Skin Lab Homme Series Toner",
     "면도 후 진정에 좋은 남성 전용 토너.", "A men's toner formulated to soothe skin after shaving.",
     "BRTC", "3,000원", "제형이 묽어 흡수는 빠르지만 보습감은 가볍다는 후기.", "Its watery texture absorbs quickly, though the moisturizing effect is light.",
     "다이소 BRTC 옴므토너▪다이소 남성 토너▪BRTC 스킨랩▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("BRTC 스킨 랩 옴므 시리즈 클렌징 폼", "BRTC Skin Lab Homme Series Cleansing Foam",
     "여드름 관리에 초점을 둔 남성용 클렌징 폼.", "A men's cleansing foam formulated with acne-prone skin in mind.",
     "BRTC", "3,000원", "거품이 잘 나며 세안 후 자극이 적다는 후기.", "Reviewers note good lather and minimal irritation after washing.",
     "다이소 BRTC 옴므클렌징▪다이소 남성 클렌저▪BRTC 스킨랩▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("도루코 6중 날 여성 바디 면도기 2개입", "Dorco 6-Blade Women's Body Razor 2-Pack",
     "아르간 오일 윤활밴드가 있는 여성용 바디 면도기 2개입.", "A 2-pack of women's body razors featuring an argan oil moisture strip.",
     "도루코", "3,000원", "다리, 겨드랑이 등 넓은 부위 제모에 사용하기 좋다는 후기.", "Well suited for shaving larger areas like legs and underarms.",
     "다이소 도루코 여성면도기▪다이소 바디면도기▪도루코 6중날▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("도루코 터치 쓰리 면도기 3개입", "Dorco Touch Three Razor 3-Pack",
     "남녀 공용으로 쓸 수 있는 일회용 면도기 3개입.", "A 3-pack of disposable razors usable by both men and women.",
     "도루코", "2,000원", "절삭력이 좋아 팔다리 제모에도 사용 가능하다는 후기.", "Noted for sharp cutting performance suitable for arms and legs as well.",
     "다이소 도루코 터치쓰리▪다이소 일회용면도기▪도루코 3중날▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
    ("프리그리드 글로시앤샤프 컬크림", "Freegrid Glossy & Sharp Curl Cream",
     "웨트한 스타일링을 위한 젤 타입 컬크림.", "A gel-type curl cream designed for a wet-look styling finish.",
     "프리그리드", "3,000원", "짧은 머리를 웨트하게 정돈할 때 사용하는 스타일링 제품.", "A styling product used to create a wet, sleek look on shorter hair.",
     "다이소 프리그리드 글로시앤샤프▪다이소 헤어스타일링▪프리그리드 컬크림▪다이소 젠더케어", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪GenderCare"),
]

data = load()
existing = set(item['title_kr'] for item in data)
added = 0
for args in gender_items:
    if args[0] in existing:
        continue
    data.append(make_item("gender-care", "남성용품·여성용품", "Men & Women Care", 10, *args))
    existing.add(args[0])
    added += 1
save(data)
print("gender-care added:", added)
