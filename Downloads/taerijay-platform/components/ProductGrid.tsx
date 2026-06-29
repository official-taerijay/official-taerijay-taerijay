// 현재 수정 중이신 app/business/.../page.tsx 파일 상단에 추가
import ProductGrid from "@/components/ProductGrid"; 

export default function ProductPage() {
  return (
    <div>
      {/* 기존 상단 타이틀이나 다른 컴포넌트들... */}
      
      {/* 💡 원하는 위치에 아래처럼 넣어주면 끝납니다! */}
      <ProductGrid />
      
    </div>
  );
}