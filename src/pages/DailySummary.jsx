import { TrendingUp, MessageCircle, AlertCircle, Lightbulb, BarChart3 } from 'lucide-react'
import { dailySummary } from '../data/mockData'

export default function DailySummary() {
  const stats = [
    { label: 'Preguntas hechas', value: dailySummary.questionsAsked, icon: MessageCircle, color: 'from-blue-400 to-cyan-400' },
    { label: 'Reglas consultadas', value: dailySummary.rulesConsulted, icon: BarChart3, color: 'from-purple-400 to-pink-400' },
    { label: 'Alertas', value: dailySummary.alerts, icon: AlertCircle, color: 'from-red-400 to-orange-400' }
  ]

  return (
    <div className="md:ml-64 mb-20 md:mb-0 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Header */}
      <header className="backdrop-blur-xl bg-white/70 border-b border-white/50 p-8 sticky top-0 z-40">
        <h1 className="text-4xl font-bold text-gradient">Resumen del día</h1>
        <p className="text-gray-600 mt-2">Análisis de actividad familiar</p>
      </header>

      <main className="p-8 max-w-6xl mx-auto">
        {/* Stats Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Estadísticas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="card group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm font-semibold mb-1">{stat.label}</p>
                  <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Activity Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Actividad por tipo</h2>
          <div className="card space-y-4">
            {[
              { label: 'Preguntas sobre pantallas', value: 40, color: 'from-blue-500 to-cyan-500' },
              { label: 'Preguntas sobre comida', value: 25, color: 'from-orange-500 to-red-500' },
              { label: 'Consultas de tareas', value: 20, color: 'from-purple-500 to-pink-500' },
              { label: 'Preguntas sobre sueño', value: 15, color: 'from-indigo-500 to-purple-500' }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-800">{item.label}</p>
                  <span className="text-lg font-bold text-gray-700">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200/50 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${item.color} transition-all`}
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Observations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Observaciones</h2>
          <div className="space-y-3">
            {dailySummary.observations.map((obs, idx) => (
              <div key={idx} className="card bg-gradient-to-br from-blue-50/50 to-purple-50/50">
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">📝</div>
                  <p className="text-gray-800 font-medium">{obs}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Suggestions */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recomendaciones</h2>
          <div className="space-y-3">
            {dailySummary.suggestions.map((sug, idx) => (
              <div key={idx} className="card bg-gradient-to-br from-amber-50/50 to-orange-50/50 border-2 border-amber-200/50">
                <div className="flex gap-4 items-start">
                  <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">💡 {sug}</p>
                    <p className="text-sm text-gray-600 mt-1">Basado en los patrones de hoy</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Export Button */}
        <div className="mt-12 text-center">
          <button className="btn-primary">
            <TrendingUp className="w-5 h-5 inline mr-2" />
            Exportar reporte en PDF
          </button>
        </div>
      </main>
    </div>
  )
}
