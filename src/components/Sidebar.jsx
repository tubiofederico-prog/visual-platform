import { LayoutDashboard, BarChart3, Users, Settings, LogOut, Zap } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar() {
  const [active, setActive] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Análitica', icon: BarChart3 },
    { id: 'users', label: 'Usuarios', icon: Users },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ]

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 border-r border-slate-800 p-6 flex flex-col z-50">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <Zap className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold gradient-text">Visual</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              active === id
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>

      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Salir</span>
      </button>
    </aside>
  )
}
