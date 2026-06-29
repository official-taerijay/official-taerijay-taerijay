"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", height: "64px", background: "rgba(3, 7, 18, 0.8)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)", position: "sticky", top: 0, zIndex: 200
      }}>
        <a href="/" style={{ fontSize: "14px", fontWeight: "900", letterSpacing: "6px", color: "#FFFFFF", textDecoration: "none" }}>
          TAERIJAY
        </a>

        {!isMobile && (
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="/" style={{ fontSize: "13px", fontWeight: "700", color: "#FFFFFF", textDecoration: "none" }}>HOME</a>
            <a href="/business" style={{ fontSize: "13px", fontWeight: "700", color: "#FFFFFF", textDecoration: "none" }}>BUSINESS</a>
            <a href="/products/316plus" style={{ fontSize: "13px", fontWeight: "700", color: "#F37021", textDecoration: "none" }}>316+</a>
          </div>
        )}

        <div onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
          display: isMobile ? "flex" : "none", flexDirection: "column", justifyContent: "space-between",
          width: "20px", height: "14px", cursor: "pointer", position: "relative", zIndex: 220
        }}>
          <div style={{ width: "100%", height: "2px", background: "#FFFFFF", transition: "0.3s", transform: isMenuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <div style={{ width: "100%", height: "2px", background: "#FFFFFF", transition: "0.2s", opacity: isMenuOpen ? 0 : 1 }} />
          <div style={{ width: "100%", height: "2px", background: "#FFFFFF", transition: "0.3s", transform: isMenuOpen ? "rotate(-45deg) translate(4px, -5px)" : "none" }} />
        </div>
      </nav>

      {isMenuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, width: "100%", height: "calc(100vh - 64px)",
          background: "#030712", zIndex: 190, display: "flex", flexDirection: "column", padding: "40px 24px", gap: "28px"
        }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: "#FFFFFF", textDecoration: "none" }}>홈 (Dashboard)</a>
          <a href="/business" style={{ fontSize: "22px", fontWeight: "800", color: "#FFFFFF", textDecoration: "none" }}>사업자 정보</a>
          <a href="/products/316plus" style={{ fontSize: "22px", fontWeight: "800", color: "#F37021", textDecoration: "none" }}>TAERIJAY 316+</a>
        </div>
      )}
    </>
  );
}