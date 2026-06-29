"use client";

import { useState, useEffect } from "react";

export default function MembersPage() {
  // 1. 상태 정의 (상품/회원 데이터 및 로딩 상태)
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 2. CSV 또는 API로부터 디즈니+ 상품 마스터 데이터 로드
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setIsLoading(true);
        // 추후 구성할 백엔드 API 또는 로컬 CSV 파싱 경로
        const response = await fetch("/api/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 에러가 발생했습니다:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0c111b] text-white font-sans">
      {/* 웅장한 시네마틱 배경 헤더 구역 */}
      <div className="relative pt-24 pb-12 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            TAERIJAY MASTER DATABASE
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Premium infrastructure grid engineered for next-generation global travelers.
          </p>
        </div>

        {/* 안내 인프라 칩스 배너 리스트 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-[#192133] rounded-xl border border-gray-800/60 hover:border-blue-500/50 transition-all duration-300">
            <span className="text-xs font-bold tracking-widest text-blue-400 block uppercase mb-1"># 스마트 여행 가이드</span>
            <p className="text-sm text-gray-200 font-medium">로컬 인프라 생존 정보 완벽 가이드</p>
          </div>
          <div className="p-5 bg-[#192133] rounded-xl border border-gray-800/60 hover:border-pink-500/50 transition-all duration-300">
            <span className="text-xs font-bold tracking-widest text-pink-400 block uppercase mb-1"># 트렌디 K-컬처</span>
            <p className="text-sm text-gray-200 font-medium">대한민국 가장 핫한 쇼핑 뷰티 내비게이터</p>
          </div>
          <div className="p-5 bg-[#192133] rounded-xl border border-gray-800/60 hover:border-purple-500/50 transition-all duration-300">
            <span className="text-xs font-bold tracking-widest text-purple-400 block uppercase mb-1"># 복잡한 도심 탈출</span>
            <p className="text-sm text-gray-200 font-medium">철저히 검증된 하이엔드 로컬 코스 탐험</p>
          </div>
          <div className="p-5 bg-[#192133] rounded-xl border border-gray-800/60 hover:border-emerald-500/50 transition-all duration-300">
            <span className="text-xs font-bold tracking-widest text-emerald-400 block uppercase mb-1"># 라이프라인 데이터</span>
            <p className="text-sm text-gray-200 font-medium">유료 멤버 전용 인프라 데이터 무제한 액세스</p>
          </div>
        </div>

        {/* 풋터 요약 뱃지 존 */}
        <div className="mt-8 flex flex-wrap gap-6 text-xs font-bold tracking-wider text-gray-400 border-t border-gray-900 pt-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            실시간 데이터 허브 연동 완료
          </div>
          <div>• 1회 결제 시 2년간 무제한 라이선스 유지</div>
          <div>• 패들(Paddle) 글로벌 정산 모듈 활성화</div>
        </div>
      </div>
    </div>
  );
}