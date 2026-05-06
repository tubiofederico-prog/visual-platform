import { Trophy, Star, Zap, Heart, Calendar, Target } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Madrugador',
      description: 'Despiértate antes de las 7:30am',
      icon: '🌅',
      unlocked: true,
      date: 'Hoy',
      rarity: 'Común'
    },
    {
      id: 2,
      title: 'Responsable',
      description: 'Completa todas las tareas 5 días seguidos',
      icon: '✅',
      unlocked: true,
      date: '5 de mayo',
      rarity: 'Raro'
    },
    {
      id: 3,
      title: 'Organizado',
      description: 'Completa 10 rutinas sin olvidar nada',
      icon: '📋',
      unlocked: true,
      date: '2 de mayo',
      rarity: 'Raro'
    },
    {
      id: 4,
      title: 'Lector Ávido',
      description: 'Lee 3 libros en un mes',
      icon: '📚',
      unlocked: false,
      progress: '1/3',
      rarity: 'Épico'
    },
    {
      id: 5,
      title: 'Matemático',
      description: 'Obtén 10/10 en una prueba de matemática',
      icon: '🧮',
      unlocked: false,
      progress: 'En progreso',
      rarity: 'Épico'
    },
    {
      id: 6,
      title: 'Atleta',
      description: 'Juega 30 minutos de deporte',
      icon: '⚽',
      unlocked: false,
      progress: '15/30 min',
      rarity: 'Raro'
    },
    {
      id: 7,
      title: 'Artista',
      description: 'Crea una obra de arte',
      icon: '🎨',
      unlocked: false,
      progress: 'Disponible',
      rarity: 'Común'
    },
    {
      id: 8,
      title: 'Legendario',
      description: 'Desbloquea todos los demás logros',
      icon: '👑',
      unlocked: false,
      progress: '5/8',
      rarity: 'Legendario'
    }
  ]

  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalCount = achievements.length

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Común':
        return 'from-gray-400 to-gray-500'
      case 'Raro':
        return 'from-blue-400 to-cyan-500'
      case 'Épico':
        return 'from-purple-500 to-pink-500'
      case 'Legendario':
        return 'from-yellow-400 to-orange-500'
      default:
        return 'from-gray-400 to-gray-500'
    }
  }

  return (
    <div className="md:ml-64 mb-20 md:mb-0 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Header */}
      <header className="backdrop-blur-xl bg-white/70 border-b border-white/50 p-8 sticky top-0 z-40">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <h1 className="text-4xl font-bold text-gradient">Logros y Premios</h1>
        </div>
        <p className="text-gray-600 mt-2">¡Desbloquea logros cumpliendo desafíos!</p>
      </header>

      <main className="p-8 max-w-6xl mx-auto">
        {/* Progress Card */}
        <section className="mb-12">
          <div className="card bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu Progreso</h2>
                <p className="text-gray-600">
                  {unlockedCount} de {totalCount} logros desbloqueados
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-xl">
                  <span className="text-3xl font-bold">{Math.round((unlockedCount / totalCount) * 100)}%</span>
                </div>
              </div>
            </div>
            <div className="mt-6 w-full bg-gray-200/50 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 transition-all"
                style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>

        {/* Unlocked Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Desbloqueados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.filter(a => a.unlocked).map(achievement => (
              <div key={achievement.id} className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-emerald-200 group">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{achievement.icon}</div>
                <h3 className="font-bold text-gray-800">{achievement.title}</h3>
                <p className="text-xs text-gray-600 mt-2">{achievement.description}</p>
                <p className="text-xs text-emerald-600 font-semibold mt-3">✓ Desbloqueado</p>
                <p className="text-xs text-gray-500">{achievement.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Locked Achievements */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Por Desbloquear</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.filter(a => !a.unlocked).map(achievement => (
              <div key={achievement.id} className="card bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-200 opacity-60 group">
                <div className="text-5xl mb-3 opacity-60 group-hover:scale-125 transition-transform">{achievement.icon}</div>
                <h3 className="font-bold text-gray-800">{achievement.title}</h3>
                <p className="text-xs text-gray-600 mt-2">{achievement.description}</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded bg-gradient-to-r ${getRarityColor(achievement.rarity)} text-white`}>
                      {achievement.rarity}
                    </span>
                    <span className="text-xs text-gray-600 font-medium">{achievement.progress}</span>
                  </div>
                  {achievement.progress && achievement.progress.includes('/') && (
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        style={{ width: '33%' }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <div className="mt-12 glass rounded-2xl p-6">
          <h3 className="font-bold text-gray-800 mb-4">💡 Consejos para desbloquear logros</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-3">
              <span className="text-lg flex-shrink-0">🎯</span>
              <span>Completa tus rutinas diarias para desbloquear logros de responsabilidad</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg flex-shrink-0">📚</span>
              <span>Lee libros para desbloquear el logro "Lector Ávido"</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg flex-shrink-0">⚽</span>
              <span>Practica deportes para el logro "Atleta"</span>
            </li>
            <li className="flex gap-3">
              <span className="text-lg flex-shrink-0">🏆</span>
              <span>Desbloquea todos los logros para convertirte en una leyenda</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
