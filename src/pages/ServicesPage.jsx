import { Ask } from "../components/Ask";
import { Figure } from "../components/Figure";

export function ServicesPage() {
  return (
    <div className="flex flex-col gap-10">
      <Figure
        categoryTitle="서비스 01"
        contentTitle="변기 교체"
        contentDescription="고압 세척은 강력한 수압으로 하수구 내부의 찌꺼기와 이물질을 제거하여 배수 문제를 해결하고, 배관 내시경은 실시간으로 배관 내부를 확인해 정확한 막힘 위치를 파악하여 신속하게 조치합니다. 또한, 흡입 & 압축 장비는 변기나 싱크대의 하수구 막힘을 빠르게 제거하고 원활한 배수 시스템을 복원하는 데 도움을 줍니다."
        imageSrc="./images/mpImage01.png"
        imageAlt="변기 교체 서비스"
        alignment="start"
        direction="row"
        textAlignment="left"
      />
      <Figure
        categoryTitle="서비스 02"
        contentTitle="변기 교체"
        contentDescription="고압 세척은 강력한 수압으로 하수구 내부의 찌꺼기와 이물질을 제거하여 배수 문제를 해결하고, 배관 내시경은 실시간으로 배관 내부를 확인해 정확한 막힘 위치를 파악하여 신속하게 조치합니다. 또한, 흡입 & 압축 장비는 변기나 싱크대의 하수구 막힘을 빠르게 제거하고 원활한 배수 시스템을 복원하는 데 도움을 줍니다."
        imageSrc="./images/mpImage01.png"
        imageAlt="변기 교체 서비스"
        alignment="end"
        direction="row-reverse"
        textAlignment="right"
      />
      <Figure
        categoryTitle="서비스 03"
        contentTitle="변기 교체"
        contentDescription="고압 세척은 강력한 수압으로 하수구 내부의 찌꺼기와 이물질을 제거하여 배수 문제를 해결하고, 배관 내시경은 실시간으로 배관 내부를 확인해 정확한 막힘 위치를 파악하여 신속하게 조치합니다. 또한, 흡입 & 압축 장비는 변기나 싱크대의 하수구 막힘을 빠르게 제거하고 원활한 배수 시스템을 복원하는 데 도움을 줍니다."
        imageSrc="./images/mpImage01.png"
        imageAlt="변기 교체 서비스"
        alignment="end"
        direction="row"
      />
      <Figure
        categoryTitle="서비스 04"
        contentTitle="변기 교체"
        contentDescription="고압 세척은 강력한 수압으로 하수구 내부의 찌꺼기와 이물질을 제거하여 배수 문제를 해결하고, 배관 내시경은 실시간으로 배관 내부를 확인해 정확한 막힘 위치를 파악하여 신속하게 조치합니다. 또한, 흡입 & 압축 장비는 변기나 싱크대의 하수구 막힘을 빠르게 제거하고 원활한 배수 시스템을 복원하는 데 도움을 줍니다."
        imageSrc="./images/mpImage01.png"
        imageAlt="변기 교체 서비스"
        alignment="end"
        direction="row-reverse"
        textAlignment="right"
      />
      <Ask />
    </div>
  );
}
