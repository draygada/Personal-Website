import '../styles/About.css'
import headshot from '../assets/diego-headshot.png'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-hero">
        <div className="about-intro">
          <h1 className="about-name">Diego Raygada</h1>
          <p className="about-tagline">
            Stanford University
          </p>
          <p className="about-bio">
            Passionate about software, AI/ML, and product
          </p>
        </div>
        <div className="about-photo">
          <img
            src={headshot}
            alt="Diego Raygada"
          />
        </div>
      </div>
    </section>
  )
}
