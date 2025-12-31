import Link from "next/link";

const navigation = [
	{
		name: "About",
		href: "/#about",
	},
	{
		name: "Experience",
		href: "/#experience",
	},
	{
		name: "Projects",
		href: "/#projects",
	},
];

const socials = [
	{
		name: "GitHub",
		href: "https://github.com/anriuss",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/anri-vachnadze/",
	},
	{
		name: "Email",
		href: "mailto:anri.vachnadze@icloud.com",
	},
    {
        name: "Instagram",
        href: "https://www.instagram.com/_anrikk/",
    }
];

export const Info = () => {
	return (
		<section className="flex w-full flex-col justify-between gap-8 max-lg:pb-8 lg:sticky lg:top-0 lg:h-[calc(100vh-64px)]">
			<div>
				<h1 className="font-bold text-4xl">Anri Vachnadze</h1>
				<h2>Software Engineer</h2>
			</div>

			{/* Navigation */}
			<nav className="flex flex-col gap-2 max-lg:hidden">
				{navigation.map((item) => (
					<Link className="font-medium" href={item.href} key={item.name}>
						{item.name}
					</Link>
				))}
			</nav>

			{/* Socials */}
			<ul className="flex gap-2 lg:flex-col lg:gap-1">
				{socials.map((social) => (
					<li key={social.name}>
						<Link href={social.href}>{social.name}</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
