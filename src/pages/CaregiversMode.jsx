import { familyData } from '../data/mockData'
import { ArrowLeft, Send } from 'lucide-react'
import { useState } from 'react'

export default function CaregiversMode({ setCurrentPage, addToast }) {
  const [selectedChild, setSelectedChild] = useState(familyData.children[0])
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState(null)

  const categories = [
    { icon: '🍽️', label: 'Comida', color: 'from-orange-400 to-red-400' },
    { icon: '📱', label: 'Pantallas', color: 'from-blue-400 to-cyan-400' },
    { icon: '😴', label: 'Sueño', color: 'from-purple-400 to-indigo-400' },
    { icon: '🔒', label: 'Seguridad', color: 'from-red-400 to-pink-400' },
    { icon: '🎓', label: 'Colegio', color: 'from-green-400 to-emerald-400' },
    { icon: '❤️', label: 'Emociones', color: 'from-pink-400 to-rose-400' }
  ]

  const handleQuickQuestion = (category) => {
    const responses = {
      'Comida': '✓ Puede comer fruta, yogur o galletitas. Chocolate solo después de comer.',
      'Pantallas': '✓ 30 minutos después de terminar la tarea. No antes de las 3pm.',
      'Sueño': `✓ ${selectedChild.name} debe dormir a las 20:30. Baño antes.`,
      'Seguridad': '✓ Avisar dónde va. Teléfono siempre cargado.',
      'Colegio': '✓ Tarea antes de jugar. Revisar la agenda cada día.',
      'Emociones': '✓ Hablar sobre los sentimientos. Respetar los tiempos.'
    }
    setResponse(responses[category])
    addToast(`Pregunta sobre ${category}`, 'success')
  }

  return (
    <div className="md:ml-64 mb-20 md:mb-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <header className="backdrop-blur-xl bg-white/70 border-b border-white/50 p-6 sticky top-0 z-40">
        <button
          onClick={() => setCurrentPage('dashboard')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>
        <h1 className="text-3xl font-bold text-gradient">Modo Cuidador</h1>
        <p className="text-gray-600 mt-1">Respuestas rápidas y claras</p>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        {/* Child Selector */}
        <section className="mb-8">
          <p className="text-sm font-semibold text-gray-600 uppercase mb-3">Selecciona un niño</p>
          <div className="grid grid-cols-2 gap-4">
            {familyData.children.map(child => (
              <button
                key={child.id}
                onClick={() => setSelectedChild(child)}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  selectedChild.id === child.id
                    ? 'border-blue-500 bg-blue-50 scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className="text-4xl mb-2">
                  {child.name === 'Sofía García' ? '👧' : '👦'}
                </div>
                <p className="font-bold text-gray-800">{child.name}</p>
                <p className="text-sm text-gray-600">{child.age} años</p>
              </button>
            ))}
          </div>
        </section>

        {/* Quick Categories */}
        <section className="mb-8">
          <p className="text-sm font-semibold text-gray-600 uppercase mb-4">Preguntas rápidas</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickQuestion(cat.label)}
                className={`p-6 rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all text-center`}
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <p className="font-bold">{cat.label}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Response */}
        {response && (
          <div className="mb-8 animate-slideUp">
            <p className="text-sm font-semibold text-gray-600 uppercase mb-3">Respuesta</p>
            <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-emerald-200">
              <p className="text-2xl font-bold text-gray-800">{response}</p>
              <p className="text-xs text-gray-600 mt-4">Según las reglas de {selectedChild.name}</p>
            </div>
          </div>
        )}

        {/* Custom Question */}
        <section className="card">
          <p className="text-sm font-semibold text-gray-600 uppercase mb-4">Hacer una pregunta personalizada</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ejemplo: ¿Puede salir al patio?"
              className="flex-1 border-2 border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-3"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && question) {
                  setResponse(`✓ Sí, ${question.toLowerCase().replace('¿', '').replace('?', '')} está permitido según las reglas.`)
                  setQuestion('')
                  addToast('Pregunta enviada', 'success')
                }
              }}
            />
            <button
              onClick={() => {
                setResponse(`✓ Sí, ${question.toLowerCase().replace('¿', '').replace('?', '')} está permitido según las reglas.`)
                setQuestion('')
                addToast('Pregunta enviada', 'success')
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-6 py-3 font-bold transition-all hover:scale-105"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Important Info */}
        <div className="mt-8 glass rounded-2xl p-6">
          <p className="font-bold text-gray-800 mb-2">📱 Importante</p>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✓ Las respuestas están basadas en las reglas de la familia</li>
            <li>✓ Si hay dudas, contacta a los padres</li>
            <li>✓ Cada niño tiene reglas diferentes</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
