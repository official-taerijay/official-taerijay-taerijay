"use client";

export default function SuccessPage() {
  
  // 🎨 약속된 글로벌 고정 폰트 세트
  const globalFontStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif'
  };

  return (
    <div 
      style={globalFontStyle}
      className="min-h-screen bg-[#060B18] text-white antialiased selection:bg-[#641220] select-none flex flex-col justify-between"
    >
      
      {/* 🏛️ 글로벌 헤더 */}
      <header className="w-full h-16 border-b border-white/5 bg-[#060B18] fixed top-0 left-0 z-50 flex items-center px-5">
        <a href="/" className="text-lg font-black tracking-[4px] text-white no-underline uppercase">TAERIJAY</a>
      </header>

      {/* 🚀 중앙 결제 완료 섹션 */}
      <main className="pt-28 pb-20 px-6 max-w-3xl mx-auto w-full text-left flex-grow flex flex-col justify-center">
        
        {/* 성공 헤드 뱃지 및 타이틀 */}
        <div className="mb-10 space-y-4">
          <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent uppercase">
            PAYMENT <br /> COMPLETED
          </h1>
        </div>

        {/* 📝 영수증 명세 카드 (좌우 분할 100% 제거, 세로 1단 한 줄 정렬) */}
        <div className="p-8 md:p-10 rounded-[32px] border border-white/10 bg-[#0D1526]/50 shadow-2xl space-y-12 mb-10">
          
          <div className="space-y-10">
            {/* 1. 선택한 마스터 패스 요금제 */}
            <div>
              <p className="text-[11px] font-bold text-neutral-500 m-0 mb-1.5 leading-none">
                01. 선택한 마스터 패스 요금제
              </p>
              <p className="text-2xl md:text-3xl font-black text-white m-0 leading-tight uppercase tracking-tight">
                PRO FAMILY PACK ACCESS
              </p>
            </div>

            {/* 2. 결제 완료 일시 */}
            <div>
              <p className="text-[11px] font-bold text-neutral-500 m-0 mb-1.5 leading-none">
                02. 결제 완료 일시
              </p>
              <p className="text-2xl md:text-3xl font-black text-white m-0 leading-tight uppercase tracking-tight">
                2026. 06. 25 · 11:24 AM (KST)
              </p>
            </div>

            {/* 3. 라이선스 사용 기간 명세 (🔥업데이트 주기 항목 완전 삭제 완료🔥) */}
            <div>
              <p className="text-[11px] font-bold text-[#F37021] m-0 mb-1.5 leading-none">
                03. 라이선스 이용 기간 명세 (1회 결제 시 2년 즉시 사용 가능)
              </p>
              <p className="text-2xl md:text-3xl font-black text-white m-0 leading-tight uppercase tracking-tight">
                2-YEAR ACCESS LICENSE GRANTED
              </p>
            </div>

            {/* 4. 구글 계정 통합 인증 (서브 설명까지 한글 -> 영문 순서 완벽 적용) */}
            <div>
              <p className="text-[11px] font-bold text-emerald-500 m-0 mb-1.5 leading-none">
                04. 구글 계정 통합 인증 상태
              </p>
              <p className="text-2xl md:text-3xl font-black text-white m-0 leading-tight uppercase tracking-tight">
                GOOGLE OAUTH 2.0 SECURITY TOKEN ISSUED
              </p>
              <div className="mt-2.5 space-y-0.5">
                <p className="text-[11px] font-bold text-neutral-400 m-0">지정 구글 계정 연동 및 본인 인증 완료.</p>
                <p className="text-[10px] font-bold text-neutral-500 m-0">Designated Google account linked and identity verified.</p>
              </div>
            </div>

            {/* 5. 결제 대행 허브 명세 (서브 설명까지 한글 -> 영문 순서 완벽 적용) */}
            <div>
              <p className="text-[11px] font-bold text-blue-400 m-0 mb-1.5 leading-none">
                05. 결제 대행 허브 명세
              </p>
              <p className="text-2xl md:text-3xl font-black text-white m-0 leading-tight uppercase tracking-tight">
                BILLING MANAGED BY PADDLE INFRASTRUCTURE
              </p>
              <div className="mt-2.5 space-y-0.5">
                <p className="text-[11px] font-bold text-neutral-400 m-0">카드 명세서상 Paddle 대금 청구 진행.</p>
                <p className="text-[10px] font-bold text-neutral-500 m-0">Billed via Paddle on your credit card statement.</p>
              </div>
            </div>
          </div>

          {/* ⚠️ 이용 약관 가이드 고정 박스 (한글 -> 영문 순서 완벽 적용) */}
          <div className="pt-8 border-t border-[#641220]/50 bg-[#1A0B10]/20 p-6 rounded-2xl border border-white/5 space-y-4">
            <div>
               <p className="text-[11px] font-bold text-[#E63946] m-0 mb-1 leading-none">
                디지털 서비스 이용 약관 필수 고지
              </p>
              <p className="text-sm font-black text-[#E63946] uppercase tracking-[2px] m-0">
                DIGITAL SERVICE ACCESS TERMS
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[11px] font-medium text-neutral-300 leading-relaxed m-0">
                  • 본 상품은 별도의 파일 다운로드 없이 웹페이지 내 실시간 조회 및 열람만 가능한 디지털 패스 권한 상품임.
                </p>
                <p className="text-[10px] font-medium text-neutral-500 leading-relaxed m-0 ml-2">
                  This product is a web-only digital access pass; no file downloads are provided.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-medium text-neutral-300 leading-relaxed m-0">
                  • 인증 토큰 발행 즉시 서비스 이용으로 간주되어 단순 변심에 의한 환불 처리 불가능.
                </p>
                <p className="text-[10px] font-medium text-neutral-500 leading-relaxed m-0 ml-2">
                  Service is deemed used immediately upon token issuance; refunds for change of mind are not available.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 🎯 대시보드 진입 버튼 (한글 작게 위 -> 영문 크게 아래) */}
        <div className="flex flex-col items-start gap-4">
          <a 
            href="/members" 
            className="w-full max-w-sm py-4 px-6 bg-[#F37021] text-white text-center rounded-2xl no-underline shadow-[0_10px_30px_rgba(243,112,33,0.2)] hover:bg-[#D95F14] transition-all active:scale-[0.98] block"
          >
            <p className="text-[10px] font-bold text-white/80 m-0 mb-0.5 leading-none tracking-widest uppercase">
              데이터베이스 입장
            </p>
            <p className="text-sm font-black m-0 tracking-widest uppercase">
              ENTER DASHBOARD →
            </p>
          </a>
        </div>

      </main>

      {/* 🏢 풋바 */}
      <footer className="w-full py-6 text-left px-6 border-t border-white/5 text-[10px] font-bold text-[#3A4455] bg-[#03060F]">
        © 2026 TAERIJAY GLOBAL SECURITY HUB. ALL RIGHTS RESERVED.
      </footer>

    </div>
  );
}