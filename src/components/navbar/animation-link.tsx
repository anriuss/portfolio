import type { PropsWithChildren } from "react";

export default function LinkAnimation({ children }: PropsWithChildren) {
  return (
    <span
      className="
    block relative overflow-hidden
    before:content-[attr(data-label)] after:content-[attr(data-label)]
    before:absolute after:absolute
    before:top-0 after:top-0
    before:left-0 after:left-0
    before:transition-transform after:transition-transform
    before:duration-300 after:duration-300
    before:translate-y-0 after:translate-y-full
    group-hover:before:-translate-y-full group-hover:after:-translate-y-0
  "
      data-label={children}
    >
      <span className="opacity-0">{children}</span>
    </span>
  );
}
