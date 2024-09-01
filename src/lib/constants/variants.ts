import type { Variants } from "framer-motion";

export const followUpVariant: Variants = {
  initial: { y: "100%" },
  animate: { y: 0 },
};

export const fadeInVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const followDownVariant: Variants = {
  initial: { y: "-100%" },
  animate: { y: 0 },
};
