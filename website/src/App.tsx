import './App.css'
import ContactForm from './ContactForm'

const services = [
  { title: 'AI Automation', text: 'Repetitive kaam ko automate karo.' },
  { title: 'Custom Software', text: 'Aapki zarurat ke hisaab se banaya hua software.' },
  { title: 'Dashboards', text: 'Data, reports aur analytics ek jagah.' },
  { title: 'Integrations', text: 'Aapke existing tools ko aapas mein jodna.' },
]

export default function App() {
  return (
    <div className="container">
      <nav>
        <span className="logo">Tattva Sync</span>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <h1>We understand your business. Then we build the solution.</h1>
        <p>AI, automation ya custom software: pehle aapki problem samajhte hain, phir uska sahi solution design aur build karte hain.</p>
        <a className="btn" href="#contact">Start a project</a>
      </section>

      <section className="services">
        <h2>What we build</h2>
        <div className="grid">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
  <h2>Start a project</h2>
  <p className="muted">Apni requirement batayein, hum samajhkar sahi solution suggest karenge.</p>
  <ContactForm />
</section>

<footer>© 2026 Tattva Sync · tattvasync.in</footer>
    </div>
  )
}