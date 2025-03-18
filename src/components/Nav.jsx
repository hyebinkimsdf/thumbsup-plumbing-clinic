import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav aria-label="주요 메뉴" role="navigation" className="flex gap-10 w-100% max-w-[1200px] h-16 px-4 mx-auto items-end justify-between">
      <NavLink to="/" className="text-3xl font-semibold">
        엄지척배관클리닉
      </NavLink>

      <ul className="nav-list flex gap-10 items-center">
        <li className="nav-item ">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#18A3FA] font-bold border-b-[1px] border-[#18A3FA] " : "text-black")}>
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
