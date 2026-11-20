export type PageKey =
  | 'home'
  | 'solutions'
  | 'how-we-work'
  | 'demo-labs'
  | 'about'
  | 'tynco-partner'
  | 'consultation'
  | 'terms'
  | 'privacy'

export interface SolutionItem {
  number: string
  tag: string
  title: string
  whenToUse: string
  description: string
  deliverables: string[]
}

export interface ProcessStep {
  step: string
  owner: 'Tattva Sync' | 'Tattva Sync × Tynco' | 'Tynco'
  title: string
  detail: string
}

export const solutionsData: SolutionItem[] = [
  {
    number: '01',
    tag: 'AI & WORKFLOW AUTOMATION',
    title: 'AI Automation & Controlled Workflows',
    whenToUse: 'Best when repetitive triage, summaries, or routing slow your team down.',
    description:
      'Automate repetitive operational steps using controlled AI workflows with clear human approval gates on critical actions.',
    deliverables: [
      'Inquiry & workflow triage logic',
      'Structured brief & report drafting',
      'Human-in-the-loop approval checkpoints',
    ],
  },
  {
    number: '02',
    tag: 'CUSTOM SOFTWARE',
    title: 'Custom Software & Internal Portals',
    whenToUse: 'Best when spreadsheets and generic apps no longer match how your team works.',
    description:
      'Purpose-built web apps, order/inventory trackers, and operational dashboards designed around your actual workflow.',
    deliverables: [
      'Tailored UI & role-based access',
      'Clean backend APIs & data structure',
      'Walkthrough, training & documentation',
    ],
  },
  {
    number: '03',
    tag: 'SYSTEM INTEGRATION',
    title: 'Workflow & API Integration',
    whenToUse: 'Best when your tools, forms, and sheets do not stay in sync automatically.',
    description:
      'Connect web forms, webhooks, spreadsheets, CRM, and operational tools so data moves cleanly without manual re-entry.',
    deliverables: [
      'Automated data sync & webhook pipelines',
      'Deduplication & retry error handling',
      'Status alerts on failed runs',
    ],
  },
]

export const processStepsData: ProcessStep[] = [
  {
    step: '01',
    owner: 'Tattva Sync',
    title: 'Understand the Bottleneck',
    detail: 'Map how work runs today, where time is lost, and what tools are currently in place.',
  },
  {
    step: '02',
    owner: 'Tattva Sync',
    title: 'Design the Right Fit',
    detail: 'Decide whether automation, custom software, integration, or a mix solves the problem best.',
  },
  {
    step: '03',
    owner: 'Tattva Sync',
    title: 'Build & Validate',
    detail: 'Engineer the workflow or application, test edge cases, and review with you before launch.',
  },
  {
    step: '04',
    owner: 'Tattva Sync × Tynco',
    title: 'Install & Deliver',
    detail: 'Tattva Sync delivers the solution and docs; Tynco handles installation, setup, and live handover.',
  },
  {
    step: '05',
    owner: 'Tynco',
    title: 'Maintain & Update',
    detail: 'Tynco operates as an independent partner for updates, monitoring, and ongoing technical support.',
  },
]