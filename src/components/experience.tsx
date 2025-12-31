const experience = [
  {
    company: 'Company 1',
    title: 'Software Engineer',
    description: 'Description 1',
  },
]

export const Experience = () => {
  return (
    <section id="experience">
      <h2 className="hidden">Experience</h2>
      {experience.map((item) => (
        <div key={item.company}>
          <h3>{item.company}</h3>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  )
}