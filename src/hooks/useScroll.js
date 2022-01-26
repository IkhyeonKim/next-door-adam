import { useEffect, useRef } from "react";

const DEFAULT_END_OF_PROGRESS = 0.4;

export default function useScrollEffect(refWrapper, startTy, _endProgress) {
  const targetElement = useRef();
  const endProgress = _endProgress || DEFAULT_END_OF_PROGRESS;
  useEffect(() => {
    const handleScroll = (e) => {
      const wrapperElement = refWrapper.current;

      if (!targetElement.current) return;
      const currentScrollY = window.scrollY + window.innerHeight; // 현재 보이는 최하단의 위치
      const aboveHeight = window.scrollY + wrapperElement.getBoundingClientRect().top;

      if (currentScrollY > aboveHeight && currentScrollY < aboveHeight + wrapperElement.offsetHeight) {
        const currentPosition = currentScrollY - aboveHeight;
        const progress = currentPosition / wrapperElement.offsetHeight;

        console.log("In the range!", { progress });
        if (progress <= endProgress) {
          let p = progress * (startTy / endProgress); // progress * (초기상태값 / 최대임계점)
          let ty = startTy - p;
          if (ty < 0) ty = 0;
          targetElement.current.style.transform = `matrix(1, 0, 0, 1, 0 , ${ty})`;
        }
      } else if (currentScrollY > aboveHeight + wrapperElement.offsetHeight) {
        targetElement.current.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [refWrapper, endProgress, startTy]);

  return targetElement;
}
