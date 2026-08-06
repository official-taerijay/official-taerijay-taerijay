# -*- coding: utf-8 -*-
"""
mini_A_capital.csv 97개 행 팩트체크 결과 반영 스크립트.
각 행(1-indexed)에 대한 판정(verdict)과 필요한 필드 수정을 정의하고
mini_A_capital_verified.csv 를 생성한다.
"""
import csv

SRC = '/sessions/kind-clever-carson/mnt/outputs/sheets/mini_A_capital.csv'
DST = '/sessions/kind-clever-carson/mnt/outputs/sheets/mini_A_capital_verified.csv'

# row_num(1-indexed) -> dict of field overrides (only changed fields)
FIXES = {
    9: {  # 청와대 역사 투어 - 2025.8~ 관람 중단, 재개 시점 불투명, 출구도 3번이 맞음
        'route_kr': '3호선 경복궁역 3번 출구 → 도보 15분 → 청와대 입구',
        'desc_kr': '청와대 대통령 관저 개방 투어\n▪ 청와대 본관 → 영빈관 → 춘추관 → 녹지원\n▪ 사전 예약 필수 (청와대 공식 홈페이지)\n▪ 신분증 지참 필수\n▪ ※ 2025년 8월부터 대통령 복귀로 관람이 축소·중단된 바 있어 방문 전 개방 여부 확인 필요 (정보 확인 필요)',
    },
    27: {  # 경복궁 야간 특별관람 - 상시가 아니라 기간 한정 예약제, 3천명 한정
        'desc_kr': '경복궁 야간 특별관람 (수·목·금·토 한정)\n▪ 조명 밝힌 근정전·경회루 야경 감상\n▪ 특정 기간(봄/가을 등)에만 운영되는 사전 예약제 행사로, 1일 관람 인원이 제한되어 있어 예매 시작과 동시에 조기 마감되는 경우가 많음\n▪ 한복 착용 시 분위기 배가',
    },
    44: {  # 스카이72 -> 2023.4부터 클럽72로 개명
        'title_kr': '인천 클럽72(구 스카이72) 골프·드라이빙레인지',
        'title_en': 'Incheon Club72 (formerly SKY72) Golf & Driving Range',
        'desc_kr': '영종도 클럽72(옛 스카이72) 드라이빙 레인지 체험\n▪ 국내 최대급 드라이빙 레인지 · 서해 오션뷰\n▪ 초보 골프 레슨 프로그램 운영\n▪ 인천공항 인근 · 환승 시간 활용 가능\n▪ 2023년 4월부터 운영사 변경으로 명칭이 "클럽72"로 바뀜',
    },
    46: {  # 전등사 2023.5부터 무료
        'budget_kr': '무료 (2023년 5월부터 국가문화유산 관람료 면제)',
    },
    50: {  # 석모도 - 2017년 석모대교 개통으로 배편 폐선, 다리로 차량/버스 접근
        'desc_kr': '[검증 필요: 정보 불확실] 석모도 보문사 + 낙가산 코스\n▪ 2017년 석모대교 개통 이후 외포리↔석모도 여객선 항로는 폐선되었으며, 현재는 석모대교를 통해 버스·차량으로 이동\n▪ 외포리 선착장 → 석모대교 → 석모도 → 보문사 마애석불\n▪ 한국 3대 관음 성지 중 하나\n▪ 낙가산 정상 서해 조망 탁월',
        'route_kr': '신촌역 → 3000번 → 강화터미널 → 외포리 방면 버스 → 석모대교 경유 석모도 (총 약 2시간, ※ 배편 아닌 대교 이용)',
        'budget_kr': '보문사 입장료 2,000원 (배편 없음, 대교 통행)',
    },
    56: {  # 화성행궁 입장료 1,500->2,000 (야간개장이 1,500)
        'budget_kr': '행궁 입장료 2,000원 (야간개장 시 1,500원)',
    },
    58: {  # 한국민속촌 25,000 -> 32,000~35,000
        'budget_kr': '성인 32,000~35,000원 (시즌·할인에 따라 변동)',
    },
    61: {  # 카카오 스페이스닷원은 제주도 소재, 판교는 카카오 아지트
        'title_kr': '판교 현대백화점 & 카카오 아지트 코스',
        'title_en': 'Pangyo Hyundai Department Store & Kakao Agit Tour',
        'desc_kr': '판교 테크노밸리 & 쇼핑 코스\n▪ 현대백화점 판교점 → 카카오 아지트(판교 사옥) 외관 관람\n▪ ※ "스페이스닷원"은 제주도 소재 카카오 사옥이며 판교와는 다른 건물이므로 표기 정정\n▪ IT·스타트업 밀집 판교 테크노밸리\n▪ 스타필드 하남 연계 가능',
    },
    62: {  # 안성팜랜드 12,000 -> 14,000~15,000
        'budget_kr': '성인 14,000~15,000원',
    },
    71: {  # 광명동굴 6,000 -> 10,000
        'budget_kr': '동굴 입장료 10,000원',
    },
    68: {  # 쉐이크쉑 국내 1호점은 강남, 평택 아님 - 과장 표현 정정
        'desc_kr': '평택 K-6·험프리스 기지 주변 탐방\n▪ 미군 문화가 녹아든 평택 안정리 로데오 거리\n▪ 미국식 수제버거 등 다국적 음식점 다수 분포 (※ 국내 최초 쉐이크쉑은 강남점이며 평택 매장이 1호점이라는 정보는 사실과 다름)\n▪ 다국적 음식·바 문화 체험',
    },
    38: {  # 강화 고려궁지 무료 -> 실제 입장료 있음
        'budget_kr': '고려궁지 입장료 성인 1,200원 (강화산성은 무료)',
    },
    86: {  # 남양주 다산유적지 무료인데 2,000원으로 되어 있음
        'budget_kr': '무료',
    },
    89: {  # 재인폭포 무료 표기였는데 실제 입장료 있음 (원본에 무료 표기 없음 확인 후 처리하지만 budget이 '무료'였음)
        'budget_kr': '성인 5,000원 (어린이·청소년 3,000원)',
    },
}

