import { useState } from 'react'
import { chatExamples } from '../data/mockData'
import { Send, Phone, Heart, Loader } from 'lucide-react'
import { chatWithAI } from '../services/openaiService'

export default function Chat({ addToast }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const quickQuestions = [
    "¿Puede mirar YouTube?",
    "¿Qué puede merendar?",
    "¿Tiene tarea?",
    "¿A qué hora se baña?"
  ]

  const handleSendMessage = async (question) => {
    setMessages([...messages, { type: 'user', text: question }])
    setInput('')
    setLoading(true)

    try {
      const response = await chatWithAI(question)
      setMessages(prev => [...prev, {
        type: 'ai',
        answer: response.answer,
        rule: response.rule,
        alternative: response.alternative,
        source: response.source
      }])
      addToast('Respuesta recibida ✓', 'success')
    } catch (error) {
      console.error('Error:', error)
      addToast('Error al procesar la pregunta', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="md:ml-64 mb-20 md:mb-0 h-screen md:h-auto flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 p-6 sticky top-0 z-40">
        <h1 className="text-3xl font-bold text-gray-800">Family Guide AI</h1>
        <p className="text-gray-600 mt-1">Pregunta lo que necesites sobre reglas y rutinas</p>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-6 max-w-4xl mx-auto w-full">
        {loading && messages.length > 0 && (
          <div className="text-center py-4">
            <Loader className="w-5 h-5 animate-spin mx-auto text-blue-500" />
            <p className="text-sm text-gray-600 mt-2">Procesando tu pregunta...</p>
          </div>
        )}

        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">¿En qué te puedo ayudar?</h2>
            <p className="text-gray-600 mb-8">Haz preguntas sobre las reglas y rutinas de tu familia</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="bg-white border-2 border-gray-200 hover:border-blue-400 p-4 rounded-lg text-left transition"
                >
                  <p className="font-medium text-gray-800">{q}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.type === 'user' ? (
                  <div className="bg-blue-500 text-white rounded-lg p-4 max-w-xs">
                    {msg.text}
                  </div>
                ) : (
                  <div className="max-w-2xl">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 mb-3">
                      <p className="text-lg font-bold text-gray-800 mb-3">{msg.answer}</p>

                      <div className="space-y-3 border-t pt-3">
                        <div>
                          <p className="text-xs font-semibold text-gray-600 uppercase">Regla aplicada</p>
                          <p className="text-sm text-gray-700 mt-1">📋 {msg.rule}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 uppercase">Alternativa</p>
                          <p className="text-sm text-gray-700 mt-1">💡 {msg.alternative}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={() => addToast('Notificación enviada a los padres ✓', 'success')}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium hover:bg-blue-50 px-3 py-2 rounded-lg transition"
                      >
                        <Heart className="w-4 h-4" />
                        Avisar a los padres
                      </button>
                      <span className={`text-xs px-2 py-1 rounded-full ${msg.source === 'openai' ? 'bg-purple-100 text-purple-700 font-semibold' : 'bg-gray-100 text-gray-600'}`}>
                        {msg.source === 'openai' ? '🤖 IA Real' : '💾 Sistema'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white p-6 sticky bottom-20 md:bottom-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && input.trim()) {
                  handleSendMessage(input)
                }
              }}
              placeholder="Escribe tu pregunta..."
              className="flex-1 border-2 border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:outline-none rounded-lg px-4 py-3 transition"
            />
            <button
              onClick={() => input.trim() && handleSendMessage(input)}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 font-medium transition flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Enviar
            </button>
          </div>

          {messages.length === 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full transition"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
