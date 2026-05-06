import { houseRules } from '../data/mockData'
import { Search, Filter } from 'lucide-react'
import { useState } from 'react'

export default function Rules({ addToast }) {
  const [selectedCategory, setSelectedCategory] = useState('Comida')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedHouse, setSelectedHouse] = useState('Casa principal')

  const categories = Object.keys(houseRules)
  const houses = ['Casa principal', 'Casa de mamá', 'Casa de abuelos']

  const filteredRules = houseRules[selectedCategory].filter(rule =>
    rule.rule.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Alta':
        return 'bg-red-100 text-red-700'
      case 'Media':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-green-100 text-green-700'
    }
  }

  return (
    <div className="md:ml-64 mb-20 md:mb-0">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 p-6 sticky top-0 z-40">
        <h1 className="text-3xl font-bold text-gray-800">Reglas de casa</h1>
        <p className="text-gray-600 mt-1">Todas las reglas y límites de la familia</p>
      </header>

      <main className="p-6 max-w-6xl">
        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-xs font-semibold text-gray-600 block mb-2">Buscar regla</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-lg pl-10 pr-4 py-2"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-2">Casa</label>
              <select
                value={selectedHouse}
                onChange={(e) => setSelectedHouse(e.target.value)}
                className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-lg px-3 py-2"
              >
                {houses.map(house => (
                  <option key={house} value={house}>{house}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Rules List */}
        <div className="space-y-3">
          {filteredRules.map(rule => (
            <div key={rule.id} className="bg-white rounded-lg border-2 border-gray-100 hover:border-blue-300 p-4 transition">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800">{rule.rule}</p>
                  <p className="text-sm text-gray-600 mt-1">Categoría: {selectedCategory}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(rule.priority)}`}>
                  {rule.priority}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredRules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No se encontraron reglas</p>
            <p className="text-gray-500 mt-2">Intenta con otro término de búsqueda</p>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mt-8 text-center">
          <p className="text-sm text-blue-700 font-medium">
            💡 Estas reglas se aplican en {selectedHouse}. Usa el selector para ver reglas de otras casas.
          </p>
        </div>
      </main>
    </div>
  )
}
