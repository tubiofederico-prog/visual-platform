import { useState } from 'react'
import { Search, X, AlertCircle } from 'lucide-react'
import { houseRules } from '../data/mockData'

export default function SearchModal({ isOpen, onClose, setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState('')

  const allSearchable = [
    // Rules
    ...Object.entries(houseRules).flatMap(([category, rules]) =>
      rules.map(rule => ({
        type: 'Regla',
        title: rule.rule,
        category: category,
        icon: '📋',
        action: () => {
          setCurrentPage('rules')
          onClose()
        }
      }))
    ),
    // Quick questions
    {
      type: 'Pregunta',
      title: '¿Puede mirar YouTube?',
      category: 'Pantallas',
      icon: '❓',
      action: () => {
        setCurrentPage('chat')
        onClose()
      }
    },
    {
      type: 'Pregunta',
      title: '¿Qué puede merendar?',
      category: 'Comida',
      icon: '❓',
      action: () => {
        setCurrentPage('chat')
        onClose()
      }
    },
    {
      type: 'Pregunta',
      title: '¿Tiene tarea?',
      category: 'Colegio',
      icon: '❓',
      action: () => {
        setCurrentPage('chat')
        onClose()
      }
    },
    {
      type: 'Pregunta',
      title: '¿A qué hora se baña?',
      category: 'Rutina',
      icon: '❓',
      action: () => {
        setCurrentPage('chat')
        onClose()
      }
    }
  ]

  const filteredResults = allSearchable.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="w-full max-w-2xl mx-4">
        <div className="card bg-white">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-gray-200 pb-4 mb-4">
            <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Busca reglas, preguntas frecuentes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 text-lg focus:outline-none bg-transparent"
            />
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto space-y-2">
            {searchTerm === '' ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg font-medium">Escribe para buscar</p>
                <p className="text-sm mt-2">Reglas, preguntas frecuentes, categorías...</p>
              </div>
            ) : filteredResults.length === 0 ? (
              <div className="text-center py-12">
                <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">No se encontraron resultados</p>
                <p className="text-sm text-gray-400 mt-2">Intenta con otro término</p>
              </div>
            ) : (
              filteredResults.map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full text-left p-4 rounded-lg hover:bg-gray-100 transition flex items-start gap-4"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 line-clamp-1">{item.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {item.type}
                      </span>
                      <span className="text-xs text-gray-500">{item.category}</span>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          {searchTerm && filteredResults.length > 0 && (
            <div className="border-t border-gray-200 mt-4 pt-4 text-xs text-gray-500 text-center">
              {filteredResults.length} resultado(s) encontrado(s)
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
