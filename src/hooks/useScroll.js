import { useEffect, useRef, useState } from "react";

export default function useScrollEffect() {
  const targetElement = useRef();
  useEffect(() => {
    const handleScroll = (e) => {
      console.log("This is from useScroll", targetElement);
      if (!targetElement.current) return;
      const currentScrollY = window.scrollY + window.innerHeight;
      const aboveHeight = currentScrollY - targetElement.current.offsetHeight;
      // const currentSectionHeight = sectionElement.offsetHeight;

      console.log({ currentScrollY, aboveHeight, targetElementHeight: targetElement.current.offsetHeight });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return targetElement;
}
