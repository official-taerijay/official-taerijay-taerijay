# taerijay+entertainment 릴스 — Kling AI 프롬프트 (모션그래픽 중심 · 릴스 템포)

⭐ 이 파일은 "레이어 1(서비스소개 7개)" 마스터 템플릿의 기준 샘플입니다.
검증 완료되면 이 구조(뼈대)를 나머지 5개 채널에도 그대로 재사용합니다.

출처: taerijay.com/04-channels/entertainment 실제 문구 기준 (2026-08-31 확인)
스타일: 모션그래픽(UI 카드·아이콘·타이포) 중심, 릴스/숏츠 템포
길이: 14~15초 / 비율: 9:16
시그니처 컬러: 다크 네이비(#0A192F) + 시안(#00E5FF)

---

## 🧱 마스터 템플릿 구조 (재사용 뼈대)

이 구조는 채널이 바뀌어도 그대로 유지되고, [ ] 안의 값만 채널별로 교체합니다.

| 구간 | 시간 | 내용 | 이 채널의 값 |
|---|---|---|---|
| A. 훅 | 0-1초 | 채널명이 즉시 스냅인 | "taerijay+entertainment" |
| B. 소개 | 1-5초 | 한줄 소개 카드 (한글→영문 스왑) | "K-콘텐츠 촬영지 총정리" |
| C. 카테고리 | 5-11초 | 카테고리 카드 순차 등장 (최대 3-4개, 많으면 대표만) | 드라마·영화·예능 |
| D. 특징 | 11-13초 | 핵심 특징 1개 강조 | "전체 무료" |
| E. 마무리 | 13-15초 | 워드마크 로고 + CTA 고정 | "taerijay+entertainment" + "TAERIJAY.COM" |

---

## ⚠️ 오탈자 방지 체크
텍스트는 따옴표로 감싸 정확히 명시, "spelled exactly as written, no typos, no extra characters" 필수 포함. 생성 후 확대 검수.

---

## 전체 프롬프트 (한 번에 시도용, 약 15초)

```
Create a 15-second vertical (9:16) motion graphics promotional reel for "taerijay+entertainment," a free channel guiding foreign tourists to Korean drama, movie, and variety show filming locations. Style: clean flat motion graphics with glassmorphism UI cards, glowing icons, and bold typography animating on a dark navy (#0A192F) background with vivid cyan (#00E5FF) accents — no photorealistic scenes, no live-action footage, no camera movement. Fast, punchy reels-style pacing: strong hook in the first second, quick cuts, but every text element holds 1.5-2 seconds so nothing feels cut off.

[0:00-0:01] Immediate hook: the bold cyan text "taerijay+entertainment" (spelled exactly as written, no typos, no extra characters) snaps into center frame instantly with a sharp scale-in animation. Holds clearly for 1.5 seconds.

[0:01-0:05] Quick cut to a glassmorphism UI card. The Korean text "K-콘텐츠 촬영지 총정리" (spelled exactly as written, no typos) pops in with a snappy motion, holds 1.8 seconds, then swaps cleanly to "Every K-content filming location, mapped" which holds 1.8 seconds.

[0:05-0:11] Three category icon cards snap in one after another, each labeled with a "FREE" badge: first "드라마" (spelled exactly as written, no typos) pops in and holds 1.5 seconds, then swaps to "영화" (spelled exactly as written) which holds 1.5 seconds, then swaps to "예능" (spelled exactly as written) which holds 1.5 seconds — quick sequential reveal, never overlapping.

[0:11-0:13] Fast zoom into a single highlighted badge card. The text "전체 무료" (spelled exactly as written, no typos, no extra characters) pops in with a bold snappy animation and holds clearly for 2 seconds.

[0:13-0:15] Hard cut to a clean dark navy background. The cyan "taerijay+entertainment" wordmark snaps into center frame and locks in place completely still. Below it, "TAERIJAY.COM" (spelled exactly as written, no typos, no extra characters) pops in and holds clearly, static, for the final 2 seconds — no fade, clean hard stop.

Style: flat modern motion graphics, glassmorphism cards, glowing cyan accent lighting, snappy micro-animations, smooth 30fps motion, high-energy reels/shorts editing rhythm, clean minimal typography, no decorative font distortion, no live-action or photorealistic elements.
```

---

## 씬별 개별 프롬프트 (나눠서 생성할 경우)

### Scene 1 — 즉시 훅 (0-4초)
```
Motion graphics animation on a dark navy (#0A192F) background. The bold cyan text "taerijay+entertainment" (spelled exactly as written, no typos, no extra characters) snaps into center frame instantly with a sharp scale-in animation in the very first frame. Holds clearly and completely still for 2 seconds. Vertical 9:16, flat modern motion graphics style, glowing cyan accent lighting, snappy reels-style pacing, no live-action footage, no photorealistic scenes.
```

### Scene 2 — 서비스 소개 (4-8초)
```
A glassmorphism UI card floats in dark navy space with a soft cyan glow border. The Korean text "K-콘텐츠 촬영지 총정리" (spelled exactly as written, no typos) pops in with a snappy scale animation, holds clearly for 1.8 seconds, then cleanly swaps to "Every K-content filming location, mapped" (spelled exactly as written, no typos) which holds for 1.8 seconds. Vertical 9:16, flat motion graphics, fast punchy pacing, clean minimal typography, no photorealistic elements.
```

### Scene 3 — 카테고리 3개 (8-13초)
```
Three category icon cards on a dark navy background, each with a small cyan "FREE" badge, snap in one after another with quick punchy motion: first "드라마" (spelled exactly as written, no typos) holds 1.5 seconds, then swaps to "영화" (spelled exactly as written) which holds 1.5 seconds, then swaps to "예능" (spelled exactly as written) which holds 1.5 seconds. Sleek flat UI motion graphics, vertical 9:16, high-energy reels pacing, no live-action elements, never show more than one category at a time.
```

### Scene 4 — 특징 강조 + 마무리 (13-15초)
```
Fast zoom into a single bold badge card. The text "전체 무료" (spelled exactly as written, no typos, no extra characters) pops in with a snappy scale animation and holds clearly for 1.5 seconds. Hard cut to a clean, completely static dark navy background. The cyan "taerijay+entertainment" wordmark snaps into center frame with sharp motion graphics energy and locks in place. Below it, "TAERIJAY.COM" (spelled exactly as written, no typos, no extra characters) pops in and holds clearly, static, for 2 seconds. Clean hard stop, no fade needed. Flat modern motion graphics, cyan accent glow, vertical 9:16.
```

---

## 실제 소스 데이터 (taerijay.com 확인, 2026-08-31)

- 채널 헤드라인: "무대 위, 지금 이 순간" / "K-POP LIVE"
- 채널 소개: "K-콘텐츠 촬영지·팬 성지 총정리, 전체 무료"
- 카테고리 (전체 무료, 3개): 드라마(DRAMA), 영화(MOVIE), 예능(VARIETY)

## 참고사항
- "실시간" 표현 사용하지 않음.
- 이 파일은 마스터 템플릿(A훅→B소개→C카테고리→D특징→E마무리) 검증용 대표 샘플입니다. 결과가 만족스러우면 이 5단 구조를 protocol/mini/red/green/mart+convenience에도 그대로 적용하고, 카테고리 수가 많은 채널(protocol 12개, mini 13개)은 C구간에서 대표 카테고리 3개만 선별해 보여줍니다 — 전체 카테고리는 레이어2(카테고리별 개별 콘텐츠 59개)에서 하나씩 다룹니다.
