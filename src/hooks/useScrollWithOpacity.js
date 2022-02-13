import { useEffect, useRef } from "react";

const DEFAULT_THRESH_HOLD = 0.3;

export default function useScrollWithOpacity(refWrapper, startOpacity, _threshold) {
  const targetElement = useRef();
  const threshold = _threshold || DEFAULT_THRESH_HOLD;
  useEffect(() => {
    const handleScroll = (e) => {
      let wrapperElement = null;
      if (!targetElement.current) return;
      if (refWrapper) {
        wrapperElement = refWrapper.current;
      } else {
        wrapperElement = targetElement.current;
      }

      const currentScrollY = window.scrollY;
      // console.log({ currentScrollY, aboveHeight, wrapperElement: wrapperElement.offsetHeight });

      if (currentScrollY < wrapperElement.offsetHeight) {
        const currentPosition = currentScrollY;
        const progress = currentPosition / wrapperElement.offsetHeight;
        // console.log({ progress, threshold });
        if (progress < threshold) {
          targetElement.current.style.opacity = `1`;
        } else if (progress >= threshold) {
          // console.log("In range", { progress });
          let p = (1 - progress) * 1.5;
          // let ty = startOpacity - p;
          // if (ty < 0) ty = 0;
          targetElement.current.style.opacity = `${p}`;
        }
      } else if (currentScrollY > wrapperElement.offsetHeight) {
        targetElement.current.style.opacity = `0`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [refWrapper, threshold, startOpacity]);

  return targetElement;
}
