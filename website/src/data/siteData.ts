export type PageKey =
  | 'home'
  | 'solutions'
  | 'how-we-work'
  | 'demo-labs'
  | 'about'
  | 'tynco-partner'
  | 'consultation'
  | 'terms'

export interface SolutionItem {
  number: string
  tag: string
  title: string
  description: string
  deliverables: string
}

export interface DemoLabItem {
  id: string
  title: string
  flow: string
  previewNote: string
}

export interface ProcessStep {
  step: string
  title: string
  detail: string
}

export const solutionsData: SolutionItem[] = [
  {
    number: '01',
    tag: 'AI AUTOMATION',
    title: 'AI Automation & Controlled Agents',
    description:
      'Automate repetitive workflows, lead qualification, and operational summaries with clear human-in-the-loop approval guardrails.',
    deliverables: 'Workflow logic · Prompt/agent rules · Approval gates',
  },
  {
    number: '02',
    tag: 'CUSTOM SOFTWARE',
    title: 'Custom Software & Dashboards',
    description:
      'Build tailored web applications, operational trackers, and internal portals shaped around how your team actually works.',
    deliverables: 'Frontend & backend · Role access · Clean handover',
  },
  {
    number: '03',
    tag: 'SYSTEM INTEGRATION',
    title: 'Workflow & API Integration',
    description:
      'Connect forms, spreadsheets, webhooks, CRM, and existing tools so data stays synchronized without manual copy-paste.',
    deliverables: 'API/webhook sync · Error logs · Deduplication',
  },
]

export const processStepsData: ProcessStep[] = [
  {
    step: 'STEP 01',
    title: 'Understand',
    detail: 'Study current workflows, bottlenecks, manual tasks, and existing tools.',
  },
  {
    step: 'STEP 02',
    title: 'Design',
    detail: 'Decide whether automation, custom software, AI, or a mix fits best.',
  },
  {
    step: 'STEP 03',
    title: 'Build',
    detail: 'Develop and integrate reliable systems with logging and safeguards.',
  },
  {
    step: 'STEP 04',
    title: 'Test & Deliver',
    detail: 'Verify edge cases, run client walkthrough, and hand over documentation.',
  },
  {
    step: 'STEP 05',
    title: 'Ongoing Support',
    detail: 'Optional installation, monitoring, and maintenance via Tynco.',
  },
]

export const demoLabsData: DemoLabItem[] = [
  {
    id: 'DEMO 01',
    title: 'Workflow Automation Lab',
    flow: 'Order / Enquiry Trigger → Validation → Structured Record → Daily Summary',
    previewNote: 'Sandbox preview: Demonstrates structured routing without manual data re-entry.',
  },
  {
    id: 'DEMO 02',
    title: 'AI Agent Lab',
    flow: 'Raw Input → Context & Bottleneck Summary → Founder Review Queue',
    previewNote: 'Sandbox preview: AI drafts structured notes; human approval stays mandatory for commitments.',
  },
  {
    id: 'DEMO 03',
    title: 'Integration Lab',
    flow: 'Web Form Payload ↔ Webhook ↔ Tracker / CRM ↔ Instant Alert',
    previewNote: 'Sandbox preview: Shows schema consistency, retry handling, and status logging.',
  },
  {
    id: 'DEMO 04',
    title: 'Business Intelligence Lab',
    flow: 'Activity Logs → Turnaround & Bottleneck View → Weekly Snapshot',
    previewNote: 'Sandbox preview: Highlights delays and open items from baseline operational records.',
  },
]