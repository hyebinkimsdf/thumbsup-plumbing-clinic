export function Copy() {
  const copyNumber = document.querySelector("#copyNumber");

  copyNumber.select();
  copyNumber.setSelectionRange(0, 99999); // 모바일 대응

  navigator.clipboard.writeText(copyNumber.value);
  alert("전화번호가 복사되었습니다.");
  return <></>;
}
