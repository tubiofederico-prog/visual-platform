import { useState } from 'react'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'
import Rules from './pages/Rules'
import Children from './pages/Children'
import Routines from './pages/Routines'
import Alerts from './pages/Alerts'
import Settings from './pages/Settings'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />
      case 'chat':
        return <Chat />
      case 'rules':
        return <Rules />
      case 'children':
        return <Children />
      case 'routines':
        return <Routines />
      case 'alerts':
        return <Alerts />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

export default App
