import { Link } from "react-router-dom";
import { ButtonDefault } from "./ButtonDefault";
import { copy } from "../hook/copy";

export function Ask() {
  return (
    <div className="flex flex-col justify-center items-center  py-10 w-full bg-[#F9F9FA] mt-20">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold mb-4">도움이 필요하신가요?</p>
        <p className="font-light">저희 엄지척배관클리닉은 24시간 신속 대응으로 하수구 막힘을 완벽하게 해결해드립니다.</p>
        <p className="font-light">언제든지 편하게 문의해 주세요!</p>
      </div>
      {/* 숨겨진 input 필드 추가 */}
      <input type="text" id="copyNumber" value="010-4960-2002" readOnly className="absolute opacity-0" />

      <Link to="/call" onClick={copy} tabIndex="-1">
        <ButtonDefault text="문의하기" />
      </Link>
    </div>
  );
}
