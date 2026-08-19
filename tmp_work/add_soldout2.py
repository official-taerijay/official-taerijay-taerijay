# -*- coding: utf-8 -*-
import json
import sys
sys.path.insert(0, '/sessions/kind-clever-carson/mnt/taerijay-platform/tmp_work')
from add_haircare import load, save, make_item

soldout_items2 = [
    ("미모 바이 마몽드 피어니-티놀 트러블 밤", "Mimo by Mamonde Peony-Tinol Trouble Balm",
     "트러블 케어에 특화된 아모레퍼시픽 다이소 전용 라인 밤 제품.", "A trouble-care balm from Amorepacific's Daiso-exclusive Mimo by Mamonde line.",
     "미모 바이 마몽드", "5,000원", "유튜브 오가닉 콘텐츠로 100만 조회수를 기록하며 다이소몰 SNS 핫템으로 떠오른 제품.", "Became a hot SNS item on Daiso Mall after organic YouTube content about it hit 1 million views.",
     "다이소 미모바이마몽드 트러블밤▪다이소 아모레퍼시픽 콜라보▪피어니티놀▪다이소 품절대란", "Daiso▪DaisoKorea▪DaisoHaul▪KBeauty▪ViralItem"),
]

data = load()
existing = set(item['title_kr'] for item in data)
added = 0
for args in soldout_items2:
    if args[0] in existing:
        continue
    data.append(make_item("soldout-items", "품절 대란템·시즌 한정판", "Viral & Seasonal", 11, *args))
    existing.add(args[0])
    added += 1
save(data)
print("soldout-items added:", added)
