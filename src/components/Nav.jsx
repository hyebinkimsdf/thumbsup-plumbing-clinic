import { Link } from "react-router-dom";

export function Nav() {
  return (
    <>
      <nav aria-label="주요 메뉴" role="navigation" className="flex gap-10 w-100% max-w-[1200px] h-16 px-4  mx-auto items-end  justify-between ">
        <Link to={"/"}>
          <p className="text-3xl font-semibold">엄지척배관클리닉</p>
        </Link>

        <ul className="nav-list flex gap-10 items-center">
          <li className="nav-item">
            <li className="nav-item  active:border-b-2 active:border-[#18A3FA] active:font-semibold active:text-[#18A3FA] ">
              <Link to={"/"}>회사소개</Link>
            </li>
          </li>
          <li className="nav-item">
            <Link to={"/machines"}>장비소개</Link>
          </li>
          <li className="nav-item">
            <Link to={"/services"}>서비스품목</Link>
          </li>
          <li className="nav-item">
            <Link to={"/process"}>서비스절차</Link>
          </li>
          <li className="nav-item">
            <Link to={"/gallery"}>영상&사진</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
