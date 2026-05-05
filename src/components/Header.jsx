import { Bell, Settings, User, Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 bg-slate-900/50 backdrop-blur-lg border-b border-slate-800 px-8 py-4 flex items-center justify-between z-40">
      <div className="flex items-center flex-1 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-500 w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 hover:bg-slate-800 rounded-lg transition">
          <Bell className="w-5 h-5 text-slate-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </button>

        <button className="p-2 hover:bg-slate-800 rounded-lg transition">
          <Settings className="w-5 h-5 text-slate-400" />
        </button>

        <button className="flex items-center gap-3 hover:bg-slate-800 px-4 py-2 rounded-lg transition">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">Usuario</span>
        </button>
      </div>
    </header>
  )
}
