import { Ask } from "../components/Ask";
import { Gallery } from "../components/Gallery";

export function MachinesPage() {
  return (
    <div className="mx-4 mt-32">
      <h1 className="mt-24 text-center flex justify-center items-center text-2xl md:text-4xl  font-semibold">하수구 장비 소개 전에 알아두세요!</h1>
      <div className="mt-10  font-light text-subtitle">
        <p className="flex text-center justify-center md:text-base text-sm">배관 문제를 효과적으로 해결하려면 전문 장비가 필수입니다.</p>
        <p className="flex text-center justify-center md:text-base text-sm">엄지척배관클리닉에서는 최신 장비를 사용해 정확하고 신속한 시공을 제공합니다.</p>
      </div>
      <Gallery />
      <Ask />
    </div>
  );
}
