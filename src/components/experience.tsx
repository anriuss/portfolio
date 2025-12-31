import { Badge } from "./badge";

const experience = [
	{
		company: "Educate",
		title: "Senior Software Engineer",
		description: [
			"Helped build and grow AI products like Synthesise AI and Ask Iman.",
			"Contributed across design, development, and product improvements to deliver engaging, user-focused solutions",
			"Refactored core backend services to enhance data processing accuracy, significantly improving platform reliability and user trust in educational content delivery.",
			"Engineered scalable backend services that enhanced system reliability and significantly improved user engagement across multiple educational platforms.",
		],
		date_started: "2025-01-01",
		date_ended: "Present",
		location: "Remote - Dubai, UAE",
		skills: [
			// Languages & Frameworks
			"TypeScript",
			"React",
			"Next.js",
			"Node.js",
			"Bun",

			// Styling
			"Tailwind CSS",

			// Database & ORM
			"PostgreSQL",
			"Drizzle ORM",

			// DevOps & Cloud
			"Docker",
			"AWS",
			"Azure",
			"GCP",
		],
	},

	{
		company: "Croissant Software, MB",
		title: "Senior Software Engineer",
		description: [
			"Developed and maintained web applications based on client requests and specifications.",
			"Worked on a variety of projects, from small MVPs to large-scale applications.",
		],
		date_started: "2024-09-01",
		date_ended: "2025-04-01",
		location: "Remote - Vilnius, Lithuania",
		skills: [
			"Vite",
			"Svelte",
			"ReCharts",
			"Supabase",
			"Vercel",
			"Zod",
		],
	},
];

export const Experience = () => {
	return (
		<section id="experience">
			<h2 className="hidden">Experience</h2>
			{experience.map((item) => (
				<div className="mb-24 flex gap-4" key={item.company}>
					<div className="flex min-w-40 flex-col justify-between">
						<p className="text-white/80 text-xs">
							<span className="whitespace-nowrap">{new Date(item.date_started).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
								year: "numeric",
							})}</span>{" "}
							-{" "}
							<span className="whitespace-nowrap">{item.date_ended === "Present"
								? item.date_ended
								: new Date(item.date_ended).toLocaleDateString("en-US", {
										month: "short",
										day: "numeric",
										year: "numeric",
									})}</span>
						</p>

						<p className="text-white/80 text-xs">{item.location}</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="font-semibold text-2xl">{item.company}</h3>
						<p className="-mt-2 font-medium text-xl">{item.title}</p>
						<p className="my-4 space-y-4 text-sm text-white/80">
							{item.description.map((description) => (
								<li className="ml-3 list-disc" key={description}>
									{description}
								</li>
							))}
						</p>
						<div className="flex flex-wrap gap-2">
							{item.skills.map((skill) => (
								<Badge key={skill}>{skill}</Badge>
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
};
