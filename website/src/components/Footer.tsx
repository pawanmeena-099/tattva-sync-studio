import type { TyncoPageKey } from '../data/tyncoData'
interface FooterProps { onNavigate: (page: TyncoPageKey) => void }
export function Footer({ onNavigate }: FooterProps) {
  return <footer className="tynco-footer">
    <div className="footer-brand"><span className="tynco-mark">T.</span><div><strong>TYNCO</strong><small>Deploy · Operate · Maintain</small></div></div>
    <p>Independent technology operations partner.</p>
    <div className="footer-links">
      <button onClick={() => onNavigate('services')}>Services</button>
      <button onClick={() => onNavigate('handover')}>Partnership</button>
      <button onClick={() => onNavigate('sla-plans')}>Care plans</button>
      <button onClick={() => onNavigate('request-care')}>Contact</button>
    </div>
    <small>© {new Date().getFullYear()} Tynco. Technology installed. Systems maintained.</small>
  </footer>
}
