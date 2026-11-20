import { useState } from 'react'
import { type PageKey, demoLabsData } from '../data/siteData'

interface DemoLabsPageProps {
  onNavigate: (page: PageKey) => void
}

export function DemoLabsPage({ onNavigate }: DemoLabsPageProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">DEMO LABS · SANDBOX PREVIEWS</div>
          <h1>
            See how workflows
            <br />
            <span>operate in practice.</span>
          </h1>
        </div>
        <p>
          Clearly marked sandbox previews showing workflow structure, AI drafting, and integrations.
        </p>
      </div>

      <div className="grid-2">
        {demoLabsData.map((demo) => {
          const open = activeId === demo.id
          return (
            <article className="card" key={demo.id}>
              <div>
                <div className="card-top">
                  <span>{demo.id}</span>
                  <span className="demo-badge">DEMO ENVIRONMENT</span>
                </div>
                <h3 style={{ marginTop: '18px' }}>{demo.title}</h3>
                <p>{demo.flow}</p>
                {open && <div className="demo-preview-box">{demo.previewNote}</div>}
              </div>
              <div style={{ marginTop: '20px' }}>
                <button
                  type="button"
                  className="nav-cta"
                  style={{ background: 'transparent', color: '#F4F5EF', cursor: 'pointer' }}
                  onClick={() => setActiveId(open ? null : demo.id)}
                >
                  {open ? 'Hide preview' : 'Preview flow'} <span>↗</span>
                </button>
              </div>
            </article>
          )
        })}
      </div>

      <div style={{ marginTop: '36px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('consultation')}
        >
          Request a tailored walkthrough <span>↗</span>
        </button>
      </div>
    </section>
  )
}