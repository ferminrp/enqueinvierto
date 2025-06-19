import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart } from 'recharts'
import type { YearlyProjection } from '../types/retirement'
import { formatCurrency } from '../utils/retirementCalculations'

interface RetirementChartProps {
  data: YearlyProjection[]
}

export default function RetirementChart({ data }: RetirementChartProps) {
  // Split data into accumulation and retirement phases
  const accumulationData = data.filter(d => d.phase === 'accumulation')
  const retirementData = data.filter(d => d.phase === 'retirement')
  
  // Combine phases for continuous chart
  const allData = [...accumulationData, ...retirementData]
  
  const formatTooltip = (value: number, name: string) => {
    if (name === 'totalSavings') {
      return [formatCurrency(value), 'Total Ahorros']
    }
    return [formatCurrency(value), name]
  }

  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    }
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`
    }
    return `$${value.toFixed(0)}`
  }

  const downloadCSV = () => {
    // Define CSV headers
    const headers = [
      'Edad',
      'Año',
      'Fase',
      'Contribuciones (USD)',
      'Gastos (USD)',
      'Intereses (USD)',
      'Total Ahorros (USD)'
    ]

    // Convert data to CSV rows
    const csvRows = [
      headers.join(','),
      ...allData.map(row => [
        row.age,
        row.year,
        row.phase === 'accumulation' ? 'Acumulación' : 'Jubilación',
        row.annualContributions > 0 ? row.annualContributions.toFixed(2) : '0',
        row.annualExpenses ? row.annualExpenses.toFixed(2) : '0',
        row.interestEarned.toFixed(2),
        row.totalSavings.toFixed(2)
      ].join(','))
    ]

    // Create CSV content
    const csvContent = csvRows.join('\n')

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', `proyeccion-jubilacion-${new Date().toISOString().split('T')[0]}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Proyección de Ahorros a lo Largo del Tiempo
        </h3>
        <p className="text-gray-600">
          Visualizá cómo crecerán tus ahorros durante la fase de acumulación y cómo se consumirán durante la jubilación
        </p>
      </div>

      <div className="h-96 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            key={`${allData.length}-${data.length}`} // Force re-render when data changes
            data={allData} 
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="age" 
              tick={{ fontSize: 12 }}
              label={{ value: 'Edad', position: 'insideBottom', offset: -5 }}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickFormatter={formatYAxis}
              label={{ value: 'Monto (USD)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={formatTooltip}
              labelFormatter={(age) => `Edad: ${age} años`}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            
            {/* Total savings line */}
            <Line
              type="monotone"
              dataKey="totalSavings"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={false}
              name="Total Ahorros"
            />
            
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Legend */}
      <div className="mt-4 flex flex-wrap gap-6 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-1 bg-blue-500 rounded"></div>
          <span className="text-sm text-gray-600">Total Ahorros</span>
        </div>
      </div>

      {/* Key insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-1">Pico de Ahorros</h4>
          <p className="text-2xl font-bold text-blue-700">
            {formatCurrency(Math.max(...allData.map(d => d.totalSavings)))}
          </p>
          <p className="text-sm text-blue-600">
            Al momento de jubilarse
          </p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-medium text-green-900 mb-1">Años de Acumulación</h4>
          <p className="text-2xl font-bold text-green-700">
            {accumulationData.length}
          </p>
          <p className="text-sm text-green-600">
            Construyendo tu patrimonio
          </p>
        </div>
        
        <div className="bg-amber-50 p-4 rounded-lg">
          <h4 className="font-medium text-amber-900 mb-1">Años de Jubilación</h4>
          <p className="text-2xl font-bold text-amber-700">
            {retirementData.filter(d => d.totalSavings > 0).length}
          </p>
          <p className="text-sm text-amber-600">
            Con fondos disponibles
          </p>
        </div>
      </div>

      {/* Detailed Year-by-Year Table */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900">Proyección Detallada Año a Año</h4>
          <button
            onClick={downloadCSV}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Edad</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Año</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Fase</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Contribuciones</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Gastos</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Intereses</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">Total Ahorros</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((row, index) => (
                <tr key={index} className={`border-b hover:bg-gray-50 ${row.phase === 'retirement' ? 'bg-amber-50/50' : ''}`}>
                  <td className="py-3 px-4 text-gray-900">{row.age}</td>
                  <td className="py-3 px-4 text-gray-900">{row.year}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      row.phase === 'accumulation' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {row.phase === 'accumulation' ? 'Acumulación' : 'Jubilación'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-gray-600">
                    {row.annualContributions > 0 ? formatCurrency(row.annualContributions) : '-'}
                  </td>
                  <td className="py-3 px-4 text-right text-red-600">
                    {row.annualExpenses ? formatCurrency(row.annualExpenses) : '-'}
                  </td>
                  <td className="py-3 px-4 text-right text-green-600">
                    {formatCurrency(row.interestEarned)}
                  </td>
                  <td className="py-3 px-4 text-right font-medium text-gray-900">
                    {formatCurrency(row.totalSavings)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Table Legend */}
        <div className="mt-4 text-xs text-gray-500 space-y-1">
          <p><strong>Contribuciones:</strong> Aportes realizados durante el año (solo en fase de acumulación)</p>
          <p><strong>Gastos:</strong> Gastos de jubilación descontados anualmente (solo en fase de jubilación)</p>
          <p><strong>Intereses:</strong> Rendimiento generado por las inversiones</p>
          <p><strong>Total Ahorros:</strong> Monto total acumulado a valor final (sin ajustar por inflación)</p>
        </div>
      </div>
    </div>
  )
}