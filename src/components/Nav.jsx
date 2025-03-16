export function Nav() {
  return (
    <>
      <nav
        aria-label="주요 메뉴"
        role="navigation"
        className="flex gap-10 w-100vw max-w-[1440px] h-20 bg-slate-500 mx-auto items-end justify-center"
      >
        <ul className="nav-list flex gap-10">
          <li className="nav-item">
            <a href="#" className="flex">
              {/* <img src="/icons/icon-menu.svg" alt="메뉴1" /> */}
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