# UNCERTAIN 처리 대상: row_num -> True (desc_kr 끝에 문구 추가) 혹은 톤다운 텍스트 지정
UNCERTAIN_APPEND = {
    5: '강남 K-POP 댄스 클래스',
    6: '이태원 세계 요리 쿠킹 클래스',
    7: '성수 레더 공방 체험',
    18: '개인 스타일링 컨설팅',
    24: '을왕리 서핑 레슨 3회 패키지',
    29: '청담 프라이빗 다이닝 투어',
    30: '성수동 공방 투어',
    32: 'K-뷰티 체험 & 메이크업 클래스',
    34: '성수 수제화 제작',
    39: '강화도 마니산 트레킹 (버스 소요시간)',
    41: '월미도 셔틀버스 요일',
    48: '인천 드림파크 캠핑',
    52: '파라다이스시티 아트테인먼트',
    59: '에버랜드 자유이용권 가격 (시즌별 변동)',
    64: '이천 도자기 체험비',
    66: '가평 쁘띠프랑스 입장료',
    78: '행주산성 입장료 (무료 전환 가능성)',
    97: '용문사 입장료 (무료 전환 가능성)',
}

def append_uncertain(desc: str) -> str:
    return desc.rstrip() + '\n(정보 확인 필요)'

def main():
    with open(SRC, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        rows = list(reader)

    assert len(rows) == 97, f'expected 97 rows, got {len(rows)}'

    verdicts = {}

    for idx, row in enumerate(rows, start=1):
        if idx in FIXES:
            for k, v in FIXES[idx].items():
                row[k] = v
            verdicts[idx] = 'FIX'
        if idx in UNCERTAIN_APPEND:
            row['desc_kr'] = append_uncertain(row['desc_kr'])
            # UNCERTAIN can co-occur conceptually but for reporting mark as UNCERTAIN unless already FIX
            verdicts[idx] = verdicts.get(idx, 'UNCERTAIN')
            if idx in FIXES:
                verdicts[idx] = 'FIX+UNCERTAIN'
        if idx == 50:
            verdicts[idx] = 'REMOVE'  # explicit REMOVE marker per spec (석모도 배편 정보 오류가 커서 REMOVE 처리)
        if idx not in verdicts:
            verdicts[idx] = 'CORRECT'

    with open(DST, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    # print summary
    from collections import Counter
    c = Counter(verdicts.values())
    print('Verdict counts:', dict(c))
    print('Total rows written:', len(rows))

if __name__ == '__main__':
    main()
