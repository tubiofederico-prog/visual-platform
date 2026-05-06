import { dailyRoutine as initialRoutine } from '../data/mockData'
import { Clock, Check } from 'lucide-react'
import { useState } from 'react'

export default function Routines({ addToast }) {
  const [routine, setRoutine] = useState(initialRoutine)

  const toggleComplete = (index) => {
    const newRoutine = [...routine]
    newRoutine[index].completed = !newRoutine[index].completed
    setRoutine(newRoutine)

    const message = newRoutine[index].completed
      ? `✓ ${routine[index].activity} completada`
      : `↶ ${routine[index].activity} desmarcada`
    addToast(message, 'success')
  }

  const completed = routine.filter(r => r.completed).length
  const total = routine.length
  const progress = (completed / total) * 100

  return (
    <div className="md:ml-64 mb-20 md:mb-0">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 p-6 sticky top-0 z-40">
        <h1 className="text-3xl font-bold text-gray-800">Rutina de hoy</h1>
        <p className="text-gray-600 mt-1">Jueves, 5 de mayo de 2024</p>
      </header>

      <main className="p-6 max-w-4xl">
        {/* Progress Card */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Progreso del día</h2>
              <p className="text-gray-600 mt-1">{completed} de {total} tareas completadas</p>
            </div>
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white border-4 border-blue-500">
              <span className="text-2xl font-bold text-blue-600">{Math.round(progress)}%</span>
            </div>
          </div>
          <div className="w-full bg-white rounded-full h-3 overflow-hidden border-2 border-blue-200">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Routine Timeline */}
        <div className="space-y-2">
          {routine.map((item, idx) => (
            <div
              key={idx}
              className={`border-2 rounded-lg p-4 transition cursor-pointer ${
                item.completed
                  ? 'border-green-300 bg-green-50'
                  : 'border-gray-300 bg-white hover:border-blue-400'
              }`}
              onClick={() => toggleComplete(idx)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                    item.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-400 hover:border-green-500'
                  }`}
                >
                  {item.completed && <Check className="w-4 h-4 text-white" />}
                </div>

                <div className="flex-1">
                  <p className={`text-lg font-semibold ${item.completed ? 'text-green-700 line-through' : 'text-gray-800'}`}>
                    {item.activity}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </p>
                </div>

                <div className="text-right">
                  {item.completed && (
                    <span className="inline-block bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      ✓ Hecho
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-gray-800 mb-3">💡 Consejos para el día</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Mantener la rutina ayuda a los niños a sentirse seguros</li>
            <li>• Usa el chat de IA si tienes dudas sobre qué hacer</li>
            <li>• Marca las tareas completadas para ver el progreso</li>
            <li>• Si hay cambios, revisa las reglas antes de hacer excepciones</li>
          </ul>
        </div>

        {/* Completion Message */}
        {completed === total && (
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mt-8 text-center">
            <p className="text-2xl mb-2">🎉</p>
            <p className="text-lg font-bold text-green-700">¡Excelente día!</p>
            <p className="text-green-600 mt-1">Se completaron todas las rutinas</p>
          </div>
        )}
      </main>
    </div>
  )
}
