export default function Chart({ title, data }) {
  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <div className="space-y-4">
        {data.map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">{item.label}</span>
              <span className="text-sm font-semibold">{item.value}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${
                  idx % 3 === 0 ? 'from-blue-500 to-cyan-500' :
                  idx % 3 === 1 ? 'from-purple-500 to-pink-500' :
                  'from-green-500 to-emerald-500'
                }`}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
