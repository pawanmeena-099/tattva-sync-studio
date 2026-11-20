import { useState } from 'react'
import { type PageKey, solutionsData, processStepsData } from '../data/siteData'

interface HomePageProps {
  onNavigate: (page: PageKey) => void
}

interface SystemMode {
  key: 'ai-flow' | 'custom-app' | 'data-sync'
  label: string
  summary: string
  stageLabel: string
  detail: string
  guardrail: string
}

const systemModes: SystemMode[] = [
  {
    key: 'ai-flow',
    label: 'AI & Workflows',
    summary: 'Bottleneck audit → Structured intake → Human-approved action',
    stageLabel: '01 · Understand & Route',
    detail: 'Classifies inbound needs, drafts discovery notes, and holds sensitive actions for approval.',
    guardrail: 'Human approval required before external sends or commitments',
  },
  {
    key: 'custom-app',
    label: 'Custom Software',
    summary: 'Tailored internal tools & portals shaped to real operations',
    stageLabel: '02 · Design & Build',
    detail: 'Replaces rigid spreadsheets and workarounds with focused workflows built for your team.',
    guardrail: 'Scoped after workflow discovery · Clean handover docs',
  },
  {
    key: 'data-sync',
    label: 'Data & Sync',
    summary: 'Connected pipelines, live metrics & independent Tynco upkeep',
    stageLabel: '03 · Deliver & Operate',
    detail: 'Keeps records aligned across tools while Tynco handles installation, updates & monitoring.',
    guardrail: 'Tattva Sync builds · Independent partner Tynco operates',
  },
]

export function HomePage({ onNavigate }: HomePageProps) {
  const [selectedMode, setSelectedMode] = useState<'ai-flow' | 'custom-app' | 'data-sync'>('ai-flow')
  const activeMode = systemModes.find((m) => m.key === selectedMode) ?? systemModes[0]

  return (
    <>
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            TATTVA SYNC · AI SYSTEMS STUDIO
          </div>

          <h1>
            We understand your business.
            <br />
            Then we <span>build the solution.</span>
          </h1>

          <p className="hero-description">
            We study how your work actually runs before choosing tools — engineering
            controlled AI automation, custom software, integrations, and data
            systems around real bottlenecks.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="primary-button"
              onClick={() => onNavigate('demo-labs')}
            >
              Explore Our Systems <span>↗</span>
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => onNavigate('consultation')}
            >
              Start a Project <span>→</span>
            </button>
          </div>
        </div>

        {/* Single Interactive Product Panel on Desktop Right */}
        <div className="studio-panel" aria-label="Interactive System Preview">
          <div className="studio-panel-bar">
            <span className="panel-dot" />
            <span>SYSTEM ARCHITECTURE VIEW</span>
          </div>

          <div className="studio-mode-tabs">
            {systemModes.map((mode) => (
              <button
                key={mode.key}
                type="button"
                className={`studio-mode-tab ${mode.key === selectedMode ? 'active' : ''}`}
                onClick={() => setSelectedMode(mode.key)}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="studio-panel-body">
            <div className="studio-stage">{activeMode.stageLabel}</div>
            <h3 className="studio-panel-headline">{activeMode.summary}</h3>
            <p className="studio-panel-desc">{activeMode.detail}</p>
            <div className="studio-guardrail">{activeMode.guardrail}</div>
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <span>UNDERSTAND → DESIGN → BUILD</span>
        <p>
          Problem-first engineering with human control — paired with Tynco as an
          independent partner for installation, updates, and maintenance.
        </p>
      </section>

      {/* Solutions Overview (Refined, Less Card Clutter) */}
      <section className="section alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">CAPABILITIES</div>
            <h2>
              Built around real
              <br />
              <span>operational needs.</span>
            </h2>
          </div>
          <button
            type="button"
            className="text-button link-btn"
            onClick={() => onNavigate('solutions')}
          >
            All 4 solution pillars <span>→</span>
          </button>
        </div>

        <div className="grid-3">
          {solutionsData.map((item) => (
            <article className="card" key={item.number}>
              <div>
                <div className="card-top">
                  <span>{item.number}</span>
                  <span className="card-arrow">↗</span>
                </div>
                <div className="card-tag">{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="card-foot">{item.whenToUse}</div>
            </article>
          ))}
        </div>
      </section>

      {/* How We Work — Horizontal Timeline on Desktop */}
      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">HOW WE WORK</div>
            <h2>
              From bottleneck to
              <br />
              <span>reliable operation.</span>
            </h2>
          </div>
          <button
            type="button"
            className="text-button link-btn"
            onClick={() => onNavigate('how-we-work')}
          >
            Process &amp; deliverables <span>→</span>
          </button>
        </div>

        <div className="timeline-track">
          {processStepsData.map((step) => (
            <div className="timeline-node" key={step.step}>
              <div className="timeline-head">
                <span className="timeline-num">{step.step}</span>
                <span className="timeline-owner">{step.owner}</span>
              </div>
              <strong>{step.title}</strong>
              <small>{step.detail}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
