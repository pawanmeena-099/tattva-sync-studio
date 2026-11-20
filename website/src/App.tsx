import './App.css'
import ContactForm from './ContactForm'

// Cal.com link banne ke baad yahan daalo, jaise 'https://cal.com/yourname/30min'
const BOOKING_URL = ''
const bookHref = BOOKING_URL || '#contact'

const services = [
  { title: 'Business Process Automation', text: 'Automate repetitive, rule-based work like data entry, reports and approvals.' },
  { title: 'AI Automation & Agents', text: 'AI systems that understand inputs and carry out approved tasks.' },
  { title: 'System Integration', text: 'Connect your CRM, payments, email and other tools through APIs.' },
  { title: 'Custom Software', text: 'Dashboards and backend systems when ready-made tools fall short.' },
]

const steps = [
  { n: '01', title: 'Understand', text: 'We learn how your business works today and where time is lost.' },
  { n: '02', title: 'Design', text: 'We plan the workflow, integrations and what needs human approval.' },
  { n: '03', title: 'Build & Test', text: 'We build the solution and test real scenarios and failures.' },
  { n: '04', title: 'Deploy & Support', text: 'We launch it, hand it over, and support it if you want.' },
]

const labs = [
  'Workflow Automation Lab',
  'AI Agent Lab',
  'Integration Lab',
  'Business Intelligence Lab',
]

export default function App() {
  return (
    <div className="container">
      <nav>
        <span className="logo">Tattva Sync</span>
        <div className="nav-links">
          <a href="#solutions">Solutions</a>
          <a href="#how">How We Work</a>
          <a href="#labs">Demo Labs</a>
          <a className="btn-small" href={bookHref}>Book a Consultation</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Your Business. Your Challenges. Our Automation.</h1>
        <p>
          Tattva Sync designs and builds custom automation systems that remove
          repetitive work and make your operations faster and more accurate.
        </p>
        <a className="btn" href={bookHref}>Book a Consultation</a>
      </section>

      <section id="solutions" className="section">
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

      <section id="how" className="section">
        <h2>How we work</h2>
        <div className="grid">
          {steps.map((s) => (
            <div className="card" key={s.n}>
              <span className="step">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="labs" className="section">
        <h2>Demo Labs</h2>
        <p className="muted">Interactive demos of what automation can do for a business.</p>
        <div className="grid">
          {labs.map((l) => (
            <div className="card" key={l}>
              <h3>{l}</h3>
              <span className="badge">Coming soon</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Tell us about your process</h2>
        <p className="muted">Describe the work that slows your team down. We will get back to you.</p>
        <ContactForm />
      </section>

      <footer>© 2026 Tattva Sync · tattvasync.in</footer>
    </div>
  )
}