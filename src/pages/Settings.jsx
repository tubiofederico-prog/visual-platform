import { familyData } from '../data/mockData'
import { Users, Lock, Trash2, Edit2, Plus } from 'lucide-react'
import { useState } from 'react'

export default function Settings() {
  const [editMode, setEditMode] = useState(false)

  return (
    <div className="md:ml-64 mb-20 md:mb-0">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200 p-6 sticky top-0 z-40">
        <h1 className="text-3xl font-bold text-gray-800">Configuración</h1>
        <p className="text-gray-600 mt-1">Administra tu familia y privacidad</p>
      </header>

      <main className="p-6 max-w-4xl">
        {/* Family Profile */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Perfil familiar</h2>
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{familyData.familyName}</h3>
                <p className="text-gray-600 mt-1">{familyData.houses.length} casas registradas</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
                <Edit2 className="w-4 h-4" />
                Editar
              </button>
            </div>
          </div>
        </section>

        {/* Parents */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Padres</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition text-sm">
              <Plus className="w-4 h-4" />
              Agregar
            </button>
          </div>
          <div className="space-y-3">
            {familyData.parents.map(parent => (
              <div key={parent.id} className="bg-white rounded-lg border-2 border-gray-200 p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{parent.name}</p>
                  <p className="text-sm text-gray-600">{parent.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{parent.email}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Editar
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Caregivers */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Cuidadores</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition text-sm">
              <Plus className="w-4 h-4" />
              Agregar
            </button>
          </div>
          <div className="space-y-3">
            {familyData.caregivers.map(caregiver => (
              <div key={caregiver.id} className="bg-white rounded-lg border-2 border-gray-200 p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{caregiver.name}</p>
                  <p className="text-sm text-gray-600">{caregiver.type}</p>
                  <p className="text-xs text-green-600 mt-1">• {caregiver.status}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Editar
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Houses */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Casas</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition text-sm">
              <Plus className="w-4 h-4" />
              Agregar
            </button>
          </div>
          <div className="space-y-3">
            {familyData.houses.map(house => (
              <div key={house.id} className="bg-white rounded-lg border-2 border-gray-200 p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{house.name}</p>
                  <p className="text-sm text-gray-600">{house.type}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Editar
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6" />
            Privacidad
          </h2>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🔒 Tus datos son privados</h3>
              <p className="text-sm text-gray-700">Cada familia tiene su propia base de datos encriptada. Nadie puede ver tu información.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🚫 No vendemos datos</h3>
              <p className="text-sm text-gray-700">Jamás vendemos, alquilamos o compartimos tu información con terceros.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">🗑️ Podés borrar tu información</h3>
              <p className="text-sm text-gray-700">En cualquier momento podés solicitar borrar todos tus datos permanentemente.</p>
            </div>
          </div>
        </section>

        {/* Danger Zone */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Zona de peligro</h2>
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 space-y-4">
            <div>
              <p className="font-semibold text-gray-800 mb-2">Eliminar todos los datos</p>
              <p className="text-sm text-gray-700 mb-4">Esta acción es irreversible. Se borrarán todos los datos de tu familia.</p>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition">
                <Trash2 className="w-4 h-4" />
                Borrar todo
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
