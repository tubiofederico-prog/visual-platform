import { familyData } from '../data/mockData'
import { BookOpen, Zap, Target } from 'lucide-react'
import { useState } from 'react'

export default function Children() {
  const [selectedChild, setSelectedChild] = useState(familyData.children[0])

  return (
    <div className="md:ml-64 mb-20 md:mb-0">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 p-6 sticky top-0 z-40">
        <h1 className="text-3xl font-bold text-gray-800">Perfiles de hijos</h1>
        <p className="text-gray-600 mt-1">Información de cada hijo y sus prioridades</p>
      </header>

      <main className="p-6 max-w-6xl">
        {/* Children Selector */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {familyData.children.map(child => (
            <button
              key={child.id}
              onClick={() => setSelectedChild(child)}
              className={`p-6 rounded-lg border-2 transition text-left ${
                selectedChild.id === child.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {child.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{child.name}</h3>
                  <p className="text-gray-600">{child.age} años • {child.grade}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Child Details */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Información básica</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase">Nombre</p>
                <p className="text-lg text-gray-800 mt-1">{selectedChild.name}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase">Edad</p>
                <p className="text-lg text-gray-800 mt-1">{selectedChild.age} años</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase">Grado</p>
                <p className="text-lg text-gray-800 mt-1">{selectedChild.grade}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase">Colegio</p>
                <p className="text-lg text-gray-800 mt-1">{selectedChild.school}</p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Intereses</h2>
            <div className="flex flex-wrap gap-2">
              {selectedChild.interests.map((interest, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-2 rounded-full text-sm font-medium">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Educational Priorities */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-gray-800">Prioridades educativas</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {selectedChild.educationalPriorities.map((priority, idx) => (
                <div key={idx} className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800">{priority}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Things to Reinforce */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-800">Cosas a reforzar</h2>
            </div>
            <div className="space-y-3">
              {selectedChild.toReinforce.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                  <span className="text-yellow-600 font-bold mt-1">!</span>
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Special Permissions */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold text-gray-800">Permisos especiales</h2>
            </div>
            <div className="space-y-2">
              {selectedChild.specialPermissions.map((perm, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 border-2 border-green-200 rounded-lg">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-gray-800">{perm}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
