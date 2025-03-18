import { ButtonDefault } from "./ButtonDefault";

export function Ask() {
  return (
    <div className="flex flex-col justify-center items-center  py-10 w-full bg-[#F9F9FA] mt-20">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold mb-4">도움이 필요하신가요?</p>
        <p className="font-light">저희 엄지척배관클리닉은 24시간 신속 대응으로 하수구 막힘을 완벽하게 해결해드립니다.</p>
        <p className="font-light">언제든지 편하게 문의해 주세요!</p>
      </div>

      <a href="tel:01049602002">
        <ButtonDefault text="문의하기" />
      </a>
    </div>
  );
}
