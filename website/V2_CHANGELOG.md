# Tattva Sync V2 change notes


### Added
- Home-page Projects preview (Tynco, AI Workforce, Operational Intelligence)
- Four interactive Demo Lab tabs:
  - Discovery Lab (sample workflow-to-plan preview)
  - Automation Lab (step-by-step capture, validate, route, review simulation)
  - Data Lab (illustrative KPI cards, regional table and chart bars)
  - Systems Lab (sample task workspace with status filter)
- Responsive styling for lab simulations and project cards
- Reduced-motion preference support and visible focus styles
- SEO metadata, social metadata, canonical URL, theme-color


### Updated
- Existing navy/cyan identity refined without replacing the brand
- Inquiry endpoint: rate-limit (5 requests per minute per forwarded client IP), name/email/workflow validation, input size checks
- Inquiry form now distinguishes successful server submission from failed connection and offers retry
- `trust proxy` configured for Railway proxy-aware IP handling


### Not completed / next engineering phases
- Proper database-backed inquiry storage and migrations
- Authenticated admin portal (inquiry/projects/tasks/AI workforce/activity/settings)
- Email notifications and webhook reliability queue
- Live AI integrations for Labs (the current lab content is simulated)
- Real analytics provider and Search Console verification
- Lighthouse/performance/security tests after dependency install and deployment
