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

export interface BottleneckScenario {
  id: string
  label: string
  painPoint: string
  timeWasted: string
  tattvaBuild: string
  solutionType: 'AI & Workflow Automation' | 'Custom Software + Automation' | 'System & API Integration'
  tyncoRole: string
}

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

export const bottleneckScenarios: BottleneckScenario[] = [
  {
    id: 'whatsapp-orders',
    label: 'Manual Order & Excel Entry',
    painPoint: 'Orders come on WhatsApp/calls, staff re-types them into Excel, and stock mismatches happen.',
    timeWasted: '2–3 hrs daily on repetitive data entry & stock checking',
    solutionType: 'Custom Software + Automation',
    tattvaBuild: 'WhatsApp order intake workflow + live order & stock dashboard + automated daily sales summary.',
    tyncoRole: 'Production setup, hosting configuration, regular updates, backups & technical support.',
  },
  {
    id: 'slow-leads',
    label: 'Slow Lead Follow-up & Qualification',
    painPoint: 'Website, Instagram, or form enquiries sit unread; team spends hours qualifying unqualified leads.',
    timeWasted: 'Delayed responses & lost prospects every week',
    solutionType: 'AI & Workflow Automation',
    tattvaBuild: 'AI inquiry reception & brief generator + automated lead routing + founder approval queue.',
    tyncoRole: 'Webhook/server deployment, uptime monitoring & ongoing maintenance.',
  },
  {
    id: 'manual-reports',
    label: 'Scattered Data & Late Reports',
    painPoint: 'Data lives across sheets, billing tools, and emails; compiling weekly reports takes manual effort.',
    timeWasted: '4–6 hrs every week chasing numbers',
    solutionType: 'System & API Integration',
    tattvaBuild: 'Automated data sync pipelines + single operational KPI dashboard + exception alerts.',
    tyncoRole: 'Scheduled health checks, connector maintenance & incident troubleshooting.',
  },
  {
    id: 'custom-ops',
    label: 'Off-the-Shelf Tools Don’t Fit',
    painPoint: 'Generic SaaS tools force your team to change how they work and still leave gaps.',
    timeWasted: 'Workarounds, duplicate spreadsheets & team friction',
    solutionType: 'Custom Software + Automation',
    tattvaBuild: 'Purpose-built internal portal or web application tailored strictly around your workflow.',
    tyncoRole: 'Full installation, environment hardening, version updates & SLA care.',
  },
]

export const solutionsData: SolutionItem[] = [
  {
    number: '01',
    tag: 'AI & INTELLIGENT AUTOMATION',
    title: 'AI Automation & Controlled Workflows',
    whenToUse: 'Best when repetitive triage, summaries, or routing slow your team down.',
    description:
      'We automate repetitive operational steps using controlled AI workflows with clear human-in-the-loop approval gates.',
    deliverables: [
      'AI inquiry & document classification',
      'Automated brief & report drafting',
      'Human approval & audit trail controls',
    ],
  },
  {
    number: '02',
    tag: 'CUSTOM SOFTWARE ENGINEERING',
    title: 'Custom Software & Internal Dashboards',
    whenToUse: 'Best when spreadsheets and generic apps can no longer handle your operations.',
    description:
      'Purpose-built web applications, order/inventory trackers, and client portals designed around your exact workflow.',
    deliverables: [
      'Custom UI/UX & role-based access',
      'Clean backend APIs & database schema',
      'Walkthrough, training & documentation',
    ],
  },
  {
    number: '03',
    tag: 'CONNECTED OPERATIONS',
    title: 'Workflow & API Integrations',
    whenToUse: 'Best when your existing tools do not talk to each other.',
    description:
      'Connect forms, WhatsApp, spreadsheets, CRM, email, and payment or operations tools into one reliable flow.',
    deliverables: [
      'Bi-directional data sync & webhooks',
      'Duplicate prevention & retry logic',
      'Real-time alerts on failed runs',
    ],
  },
]

export const processStepsData: ProcessStep[] = [
  {
    step: '01',
    owner: 'Tattva Sync',
    title: 'Understand the Bottleneck',
    detail: 'We talk with you to map where time is wasted, where errors happen, and what tools you currently use.',
  },
  {
    step: '02',
    owner: 'Tattva Sync',
    title: 'Design the Right Fit',
    detail: 'We decide whether AI automation, custom software, integration, or a combination solves the problem cleanly.',
  },
  {
    step: '03',
    owner: 'Tattva Sync',
    title: 'Build & Validate',
    detail: 'We engineer the system, test edge cases, and review the working build with you before go-live.',
  },
  {
    step: '04',
    owner: 'Tattva Sync × Tynco',
    title: 'Install & Deliver',
    detail: 'Tattva Sync hands over clean code and docs; Tynco handles installation, environment setup, and live launch.',
  },
  {
    step: '05',
    owner: 'Tynco',
    title: 'Maintain & Update',
    detail: 'Tynco keeps the system operational with updates, monitoring, backups, and technical support as an independent partner.',
  },
]