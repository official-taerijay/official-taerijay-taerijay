# -*- coding: utf-8 -*-
import json
PATH = '/sessions/kind-clever-carson/mnt/taerijay-platform/src/data/daiso.json'
with open(PATH, encoding='utf-8') as f:
    d = json.load(f)

# Remove the soldout-items duplicates of items that already exist in mask-pack (indices 31, 32 originally)
dupe_titles = {'VT 리들샷 100 페이셜 부스팅 퍼스트 앰플', 'VT 리들샷 300 페이셜 부스팅 퍼스트 앰플'}
new_d = []
removed = 0
seen_in_soldout = set()
for item in d:
    if item['sub'] == 'soldout-items' and item['title_kr'] in dupe_titles:
        removed += 1
        continue
    new_d.append(item)

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(new_d, f, ensure_ascii=False, indent=2)
print('removed:', removed, 'new total:', len(new_d))
