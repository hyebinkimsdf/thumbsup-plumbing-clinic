import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 활성화 상태에 적용할 클래스
  const activeClassName = "border-b-2 border-[#18A3FA] font-semibold text-[#18A3FA]";

  // 각 메뉴 항목이 활성화 상태인지 확인하는 함수
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav aria-label="주요 메뉴" role="navigation" className="flex gap-2 w-full max-w-[1200px] h-16 px-4 mx-auto mb-24 items-end justify-between">
        {/* 회사명 - 모바일에서 메뉴 열리면 숨김 */}
        <Link to={"/"} className={isMenuOpen ? "md:block hidden" : ""}>
          <p className="text-3xl font-semibold">엄지척배관클리닉</p>
        </Link>

        {/* 모바일에서 메뉴 열렸을 때 빈 공간 채우기 */}
        {isMenuOpen && <div className="md:hidden"></div>}

        {/* Mobile menu button */}
        <button className="md:hidden flex flex-col justify-center items-center" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label="메뉴 열기">
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Desktop menu */}
        <ul className="nav-list hidden md:flex gap-10 items-center">
          <li className="nav-item">
            <NavLink to="/" className={isActive("/") ? activeClassName : ""} end>
              회사소개
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/machines" className={isActive("/machines") ? activeClassName : ""}>
              장비소개
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className={isActive("/services") ? activeClassName : ""}>
              서비스품목
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/process" className={isActive("/process") ? activeClassName : ""}>
              서비스절차
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className={isActive("/gallery") ? activeClassName : ""}>
              영상&사진
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden w-full bg-white shadow-md pb-10">
          <ul className="flex flex-col items-center gap-4">
            <li className="nav-item py-2">
              <NavLink to="/" className={isActive("/") ? activeClassName : ""} onClick={toggleMenu} end>
                회사소개
              </NavLink>
            </li>
            <li className="nav-item py-2">
              <NavLink to="/machines" className={isActive("/machines") ? activeClassName : ""} onClick={toggleMenu}>
                장비소개
              </NavLink>
            </li>
            <li className="nav-item py-2">
              <NavLink to="/services" className={isActive("/services") ? activeClassName : ""} onClick={toggleMenu}>
                서비스품목
              </NavLink>
            </li>
            <li className="nav-item py-2">
              <NavLink to="/process" className={isActive("/process") ? activeClassName : ""} onClick={toggleMenu}>
                서비스절차
              </NavLink>
            </li>
            <li className="nav-item py-2">
              <NavLink to="/gallery" className={isActive("/gallery") ? activeClassName : ""} onClick={toggleMenu}>
                영상&사진
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
