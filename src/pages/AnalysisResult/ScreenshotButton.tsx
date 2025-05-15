import html2canvas from "html2canvas";
import * as S from "./style";

export function ScreenshotButton({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement>;
}) {
  const handleClick = async () => {
    const element = targetRef.current;
    if (!element) return;

    const originalHeight = element.style.height;
    element.style.height = `${element.scrollHeight}px`;

    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0,
    });

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "analysis_result.png";
    link.click();

    element.style.height = originalHeight;
  };

  return <S.SaveBtn onClick={handleClick}>결과 저장하기</S.SaveBtn>;
}
