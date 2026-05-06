import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'

export default function ToastContainer({ toasts }) {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />
  }

  const bgColors = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    info: 'bg-blue-50 border-blue-200'
  }

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-50 space-y-3 pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 backdrop-blur-xl ${bgColors[toast.type]} animate-slideUp pointer-events-auto`}
        >
          {icons[toast.type]}
          <p className="text-sm font-medium text-gray-800">{toast.message}</p>
        </div>
      ))}
    </div>
  )
}
