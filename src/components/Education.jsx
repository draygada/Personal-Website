import '../styles/Education.css'

const education = {
  school: 'Stanford University',
  degree: 'B.S. Mathematics',
  period: '2024 – 2028',
  math_courses: [
    '- Linear Algebra',
    '- Multivariable Calculus',
    '- Differential Equations',
    '- Modern Mathematics',
    '- Probability Theory',
    '- Statistical Inference',
  ],
  cs_courses: [
    '- Discrete Mathematics',
    '- Data structures',
    '-Design and Analysis of Algorithms',
    '- Fullstack Web Programming',
    '- Teaching and Learning',
    '- Entrepreneurship in Education',
  ],
  organizations: [
    { name: 'Sigma Phi Epsilon', role: 'President' },
    { name: 'Cardinal USA Powerlifting', role: 'Safety Officer' },
    { name: 'Society of Latino Engineers', role: 'Member' },
    { name: 'ColorStack', role: 'Fellow' },
    { name: 'The D.E. Shaw Group', role: 'Connect Invite' },
  ],
}

export default function Education() {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>

      <div className="edu-school">
        <div className="edu-school-header edu-accent-bar">
          <div>
            <p className="edu-school-name">{education.school}</p>
            <p className="edu-degree">{education.degree}</p>
          </div>
          <span className="edu-period">{education.period}</span>
        </div>
      </div>

      <div className="edu-block">
        <div className="edu-accent-bar">
          <div>
            <p className="edu-school-name">Relevant Courses</p>
            <div className="edu-course-columns">
              <ul className="edu-course-column-list">
                {education.math_courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
              <ul className="edu-course-column-list">
                {education.cs_courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="edu-block">
        <div className="edu-accent-bar">
          <div>
            <p className="edu-school-name">Organizations</p>
            <ul className="edu-course-column-list">
              {education.organizations.map((org) => (
                <li key={org.name}>
                  {org.name} – {org.role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
