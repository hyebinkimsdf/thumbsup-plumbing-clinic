import { Link } from "react-router-dom";
import { ButtonDefault } from "../components/ButtonDefault";
import { useEffect, useState } from "react";

export function CallRedirect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 모바일 여부 판별
    const checkMobile = () => {
      setIsMobile(/Mobi|Android|iPhone/i.test(navigator.userAgent));
    };

    checkMobile();

    if (isMobile) {
      // 전환 추적 이벤트 실행
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "conversion", action: "call_button_click" });

      // 1초 후 전화 앱 실행
      setTimeout(() => {
        window.location.href = "tel:010-4960-2002";
      }, 1000);
    }
  }, [isMobile]);

  if (!isMobile) {
    // 데스크톱일 경우 전화번호를 안내
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-lg font-semibold">전화 연결은 모바일에서 가능합니다.</p>
        <p className="mt-2 text-gray-600">아래 번호로 직접 연락해주세요.</p>
        <p className="mt-4 text-xl font-bold text-blue-600">010-4960-2002</p>
        <Link to={"/"}>
          <ButtonDefault text="홈으로" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-lg">전화 연결 중입니다...</p>
      <Link to={"/"}>
        <ButtonDefault text="홈으로" />
      </Link>
    </div>
  );
}
