export type PageKey =
  | 'home'
  | 'solutions'
  | 'projects'
  | 'how-we-work'
  | 'demo-labs'
  | 'about'
  | 'tynco-partner'
  | 'consultation'
  | 'terms'
  | 'privacy'

export type ProjectStatus = 'LIVE' | 'PROTOTYPE' | 'IN DEVELOPMENT'

export interface SolutionItem {
  number: string
  tag: string
  title: string
  whenToUse: string
  description: string
  deliverables: string[]
  exampleFlow: string
}

export interface ProjectItem {
  id: string
  status: ProjectStatus
  category: string
  title: string
  summary: string
  architecture: string
  focusNote: string
}

export interface ProcessStep {
  step: string
  owner: 'Tattva Sync' | 'Tattva Sync × Tynco' | 'Tynco'
  title: string
  detail: string
  deliverable: string
}

export const solutionsData: SolutionItem[] = [
  {
    number: '01',
    tag: 'AI & AUTOMATION',
    title: 'AI Workflows & Intelligent Agents',
    whenToUse: 'Best when repetitive triage, summaries, or routing slow your team down.',
    description:
      'Automate repetitive operational steps using controlled AI workflows and task agents with explicit human approval checkpoints.',
    deliverables: [
      'Inbound inquiry & document classification',
      'Automated discovery brief & summary drafting',
      'Human-in-the-loop approval & audit logs',
    ],
    exampleFlow: 'Inbound Request → AI Classification → Structured Brief → Founder Approval',
  },
  {
    number: '02',
    tag: 'CUSTOM SOFTWARE',
    title: 'Business Apps, Portals & Dashboards',
    whenToUse: 'Best when spreadsheets and generic apps no longer match how your team works.',
    description:
      'Purpose-built web applications, order/inventory trackers, and operational portals engineered around your exact daily workflow.',
    deliverables: [
      'Tailored UI/UX & role-based permissions',
      'Clean backend APIs & structured database',
      'Team walkthrough, training & handover docs',
    ],
    exampleFlow: 'Role Login → Custom Operational Workspace → Live Status & Handover Docs',
  },
  {
    number: '03',
    tag: 'INTEGRATIONS',
    title: 'APIs, Connectors & Synchronized Systems',
    whenToUse: 'Best when your forms, sheets, and internal tools do not stay in sync.',
    description:
      'Connect web forms, webhooks, spreadsheets, CRM, and operational tools so records move reliably without manual re-entry.',
    deliverables: [
      'Webhook & API synchronization pipelines',
      'Deduplication, validation & retry handling',
      'Failure notifications & run logs',
    ],
    exampleFlow: 'Form / Webhook Trigger → Schema Validation → Synced Target Systems',
  },
  {
    number: '04',
    tag: 'DATA INTELLIGENCE',
    title: 'Analytics, Reporting & Decision Systems',
    whenToUse: 'Best when operational data is scattered and bottlenecks stay hidden.',
    description:
      'Transform raw operational logs into clear KPI snapshots, turnaround tracking, and exception reports for faster decisions.',
    deliverables: [
      'Unified operational metrics & period comparisons',
      'Delay & bottleneck detection views',
      'Scheduled daily or weekly summary digests',
    ],
    exampleFlow: 'Raw Activity Logs → Aggregated KPIs → Bottleneck & Exception Alerts',
  },
]

export const projectsData: ProjectItem[] = [
  {
    id: 'PRJ-01',
    status: 'IN DEVELOPMENT',
    category: 'OPERATIONS & DELIVERY PLATFORM',
    title: 'Tynco — Operations & Service Reliability',
    summary:
      'Independent technology partner platform focused on system installation, deployment, maintenance, updates, and operational support.',
    architecture: 'Separate brand architecture · Dedicated intake & SLA care workflows',
    focusNote: 'Built to operate alongside Tattva Sync while scaling as an independent company.',
  },
  {
    id: 'PRJ-02',
    status: 'PROTOTYPE',
    category: 'AI WORKFORCE & ORCHESTRATION',
    title: 'AI Workforce — Task & Brief Orchestration',
    summary:
      'Internal AI workforce experiments for requirement structuring, research summaries, and discovery brief drafting under human approval gates.',
    architecture: 'Controlled prompts · Human-in-the-loop sign-off · Audit logs',
    focusNote: 'Automates repetitive analysis while keeping commercial and production decisions human-controlled.',
  },
  {
    id: 'PRJ-03',
    status: 'PROTOTYPE',
    category: 'WORKFLOW AUTOMATION',
    title: 'Automated Intake & Order Routing Pipelines',
    summary:
      'End-to-end automation prototypes converting unstructured messages and form submissions into validated records, alerts, and daily summaries.',
    architecture: 'Webhook triggers · Schema validation · Exception escalation',
    focusNote: 'Demonstrated interactively inside the Tattva Sync Automation Lab.',
  },
  {
    id: 'PRJ-04',
    status: 'PROTOTYPE',
    category: 'DATA INTELLIGENCE',
    title: 'Operational Visibility & Bottleneck Dashboards',
    summary:
      'Decision dashboards designed to surface turnaround delays, pending approvals, and recurring operational bottlenecks from raw logs.',
    architecture: 'Normalized activity logs · Period comparisons · Exception highlights',
    focusNote: 'Turns scattered operational records into actionable daily snapshots.',
  },
  {
    id: 'PRJ-05',
    status: 'LIVE',
    category: 'CUSTOM SYSTEMS',
    title: 'Tattva Sync Studio Platform & Interactive Labs',
    summary:
      'Custom web application combining problem-first discovery, interactive workflow simulations, and structured project intake.',
    architecture: 'React + TypeScript · Modular pages · Webhook-ready discovery intake',
    focusNote: 'Live foundation evolving into a full AI systems studio.',
  },
]

export const processStepsData: ProcessStep[] = [
  {
    step: '01',
    owner: 'Tattva Sync',
    title: 'Understand the Bottleneck',
    detail: 'Map how work runs today, where time is lost, and what tools are currently in place.',
    deliverable: 'Workflow & bottleneck map',
  },
  {
    step: '02',
    owner: 'Tattva Sync',
    title: 'Design the Right Fit',
    detail: 'Decide whether automation, custom software, integration, or a mix solves the problem best.',
    deliverable: 'Architecture & written scope',
  },
  {
    step: '03',
    owner: 'Tattva Sync',
    title: 'Build & Validate',
    detail: 'Engineer the workflow or application, test edge cases, and review with you before launch.',
    deliverable: 'Tested prototype & build',
  },
  {
    step: '04',
    owner: 'Tattva Sync × Tynco',
    title: 'Install & Deliver',
    detail: 'Tattva Sync delivers the solution and docs; Tynco handles installation, setup, and live handover.',
    deliverable: 'Deployment & handover docs',
  },
  {
    step: '05',
    owner: 'Tynco',
    title: 'Maintain & Update',
    detail: 'Tynco operates as an independent partner for updates, monitoring, and ongoing technical support.',
    deliverable: 'Monitoring & support care',
  },
]