"use client";

import { useState } from "react";

// ── 1. 데이터 정의 (고급형 메타데이터 구조) ──
const PRODUCTS = [
  { 
    id: "316plus", 
    title: "TAERIJAY 316+", 
    subKo: "K-여행 · 생존 · 로컬 · 정보", 
    subEn: "K-Travel / Survival / Local / Info", 
    href: "/products/316plus", 
    themeColor: "#F37021",
    isHot: true
  },
  { 
    id: "mini", 
    title: "mini taerijay", 
    subKo: "K-여행 · 코스 · 가이드", 
    subEn: "K-Travel / Course / Guide", 
    href: "/products/mini", 
    themeColor: "#38bdf8" 
  },
  { 
    id: "daiso", 
    title: "daiso taerijay", 
    subKo: "다이소 핫 뷰티템", 
    subEn: "Daiso Hot Beauty Items", 
    href: "/products/daiso", 
    themeColor: "#ec4899" 
  },
  { 
    id: "olive", 
    title: "O/Y taerijay", 
    subKo: "올리브영 핫 뷰티템", 
    subEn: "Olive Young Hot Beauty Items", 
    href: "/products/olive", 
    themeColor: "#a855f7" 
  },
  { 
    id: "emart", 
    title: "e-mart taerijay", 
    subKo: "이마트 · 트레이더스 · 노브랜드 · 이마트24 핫템", 
    subEn: "E-mart / Traders / No Brand / E-mart24", 
    href: "/products/emart", 
    themeColor: "#eab308" 
  },
  { 
    id: "cvs", 
    title: "CVS taerijay", 
    subKo: "CU · GS25 · 세븐일레븐 핫템", 
    subEn: "CU / GS25 / Seven Eleven Hot Items", 
    href: "/products/cvs", 
    themeColor: "#22c55e" 
  },
];

export default function BusinessInfoPage() {
  return (
    <main style={{ 
      background: "#030712", // 한층 더 깊어진 딥 블랙 오닉스 배경
      minHeight: "100vh", 
      padding: "80px 24px",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
      // 구글, 토스 감성의 미래지향적 매시 아우라 그라데이션 배경 구현
      backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(243, 112, 33, 0.05) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(56, 189, 248, 0.04) 0%, transparent 50%)
      `
    }}>
      {/* 글로벌 서체 임포트 (디자이너들이 가장 사랑하는 Inter & 샌스세리프 앙상블) */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet" />

      {/* ── 헤더 영역 ── */}
      <div style={{ 
        maxWidth: "1140px", 
        margin: "0 auto 56px auto", 
        padding: "0 8px",
        fontFamily: "'Inter', -apple-system, sans-serif"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <span style={{ 
            fontSize: "11px", 
            fontWeight: "800", 
            color: "#F37021", 
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            background: "rgba(243, 112, 33, 0.1)",
            padding: "4px 10px",
            borderRadius: "6px"
          }}>
            Infraspace Live
          </span>
        </div>
        <h1 style={{ 
          color: "#FFFFFF", 
          fontSize: "36px", 
          fontWeight: "900", 
          margin: 0,
          letterSpacing: "-1px",
          lineHeight: "1.2"
        }}>
          MASTER INFRASTRUCTURE<br />
          <span style={{ 
            background: "linear-gradient(90deg, #FFFFFF 0%, #7A8FA8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>METADATA PLATFORM</span>
        </h1>
      </div>

      {/* ── 프리미엄 카드 그리드 ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "28px",
        maxWidth: "1140px",
        margin: "0 auto",
        fontFamily: "'Inter', -apple-system, sans-serif"
      }}>
        {PRODUCTS.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

// ── 개별 크리스탈 카드 컴포넌트 ──
function ProductCard({ item }: { item: typeof PRODUCTS[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = item.href;
    }
  };

  // 실시간 테두리 상태 제어
  const currentBorder = isActive
    ? `3px solid ${item.themeColor}`
    : isHovered
    ? `1.5px solid ${item.themeColor}`
    : "1.5px solid rgba(255, 255, 255, 0.05)";

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsActive(false); }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      style={{
        // 반투명 유리를 얹은 듯한 고급스러운 유리막(Glassmorphism) 효과
        background: isHovered ? "rgba(18, 24, 38, 0.7)" : "rgba(13, 21, 38, 0.4)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: "28px",
        padding: "36px",
        height: "270px",
        border: currentBorder,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        // 호버 시 뒤쪽에 은은하게 번지는 네온 테마 아우라 링 효과
        boxShadow: isHovered 
          ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px ${item.themeColor}15` 
          : "0 10px 30px rgba(0, 0, 0, 0.2)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)",
        boxSizing: "border-box"
      }}
    >
      {/* 카드 상단 헤더 서체 튜닝 */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <h2 style={{ 
            fontSize: "26px", 
            fontWeight: "800", 
            color: "#FFFFFF", 
            margin: 0, 
            letterSpacing: "-0.5px"
          }}>
            {item.title}
          </h2>
          {item.isHot && (
            <span style={{
              fontSize: "10px",
              fontWeight: "800",
              color: "#F37021",
              background: "rgba(243, 112, 33, 0.15)",
              padding: "3px 8px",
              borderRadius: "99px"
            }}>
              CORE
            </span>
          )}
        </div>
        
        {/* 디바이더 선도 투명하게 보완 */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "18px" }}>
          <p style={{ 
            fontSize: "13px", 
            color: "#6B7280", // Pretendard 대신 정밀한 영문-한글 조화 회색조 매칭
            fontWeight: "600", 
            margin: "0 0 6px 0",
            letterSpacing: "-0.2px"
          }}>
            {item.subKo}
          </p>
          <p style={{ 
            fontSize: "17px", 
            color: "#E5E7EB", 
            fontWeight: "700", 
            margin: 0,
            letterSpacing: "-0.3px",
            lineHeight: "1.3"
          }}>
            {item.subEn}
          </p>
        </div>
      </div>

      {/* 하단 디바이스 시스템 얼라인 및 인디케이터 컬러 매칭 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "7px", 
            height: "7px", 
            borderRadius: "50%",
            background: item.id === "316plus" ? "#F37021" : "#10b981",
            boxShadow: item.id === "316plus" ? "0 0 12px #F37021" : "0 0 12px #10b981"
          }} />
          <span style={{ 
            fontSize: "11px", 
            fontWeight: "700", 
            color: "#4B5563", 
            letterSpacing: "1.5px" 
          }}>
            LIVE METADATA
          </span>
        </div>

        {/* 우측 하단 미니멀 화살표 아이콘 연출 */}
        <svg style={{ 
          width: "16px", 
          height: "16px", 
          color: isHovered ? item.themeColor : "#374151",
          transform: isHovered ? "translateX(4px)" : "translateX(0)",
          transition: "all 0.2s ease"
        }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}