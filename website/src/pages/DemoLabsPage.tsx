import { useState } from 'react'
import type { PageKey } from '../data/siteData'


interface DemoLabsPageProps { onNavigate: (page: PageKey) => void }
type LabTab = 'discovery' | 'automation' | 'intelligence' | 'prototype'
const samplePrompts = [
  'We get orders from chats and manually enter them into sheets, causing delays and stock checks.',
  'Inbound enquiries come in but follow-ups and qualification take too long manually.',
  'Data sits across multiple sheets and tools, making weekly status reporting slow.',
]
const automationStages = [
  { name: 'Capture', detail: 'Incoming order is captured and normalized.', output: 'Order record created' },
  { name: 'Validate', detail: 'Required fields and stock references are checked.', output: 'Validation passed · 1 exception flagged' },
  { name: 'Route', detail: 'The order is sent to the correct workflow queue.', output: 'Operations queue updated' },
  { name: 'Review', detail: 'A human checks the exception before execution.', output: 'Approval remains required' },
]
const demoRows = [
  { name: 'North region', orders: 184, revenue: 24600, conversion: 8.4 },
  { name: 'Central region', orders: 132, revenue: 18200, conversion: 6.9 },
  { name: 'South region', orders: 211, revenue: 31800, conversion: 10.2 },
]
const prototypeRows = [
  { id: 'TS-104', task: 'Review new inquiry', owner: 'Founder', state: 'Needs review' },
  { id: 'TS-105', task: 'Prepare discovery brief', owner: 'Analyst agent', state: 'Draft ready' },
  { id: 'TS-106', task: 'Check integration health', owner: 'Ops', state: 'Scheduled' },
]

