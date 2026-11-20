
import './App.css'

const services = [
  {
    number: '01',
    title: 'AI & Intelligent Automation',
    description:
      'Make repetitive work simpler with intelligent systems that help your business operate faster and smarter.',
    tag: 'INTELLIGENCE',
  },
  {
    number: '02',
    title: 'Custom Software Solutions',
    description:
      'Purpose-built digital products and software designed around your actual business requirements.',
    tag: 'ENGINEERING',
  },
  {
    number: '03',
    title: 'Business Workflow Systems',
    description:
      'Connect your tools, teams and processes into a more organised and efficient operation.',
    tag: 'AUTOMATION',
  },
]

function App() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">T</span>
          <span>TATTVA<span className="brand-light">SYNC</span></span>
        </a>

        <div className="nav-links">
          <a href="#services">Solutions</a>
          <a href="#approach">Our approach</a>
          <a href="#partner">Our partner</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let's talk <span>↗</span>
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            TECHNOLOGY · AUTOMATION · INNOVATION
          </div>

          <h1>
            Make your business
            <br />
            work <span>smarter.</span>
          </h1>

          <p className="hero-description">
            We understand how your business works, identify what can be
            improved, and build intelligent software and automation
            solutions around your needs.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#services">
              Explore solutions <span>↗</span>
            </a>
            <a className="text-button" href="#approach">
              Discover our approach <span>↓</span>
            </a>
          </div>

          <div className="hero-bottom">
            <span>BUILT AROUND YOUR BUSINESS</span>
            <span>INDEPENDENT THINKING. INTELLIGENT SYSTEMS.</span>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            <div className="core-inner">T<span>S</span></div>
          </div>
          <div className="orbit-label label-top">THINK</div>
          <div className="orbit-label label-right">DESIGN</div>
          <div className="orbit-label label-bottom">BUILD</div>
          <div className="orbit-label label-left">EVOLVE</div>
          <div className="visual-caption">SYSTEMS THAT MOVE YOU FORWARD.</div>
        </div>
      </section>

      <section className="intro-strip">
        <span>NOT ONE-SIZE-FITS-ALL.</span>
        <p>
          Every business is different. Your technology should be too.
        </p>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow">WHAT WE DO</div>
            <h2>Technology with<br /><span>a purpose.</span></h2>
          </div>
          <p>
            From understanding a challenge to building the right solution,
            we bring clarity to complex business problems.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <span className="service-arrow">↗</span>
              </div>
              <div className="service-tag">{service.tag}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-inner">
          <div className="eyebrow">HOW WE THINK</div>
          <h2>Understand.<br />Design. <span>Build.</span></h2>
          <p>
            We don't start with a product and search for a problem.
            We start by understanding your business, then shape the
            technology around it.
          </p>

          <div className="approach-steps">
            <div><span>01</span><strong>Understand</strong><small>Discover the real challenge.</small></div>
            <div><span>02</span><strong>Design</strong><small>Plan the right solution.</small></div>
            <div><span>03</span><strong>Build</strong><small>Turn ideas into working systems.</small></div>
          </div>
        </div>
      </section>

      <section className="partner-section" id="partner">
        <div className="partner-copy">
          <div className="eyebrow">OUR OPERATIONS PARTNER</div>
          <h2>Ideas need<br />reliable <span>execution.</span></h2>
          <p>
            Tattva Sync focuses on intelligent software and automation.
            Tynco complements that work through installation, maintenance,
            support and operational services.
          </p>
          <a className="text-button" href="https://tynco.in">
            Discover Tynco <span>↗</span>
          </a>
        </div>
        <div className="partner-card">
          <div className="partner-symbol">T.</div>
          <div className="partner-name">TYNCO</div>
          <div className="partner-line" />
          <div className="partner-caption">INSTALL. MAINTAIN. SUPPORT.</div>
          <div className="partner-foot">A TATTVA SYNC PARTNER</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="eyebrow">THE NEXT STEP</div>
        <h2>Let's build something<br /><span>that works better.</span></h2>
        <p>
          Have a business challenge, an idea, or a process that needs
          improvement? Let's start with a conversation.
        </p>
        <a className="primary-button" href="https://tynco.in">
          Explore our partner network <span>↗</span>
        </a>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">T</span>
          <span>TATTVA<span className="brand-light">SYNC</span></span>
        </a>
        <span>Understand. Design. Build.</span>
        <span>© {new Date().getFullYear()} Tattva Sync</span>
      </footer>
    </main>
  )
}

export default App