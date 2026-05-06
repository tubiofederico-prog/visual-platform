import { useState } from 'react'
import Navigation from './components/Navigation'
import ToastContainer from './components/ToastContainer'
import SearchModal from './components/SearchModal'
import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'
import Rules from './pages/Rules'
import Children from './pages/Children'
import Routines from './pages/Routines'
import Alerts from './pages/Alerts'
import Settings from './pages/Settings'
import CaregiversMode from './pages/CaregiversMode'
import DailySummary from './pages/DailySummary'
import Achievements from './pages/Achievements'
import { useToast } from './hooks/useToast'
import { useSearch } from './hooks/useSearch'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const { toasts, addToast } = useToast()
  const { isOpen: isSearchOpen, setIsOpen: setSearchOpen } = useSearch()

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} addToast={addToast} />
      case 'chat':
        return <Chat addToast={addToast} />
      case 'rules':
        return <Rules addToast={addToast} />
      case 'children':
        return <Children />
      case 'routines':
        return <Routines addToast={addToast} />
      case 'alerts':
        return <Alerts addToast={addToast} />
      case 'settings':
        return <Settings />
      case 'caregivers':
        return <CaregiversMode setCurrentPage={setCurrentPage} addToast={addToast} />
      case 'summary':
        return <DailySummary />
      case 'achievements':
        return <Achievements />
      default:
        return <Dashboard setCurrentPage={setCurrentPage} addToast={addToast} />
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} onSearchClick={() => setSearchOpen(true)} />
      <ToastContainer toasts={toasts} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App
