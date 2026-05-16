import '../styles/Projects.css'

const projects = [
  {
    id: 'sp500-divergence',
    name: 'S&P 500 Derivative Divergence Predictor',
    period: 'January 2026 – March 2026',
    description: 'Identify 200+ mispriced options across the S&P 500 by comparing a GradientBoostingRegressor model on forecast returns to  Black–Scholes implied volatiliy',
    tags: ['Machine Learning', 'Python', 'scikit-learn', 'yfinance', 'FinBERT'],
    link: null,
  },
  {
    id: 'heap-allocator',
    name: 'Heap Memory Allocator',
    period: 'November 2025 – December 2025',
    description:
      'Explicit free-list allocator in C with 8-byte metadata, first-fit search, in-place reallocation, and right coalescing—92% memory utilization.',
    tags: ['C', 'Systems', 'Optimization', 'GDB', 'Emacs'],
    link: null,
  },
  {
    id: 'aerospace-research',
    name: 'Aerospace Engineering Research',
    period: 'January 2024 – September 2024',
    description:
      'Regression analysis of GDP vs. commercial aviation CO₂ across 104 countries, projecting 4× emissions growth by 2050 among top economies. Evaluated aluminum–air batteries for aviation, targeting regional hybrid aircraft to balance weight and emissions.',
    tags: ['Regression', 'Environmental Engineering', 'Python'],
    link:
      'https://drive.google.com/file/d/1H_j-HfVzzPrdBFu-VQYDMYXVlrLglz9s/view?usp=sharing',
  },
]

function ProjectCard({ project }) {
  const body = (
    <>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-period">{project.period}</p>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  if (project.link) {
    return (
      <a
        href={project.link}
        className="project-card project-card--link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    )
  }

  return <article className="project-card">{body}</article>
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
