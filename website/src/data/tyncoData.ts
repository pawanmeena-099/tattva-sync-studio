export type TyncoPageKey =
  | 'home'
  | 'services'
  | 'handover'
  | 'sla-plans'
  | 'request-care'

export interface TyncoService {
  code: string
  tag: string
  title: string
  summary: string
  includes: string[]
}

export interface SlaPlan {
  tier: string
  badge: string
  target: string
  features: string[]
}

export const tyncoServices: TyncoService[] = [
  {
    code: 'OPS-01',
    tag: 'INSTALLATION & DEPLOYMENT',
    title: 'Production Setup & Go-Live Handover',
    summary:
      'End-to-end deployment of web apps, automation pipelines, databases, and custom domains with verified environment security.',
    includes: [
      'Cloud / VPS / Railway environment configuration',
      'Custom domain, SSL & webhook endpoint verification',
      'Structured go-live checklist & access handover',
    ],
  },
  {
    code: 'OPS-02',
    tag: 'MAINTENANCE & UPDATES',
    title: 'Routine Updates, Backups & Patch Care',
    summary:
      'Keep your live systems healthy with scheduled dependency updates, automated backups, and API token renewals.',
    includes: [
      'Scheduled runtime & package updates',
      'Automated database & workflow configuration backups',
      'Third-party API & credential rotation support',
    ],
  },
  {
    code: 'OPS-03',
    tag: 'MONITORING & RELIABILITY',
    title: 'Uptime Checks & Incident Recovery',
    summary:
      'Continuous health monitoring to catch failed automation runs, server downtime, or webhook errors early.',
    includes: [
      'Automated endpoint & service health checks',
      'Immediate error triage & rollback recovery',
      'Monthly system stability & uptime summary',
    ],
  },
  {
    code: 'OPS-04',
    tag: 'TECHNICAL SUPPORT',
    title: 'Dedicated Operations & Team Support',
    summary:
      'Reliable ongoing support for existing software and workflows — whether built by Tattva Sync or your internal team.',
    includes: [
      'Structured ticket & issue resolution',
      'Minor workflow adjustments & user onboarding',
      'Clear escalation boundaries & human accountability',
    ],
  },
]

export const slaPlans: SlaPlan[] = [
  {
    tier: 'One-Time Deployment',
    badge: 'LAUNCH',
    target: 'For newly built apps or automations ready for production go-live.',
    features: [
      'Server, domain, SSL & environment setup',
      'End-to-end webhook & database smoke testing',
      '14-day post-launch stabilization support',
    ],
  },
  {
    tier: 'Core Operations Care',
    badge: 'MONTHLY',
    target: 'For active business systems needing updates, backups & monitoring.',
    features: [
      'Automated health checks & error alerting',
      'Monthly dependency patches & configuration backups',
      'Priority business-hours support & minor tweaks',
    ],
  },
  {
    tier: 'Managed Continuity',
    badge: 'CRITICAL',
    target: 'For high-frequency pipelines requiring rapid incident response.',
    features: [
      'Continuous multi-endpoint uptime monitoring',
      'Priority incident triage & rollback recovery',
      'Monthly reliability audit & capacity review',
    ],
  },
]