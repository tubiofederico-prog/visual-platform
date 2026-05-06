import { alerts as initialAlerts } from '../data/mockData'
import { AlertCircle, CheckCircle, Shield, Brain, Clock, Apple } from 'lucide-react'
import { useState } from 'react'

export default function Alerts() {
  const [alerts, setAlerts] = useState(initialAlerts)

  const markAsRead = (id) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, read: true } : a))
  }

  const typeIcons = {
    'Seguridad': Shield,
    'Emocional': Brain,
    'Rutina': Clock,
    'Alimentación': Apple,
    'Colegio': AlertCircle
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Alta':
        return 'border-red-300 bg-red-50'
      case 'Media':
        return 'border-yellow-300 bg-yellow-50'
      default:
        return 'border-green-300 bg-green-50'
    }
  }

  const getPriorityBadgeColor = (priority) => {
    switch (priority) {
      case 'Alta':
        return 'bg-red-100 text-red-700'
      case 'Media':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-green-100 text-green-700'
    }
  }

  const unreadAlerts = alerts.filter(a => !a.read)
  const readAlerts = alerts.filter(a => a.read)

  return (
    <div className="md:ml-64 mb-20 md:mb-0">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 p-6 sticky top-0 z-40">
        <h1 className="text-3xl font-bold text-gray-800">Alertas</h1>
        <p className="text-gray-600 mt-1">Mantente informado sobre lo importante</p>
      </header>

      <main className="p-6 max-w-4xl">
        {/* Unread Alerts */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Por revisar ({unreadAlerts.length})
          </h2>

          {unreadAlerts.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-green-300 rounded-lg p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">¡Todo bajo control!</p>
              <p className="text-gray-500 text-sm mt-1">No hay nuevas alertas</p>
            </div>
          ) : (
            <div className="space-y-3">
              {unreadAlerts.map(alert => {
                const Icon = typeIcons[alert.type]
                return (
                  <div
                    key={alert.id}
                    className={`border-2 rounded-lg p-4 transition ${getPriorityColor(alert.priority)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <Icon className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-gray-800">{alert.type}</p>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityBadgeColor(alert.priority)}`}>
                              {alert.priority}
                            </span>
                          </div>
                          <p className="text-gray-700">{alert.message}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => markAsRead(alert.id)}
                        className="ml-4 text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap"
                      >
                        Revisar
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* Read Alerts */}
        {readAlerts.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Ya revisadas ({readAlerts.length})
            </h2>

            <div className="space-y-3">
              {readAlerts.map(alert => {
                const Icon = typeIcons[alert.type]
                return (
                  <div
                    key={alert.id}
                    className="border-2 border-gray-200 bg-gray-50 rounded-lg p-4 opacity-60"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-gray-700">{alert.type}</p>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                            Revisada
                          </span>
                        </div>
                        <p className="text-gray-600">{alert.message}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mt-8 text-center">
          <p className="text-sm text-blue-700 font-medium">
            🔔 Las alertas se generan automáticamente basadas en la actividad de tu familia
          </p>
        </div>
      </main>
    </div>
  )
}
