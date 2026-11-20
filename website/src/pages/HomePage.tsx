import { useState } from 'react'
import type { PageKey } from '../data/siteData'

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
  'orders' | 'outreach' | 'ops',
  {
    title: string
    beforeText: string
    afterText: string
    steps: FlowStep[]
  }
> = {
  orders: {
    title: 'Order & Stock Flow',
    beforeText: 'Manual chats + Excel entry + late stock checks',
    afterText: 'Structured capture + live tracker + daily summary',
    steps: [
      {
        stage: '01 · Intake',
        actor: 'Client / Channel',
        action: 'Order or request arrives with item & quantity details',
        output: 'Parsed into structured record',
      },
      {
        stage: '02 · Check',
        actor: 'Tattva Sync Logic',
        action: 'Validates fields, flags missing info & checks stock status',
        output: 'Zero duplicate entries',
      },
      {
        stage: '03 · Approval',
        actor: 'Business Owner',
        action: 'Reviews exceptions & confirms priority items',
        output: 'Human control preserved',
      },
      {
        stage: '04 · Run & Care',
        actor: 'Tynco Partner',
        action: 'Keeps deployment, updates & technical support running',
        output: 'Steady day-to-day ops',
      },
    ],
  },
  outreach: {
    title: 'Lead & Outreach Pipeline',
    beforeText: 'Scattered contacts + slow follow-ups + manual notes',
    afterText: 'Organized leads + clear briefs + timely follow-up queue',
    steps: [
      {
        stage: '01 · Capture',
        actor: 'Inbound / List',
        action: 'Prospect details & context collected in one place',
        output: 'Clean lead profile',
      },
      {
        stage: '02 · Structure',
        actor: 'AI Workflow',
        action: 'Summarizes need, fit & priority from raw notes',
        output: 'Actionable brief ready',
      },
      {
        stage: '03 · Decision',
        actor: 'You',
        action: 'Approve outreach or next step before sending',
        output: 'No unapproved messages',
      },
      {
        stage: '04 · Maintain',
        actor: 'Tynco Partner',
        action: 'Handles workflow hosting, checks & ongoing upkeep',
        output: 'Reliable pipeline',
      },
    ],
  },
  ops: {
    title: 'Custom Software & Reporting',
    beforeText: 'Disconnected sheets + hours spent compiling status',
    afterText: 'Unified view + automated status + clean handover',
    steps: [
      {
        stage: '01 · Audit',
        actor: 'Tattva Sync',
        action: 'Maps real bottlenecks across current tools & team habits',
        output: 'Clear problem map',
      },
      {
        stage: '02 · Architect',
        actor: 'Tattva Sync',
        action: 'Builds tailored software or automation — no forced bloat',
        output: 'Purpose-built system',
      },
      {
        stage: '03 · Verify',
        actor: 'Tattva Sync',
        action: 'Tests real scenarios, edge cases & handover docs',
        output: 'Tested & documented',
      },
      {
        stage: '04 · Support',
        actor: 'Tynco Partner',
        action: 'Installs, updates & maintains live operations smoothly',
        output: 'Long-term stability',
      },
    ],
  },
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [presetKey, setPresetKey] = useState<'orders' | 'outreach' | 'ops'>('orders')
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0)

  const currentPreset = workflowPresets[presetKey]
  const activeStep = currentPreset.steps[activeStepIdx] ?? currentPreset.steps[0]

  const selectPreset = (key: 'orders' | 'outreach' | 'ops') => {
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
            Stop losing hours to
            <br />
            <span>manual busywork.</span>
          </h1>

          <p className="hero-description">
            We start by understanding how your business actually runs — where time
            slips, what breaks manually, and what fits best. Then we build the
            right automation or custom software, while our independent partner{' '}
            <strong>Tynco</strong> takes care of installation, updates, and
            ongoing maintenance.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="primary-button"
              onClick={() => onNavigate('consultation')}
            >
              Start a Real Discovery <span>↗</span>
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => onNavigate('demo-labs')}
            >
              Open Demo Lab <span>→</span>
            </button>
          </div>
        </div>

        {/* Interactive Live System Preview */}
        <div className="system-console">
          <div className="console-top">
            <div className="console-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="console-title">SYSTEM WORKFLOW PREVIEW</span>
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
              className={`console-tab ${presetKey === 'outreach' ? 'active' : ''}`}
              onClick={() => selectPreset('outreach')}
            >
              Lead Pipeline
            </button>
            <button
              type="button"
              className={`console-tab ${presetKey === 'ops' ? 'active' : ''}`}
              onClick={() => selectPreset('ops')}
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
            <div className="console-output-tag">Result: {activeStep.output}</div>
          </div>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">HOW WE WORK DIFFERENTLY</div>
            <h2>
              Problem first.
              <br />
              <span>Software second.</span>
            </h2>
          </div>
          <p>
            No forced templates or overcomplicated tools. Every build is shaped
            around a real operational bottleneck.
          </p>
        </div>

        <div className="grid-3">
          <article className="card">
            <div>
              <div className="card-top">
                <span>01</span>
                <span style={{ color: '#58D6E8' }}>↗</span>
              </div>
              <div className="card-tag">DIAGNOSE FIRST</div>
              <h3>Find Where Time Leaks</h3>
              <p>
                We map your current steps, manual entries, delays, and tool gaps
                before suggesting any AI or software build.
              </p>
            </div>
            <div className="card-foot">Clarity before spending</div>
          </article>

          <article className="card">
            <div>
              <div className="card-top">
                <span>02</span>
                <span style={{ color: '#58D6E8' }}>↗</span>
              </div>
              <div className="card-tag">BUILD TO FIT</div>
              <h3>Automation or Custom Build</h3>
              <p>
                Depending on what actually solves the problem, we build targeted
                automations, integrations, or custom software with human guardrails.
              </p>
            </div>
            <div className="card-foot">Human approval on key actions</div>
          </article>

          <article className="card">
            <div>
              <div className="card-top">
                <span>03</span>
                <span style={{ color: '#58D6E8' }}>↗</span>
              </div>
              <div className="card-tag">INDEPENDENT PARTNER · TYNCO</div>
              <h3>Install, Update &amp; Maintain</h3>
              <p>
                Tattva Sync designs and builds; Tynco operates as an independent
                partner for installation, updates, support, and ongoing maintenance.
              </p>
            </div>
            <div className="card-foot">Separate brands · Clear handover</div>
          </article>
        </div>
      </section>
    </>
  )
}