"use client";

const TIERS = [
  {
    id: "basic",
    nameKo: "베이직",
    nameEn: "Basic",
    price: "$19.99",
    devicesKo: "1개 디바이스 접속",
    devicesEn: "1 Device Access Only",
    servicesKo: "1개 단일 서비스 선택",
    servicesEn: "1 Selected Service Access",
    descKo: "기본적인 단일 서비스 마스터 패스",
    descEn: "Essential single service pass",
    bg: "bg-[#0A1120]", 
    border: "border-emerald-500/20",
    textStyle: "text-emerald-400",
    btnBg: "bg-emerald-600 hover:bg-emerald-500",
    badge: null
  },
  {
    id: "standard",
    nameKo: "스탠다드",
    nameEn: "Standard",
    price: "$29.99",
    devicesKo: "2개 디바이스 동시 접속",
    devicesEn: "2 Devices Simultaneous Access",
    servicesKo: "1개 서비스 권한 제공",
    servicesEn: "1 Service Full Access",
    descKo: "다양한 개인 기기 실시간 동시 연동",
    descEn: "Real-time sync across devices",
    bg: "bg-[#0D1526]",
    border: "border-blue-500/20",
    textStyle: "text-blue-400",
    btnBg: "bg-blue-600 hover:bg-blue-500",
    badge: null
  },
  {
    id: "pro",
    nameKo: "프로",
    nameEn: "Pro",
    price: "$39.99",
    devicesKo: "4개 디바이스 동시 접속",
    devicesEn: "4 Devices Simultaneous Access",
    servicesKo: "1개 서비스 권한 제공",
    servicesEn: "1 Service Full Access",
    descKo: "압도적 가성비 멀티 세션 패밀리 팩",
    descEn: "High-value multi-session family pack",
    bg: "bg-[#161224]",
    border: "border-purple-500/50",
    textStyle: "text-purple-400",
    btnBg: "bg-purple-600 hover:bg-purple-500",
    badge: "BEST VALUE"
  },
  {
    id: "double",
    nameKo: "더블",
    nameEn: "Double",
    price: "$34.99",
    devicesKo: "1개 디바이스 접속",
    devicesEn: "1 Device Access Only",
    servicesKo: "2개 결합 패키지 서비스 선택",
    servicesEn: "2 Bundled Services Package",
    descKo: "316+ X mini / 다이소 X 올영 / 이마트 X 편의점 중 선택",
    descEn: "Select 1 customized bundle set",
    bg: "bg-[#0F1A24]",
    border: "border-amber-500/20",
    textStyle: "text-amber-400",
    btnBg: "bg-amber-600 hover:bg-amber-500",
    badge: "BUNDLE"
  },
  {
    id: "total",
    nameKo: "토탈 (오리진)",
    nameEn: "Total (Origin)",
    price: "$99.99",
    devicesKo: "2개 디바이스 동시 접속",
    devicesEn: "2 Devices Simultaneous Access",
    servicesKo: "6개 전체 서비스 무제한 이용",
    servicesEn: "All 6 Services Unlimited Access",
    descKo: "플랫폼 내 전 인프라 무제한 액세스",
    descEn: "Unlimited all-access system pass",
    bg: "bg-[#1C0D12]",
    border: "border-[#641220]/60",
    textStyle: "text-[#E63946]",
    btnBg: "bg-[#641220] hover:bg-[#8B1E2F]",
    badge: "PREMIUM"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060B18] text-white font-sans antialiased selection:bg-[#641220] select-none">
      <header className="w-full h-16 border-b border-white/5 bg-[#060B18]/80 backdrop-blur-md fixed top-0 left-0 z-50 flex items-center justify-between px-5">
        <a href="/" className="text-lg font-black tracking-[4px] text-white no-underline">TAERIJAY</a>
        <a href="/auth" className="px-5 py-2 bg-[#641220] text-xs font-bold rounded-full hover:bg-[#641220]/80 transition-all no-underline text-white">
          SIGN IN
        </a>
      </header>

      <main className="pt-28 pb-12 px-6 max-w-7xl mx-auto text-left">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-8 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          TAERIJAY <br /> MASTER DATABASE
        </h1>
        
        <div className="space-y-5 mb-10 border-l-2 border-[#641220] pl-4">
          <div>
            <span className="text-xs font-bold text-neutral-400 block"># 스마트한 여행자를 위한 대한민국 로컬 가이드의 완벽한 기준</span>
            <span className="text-xl font-semibold text-neutral-200 tracking-wide block mt-0.5">The Standard Local Infrastructure Guide for Next-Gen Travelers</span>
          </div>
          <div>
            <span className="text-xs font-bold text-neutral-400 block"># 트렌디한 K 컬쳐 쇼핑맵</span>
            <span className="text-xl font-semibold text-neutral-200 tracking-wide block mt-0.5">Trendy K-Culture Shopping Navigator</span>
          </div>
          <div>
            <span className="text-xs font-bold text-neutral-400 block"># 복잡한 도심 가이드</span>
            <span className="text-xl font-semibold text-neutral-200 tracking-wide block mt-0.5">Complex Urban Route Navigator</span>
          </div>
          <div>
            <span className="text-xs font-bold text-neutral-400 block"># 한국 여행 생존 필수 인프라 데이터 잠금 해제</span>
            <span className="text-xl font-semibold text-neutral-200 tracking-wide block mt-0.5">Essential Korea Travel Lifeline Database Access</span>
          </div>
        </div>

        <div className="w-full p-6 mb-12 rounded-2xl border border-white/20 bg-gradient-to-r from-white/[0.05] to-transparent shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-bold">
          <div className="space-y-1.5">
            <div className="text-white text-sm flex items-center gap-2 font-black">
              <span className="text-[#F37021] text-lg leading-none">●</span> 매월 1일, 10일 신규 업데이트
            </div>
            <div className="text-neutral-400 text-xs pl-6 font-medium">New data updates synced automatically on the 1st and 10th of every month.</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-white text-sm flex items-center gap-2 font-black">
              <span className="text-emerald-400 text-lg leading-none">●</span> 1회 결제 시 2년 사용
            </div>
            <div className="text-neutral-400 text-xs pl-6 font-medium">One-time payment unlocks complete unexpired license for full 2 years.</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-white text-sm flex items-center gap-2 font-black">
              <span className="text-blue-400 text-lg leading-none">●</span> 구글 회원가입 ➔ 구글 로그인
            </div>
            <div className="text-neutral-400 text-xs pl-6 font-medium">Instant pass registration linked securely via unified Google OAuth credentials.</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left items-stretch mb-12">
          {TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className={`p-6 rounded-2xl border ${tier.bg} ${tier.border} flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all duration-300 active:scale-[0.98] lg:hover:-translate-y-1`}
            >
              {tier.badge && (
                <div className={`absolute top-3 right-3 px-2 py-0.5 text-[9px] font-black tracking-wider rounded-md ${tier.id === 'total' ? 'bg-[#641220] text-white' : 'bg-purple-600 text-white'}`}>
                  {tier.badge}
                </div>
              )}
              
              <div>
                <h3 className="text-2xl font-black text-white m-0 tracking-tight">
                  {tier.nameEn}
                </h3>
                <div className="text-3xl font-black text-white mt-3 mb-5 tracking-tight">
                  {tier.price}
                </div>
                <div className="space-y-4 border-t border-white/5 pt-5 mb-6">
                  <div className={tier.textStyle}>
                    <p className="m-0 text-xs font-bold text-neutral-400">📱 {tier.devicesKo}</p>
                    <p className="m-0 text-2xl font-semibold text-white tracking-tight mt-0.5">{tier.devicesEn}</p>
                  </div>
                  <div className={tier.textStyle}>
                    <p className="m-0 text-xs font-bold text-neutral-400">🔑 {tier.servicesKo}</p>
                    <p className="m-0 text-2xl font-semibold text-white tracking-tight mt-0.5">{tier.servicesEn}</p>
                  </div>
                  <div className="border-t border-white/5 pt-4 leading-normal">
                    <p className="m-0 text-xs font-medium text-neutral-500">{tier.descKo}</p>
                    <p className="m-0 text-base font-medium text-neutral-300 mt-0.5">{tier.descEn}</p>
                  </div>
                </div>
              </div>

              <a 
                href="/auth" 
                className={`w-full py-3.5 ${tier.btnBg} text-white text-center text-xs font-bold rounded-xl transition-all no-underline block shadow-lg tracking-wide`}
              >
                구매 및 이용하기 · Access →
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full py-8 text-left border-t border-white/5 text-[10px] font-medium text-[#4B5563] bg-[#03060F]">
        <div className="max-w-7xl mx-auto px-6 leading-relaxed space-y-1">
          <p>TAERIJAY (태리재이) | Business License: 673-51-01148 | E-Commerce Permit: 2026-화도수도-0247</p>
          <p>Address: Hwado-eup, Namyangju-si, Gyeonggi-do, South Korea | Contact: official@taerijay.com</p>
          <p className="text-[#641220]/70 font-semibold">🔒 Securely processed by Paddle. Protected by Google Security Network.</p>
          <p className="pt-2 text-[9px] text-[#374151] m-0">© 2026 TAERIJAY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}