import { cubicBezier } from "framer-motion";
import type Lenis from "lenis";

export const smooth = cubicBezier(0.65, 0.07, 0.015, 1);

function customScrollEase(t: number): number {
  return cubicBezier(0.25, 0.1, 0.25, 1)(t);
}

export const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  link: { name: string; href: string },
  lenis: Lenis | undefined,
  offset?: number,
  duration?: number,
) => {
  e.preventDefault();
  e.stopPropagation();

  const targetElement = document.getElementById(link.name.toLowerCase());

  if (targetElement) {
    lenis?.scrollTo(`#${link.name.toLowerCase()}`, {
      offset: offset ?? -80,
      duration: duration ?? 0.7,
      easing: customScrollEase,
      immediate: false,
    });
  } else {
    window.location.href = link.href;
  }
};
