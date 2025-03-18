import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav aria-label="주요 메뉴" role="navigation" className="flex md:flex-wrap gap-10 w-full max-w-[1200px]  h-16 px-4 mx-auto items-center justify-between md:justify-center lg:justify-between">
      <NavLink to="/" className="text-3xl font-semibold">
        엄지척배관클리닉
      </NavLink>

      {/* 햄버거 메뉴 버튼 (태블릿 크기 이상에서 숨기기) */}
      <button className="md:hidden text-3xl" onClick={toggleMenu} aria-label="메뉴 열기">
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* 메뉴 리스트 (기존 메뉴는 md 이상에서 숨기기) */}
      <ul className="nav-list hidden md:flex gap-10 items-center ">
        <li className="nav-item ">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            회사소개
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/machines" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            장비소개
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            서비스품목
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/process" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            서비스절차
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            영상&사진
          </NavLink>
        </li>
      </ul>

      {/* 모바일 및 태블릿 크기에서 햄버거 메뉴 (md 이하에서 보임) */}
      <ul
        className={`nav-list flex-col gap-6 items-center absolute top-16 left-0 w-full h-[30%] bg-white shadow-lg transition-all ease-in-out duration-300 md:hidden ${isMenuOpen ? "flex" : "hidden"}`}
      >
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            회사소개
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/machines" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            장비소개
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            서비스품목
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/process" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            서비스절차
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA]" : "text-black")}>
            영상&사진
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
