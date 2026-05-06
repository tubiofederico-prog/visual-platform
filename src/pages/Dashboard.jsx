import { familyData, dailyRoutine, alerts } from '../data/mockData'
import { MessageCircle, Clock, AlertCircle, Check, Heart, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Dashboard({ setCurrentPage }) {
  const [completedTasks, setCompletedTasks] = useState([0, 1, 2, 3])

  const toggleTask = (index) => {
    setCompletedTasks(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  const pendingAlerts = alerts.filter(a => !a.read).length

  return (
    <div className="md:ml-64 mb-20 md:mb-0 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Header */}
      <header className="backdrop-blur-xl bg-white/70 border-b border-white/50 p-8 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-blue-500" />
            <h1 className="text-4xl font-bold text-gradient">Hola, Familia García</h1>
          </div>
          <p className="text-gray-600 mt-2">Casa principal • Jueves, 5 de mayo</p>
        </div>
      </header>

      <main className="p-8 max-w-6xl mx-auto">
        {/* Quick Access */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Accesos rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button onClick={() => setCurrentPage('chat')} className="group relative card overflow-hidden hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-800">Preguntar IA</p>
                <p className="text-xs text-gray-500 mt-1">Consulta al asistente</p>
              </div>
            </button>

            <button onClick={() => setCurrentPage('rules')} className="group relative card overflow-hidden hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <p className="text-xl">📋</p>
                </div>
                <p className="font-semibold text-gray-800">Reglas</p>
                <p className="text-xs text-gray-500 mt-1">De la familia</p>
              </div>
            </button>

            <button onClick={() => setCurrentPage('routines')} className="group relative card overflow-hidden hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-800">Rutinas</p>
                <p className="text-xs text-gray-500 mt-1">Del día</p>
              </div>
            </button>

            <button onClick={() => setCurrentPage('alerts')} className="group relative card overflow-hidden hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform relative">
                  <AlertCircle className="w-6 h-6 text-white" />
                  {pendingAlerts > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                      {pendingAlerts}
                    </span>
                  )}
                </div>
                <p className="font-semibold text-gray-800">Alertas</p>
                <p className="text-xs text-gray-500 mt-1">Novedades</p>
              </div>
            </button>
          </div>
        </section>

        {/* Children Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Nuestros hijos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {familyData.children.map((child, idx) => (
              <div key={child.id} className="group relative card overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${idx === 0 ? 'from-blue-500/5 to-cyan-500/5' : 'from-purple-500/5 to-pink-500/5'} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{child.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{child.age} años • {child.grade}</p>
                    </div>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform ${idx === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`}>
                      {child.name.charAt(0)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{child.school}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex gap-3">
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{child.interests[0]}</span>
                    <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">{child.interests[1]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Routine Today */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Rutina de hoy</h2>
          <div className="card space-y-3">
            {dailyRoutine.slice(0, 6).map((item, idx) => (
              <div key={idx} className="group flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 rounded-xl transition cursor-pointer">
                <button
                  onClick={() => toggleTask(idx)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition flex-shrink-0 ${
                    completedTasks.includes(idx)
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500 border-transparent shadow-lg'
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  {completedTasks.includes(idx) && <Check className="w-4 h-4 text-white" />}
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold transition ${completedTasks.includes(idx) ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                    {item.activity}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </p>
                </div>
                {completedTasks.includes(idx) && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full flex-shrink-0">Hecho</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 card">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-gray-800">Progreso del día</p>
              <span className="text-lg font-bold text-gradient">{Math.round((completedTasks.length / dailyRoutine.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200/50 rounded-full h-3 overflow-hidden">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-500"
                style={{ width: `${(completedTasks.length / dailyRoutine.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">{completedTasks.length} de {dailyRoutine.length} completadas</p>
          </div>
        </section>

        {/* Privacy Message */}
        <div className="glass rounded-2xl p-6 text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-red-500" />
            <p className="font-semibold text-gray-800">Tu privacidad es prioritaria</p>
          </div>
          <p className="text-sm text-gray-600">🔒 Datos no vendidos • Base privada por familia • Borrable cuando quieras</p>
        </div>
      </main>
    </div>
  )
}
