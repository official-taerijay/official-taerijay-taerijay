# TAERIJAY 소개 영상 — Gemini(Veo) 프롬프트
## 인스타 릴스 × 유튜브 숏츠 공용

출처: taerijay.com 메인 페이지 실제 문구 기준 (2026-08-31 확인)
길이: 18초 (릴스 최소 권장/숏츠 규정 모두 충족하는 범위)
비율: 9:16 세로 (릴스·숏츠 공통 규격)
톤: 다크 네이비(#0A192F) + 골드(#D4AF37)

---

## 이 영상의 설계 원칙

1. **화면 텍스트는 "TAERIJAY"와 "TAERIJAY.COM" 로고 자리 2곳만.** 나머지 설명은 전부 음성 내레이션으로 전달 — 한글 자막이 화면에 길게 노출될수록 오탈자 위험이 커지므로 최소화했습니다.
2. **"UI mockup", "app interface" 같은 표현은 절대 사용하지 않습니다.** 이런 표현을 넣으면 Gemini가 실제 앱 화면(메뉴명, 카테고리 텍스트, 버튼 라벨 등)까지 통째로 그려 넣으려다 오탈자가 대량 발생합니다 — 실제 테스트에서 "TAERJFJY", "볼十듀팬사룰" 같은 깨진 글자가 확인됐습니다. 대신 "abstract glowing icons"(추상적인 빛나는 아이콘) 같은 표현만 사용합니다.
3. **음성 내레이션은 영어로.** Gemini는 영어 음성 생성이 특히 안정적입니다. 한국어 정보 서비스이지만, TAERIJAY의 타겟은 외국인 관광객이므로 영어 내레이션이 실제 타겟과도 일치합니다.
4. **릴스·숏츠 공용 규격.** 9:16 세로, 18초(릴스 최소 권장 15초 이상 충족 / 숏츠 60초 이하 충족), 워터마크 없이 사용 가능하면 두 플랫폼에 동일 파일을 그대로 업로드 가능합니다.
5. **시작과 끝에 여유.** 급하게 시작/마무리되지 않도록 홀드타임을 명시했습니다.

> ⚠️ 이전 버전(Scene 2에 "UI mockup showing a subscription app interface" 표현 포함)으로 생성 시 오탈자가 대량 발생하는 것이 확인되어, 아래 프롬프트는 전면 수정되었습니다.

---

## 전체 프롬프트 (한 번에 시도용) — 오탈자 수정 최종본

```
Create an 18-second vertical (9:16) cinematic promotional video for "TAERIJAY," a verified local-info subscription service for foreign travelers exploring Korea. Dark navy (#0A192F) background with gold (#D4AF37) accents, premium travel-magazine aesthetic. Smooth, slow, unhurried camera movement throughout — no rushed cuts, no shaky motion. Give every scene extra time to breathe so narration never feels cut off.

Add English voice-over narration throughout, spoken by a calm, confident, warm female travel-guide voice, clear and well-paced, with natural pauses between sentences. Do not add any on-screen text, letters, words, or UI elements anywhere in the video except two brief logo moments described below. Do not depict any app screens, interfaces, menus, or readable labels of any kind — only abstract shapes and glowing light effects.

[0:00-0:02] Hold on a calm aerial view of a Seoul skyline at dusk for the first 2 seconds, letting the scene settle before narration begins.

[0:02-0:06] The camera slowly descends over the glowing skyline. Voice-over begins: "Traveling in Korea, you'll find no shortage of information — the challenge is knowing what to trust." At 0:04, the gold text "TAERIJAY" (spelled exactly as written, no typos, no extra characters) fades in gently at center, holds clearly for 2 seconds, then fades out slowly — this is the only text in this segment.

[0:06-0:11] Smooth transition to an abstract dark navy space where six glowing minimalist orbs of light float and gently pulse, each a distinct accent color (cyan, orange, ivory, red, green, gold) — pure abstract light shapes, no icons with recognizable symbols, no text, no UI frames or borders of any kind. Voice-over continues: "TAERIJAY is a verified, local-info subscription made for travelers exploring Korea — six channels, one subscription, covering everything from filming locations to beauty finds to shopping guides."

[0:11-0:15] The six glowing orbs slowly arrange into a clean 2x3 grid formation and hold steady, still just abstract light — no text, no labels, no interface elements. Voice-over continues: "Every listing is personally verified, and refreshed on the 10th and 20th of every month, in 135 languages." Let the grid hold on screen with no rush.

[0:15-0:18] Camera slowly pulls back to a calm dark navy background, holding fully steady. The gold "TAERIJAY" wordmark logo (spelled exactly as written, no typos, no extra characters) animates in gently at center and remains held in frame. Below it, "TAERIJAY.COM" (spelled exactly as written, no typos, no extra characters) fades in and stays clearly visible for the final 2 seconds. Voice-over concludes: "TAERIJAY — your trusted guide to Korea." Do not fade to black until the very last half-second, and never cut the voice-over off mid-sentence.

Style: cinematic color grading, shallow depth of field, soft gold lens flares, smooth 24fps motion, premium airline-commercial pacing — deliberately unhurried, confident, generous hold times, natural voice-over pacing with breathing room between lines. No on-screen text or UI elements anywhere except the two logo moments explicitly described above.
```

---

## 씬별 개별 프롬프트 (나눠서 생성할 경우)

### Scene 1 — 오프닝 (0-6초)
```
Cinematic aerial drone shot slowly descending over Seoul's skyline at dusk, city lights turning on gradually, dark navy sky with warm gold horizon glow. Hold the empty skyline shot for the first 2 seconds before anything happens — do not rush the opening. English voice-over, calm confident warm female travel-guide voice: "Traveling in Korea, you'll find no shortage of information — the challenge is knowing what to trust." At the midpoint, the bold gold text "TAERIJAY" (spelled exactly as written, no typos, no extra characters) fades in gently at center, holds clearly for 2 seconds, then fades out slowly. Vertical 9:16, slow unhurried camera movement, premium travel-commercial quality, no quick cuts. No other on-screen text or UI elements.
```

### Scene 2 — 서비스 소개 (6-11초)
```
Smooth transition to an abstract dark navy space where six glowing minimalist orbs of light float and gently pulse, each a distinct accent color (cyan, orange, ivory, red, green, gold) — pure abstract light shapes only, no icons with symbols, no text, no letters, no numbers, no UI frames, no app interface, no menus or labels of any kind. English voice-over continues, same calm confident voice: "TAERIJAY is a verified, local-info subscription made for travelers exploring Korea — six channels, one subscription, covering everything from filming locations to beauty finds to shopping guides." Vertical 9:16, calm unhurried pacing, soft gold accent glow, premium quality, no rushed transitions.
```

### Scene 3 — 6개 채널 + 신뢰 포인트 (11-15초)
```
The six glowing orbs of light complete their arrangement into a clean 2x3 grid and hold steady on screen, dark navy background — still purely abstract light shapes, absolutely no text, no letters, no numbers, no icons with symbols, no UI elements of any kind. English voice-over continues: "Every listing is personally verified, and refreshed on the 10th and 20th of every month, in 135 languages." Sleek abstract motion graphics style, premium dark theme, vertical 9:16, unhurried pacing, let the grid hold without rushing to the next scene.
```

### Scene 4 — 마무리 로고 + CTA (15-18초)
```
Camera slowly pulls back to reveal a clean, calm dark navy background, holding completely steady with no further camera movement. The gold "TAERIJAY" wordmark logo (spelled exactly as written, no typos, no extra characters) elegantly animates into frame at center and remains held in place. Below it, "TAERIJAY.COM" (spelled exactly as written, no typos, no extra characters) fades in and stays clearly visible on screen for the final 2 seconds. English voice-over concludes, same calm confident voice: "TAERIJAY — your trusted guide to Korea." Only fade to black in the very last half-second — never cut the voice-over off mid-sentence. Cinematic, premium, vertical 9:16, deliberately unhurried and confident pacing throughout. No other on-screen text or UI elements.
```

---

## 음성 내레이션 전체 대본 (검수용)

편집 시 자막을 추가로 얹고 싶다면 아래 원고를 그대로 복사해서 사용하세요 — 오탈자 없는 정확한 원고입니다.

**영어 원고 (Gemini 음성 생성용, 총 4문장)**

1. "Traveling in Korea, you'll find no shortage of information — the challenge is knowing what to trust."
2. "TAERIJAY is a verified, local-info subscription made for travelers exploring Korea — six channels, one subscription, covering everything from filming locations to beauty finds to shopping guides."
3. "Every listing is personally verified, and refreshed on the 10th and 20th of every month, in 135 languages."
4. "TAERIJAY — your trusted guide to Korea."

**한글 자막 (편집기에서 직접 입힐 경우, 정확한 원고)**

1. 한국을 여행하다 보면 정보는 넘치지만, 무엇을 믿어야 할지가 문제입니다.
2. TAERIJAY는 한국을 여행하는 외국인을 위한 검증된 로컬 정보 구독 서비스입니다 — 6개 채널, 하나의 구독으로 촬영지부터 뷰티, 쇼핑까지.
3. 모든 정보는 직접 확인하며, 매월 10일·20일 업데이트되고, 135개 언어로 제공됩니다.
4. TAERIJAY — 당신의 믿을 수 있는 한국 여행 가이드.

---

## 실제 소스 문구 (taerijay.com 확인, 2026-08-31)

| 구분 | 한글 | 영문 |
|---|---|---|
| 메인 슬로건 | 한국을 여행하는 외국인을 위한, 검증된 로컬 정보 구독 서비스 | A verified local-info subscription made for travelers exploring Korea |
| 특징1 | 직접 확인한 정보만 | Only verified, fact-checked info |
| 특징2 | 매월 10일·20일 업데이트 | Updated on the 10th & 20th monthly |
| 특징3 | 135개 언어 지원 | Available in 135 languages |

---

## 릴스/숏츠 업로드 체크리스트

- [ ] Gemini(Veo) 생성 후 워터마크 유무 확인 — 있다면 유료 플랜 결과물 확인 필요
- [ ] 화면 텍스트("TAERIJAY", "TAERIJAY.COM") 철자 확대 검수
- [ ] 음성 내레이션 발음/문장 끊김 확인 — 특히 4번째 문장이 끝까지 재생되는지
- [ ] 인스타그램: 9:16, 최대 90초까지 릴스 가능 (18초는 충분히 짧아 안전)
- [ ] 유튜브 숏츠: 9:16, 60초 이하 필수 — 18초 문제없음
- [ ] 두 플랫폼 모두 같은 mp4 파일 그대로 업로드 가능 (별도 재작업 불필요)

## 참고사항
- "실시간" 표현 사용하지 않음.
- 화면 텍스트를 로고 2곳으로 최소화해 오탈자 리스크를 크게 줄였습니다 — 음성은 영어라 Gemini가 상대적으로 안정적으로 생성합니다.
- 한글 자막이 꼭 필요하면 위 "한글 자막" 원고를 편집기에서 직접 타이핑해 입히는 것을 권장합니다(Gemini에게 한글 화면 텍스트를 요청하지 않음).
