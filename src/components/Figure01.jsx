export function Figure01({
  categoryTitle = "서비스 01",
  contentTitle = "하수구 막힘",
  contentDescription = "고압 세척은 강력한 수압으로 하수구 내부의 찌꺼기와 이물질을 제거하여 배수 문제를 해결하고, 배관 내시경은 실시간으로 배관 내부를 확인해 정확한 막힘 위치를 파악하여 신속하게 조치합니다. 또한, 흡입 & 압축 장비는 변기나 싱크대의 하수구 막힘을 빠르게 제거하고 원활한 배수 시스템을 복원하는 데 도움을 줍니다.",
  imageSrc = "/images/mpImage01.png",
  imageAlt = "서비스내용",
  alignment = "start", // 'start', 'center', 'end' 중 하나 선택
  direction = "row", // 'row', 'column', 'row-reverse', 'column-reverse' 중 하나 선택
  textAlignment = "left", // 'left', 'center', 'right' 중 하나 선택
  id = "",
}) {
  // alignment 프롭에 따라 적절한 justify 클래스 설정
  const getJustifyClass = () => {
    switch (alignment) {
      case "start":
        return "justify-center md:justify-start";
      case "center":
        return "justify-center";
      case "end":
        return "justify-center md:justify-end";
      default:
        return "justify-center md:justify-start";
    }
  };

  // direction 프롭에 따라 적절한 flex-direction 클래스 설정
  const getDirectionClass = () => {
    switch (direction) {
      case "row":
        return "flex-col md:flex-row";
      case "column":
        return "flex-col";
      case "row-reverse":
        return "flex-col md:flex-row-reverse";
      case "column-reverse":
        return "flex-col-reverse";
      default:
        return "flex-col md:flex-row";
    }
  };

  // 텍스트 정렬 클래스 설정
  const getTextAlignClass = () => {
    switch (textAlignment) {
      case "left":
        return direction === "column" || direction === "column-reverse" ? "text-left" : "text-center md:text-left";
      case "center":
        return "text-center";
      case "right":
        return direction === "column" || direction === "column-reverse" ? "text-right" : "text-center md:text-right";
      default:
        return direction === "column" || direction === "column-reverse" ? "text-center" : "text-center md:text-left";
    }
  };

  return (
    <>
      <figure className={`flex ${getDirectionClass()} ${getJustifyClass()} max-w-[1200px] w-full mx-auto gap-6 mb-16 items-center md:items-end px-4`} id={id}>
        <img className="max-w-[588px] w-full h-auto" src={imageSrc} alt={imageAlt} />
        <figcaption className={`flex flex-col w-full md:w-[50%] gap-3 ${getTextAlignClass()}`}>
          <p className="category-title text-sm text-[#18A3FA] font-medium">{categoryTitle}</p>
          <p className="content-title text-2xl font-bold">{contentTitle}</p>
          <p className="content-sub">{contentDescription}</p>
        </figcaption>
      </figure>
    </>
  );
}
