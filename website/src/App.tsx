import { useEffect, useState } from 'react'
import './App.css'
import type { PageKey } from './data/siteData'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { SolutionsPage } from './pages/SolutionsPage'
import { HowWeWorkPage } from './pages/HowWeWorkPage'
import { DemoLabsPage } from './pages/DemoLabsPage'
import { AboutPage } from './pages/AboutPage'
import { TyncoPartnerPage } from './pages/TyncoPartnerPage'
import { ConsultationPage } from './pages/ConsultationPage'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'

const validPages: PageKey[] = [
  'home',
  'solutions',
  'how-we-work',
  'demo-labs',
  'about',
  'tynco-partner',
  'consultation',
  'terms',
  'privacy',
]

function getPageFromHash(): PageKey {
  const hash = window.location.hash.replace('#', '') as PageKey
  return validPages.includes(hash) ? hash : 'home'
}

export function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>(getPageFromHash)

  useEffect(() => {
    const onHashChange = () => setCurrentPage(getPageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigateTo = (page: PageKey) => {
    setCurrentPage(page)
    window.location.hash = page === 'home' ? '' : page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'solutions' && <SolutionsPage onNavigate={navigateTo} />}
        {currentPage === 'how-we-work' && <HowWeWorkPage onNavigate={navigateTo} />}
        {currentPage === 'demo-labs' && <DemoLabsPage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'tynco-partner' && <TyncoPartnerPage onNavigate={navigateTo} />}
        {currentPage === 'consultation' && <ConsultationPage />}
        {currentPage === 'terms' && <TermsPage onNavigate={navigateTo} />}
        {currentPage === 'privacy' && <PrivacyPolicyPage onNavigate={navigateTo} />}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  )
}

export default App