import '../styles/Projects.css'

function IconGitHubMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  )
}

const projects = [
    {
    id: 'stack-daddy',
    name: 'Stack Daddy - Google I/O Build with AI Hackathon',
    period: 'May 2026',
    description:
      'Built an AI calisthenics coach that watches a recorded squat set, identifies form faults using Gemini vision, and delivers real-time voice feedback ',
    tags: ["React", "Node.js", "WebSockets", "Google GenAI"," Gemini Live", "MediaPipe"],
    link: 'https://github.com/draygada/StackDaddy',
  },
  {
    id: 'personal-website',
    name: 'Personal Website',
    period: 'April 2026 – May 2026',
    description:
      'Built my personal website to display my projects, experience, and education. Used React, Vite, and CSS. Deployed on Vercel.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS', 'Vercel'],
    link: 'https://github.com/draygada/Personal-Website',
  },
  {
    id: 'sp500-divergence',
    name: 'S&P 500 Derivative Divergence Predictor',
    period: 'January 2026 – March 2026',
    description: 'Identify 200+ mispriced options across the S&P 500 by comparing a GradientBoostingRegressor model on forecast returns to  Black–Scholes implied volatiliy',
    tags: ['Machine Learning', 'Python', 'scikit-learn', 'yfinance', 'FinBERT'],
    link: 'https://github.com/draygada/DataSci-112-Final-Project---Diego-Raygada-Townsend-Miller',
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
  {
    id: 'aerospace-research',
    name: 'Stanford SSI Monte-Carlo GUI',
    period: 'September 2024 - June 2025',
    description:
      'Developed a Tkinter-based GUI to visualize Monte Carlo launch simulation results, helping propulsion, structures, and avionics teams make iterative design decisions',
    tags: ["Python"," Monte Carlo Simulations", "Graphical User Interfaces"],
  },
]

function ProjectCard({ project }) {
  const githubRepo =
    project.link?.includes('github.com') ? project.link : null

  const body = (
    <>
      <div className="project-card__top">
        <h3 className="project-name">{project.name}</h3>
        {githubRepo && (
          <span className="project-github-mark" aria-hidden="true">
            <IconGitHubMark className="project-github-icon" />
          </span>
        )}
      </div>
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

  if (!project.link) {
    return <article className="project-card">{body}</article>
  }

  return (
    <a
      href={project.link}
      className="project-card project-card--link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        githubRepo
          ? `${project.name} — GitHub repository`
          : `Open ${project.name}`
      }
    >
      {body}
    </a>
  )
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
