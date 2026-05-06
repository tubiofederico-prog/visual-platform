import { Home, MessageCircle, Users, BookOpen, AlertCircle, Settings, Heart } from 'lucide-react'
import { useState } from 'react'

export default function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'dashboard', label: 'Inicio', icon: Home },
    { id: 'chat', label: 'Chat IA', icon: MessageCircle },
    { id: 'rules', label: 'Reglas', icon: BookOpen },
    { id: 'children', label: 'Hijos', icon: Users },
    { id: 'alerts', label: 'Alertas', icon: AlertCircle },
    { id: 'settings', label: 'Config', icon: Settings }
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:fixed md:left-0 md:top-0 md:w-64 md:h-screen md:bg-white md:border-r md:border-gray-200 md:p-6 md:flex md:flex-col md:z-50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">Family Guide AI</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                currentPage === id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>

        <div className="border-t pt-4 text-xs text-gray-500 text-center">
          <p>Tus datos son privados</p>
          <p className="mt-1">y seguros</p>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-3 z-50">
        <div className="flex justify-around items-center">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-xs transition-all ${
                currentPage === id
                  ? 'text-blue-600'
                  : 'text-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
