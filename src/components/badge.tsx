import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export const Badge = ({
	children,
	className,
}: PropsWithChildren<{ className?: string }>) => {
	return (
		<div
			className={cn(
				"flex max-w-min items-center justify-center whitespace-nowrap rounded-xs border px-2 py-1 text-xs",
			className,
		)}
	>
		{children}
		</div>
	);
};
