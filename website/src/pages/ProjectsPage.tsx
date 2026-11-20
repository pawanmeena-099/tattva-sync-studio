import { useState } from 'react'
import { type PageKey, type ProjectStatus, projectsData } from '../data/siteData'

interface ProjectsPageProps {
  onNavigate: (page: PageKey) => void
}

type FilterKey = 'ALL' | ProjectStatus

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [filter, setFilter] = useState<FilterKey>('ALL')

  const visibleProjects =
    filter === 'ALL'
      ? projectsData
      : projectsData.filter((item) => item.status === filter)

  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">PROJECTS &amp; SYSTEMS</div>
          <h1>
            What we are building
            <br />
            <span>&amp; experimenting with.</span>
          </h1>
        </div>
        <p>
          Honest visibility into our live platforms, working prototypes, and
          active builds — with clear status labels and zero fabricated claims.
        </p>
      </div>

      {/* Status Filter */}
      <div className="lab-switcher" role="tablist" aria-label="Project Status Filter">
        {(['ALL', 'LIVE', 'PROTOTYPE', 'IN DEVELOPMENT'] as FilterKey[]).map((key) => (
          <button
            key={key}
            type="button"
            className={`lab-switch-btn ${filter === key ? 'active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="grid-2" style={{ marginTop: '28px' }}>
        {visibleProjects.map((project) => (
          <article className="card" key={project.id}>
            <div>
              <div className="card-top">
                <span>{project.id}</span>
                <span
                  className={`status-pill status-${project.status
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                >
                  {project.status}
                </span>
              </div>
              <div className="card-tag">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="studio-guardrail" style={{ marginTop: '14px' }}>
                <strong>Architecture:</strong> {project.architecture}
              </div>
            </div>
            <div className="card-foot">{project.focusNote}</div>
          </article>
        ))}
      </div>

      <div className="wizard-actions" style={{ marginTop: '36px' }}>
        <button
          type="button"
          className="primary-button"
          onClick={() => onNavigate('demo-labs')}
        >
          Try Interactive Demo Labs <span>↗</span>
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