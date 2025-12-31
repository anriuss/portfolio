import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";

const projects = [
	{
		name: "Project 1",
		description: "Description 1",
		link: "https://example.com",
		image: "/",
	},
	{
		name: "Project 2",
		description: "Description 2",
		link: "https://example.com",
	},
];

export const Projects = () => {
	return (
		<section id="projects">
			<h2 className="hidden">Projects</h2>
			{projects.map((item) => (
				<div className="flex gap-4" key={item.name}>
					{item.image && (
						<div className="flex min-w-64 flex-col justify-between">
							<div className="relative aspect-video w-full overflow-hidden rounded">
								<Image
									alt={item.name}
									className="object-cover"
									fill
									src={item.image}
								/>
							</div>
						</div>
					)}
					<div className="space-y-4">
						<h3 className="font-medium text-xl">
							<Link
								className="group flex items-center gap-2 text-white/80 transition-colors hover:text-white"
								href={item.link}
								rel="noopener noreferrer"
								target="_blank"
							>
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
							</Link>
						</h3>
						<p className="text-sm text-white/80">{item.description}</p>
					</div>
				</div>
			))}
		</section>
	);
};
