import { MoreVertical, CheckCircle, AlertCircle } from 'lucide-react'

export default function DataTable() {
  const data = [
    { id: 1, name: 'Juan García', email: 'juan@example.com', status: 'active', date: '2024-01-15' },
    { id: 2, name: 'María López', email: 'maria@example.com', status: 'active', date: '2024-01-18' },
    { id: 3, name: 'Carlos Martín', email: 'carlos@example.com', status: 'inactive', date: '2024-01-10' },
    { id: 4, name: 'Ana Rodríguez', email: 'ana@example.com', status: 'active', date: '2024-01-20' },
    { id: 5, name: 'Diego Torres', email: 'diego@example.com', status: 'active', date: '2024-01-22' },
  ]

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Usuarios Recientes</h3>
        <button className="text-slate-400 hover:text-white">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="text-left py-3 px-4 font-semibold text-slate-400 text-sm">Nombre</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-400 text-sm">Email</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-400 text-sm">Estado</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-400 text-sm">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition">
                <td className="py-3 px-4">{row.name}</td>
                <td className="py-3 px-4 text-slate-400">{row.email}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {row.status === 'active' ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-sm font-medium">Activo</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">Inactivo</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4 text-slate-500">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
