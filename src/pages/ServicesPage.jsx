import { Ask } from "../components/Ask";
import { Figure01 } from "../components/Figure01";

export function ServicesPage() {
  return (
    <div className="flex flex-col gap-10">
      <Figure01
        categoryTitle="서비스 01"
        contentTitle="변기 교체"
        contentDescription="고압 세척은 강력한 수압으로 하수구 내부의 찌꺼기와 이물질을 제거하여 배수 문제를 해결하고, 배관 내시경은 실시간으로 배관 내부를 확인해 정확한 막힘 위치를 파악하여 신속하게 조치합니다. 또한, 흡입 & 압축 장비는 변기나 싱크대의 하수구 막힘을 빠르게 제거하고 원활한 배수 시스템을 복원하는 데 도움을 줍니다."
        imageSrc="./images/servicePage/sewer.png"
        imageAlt="변기 교체 서비스"
        alignment="start"
        direction="row"
        textAlignment="left"
      />
      <Figure01
        categoryTitle="서비스 02"
        contentTitle="싱크대막힘"
        contentDescription="음식물이나 수세미등 기타 이물질이 들어가서 막히기도 하지만 설거지 하면서 
버려진 기름이 오랜시간 동안 배관 내부에 응고, 누적되어 막히게 됩니다.

석션, 플렉스샤프트, 고압세척, 내시경 장비로 완벽하게 해결해드려요!"
        imageSrc="./images/servicePage/sink.png"
        imageAlt="변기 교체 서비스"
        alignment="end"
        direction="row-reverse"
        textAlignment="right"
      />
      <Figure01
        categoryTitle="서비스 03"
        contentTitle="빌라 공동배관막힘"
        contentDescription="공동배관이란?여러 세대의 배관이 합류되어 오수받이나 정화조로 나가는 메인 배관을 말하며, 공동배관이 막히면 
위층 세대에서 사용한 물이 오수받이나 정화조로 나가지 못하기 때문에 저층 세대 하수구로 역류하게 되며 
결국 모든 세대가 물을 사용하지 못하여 큰 불편을 겪게 됩니다.
스프링, 플렉스 샤프트로 작업하기도 하지만 대체로 고압세척 작업으로 완벽하게 해결합니다."
        imageSrc="./images/servicePage/apartment.png"
        imageAlt="변기 교체 서비스"
        alignment="end"
        direction="row"
      />
      <Figure01
        categoryTitle="서비스 04"
        contentTitle="화장실/욕실 하수구막힘"
        contentDescription="머리카락, 세면도구등 기타 이물질 유입 그리고 석회 때문에 막히게 되며 
석션이나 플렉스샤프트 등으로 완벽 해결합니다."
        imageSrc="./images/servicePage/bathroom.png"
        imageAlt="변기 교체 서비스"
        alignment="end"
        direction="row-reverse"
        textAlignment="right"
      />
      <Figure01
        categoryTitle="서비스 05"
        contentTitle="오수관막힘"
        contentDescription="주로 물티슈나 긴 머리카락 여성위생용품 배관이 무너져서 토사가 유입되어 발생하며 
전문가용 배관 내시경으로 원인을 정확하게 진단하여 상황에 맞는 솔루션을 제공해드립니다"
        imageSrc="./images/servicePage/pipe.png"
        imageAlt="변기 교체 서비스"
        alignment="end"
        direction="row"
      />
      <Ask />
    </div>
  );
}
