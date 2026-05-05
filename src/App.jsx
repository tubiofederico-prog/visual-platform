import { Users, TrendingUp, Activity, Zap } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import Chart from './components/Chart'
import DataTable from './components/DataTable'

function App() {
  const chartData = [
    { label: 'Conversiones', value: 85 },
    { label: 'Engagement', value: 72 },
    { label: 'Retencion', value: 91 },
    { label: 'Satisfaccion', value: 78 },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />
      <Header />

      <main className="ml-64 mt-20 p-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-slate-400">Bienvenido a tu plataforma visual moderna</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Usuarios Totales"
            value="2,543"
            change={12.5}
            icon={Users}
            color="blue"
          />
          <StatCard
            title="Ingresos"
            value="$54,290"
            change={8.2}
            icon={TrendingUp}
            color="green"
          />
          <StatCard
            title="Actividad"
            value="1,234"
            change={-3.1}
            icon={Activity}
            color="purple"
          />
          <StatCard
            title="Performance"
            value="98.5%"
            change={5.7}
            icon={Zap}
            color="orange"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Chart title="Métricas Clave" data={chartData} />
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-6">Acciones Rápidas</h3>
            <div className="space-y-3">
              <button className="btn-primary w-full text-center">Crear Reporte</button>
              <button className="btn-secondary w-full text-center">Exportar Datos</button>
              <button className="btn-secondary w-full text-center">Ver Documentación</button>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <DataTable />

        {/* Footer Section */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>© 2024 Visual Platform. Todos los derechos reservados.</p>
        </div>
      </main>
    </div>
  )
}

export default App
