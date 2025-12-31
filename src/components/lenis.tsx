"use client";

import { ReactLenis } from "lenis/react";
import type { PropsWithChildren } from "react";

const Lenis = ({ children }: PropsWithChildren) => {
	return <ReactLenis root>{children}</ReactLenis>;
};

export default Lenis;
