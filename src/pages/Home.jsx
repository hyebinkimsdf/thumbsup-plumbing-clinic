import { Link } from "react-router-dom";
import { Bnb } from "../components/Bnb";
import { ButtonDefalt } from "../components/ButtonDefalt";
import { Nav } from "../components/Nav";

export function Home() {
  return (
    <div>
      <main id="main-content" role="main">
        <section className="content-section mt-[110px] mb-14">
          <figure className="flex gap-32 mx-auto  justify-center items-start">
            {/* Todo 이미지 src 연결 */}
            <img className="bg-black w-[586px] h-[390px] rounded-xl" src="/images/mpImage01.png" alt="화장실에서 문제를 분석하고 있는 배수구 전문가" />

            <figcaption className="max-w-353px">
              <h2 className="section-title text-[24px] font-semibold">
                안녕하세요!
                <br />
                24시간 송파구 문정동 배관 전문 서비스
              </h2>
              <br />
              <p className="text-[16px] font-medium">
                싱크대 · 하수구 · 변기 막힘
                <br /> 고압세척 · 관로탐지 · 배관 내시경
                <br /> 배관 문제, 빠르고 확실하게 해결해 드립니다! <br />
                <br />
                도움이 필요하실 떄 언제든지 전화주세요!
                <br /> 최상의 서비스로 해결해 드리겠습니다.
              </p>
              <a href="tel:01049602002">
                <ButtonDefalt />
              </a>
            </figcaption>
          </figure>
        </section>
        {/* <article className="content-aricle">
          <h2 className="aricle-title"></h2>
        </article> */}
        <section className="content-section flex gap-6 mx-auto w-full max-w-[1200px] justify-center border-t-2 py-16 ">
          <img className="w-[282px] h-[282px]" src="/images/imgListItem01.png" alt="막힌 하수구에 카메라를 넣고 있는 전문가" />
          <img className="w-[282px] h-[282px]" src="/images/imgListItem02.png" alt="화장실 하수구를 뚫고 있는 상황" />
          <img className="w-[282px] h-[282px]" src="/images/imgListItem03.png" alt="전문 기계" />
          <img className="w-[282px] h-[282px]" src="/images/imgListItem04.png" alt="막힌 하수구에 전문기계를 사용하고 있는 전문가" />
        </section>
      </main>
    </div>
  );
}
