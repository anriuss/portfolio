import Link from "next/link"

const navigation = [
    {
        name: 'About',
        href: '/#about',
    },
    {
        name: 'Experience',
        href: '/#experience',
    },
    {
        name: 'Projects',
        href: '/#projects',
    },
]

const socials = [
    {
        name: 'GitHub',
        href: 'https://github.com/anriuss',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/anri-vachnadze/',
    },
    {
        name: 'Email',
        href: 'mailto:anri.vachnadze@icloud.com',
    },
    {
        name: 'Phone',
        href: 'tel:+995557609310',
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/995557609310',
    }
]

export const Info = () => {
  return (
    <section className="sticky top-0 h-screen w-full">
        <h1>Anri Vachnadze</h1>
        <p>Software Engineer</p>

        {/* Navigation */}
        <nav>
            {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                    {item.name}
                </Link>
            ))}
        </nav>

        {/* Socials */}
        <ul>
            {socials.map((social) => (
                <li key={social.name}>
                    <Link href={social.href}>
                        {social.name}
                    </Link>
                </li>
            ))}
        </ul>
    </section>
  )
}