export function DemoLabsPage({ onNavigate }: DemoLabsPageProps) {
  const [tab, setTab] = useState<LabTab>('discovery')
  const [inputText, setInputText] = useState(samplePrompts[0])
  const [showPlan, setShowPlan] = useState(true)
  const [stage, setStage] = useState(0)
  const [prototypeFilter, setPrototypeFilter] = useState('All')

  const buildPreview = (text: string) => {
    const q = text.toLowerCase()
    if (q.includes('order') || q.includes('stock') || q.includes('sheet')) return {
      direction: 'Custom Tracker + Workflow Automation', bottleneck: 'Manual order capture, duplicate updates and delayed stock visibility.',
      tattvaScope: 'Structured intake, a live status tracker and automated summary.', tyncoScope: 'Installation, environment setup, updates and ongoing technical support.' }
    if (q.includes('enquir') || q.includes('follow') || q.includes('lead')) return {
      direction: 'AI Workflow + Lead Triage Brief', bottleneck: 'Unstructured inbound requests and slow manual prioritization.',
      tattvaScope: 'Intake capture, structured brief and approval-gated routing.', tyncoScope: 'Webhook deployment, health monitoring and ongoing upkeep.' }
    return { direction: 'System Integration + Reporting View', bottleneck: 'Disconnected tools and manual weekly status compilation.',
      tattvaScope: 'Automated sync pipeline and unified summary view.', tyncoScope: 'Deployment, maintenance and scheduled operational checks.' }
  }
  const preview = buildPreview(inputText)
  const tabs: { key: LabTab; title: string; subtitle: string }[] = [
    { key: 'discovery', title: 'Discovery Lab', subtitle: 'Turn a described bottleneck into a draft solution outline.' },
    { key: 'automation', title: 'Automation Lab', subtitle: 'Step through a sample workflow and see each handoff.' },
    { key: 'intelligence', title: 'Data Lab', subtitle: 'Explore a small sample dataset and its KPIs.' },
    { key: 'prototype', title: 'Systems Lab', subtitle: 'Preview a small operations workspace with filters.' },
  ]
  return <section className="section demo-labs-page">
    <div className="section-heading"><div><div className="eyebrow">DEMO LABS · INTERACTIVE SANDBOX</div><h1>Experience how systems <br/><span>come together.</span></h1></div><p>These labs use illustrative sample data and local simulations—not live client systems or production AI.</p></div>
    <div className="lab-switcher" role="tablist" aria-label="Demo lab selector">{tabs.map(t=><button key={t.key} role="tab" aria-selected={tab===t.key} className={`lab-switch-btn ${tab===t.key?'active':''}`} onClick={()=>setTab(t.key)}>{t.title}</button>)}</div>
    <div className="lab-workspace lab-tab-workspace"><div className="lab-workspace-head"><div><span className="demo-badge">{tabs.find(t=>t.key===tab)?.title.toUpperCase()}</span><h3>{tabs.find(t=>t.key===tab)?.subtitle}</h3></div><span className="simulation-label">SIMULATION</span></div>
    {tab==='discovery' && <div className="lab-container"><div className="lab-input-box"><div className="card-top"><span>WORKFLOW INPUT</span><span className="demo-badge">SAMPLE</span></div><div className="sample-chips">{samplePrompts.map((sample,i)=><button className="chip-btn" key={sample} onClick={()=>{setInputText(sample);setShowPlan(true)}}>Sample #{i+1}</button>)}</div><textarea className="enquiry-textarea" rows={4} value={inputText} onChange={e=>{setInputText(e.target.value);setShowPlan(false)}} placeholder="Describe a workflow bottleneck..."/><button className="primary-button" style={{marginTop:14}} onClick={()=>setShowPlan(true)}>Generate draft structure ↗</button></div>{showPlan&&inputText.trim()&&<div className="lab-output-box"><div className="card-top"><span>DISCOVERY DRAFT</span><span className="simulation-label">HUMAN REVIEW</span></div><div className="lab-result-item"><small>PROPOSED DIRECTION</small><p><strong>{preview.direction}</strong></p></div><div className="lab-result-item"><small>BOTTLENECK</small><p>{preview.bottleneck}</p></div><div className="lab-result-item"><small>TATTVA SYNC · BUILD</small><p>{preview.tattvaScope}</p></div><div className="lab-result-item"><small>TYNCO · OPERATE</small><p>{preview.tyncoScope}</p></div><button className="secondary-button" onClick={()=>onNavigate('consultation')}>Start a project →</button></div>}</div>}
    {tab==='automation'&&<div className="automation-simulation"><div className="automation-stage-list">{automationStages.map((s,i)=><button key={s.name} className={`automation-stage ${stage===i?'active':''} ${i<stage?'complete':''}`} onClick={()=>setStage(i)}><span>{i<stage?'✓':String(i+1).padStart(2,'0')}</span><strong>{s.name}</strong></button>)}</div><div className="automation-stage-detail"><span className="card-tag">STEP {stage+1} / {automationStages.length}</span><h3>{automationStages[stage].name}</h3><p>{automationStages[stage].detail}</p><div className="console-output-tag">Output: {automationStages[stage].output}</div><div className="wizard-actions"><button className="secondary-button" onClick={()=>setStage(v=>Math.max(0,v-1))} disabled={stage===0}>← Previous</button><button className="primary-button" onClick={()=>setStage(v=>Math.min(automationStages.length-1,v+1))} disabled={stage===automationStages.length-1}>Next step →</button><button className="text-button link-btn" onClick={()=>setStage(0)}>Reset</button></div></div></div>}
    {tab==='intelligence'&&<div className="data-lab"><div className="data-kpis"><div className="data-kpi"><small>ORDERS · SAMPLE</small><strong>527</strong><span>Across 3 regions</span></div><div className="data-kpi"><small>REVENUE · SAMPLE</small><strong>₹74.6k</strong><span>Illustrative total</span></div><div className="data-kpi"><small>AVG CONVERSION</small><strong>8.5%</strong><span>Sample rate</span></div></div><div className="sample-data-table"><div className="sample-table-row sample-table-head"><span>Region</span><span>Orders</span><span>Revenue</span><span>Conversion</span></div>{demoRows.map(row=><div className="sample-table-row" key={row.name}><span>{row.name}</span><span>{row.orders}</span><span>₹{row.revenue.toLocaleString('en-IN')}</span><span>{row.conversion}%</span></div>)}</div><div className="data-bars">{demoRows.map(r=><div className="data-bar-item" key={r.name}><div className="data-bar-track"><div className="data-bar-fill" style={{width:`${r.orders/211*100}%`}}/></div><div><strong>{r.name}</strong><small>{r.orders} orders</small></div></div>)}</div><p className="sample-note">All values above are illustrative demo data. Do not use them as business benchmarks.</p></div>}
    {tab==='prototype'&&<div className="prototype-lab"><div className="prototype-toolbar"><strong>Operations workspace</strong><select value={prototypeFilter} onChange={e=>setPrototypeFilter(e.target.value)}><option>All</option><option>Needs review</option><option>Draft ready</option><option>Scheduled</option></select></div><div className="sample-data-table"><div className="sample-table-row prototype-table-head"><span>Task ID</span><span>Task</span><span>Owner</span><span>Status</span></div>{prototypeRows.filter(r=>prototypeFilter==='All'||r.state===prototypeFilter).map(row=><div className="sample-table-row prototype-table-row" key={row.id}><span>{row.id}</span><span>{row.task}</span><span>{row.owner}</span><span className="state-pill">{row.state}</span></div>)}</div><div className="prototype-summary"><span className="demo-badge">3 SAMPLE TASKS</span><p>Filter tasks to preview a small operations view. No tasks are sent or executed.</p></div></div>}
    </div><div className="lab-footer-cta"><h3>Have a real workflow to solve?</h3><p>Describe it and we’ll structure a discovery brief for review.</p><button className="primary-button" onClick={()=>onNavigate('consultation')}>Start a project ↗</button></div>
  </section>
}
