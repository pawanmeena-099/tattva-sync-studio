import { useState } from 'react'
import { type PageKey, solutionsData, processStepsData } from '../data/siteData'

interface HomePageProps {
  onNavigate: (page: PageKey) => void
}

interface FlowStep {
  stage: string
  actor: string
  action: string
  output: string
}

const workflowPresets: Record<
  'orders' | 'leads' | 'custom',
  {
    beforeText: string
    afterText: string
    steps: FlowStep[]
  }
> = {
  orders: {
    beforeText: 'Manual chats + spreadsheet re-entry + late stock updates',
    afterText: 'Structured capture + live order tracker + daily summary',
    steps: [
      {
        stage: '01 · Intake',
        actor: 'Client / Channel',
        action: 'Order or request comes in with item and quantity details',
        output: 'Captured in structured record',
      },
      {
        stage: '02 · Check',
        actor: 'Tattva Sync Logic',
        action: 'Validates required fields, flags gaps & checks status',
        output: 'Fewer manual errors',
      },
      {
        stage: '03 · Approval',
        actor: 'Business Owner',
        action: 'Reviews exceptions and confirms priority orders',
        output: 'Human control retained',
      },
      {
        stage: '04 · Run & Care',
        actor: 'Tynco Partner',
        action: 'Handles installation, updates, monitoring & support',
        output: 'Reliable operations',
      },
    ],
  },
  leads: {
    beforeText: 'Scattered enquiries + slow follow-ups + manual notes',
    afterText: 'Organized leads + clear summary brief + timely follow-up',
    steps: [
      {
        stage: '01 · Capture',
        actor: 'Inbound / Form',
        action: 'Prospect details and workflow notes enter one pipeline',
        output: 'Clean inquiry record',
      },
      {
        stage: '02 · Structure',
        actor: 'AI Workflow',
        action: 'Summarizes bottleneck, fit & priority for review',
        output: 'Brief ready for review',
      },
      {
        stage: '03 · Decision',
        actor: 'You',
        action: 'Approve scope or outreach before external action',
        output: 'No unapproved actions',
      },
      {
        stage: '04 · Maintain',
        actor: 'Tynco Partner',
        action: 'Keeps hosting, checks & ongoing maintenance running',
        output: 'Steady pipeline upkeep',
      },
    ],
  },
  custom: {
    beforeText: 'Disconnected sheets + workarounds + hours on status',
    afterText: 'Tailored software or sync + clear docs + clean handover',
    steps: [
      {
        stage: '01 · Audit',
        actor: 'Tattva Sync',
        action: 'Maps real bottlenecks across current tools and team steps',
        output: 'Clear problem map',
      },
      {
        stage: '02 · Architect',
        actor: 'Tattva Sync',
        action: 'Builds custom software, automation, or integration to fit',
        output: 'Purpose-built system',
      },
      {
        stage: '03 · Verify',
        actor: 'Tattva Sync',
        action: 'Tests real scenarios, edge cases & handover documentation',
        output: 'Tested & documented',
      },
      {
        stage: '04 · Support',
        actor: 'Tynco Partner',
        action: 'Installs, updates & supports live usage as independent partner',
        output: 'Ongoing stability',
      },
    ],
  },
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [presetKey, setPresetKey] = useState<'orders' | 'leads' | 'custom'>('orders')
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0)

  const currentPreset = workflowPresets[presetKey]
  const activeStep = currentPreset.steps[activeStepIdx] ?? currentPreset.steps[0]

  const selectPreset = (key: 'orders' | 'leads' | 'custom') => {
    setPresetKey(key)
    setActiveStepIdx(0)
  }

  return (
    <>
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            TATTVA SYNC · AI AUTOMATION &amp; CUSTOM SOFTWARE
          </div>

          <h1>
            We understand your business.
            <br />
            Then we <span>build the solution.</span>
          </h1>

          <p className="hero-description">
            We don&apos;t force predefined software onto your team. We study how
            your work actually runs, spot bottlenecks, and build tailored AI
            automation or custom software — while our independent partner{' '}
            <strong>Tynco</strong> handles installation, updates, and ongoing
            maintenance.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="primary-button"
              onClick={() => onNavigate('consultation')}
            >
              Book a Consultation <span>↗</span>
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => onNavigate('demo-labs')}
            >
              Explore Demo Labs <span>→</span>
            </button>
          </div>
        </div>

        <div className="system-console">
          <div className="console-top">
            <div className="console-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="console-title">WORKFLOW PREVIEW</span>
          </div>

          <div className="console-tabs">
            <button
              type="button"
              className={`console-tab ${presetKey === 'orders' ? 'active' : ''}`}
              onClick={() => selectPreset('orders')}
            >
              Orders &amp; Stock
            </button>
            <button
              type="button"
              className={`console-tab ${presetKey === 'leads' ? 'active' : ''}`}
              onClick={() => selectPreset('leads')}
            >
              Lead Pipeline
            </button>
            <button
              type="button"
              className={`console-tab ${presetKey === 'custom' ? 'active' : ''}`}
              onClick={() => selectPreset('custom')}
            >
              Custom App
            </button>
          </div>

          <div className="before-after-strip">
            <div className="ba-box ba-before">
              <small>BEFORE</small>
              <span>{currentPreset.beforeText}</span>
            </div>
            <div className="ba-box ba-after">
              <small>AFTER TATTVA SYNC</small>
              <span>{currentPreset.afterText}</span>
            </div>
          </div>

          <div className="step-selector-row">
            {currentPreset.steps.map((st, idx) => (
              <button
                key={st.stage}
                type="button"
                className={`step-pill ${idx === activeStepIdx ? 'active' : ''}`}
                onClick={() => setActiveStepIdx(idx)}
              >
                {st.stage.split(' · ')[0]}
              </button>
            ))}
          </div>

          <div className="console-detail-card">
            <div className="console-detail-head">
              <strong>{activeStep.stage}</strong>
              <span>{activeStep.actor}</span>
            </div>
            <p>{activeStep.action}</p>
            <div className="console-output-tag">Outcome: {activeStep.output}</div>
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">SOLUTIONS</div>
            <h2>
              Problem first.
              <br />
              <span>Software second.</span>
            </h2>
          </div>
          <button
            type="button"
            className="text-button link-btn"
            onClick={() => onNavigate('solutions')}
          >
            View all solutions <span>→</span>
          </button>
        </div>

        <div className="grid-3">
          {solutionsData.map((item) => (
            <article className="card" key={item.number}>
              <div>
                <div className="card-top">
                  <span>{item.number}</span>
                  <span style={{ color: '#58D6E8' }}>↗</span>
                </div>
                <div className="card-tag">{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="feature-list">
                  {item.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="card-foot">{item.whenToUse}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt-bg project-preview-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ENGINEERING IN PUBLIC</div>
            <h2>Systems we are <span>building.</span></h2>
          </div>
          <button type="button" className="text-button link-btn" onClick={() => onNavigate('projects')}>View all projects <span>→</span></button>
        </div>
        <div className="project-preview-grid">
          <article className="project-preview-card">
            <div className="project-preview-top"><span>01 / OPERATIONS</span><span className="status-pill status-in-development">IN DEVELOPMENT</span></div>
            <h3>Tynco</h3>
            <p>Food-tech delivery platform and operational systems, being developed for a focused local launch.</p>
            <div className="project-preview-tags"><span>Marketplace</span><span>Operations</span><span>Delivery</span></div>
          </article>
          <article className="project-preview-card">
            <div className="project-preview-top"><span>02 / AI WORKFORCE</span><span className="status-pill status-prototype">PROTOTYPE</span></div>
            <h3>AI Workforce</h3>
            <p>Role-based AI assistants for research, requirement analysis and task preparation with human review.</p>
            <div className="project-preview-tags"><span>Agents</span><span>Orchestration</span><span>Guardrails</span></div>
          </article>
          <article className="project-preview-card">
            <div className="project-preview-top"><span>03 / INTELLIGENCE</span><span className="status-pill status-prototype">PROTOTYPE</span></div>
            <h3>Operational Intelligence</h3>
            <p>Prototype dashboards designed to surface pending work, delays and process bottlenecks.</p>
            <div className="project-preview-tags"><span>Analytics</span><span>KPIs</span><span>Decision support</span></div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">HOW WE WORK</div>
            <h2>
              Five steps from
              <br />
              <span>discovery to handover.</span>
            </h2>
          </div>
          <button
            type="button"
            className="text-button link-btn"
            onClick={() => onNavigate('how-we-work')}
          >
            Full process details <span>→</span>
          </button>
        </div>

        <div className="approach-steps">
          {processStepsData.map((step) => (
            <div key={step.step}>
              <span>
                {step.step} · {step.owner}
              </span>
              <strong>{step.title}</strong>
              <small>{step.detail}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}