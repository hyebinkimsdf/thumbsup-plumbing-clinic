import { Link } from "react-router-dom";
import { Gallery } from "../components/Gallery";
import { Ask } from "../components/Ask";

export function GalleryPage() {
  return (
    <div className="mx-4">
      <div className="mb-14">
        <h1 className="mt-24 text-center flex justify-center items-center text-2xl md:text-4xl font-semibold">실제 사례를 확인하세요!</h1>
        <p className="flex text-center justify-center md:text-base text-sm mt-8">깨끗하고 안전한 배관 관리, 엄지척이 직접 보여드립니다!</p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-center max-w-[1200px] mx-auto">
        <Link to={"https://blog.naver.com/cyprus1365/223749548141"}>
          <img className="w-[282px] h-[316px] bg-red-300 rounded-xl" src="../images/gallery/drain-manhole-cleaning.png" alt="맨홀 하수구 청소"></img>
        </Link>

        <Link to={"https://blog.naver.com/cyprus1365/223719766654"}>
          <img className="w-[282px] h-[316px] bg-red-300 rounded-xl" src="../images/gallery/bathroom-flooded-floor.png" alt="욕실 침수된 바닥"></img>
        </Link>
        <Link to={"https://blog.naver.com/cyprus1365/223736804559"}>
          <img className="w-[282px] h-[316px] bg-red-300 rounded-xl" src="../images/gallery/drain-pipe-maintenance.png" alt="하수구 파이프 점검"></img>
        </Link>
        <Link to={"https://blog.naver.com/cyprus1365/223734015055"}>
          <img className="w-[282px] h-[316px] bg-red-300 rounded-xl" src="../images/gallery/sewer-camera-inspection.png" alt="하수구 내시경 검사"></img>
        </Link>
        <Link to={"https://blog.naver.com/cyprus1365/223426050032"}>
          <img className="w-[282px] h-[316px] bg-red-300 rounded-xl" src="../images/gallery/kitchen-sink-drain.png" alt="싱크대 배수"></img>
        </Link>
        <Link to={"https://blog.naver.com/cyprus1365/223749548141"}>
          <img className="w-[282px] h-[316px] bg-red-300 rounded-xl" src="../images/gallery/pipe-valve-repair.png" alt="파이프 밸브 수리"></img>
        </Link>
        <Link to={"https://blog.naver.com/cyprus1365/223749548141"}>
          <img className="w-[282px] h-[316px] bg-red-300 rounded-xl" src="../images/gallery/industrial-pipe-repair.png" alt="산업용 배관 수리"></img>
        </Link>
        <Link to={"https://blog.naver.com/cyprus1365/223749548141"}>
          <img className="w-[282px] h-[316px] bg-red-300 rounded-xl" src="../images/gallery/large-pump-maintenance.png" alt="대형 펌프 점검"></img>
        </Link>
      </div>
      <Ask />
    </div>
  );
}
