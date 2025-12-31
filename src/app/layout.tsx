/** biome-ignore-all assist/source/organizeImports: don't need it here */

import "~/styles/globals.css";

import localFont from "next/font/local";
import type { Metadata } from "next";

import ColorBends from "~/components/color-bends";
import { Info } from "~/components/info";
import Lenis from "~/components/lenis";

export const metadata: Metadata = {
	title: "Anri Vachnadze",
	description: "Software Engineer",
	// icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const panchang = localFont({
	src: [
		{
			path: "../../public/font/Panchang-Extralight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../public/font/Panchang-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/font/Panchang-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/font/Panchang-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/font/Panchang-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/font/Panchang-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/font/Panchang-Extrabold.woff2",
			weight: "800",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-panchang",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${panchang.variable}`} lang="en">
			<body className="relative bg-[#060010]">
				<div className="fixed inset-0 -z-10">
					<ColorBends className="h-full w-full" />
				</div>
				<Lenis>
					<main className="relative z-10 grid min-h-screen p-8 text-stone-100 lg:grid-cols-2">
						<Info />
						{children}
					</main>
				</Lenis>
			</body>
		</html>
	);
}
