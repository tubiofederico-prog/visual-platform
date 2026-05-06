import { familyData, dailyRoutine, alerts } from '../data/mockData'
import { MessageCircle, Clock, AlertCircle, Check } from 'lucide-react'
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
    <div className="md:ml-64 mb-20 md:mb-0">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 p-6 sticky top-0 z-40">
        <h1 className="text-3xl font-bold text-gray-800">Hola, Familia García</h1>
        <p className="text-gray-600 mt-1">Casa principal • Jueves, 5 de mayo</p>
      </header>

      <main className="p-6 max-w-6xl">
        {/* Quick Access */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Accesos rápidos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button onClick={() => setCurrentPage('chat')} className="bg-white border-2 border-blue-200 hover:border-blue-400 p-4 rounded-lg transition text-center">
              <MessageCircle className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <p className="text-sm font-semibold text-gray-700">Preguntar IA</p>
            </button>
            <button onClick={() => setCurrentPage('rules')} className="bg-white border-2 border-purple-200 hover:border-purple-400 p-4 rounded-lg transition text-center">
              <p className="text-2xl mb-2">📋</p>
              <p className="text-sm font-semibold text-gray-700">Reglas</p>
            </button>
            <button onClick={() => setCurrentPage('routines')} className="bg-white border-2 border-green-200 hover:border-green-400 p-4 rounded-lg transition text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <p className="text-sm font-semibold text-gray-700">Rutinas</p>
            </button>
            <button onClick={() => setCurrentPage('alerts')} className="bg-white border-2 border-red-200 hover:border-red-400 p-4 rounded-lg transition text-center relative">
              <AlertCircle className="w-6 h-6 mx-auto mb-2 text-red-500" />
              <p className="text-sm font-semibold text-gray-700">Alertas</p>
              {pendingAlerts > 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {pendingAlerts}
                </span>
              )}
            </button>
          </div>
        </section>

        {/* Children Cards */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Nuestros hijos</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {familyData.children.map(child => (
              <div key={child.id} className="bg-white rounded-lg p-6 border-2 border-gray-100 hover:border-blue-200 transition">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{child.name}</h3>
                    <p className="text-sm text-gray-600">{child.age} años • {child.grade}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-700">{child.school}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Routine Today */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Rutina de hoy</h2>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="space-y-2">
              {dailyRoutine.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleTask(idx)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                        completedTasks.includes(idx)
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 hover:border-green-500'
                      }`}
                    >
                      {completedTasks.includes(idx) && <Check className="w-4 h-4 text-white" />}
                    </button>
                    <div>
                      <p className="font-medium text-gray-800">{item.activity}</p>
                      <p className="text-sm text-gray-600">{item.time}</p>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    {completedTasks.includes(idx) ? '✓' : '-'}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Progreso: {completedTasks.length} de {dailyRoutine.length} completadas
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all"
                  style={{ width: `${(completedTasks.length / dailyRoutine.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Message */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-700 font-medium">🔒 Tus datos no se venden • Cada familia tiene su base privada • Podés borrar tu información cuando quieras</p>
        </div>
      </main>
    </div>
  )
}
