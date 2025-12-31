import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";

const projects = [
	{
		name: "Croissant Software",
		description: "Official Website of Croissant Software, MB.",
		link: "https://croissant-software.vercel.app",
		image: "/projects/croissant.jpeg",
		mainained: false,
	},
	{
		name: "Kyoto",
		description: "Marketplace for buying and selling digital products.",
		link: "https://kyoto-bay.vercel.app",
		image: "/projects/kyoto.jpeg",
		mainained: false,
	},
	{
		name: "Frag.bio",
		description:
			"A project made for Croissant Software, MB. It's a biolink app like Linktree, but focused on gaming community.",
		link: "https://frag.bio",
		image: "/projects/frag.jpeg",
		mainained: false,
	},
	{
		name: "Portfolio V1",
		description: "Old version of my portfolio.",
		link: "https://v1-anrius.vercel.app",
		image: "/projects/portfolio-v1.jpeg",
		mainained: false,
	},
	{
		name: "CureSpy",
		description: "Website that tracks clinical trials and you about changes.",
		link: "https://curespy.com",
		image: "/projects/curespy.jpeg",
		mainained: false,
	},
];

export const Projects = () => {
	return (
		<section id="projects">
			<h2 className="hidden">Projects</h2>
			{projects.map((item) => (
				<Link
					className="group mb-8 flex gap-4"
					href={item.link}
					key={item.name}
					rel="noopener noreferrer"
					target="_blank"
				>
					{item.image && (
						<div className="flex min-w-64 flex-col justify-between">
							<div className="relative aspect-video w-full overflow-hidden rounded-xs">
								<Image
									alt={item.name}
									className="object-cover"
									fill
									src={item.image}
								/>
							</div>
						</div>
					)}
					<div className="w-full space-y-4">
						<div className="flex items-center justify-between gap-2">
							<h3 className="font-medium text-xl">
								<div className="flex items-center gap-2 text-white/80 transition-colors group-hover:text-white">
									{item.name}{" "}
									<div className="relative flex size-5 items-center justify-center overflow-hidden">
										<ArrowUpRight
											className="absolute size-5! transform transition-transform duration-300 group-hover:translate-x-full group-hover:-translate-y-full"
											size={20}
										/>
										<ArrowUpRight
											className="absolute size-5! -translate-x-full translate-y-full transform transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
											size={20}
										/>
									</div>
								</div>
							</h3>
							<div>
								{item.mainained ? (
									<Badge>Maintained</Badge>
								) : (
									<Badge>Not Maintained</Badge>
								)}
							</div>
						</div>
						<p className="text-sm text-white/80">{item.description}</p>
					</div>
				</Link>
			))}
		</section>
	);
};
