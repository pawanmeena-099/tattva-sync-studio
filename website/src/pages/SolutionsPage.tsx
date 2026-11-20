import { useState } from 'react'
import { type PageKey, solutionsData } from '../data/siteData'

interface SolutionsPageProps {
  onNavigate: (page: PageKey) => void
}

const pillarBlueprints: Record<
  string,
  {
    inputStage: string
    engineStage: string
    outputStage: string
    tyncoSupport: string
  }
> = {
  '01': {
    inputStage: 'Unstructured messages, forms, or repetitive manual triage',
    engineStage: 'AI classification, structured brief drafting & human approval gates',
    outputStage: 'Approved drafts, prioritized queue & clean audit log',
    tyncoSupport: 'Webhook hosting, model/API health checks & uptime monitoring',
  },
  '02': {
    inputStage: 'Rigid spreadsheets, manual status tracking & team workarounds',
    engineStage: 'Custom web portal, role-based access & tailored database schema',
    outputStage: 'Single operational workspace built around your exact workflow',
    tyncoSupport: 'Production deployment, backups, version updates & SLA care',
  },
  '03': {
    inputStage: 'Disconnected forms, sheets, CRM & internal tools',
    engineStage: 'Event-driven API connectors, validation & deduplication logic',
    outputStage: 'Synchronized records across systems with failure alerts',
    tyncoSupport: 'Connector maintenance, token/API upkeep & incident recovery',
  },
  '04': {
    inputStage: 'Scattered operational logs & delayed manual reporting',
    engineStage: 'Normalized metrics pipeline, trend views & exception detection',
    outputStage: 'Daily KPI snapshots & bottleneck visibility for faster decisions',
    tyncoSupport: 'Scheduled pipeline checks, storage maintenance & support',
  },
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const [selectedNumber, setSelectedNumber] = useState<string>('01')
  const activePillar =
    solutionsData.find((item) => item.number === selectedNumber) ?? solutionsData[0]
  const blueprint = pillarBlueprints[activePillar.number] ?? pillarBlueprints['01']

  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">SOLUTIONS · 4 CORE PILLARS</div>
          <h1>
            Engineered around
            <br />
            <span>your actual bottlenecks.</span>
          </h1>
        </div>
        <p>
          We diagnose where time is lost first, then combine AI automation,
          custom software, integrations, or data intelligence as needed.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid-2">
        {solutionsData.map((item) => {
          const isSelected = item.number === selectedNumber
          return (
            <article
              key={item.number}
              className={`card pillar-card ${isSelected ? 'active-pillar' : ''}`}
              onClick={() => setSelectedNumber(item.number)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <div className="card-top">
                  <span>{item.number}</span>
                  <span className="demo-badge">
                    {isSelected ? 'VIEWING BLUEPRINT' : 'INSPECT FLOW'}
                  </span>
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
          )
        })}
      </div>

      {/* Interactive Pillar Architecture Blueprint */}
      <div className="lab-workspace" style={{ marginTop: '36px' }}>
        <div className="lab-workspace-head">
          <div>
            <span className="demo-badge">
              PILLAR {activePillar.number} · SYSTEM BLUEPRINT
            </span>
            <h3>
              {activePillar.title} — How It Runs End-to-End
            </h3>
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Click any pillar above to switch blueprint
          </span>
        </div>

        <div className="blueprint-flow-grid">
          <div className="lab-box">
            <small>01 · INPUT &amp; BOTTLENECK</small>
            <p>{blueprint.inputStage}</p>
          </div>
          <div className="lab-box accent-border">
            <small>02 · TATTVA SYNC BUILD</small>
            <p>{blueprint.engineStage}</p>
          </div>
          <div className="lab-box">
            <small>03 · OPERATIONAL OUTPUT</small>
            <p>{blueprint.outputStage}</p>
          </div>
          <div className="lab-box">
            <small>04 · TYNCO OPERATIONS CARE</small>
            <p>{blueprint.tyncoSupport}</p>
          </div>
        </div>
      </div>

      <div className="wizard-actions" style={{ marginTop: '36px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('demo-labs')}
        >
          Test in Demo Labs <span>↗</span>
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => onNavigate('consultation')}
        >
          Start a Project <span>→</span>
        </button>
      </div>
    </section>
  )
}