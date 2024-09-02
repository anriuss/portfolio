import { cubicBezier } from "framer-motion";
import type Lenis from "lenis";

export const smooth = cubicBezier(0.65, 0.07, 0.015, 1);

function lenisSmooth(t: number) {
  const y1 = 0.05;
  const y2 = 1;

  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;

  const t2 = t * t;
  const t3 = t2 * t;

  const y = ay * t3 + by * t2 + cy * t;

  return y;
}

export const scrollSmooth = (
  e: React.MouseEvent<HTMLAnchorElement>,
  link: { name: string; href: string },
  lenis: Lenis | undefined,
) => {
  e.preventDefault();
  e.stopPropagation();
  const targetElement = document.getElementById(link.name.toLocaleLowerCase());
  if (targetElement) {
    lenis?.scrollTo(`#${link.name.toLocaleLowerCase()}`, {
      offset: targetElement.offsetTop,
      duration: 0.7,
      easing: (t) => lenisSmooth(t),
    });
  } else {
    window.location.href = link.href;
  }
};
