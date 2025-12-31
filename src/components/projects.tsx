import Link from "next/link"

const projects = [
  {
    name: 'Project 1',
    description: 'Description 1',
    link: 'https://example.com',
  },
]

export const Projects = () => {
  return (
    <section id="projects">
      <h2 className="hidden">Projects</h2>
      {projects.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <Link href={item.link}>
            {item.link}
          </Link>
        </div>
      ))}
    </section>
  )
}