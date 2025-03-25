import { Link } from "react-router-dom";
import { Bnb } from "../components/Bnb";
import { ButtonDefault } from "../components/ButtonDefault";
import { Nav } from "../components/Nav";

export function HomePage() {
  return (
    <div className="mx-4">
      <main id="main-content" role="main">
        <section className="content-section w-full mt-[110px] mb-14">
          <figure className="flex flex-wrap justify-center items-center gap-20  mx-auto max-w-[1200px]">
            <img className="bg-black w-full sm:max-w-[586px] h-auto rounded-xl" src="/images/mpImage01.png" alt="화장실에서 문제를 분석하고 있는 배수구 전문가" />

            <figcaption className="max-w-[353px] w-full">
              <h2 className="section-title text-[24px] sm:text-[28px] font-semibold">
                안녕하세요!
                <br />
                24시간 송파구 문정동 배관 전문 서비스
              </h2>
              <br />
              <p className="text-[16px] sm:text-[18px] font-medium">
                싱크대 · 하수구 · 변기 막힘
                <br /> 고압세척 · 관로탐지 · 배관 내시경
                <br /> 배관 문제, 빠르고 확실하게 해결해 드립니다! <br />
                <br />
                도움이 필요하실 떄 언제든지 전화주세요!
                <br /> 최상의 서비스로 해결해 드리겠습니다.
              </p>
              <Link to="/call">
                <ButtonDefault text="문의하기" />
              </Link>
            </figcaption>
          </figure>
        </section>

        <section className="content-section flex flex-wrap gap-6 mx-auto w-full max-w-[1200px] justify-center border-t-2 py-16">
          <img className="w-[282px] h-[282px] sm:w-[200px] sm:h-[200px]" src="/images/imgListItem01.png" alt="막힌 하수구에 카메라를 넣고 있는 전문가" />
          <img className="w-[282px] h-[282px] sm:w-[200px] sm:h-[200px]" src="/images/imgListItem02.png" alt="화장실 하수구를 뚫고 있는 상황" />
          <img className="w-[282px] h-[282px] sm:w-[200px] sm:h-[200px]" src="/images/imgListItem03.png" alt="전문 기계" />
          <img className="w-[282px] h-[282px] sm:w-[200px] sm:h-[200px]" src="/images/imgListItem04.png" alt="막힌 하수구에 전문기계를 사용하고 있는 전문가" />
        </section>
      </main>
    </div>
  );
}
