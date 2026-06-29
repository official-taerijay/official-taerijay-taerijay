"use client";

import { useState, useEffect } from "react";

export default function MembersDashboard() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [deviceCount, setDeviceCount] = useState(1);
  const maxAllowedDevices = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      const simulatedConnectedDevices = Math.floor(Math.random() * 6) + 1;
      setDeviceCount(simulatedConnectedDevices);

      if (simulatedConnectedDevices > maxAllowedDevices) {
        setIsBlocked(true);
      } else {
        setIsBlocked(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const globalFontStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif'
  };

  if (isBlocked) {
    return (
      <div style={globalFontStyle} className="min-h-screen bg-[#1A0B10] text-white antialiased flex items-center justify-start px-6 md:px-20 select-none">
        <div className="max-w-2xl space-y-8 border-l-4 border-[#641220] pl-6 py-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#E63946]">
            ACCESS DENIED <br /> OVER DEVICE LIMIT
          </h1>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-neutral-400 m-0 block">실시간 동시 접속 디바이스 허용 대수 초과 차단</p>
              <p className="text-2xl font-black text-white tracking-tight mt-0.5 m-0 block">Simultaneous Session Limit Exceeded</p>
            </div>
            <div className="bg-black/40 p-4 rounded-xl border border-[#641220]/30 space-y-2 max-w-sm text-sm font-bold">
              <p className="text-neutral-400 m-0 block">현재 실시간 접속 기기 수: <span className="text-[#E63946] text-lg font-black">{deviceCount}대</span></p>
              <p className="text-neutral-400 m-0 block">요금제 최대 허용 기기 수: <span className="text-emerald-400 text-lg font-black">{maxAllowedDevices}대</span></p>
            </div>
            <p className="text-xs font-medium text-neutral-500 leading-relaxed block">
              기존에 접속된 다른 개인 기기의 브라우저 세션을 종료한 뒤 재시도 권장. <br />
              지속적인 오류 발생 시 관리자 인프라 보안 데스크로 문의 요망.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={globalFontStyle} className="min-h-screen bg-[#060B18] text-white antialiased selection:bg-[#641220] select-none flex flex-col justify-between">
      
      <header className="w-full h-16 border-b border-white/5 bg-[#060B18]/80 backdrop-blur-md fixed top-0 left-0 z-50 flex items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <a href="/" className="text-lg font-black tracking-[4px] text-white no-underline m-0 block">TAERIJAY</a>
          <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-black rounded block">MEMBERS ONLY</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-bold text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse block" />
          <span className="m-0 block">시큐어 연결망 가동 중</span>
        </div>
      </header>

      <main className="pt-28 pb-20 px-6 max-w-4xl mx-auto w-full text-left flex-grow">
        
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-8 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent m-0 block">
          MASTER DATABASE <br /> SECURITY AREA
        </h1>

        {/* 🍊 주황색 2px 전체 테두리 고정 명세 */}
        <div className="w-full p-6 mb-10 rounded-3xl border-2 border-[#F37021] bg-[#0D1526]/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-bold shadow-2xl shadow-[#F37021]/5">
          <div>
            <span className="text-xs font-bold text-neutral-400 block m-0 p-0">실시간 세션 보안 상태</span>
            <span className="text-xl font-black text-white block mt-0.5 m-0 p-0">Real-time Session Status Monitoring</span>
          </div>
          <div className="text-xs space-y-1 bg-black/30 p-3 rounded-xl border border-white/5 min-w-[200px]">
            <p className="m-0 text-neutral-400 block">접속 상태: <span className="text-emerald-400 font-black">정상 연동 (Active)</span></p>
            <p className="m-0 text-neutral-400 block">현재 동시 기기 대수: <span className="text-blue-400 font-black">{deviceCount} / {maxAllowedDevices}대</span></p>
          </div>
        </div>

        <div className="space-y-6">
          
          {/* 🌟 엠버 골드 톤 보더 매핑 (주황색과 최적의 그라데이션 일치) */}
          <div className="p-6 bg-[#0D1526]/40 border border-[#F37021]/30 rounded-3xl space-y-4 shadow-xl">
            <div>
              <span className="text-[10px] font-bold text-neutral-500 block m-0 p-0"># [데이터 원본] 트렌디한 K 컬쳐 쇼핑맵</span>
              <h2 className="text-2xl font-black text-white m-0 tracking-tight block uppercase">
                TAERIJAY_SHOPPING_MAP_V2.XLSX
              </h2>
            </div>
            <p className="text-xs text-neutral-500 m-0 pt-3 border-t border-white/5 font-medium block">
              홍대 · 성수 · 명동 거점별 다이소 기획 상품군 실시간 현황 및 올리브영 외국인 전용 키트 루트 정밀 맵 좌표 원본 개방 완료
            </p>
          </div>

          {/* 🌑 차분한 미드나잇 다크 그레이 보더 매핑 (시각적 과부하 방지) */}
          <div className="p-6 bg-[#0D1526]/40 border border-white/10 rounded-3xl space-y-4 shadow-xl">
            <div>
              <span className="text-[10px] font-bold text-neutral-500 block m-0 p-0"># [데이터 원본] 복잡한 도심 가이드</span>
              <h2 className="text-2xl font-black text-white m-0 tracking-tight block uppercase">
                SEOUL_SUBWAY_COMPLEX_ROUTING.PDF
              </h2>
            </div>
            <p className="text-xs text-neutral-500 m-0 pt-3 border-t border-white/5 font-medium block">
              부피가 큰 캐리어를 소지한 스마트 여행객 전용 환승 가이드 및 고속터미널 · 잠실 지하상가 출구 최단 기동 패스 데이터 원본 개방 완료
            </p>
          </div>

        </div>

      </main>

      <footer className="w-full py-6 text-left px-6 border-t border-white/5 text-[10px] font-medium text-[#4B5563] bg-[#03060F]">
        <div className="max-w-4xl mx-auto space-y-1">
          <p>© 2026 TAERIJAY Premium Infrastructure Network. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}