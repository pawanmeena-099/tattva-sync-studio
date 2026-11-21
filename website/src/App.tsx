import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { HandoverModelPage } from './pages/HandoverModelPage'
import { SlaPlansPage } from './pages/SlaPlansPage'
import { RequestCarePage } from './pages/RequestCarePage'
import type { TyncoPageKey } from './data/tyncoData'


function App() {
  const [page, setPage] = useState<TyncoPageKey>('home')
  const navigate = (next: TyncoPageKey) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return <div className="tynco-shell">
    <Navbar currentPage={page} onNavigate={navigate} />
    <main>
      {page === 'home' && <HomePage onNavigate={navigate} />}
      {page === 'services' && <ServicesPage onNavigate={navigate} />}
      {page === 'handover' && <HandoverModelPage onNavigate={navigate} />}
      {page === 'sla-plans' && <SlaPlansPage onNavigate={navigate} />}
      {page === 'request-care' && <RequestCarePage />}
    </main>
    <Footer onNavigate={navigate} />
  </div>
}
export default App
