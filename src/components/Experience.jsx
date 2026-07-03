import '../styles/Experience.css'

const experiences = [
  {
    id: 'gse',
    company: 'Stanford Accelerator for Learning',
    role: "Summer Fellow",
    period: 'June 2026 - Present',
    location: 'Stanford, CA',
    tags: [],
    bullets: [
      'Building in EdTech'
    ],
  },
  {
    id: 'amazon2',
    company: 'Amazon',
    role: 'Software Development Intern',
    period: 'June 2026 - Present',
    location: 'Seattle, WA',
    tags: ['Java','Lambda', 'Amazon Bedrock', 'Content Management Systems'],
    bullets: [
      'Summer 2026 - Prime Value Communication Team'
    ],
  },
  {
    id: 'gsb',
    company: 'Stanford Graduate School of Business',
    role: 'Research Assistant',
    period: 'May 2026 - Present',
    location: 'Stanford, CA',
    tags: ['TypeScript', 'FastAPI','SQLite','LangGraph', 'Docker'],
    bullets: [
      'Building AI tools and agentic workflows for the Initiative for Financial Decision-Making'
    ],
  },
  {
    id: 'rumbo',
    company: 'Rumbo',
    companyLink: 'http://www.tryrumbo.com',
    role: 'Founder',
    period: 'December 2025 – Present',
    location: 'Stanford, CA',
    tags: [],
    bullets: [
      'Building AI workflow tool for students with attentional learning differences'
    ],
  },
  {
    id: 'amazon',
    company: 'Amazon',
    role: 'Software Development Intern',
    period: 'June 2025 – September 2025',
    location: 'Seattle, WA',
    tags: ['TypeScript', 'Google Guice', 'REST APIs', 'Headless CMS', 'A/B Testing'],
    bullets: [
      <>
        Worked on the Prime Store add-ons page for non-Prime customers
      </>,
    ],
  },
  {
    id: 'stanford-space-initiative',
    company: 'Stanford Space Initiative',
    role: 'Software Engineer',
    period: 'September 2024 – June 2025',
    location: 'Stanford, CA',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Monte Carlo', 'GUI'],
    bullets: [
      'Led development of GUI to visualize Monte Carlo launch simulations'],
  },
  {
    id: 'palm-dental',
    company: 'Palm Dental Group',
    role: 'Member of Technical Staff',
    period: 'June 2024 – September 2024',
    location: 'Lemon Grove, CA',
    tags: ['Dentrix', 'HIPAA', 'Healthcare IT'],
    bullets: [

      'Implemented data parsing and record management workflows'
    ],
  },
  {
    id: 'ucsd-cosmos',
    company: 'University of California, San Diego',
    role: 'COSMOS Engineering Intern',
    period: 'June 2023 – September 2023',
    location: 'La Jolla, CA',
    tags: ['OnShape', 'Structural Engineering', 'Engineering Ethics',],
    bullets: [
      <>
        Led the development of a self-sustaining wind turbine
        tower model — placed 2nd out of 17 teams
      </>,
    ],
  },
  {
    id: 'blci',
    company: 'Barrio Logan College Institute',
    role: 'Instruction Coordinator',
    period: 'February 2023 – November 2024',
    location: 'San Diego, CA',
    tags: ['Education', 'Curriculum Design', 'Mathematics', 'Program Leadership'],
    bullets: [
      <>
        Led a program for underserved Hispanic high school students
      </>
    ],
  },
    {
    id: 'mlc',
    company: 'Mathnasium Learning Center',
    role: 'Mathematics Tutor',
    period: 'July 2021 – July 2024',
    location: 'Chula Vista, CA',
    tags: ['Tutoring', 'Mathematics'],
    bullets: [
      <>
        Tutored elementary to collegiate level mathematics
      </>
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="exp-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-card">
            <header className="exp-header">
              <div className="exp-line">
                <p className="exp-company">
                  {exp.companyLink ? (
                    <>
                      {exp.company}{' '}
                      <a
                        href={exp.companyLink}
                        className="exp-inline-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (Link)
                      </a>
                    </>
                  ) : (
                    exp.company
                  )}
                </p>
                <span className="exp-period">{exp.period}</span>
              </div>
              <div className="exp-line">
                <p className="exp-role">{exp.role}</p>
                {exp.location ? (
                  <span className="exp-location">{exp.location}</span>
                ) : null}
              </div>
            </header>
            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            {exp.tags?.length ? (
              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
