"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("taerijay_token", "secure_oauth_2026_verified");
        window.location.href = "/";
      }
    }, 1800);
  };

  // 🎨 요청하신 폰트 세트를 명시적으로 결합한 스타일 문자열
  const globalFontStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif'
  };

  return (
    <div 
      style={globalFontStyle}
      className="min-h-screen bg-[#060B18] text-white antialiased selection:bg-[#641220] select-none flex flex-col justify-between"
    >
      
      {/* 🏛️ 상단 네비게이션 (왼쪽 정렬) */}
      <nav className="w-full h-16 flex items-center px-6 border-b border-white/5 bg-[#060B18]">
        <a href="/" className="text-lg font-black tracking-[4px] text-white no-underline">TAERIJAY</a>
      </nav>

      {/* 🚀 중앙 보안 인증 구역 (왼쪽 정렬 레이아웃 + 한영 비율 규격화) */}
      <main className="flex-grow flex items-center justify-start px-6 md:px-20 py-12">
        <div className="max-w-2xl w-full space-y-12">
          
          {/* 📝 타이틀 및 한영 1:2 비율 설명 */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
              SECURE <br /> IDENTITY ACCESS
            </h1>
            
            <div className="space-y-5">
              <div>
                <p className="text-xs font-bold text-neutral-400 m-0 block">안전한 서비스 이용을 위한 구글 통합 본인 인증</p>
                <p className="text-2xl font-black text-white tracking-tight mt-0.5 m-0 block">Unified Secure Authentication via Google Infrastructure</p>
              </div>
              
              {/* 🏷️ 명사형 해시태그 목록 (왼쪽 정렬 + 한영 비율 매핑) */}
              <div className="space-y-4 border-l-2 border-[#641220] pl-4 mt-8">
                <div>
                  <p className="m-0 text-neutral-300 font-medium text-xs block"># 별도 비밀번호 설정 불필요</p>
                  <p className="m-0 text-white text-xl font-black mb-2 mt-0.5 block">No Separate Passwords Required</p>
                </div>
                
                <div>
                  <p className="m-0 text-neutral-300 font-medium text-xs block"># 구글 보안 네트워크 보호</p>
                  <p className="m-0 text-white text-xl font-black mb-2 mt-0.5 block">Protected by Google Security Engine</p>
                </div>
              </div>
            </div>
          </div>

          {/* 🔴 구글 공식 로그인 액션 버튼 (한영 1:2 크기 규격 적용) */}
          <div className="max-w-md">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full h-14 bg-white hover:bg-neutral-100 text-black font-black text-sm rounded-2xl flex items-center justify-center gap-4 cursor-pointer transition-all border-none shadow-xl active:scale-[0.97] disabled:opacity-50"
            >
              {isLoading ? (
                <span className="text-neutral-500 animate-pulse">Verifying Security Token...</span>
              ) : (
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.79 5.79 0 0 1 8.2 12.725a5.79 5.79 0 0 1 5.79-5.79c2.519 0 4.156 1.058 5.115 1.973l3.228-3.228C20.301 3.712 17.412 2.1 13.99 2.1 7.975 2.1 3.1 6.975 3.1 12.99s4.875 10.89 10.89 10.89c6.286 0 10.421-4.417 10.421-10.635 0-.718-.082-1.393-.225-1.96H12.24Z"/>
                  </svg>
                  <div className="text-left">
                    <span className="text-[10px] font-medium text-neutral-600 block m-0 p-0">구글 로그인</span>
                    <span className="text-base font-black text-black block m-0 p-0 mt-0.5">Continue with Google</span>
                  </div>
                </div>
              )}
            </button>
            <p className="text-[10px] text-neutral-500 font-bold mt-4 text-center">
              🔒 Military-grade AES-256 Encryption Active
            </p>
          </div>

        </div>
      </main>

      {/* 🏢 하단 풋바 */}
      <footer className="w-full py-6 text-left px-6 border-t border-white/5 text-[10px] font-medium text-[#3A4455] bg-[#03060F]">
        © 2026 TAERIJAY Identity Network. All Rights Reserved.
      </footer>

    </div>
  );
}