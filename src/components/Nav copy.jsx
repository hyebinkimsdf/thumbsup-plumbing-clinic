import { useEffect, useState } from "react";

export function NavCopy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 열린 상태 관리
  const [isMobile, setIsMobile] = useState(false); // 모바일 사이즈 상태 관리

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);

      // 모바일 화면으로 변경될 때 메뉴가 열려 있으면 닫기
      if (!isMobileView) {
        setIsMenuOpen(false);
      }
    };

    // 초기 실행
    checkScreenSize();

    // 화면 크기 변경 시마다 실행
    window.addEventListener("resize", checkScreenSize);

    // Cleanup 이벤트 리스너
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []); // 컴포넌트 마운트 시 1회 실행

  // 메뉴 토글 함수
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        aria-label="주요 메뉴"
        role="navigation"
        className="flex gap-10 w-100vw max-w-[1440px] h-20 bg-slate-500 mx-auto items-end justify-center"
      >
        {/* 모바일에서만 메뉴 버튼 보여줌 */}
        {isMobile && (
          <button
            aria-label="메뉴 버튼"
            onClick={toggleMenu}
            className="text-white"
          >
            <img src="/icons/icon-menu.svg" alt="메뉴버튼" />
          </button>
        )}

        {/* 메뉴 리스트 */}
        <ul
          className={`nav-list flex gap-10 ${
            isMobile && !isMenuOpen ? "hidden" : "block"
          }`}
        >
          <li className="nav-item">
            <a href="#" className="flex">
              <span>메뉴1</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">메뉴2</a>
          </li>
          <li className="nav-item">
            <a href="#">메뉴3</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
