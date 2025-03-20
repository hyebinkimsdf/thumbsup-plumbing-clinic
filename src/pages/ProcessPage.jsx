import { Figure02 } from "../components/Figure02";
import { Ask } from "../components/Ask";

import { useEffect, useState } from "react";
import { IconLeft } from "../components/icons/IconLeft";
import { IconDown } from "../components/icons/IconDown";

export function ProcessPage() {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setBrowserWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-4">
      <div className="mb-14">
        <h1 className="mt-24 text-center flex justify-center items-center text-2xl md:text-4xl font-semibold">작업 진행 절차</h1>
        <p className="flex text-center justify-center md:text-base text-sm mt-8">엄지척배관클리닉은 신속하고 체계적인 절차로 배관 문제를 해결합니다.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
        <Figure02 img="/images/mpImage01.png" title="출장요청" sub="고객상담" sub2="방문날짜확정" />
        {browserWidth > 768 ? <IconLeft /> : <IconDown />} {/* 화면 크기에 따라 아이콘 변경 */}
        <Figure02 img="/images/mpImage02.png" title="현장진단" sub="문제점파악" sub2="솔루션제안" />
        {browserWidth > 768 ? <IconLeft /> : <IconDown />}
        <Figure02 img="/images/mpImage03.png" title="작업진행" sub="청소 및 유지보수" sub2="점검 완료" />
        {browserWidth > 768 ? <IconLeft /> : <IconDown />}
        <Figure02 img="/images/mpImage04.png" title="사후관리" sub="만족도 조사" sub2="추가 지원 제공" />
      </div>

      <Ask />
    </div>
  );
}
