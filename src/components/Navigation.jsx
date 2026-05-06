import { Home, MessageCircle, Users, BookOpen, AlertCircle, Settings, Heart, Sparkles } from 'lucide-react'
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
      <aside className="hidden md:fixed md:left-0 md:top-0 md:w-64 md:h-screen md:bg-gradient-to-b md:from-white md:via-blue-50/20 md:to-purple-50/20 md:backdrop-blur-xl md:border-r md:border-white/50 md:p-6 md:flex md:flex-col md:z-50">
        <div className="flex items-center gap-3 mb-8 group">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gradient">Family Guide</h1>
            <p className="text-xs text-gray-600">Privado & Seguro</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative group ${
                currentPage === id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-white/50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{label}</span>
              {currentPage === id && <Sparkles className="w-4 h-4 ml-auto animate-pulse" />}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/50">
          <div className="glass rounded-xl p-4 text-center">
            <p className="text-xs font-semibold text-gradient mb-1">🔒 Privado</p>
            <p className="text-xs text-gray-600">Tus datos están seguros</p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-white/50 px-2 py-3 z-50">
        <div className="flex justify-around items-center">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-xs transition-all relative group ${
                currentPage === id
                  ? 'text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text'
                  : 'text-gray-600 group-hover:text-blue-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className={currentPage === id ? 'text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text' : ''}>{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
