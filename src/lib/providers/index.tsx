"use client";

import { ReactLenis } from "lenis/react";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ReactLenis root>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ReactLenis>
  );
}
