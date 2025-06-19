import { CheckCircle, AlertCircle, TrendingUp, Clock, DollarSign, Target } from 'lucide-react'
import type { RetirementResults, CalculationMode } from '../types/retirement'
import { formatCurrency } from '../utils/retirementCalculations'

interface RetirementResultsProps {
  results: RetirementResults
  mode: CalculationMode
}

export default function RetirementResults({ results, mode }: RetirementResultsProps) {
  const isHealthyRetirement = results.fundsLastYears >= 15

  return (
    <div className="space-y-6">
      {/* Main Results Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          {isHealthyRetirement ? (
            <CheckCircle className="h-6 w-6 text-green-600" />
          ) : (
            <AlertCircle className="h-6 w-6 text-amber-600" />
          )}
          <h3 className="text-xl font-semibold text-gray-900">
            Resultados de tu Plan de Jubilación
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mode === 'age' ? (
            <>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Total al Jubilarse</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(results.totalSavingsAtRetirement)}
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-600">Edad de Jubilación</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {results.retirementAge} años
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-600">Podrás Jubilarte a los</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {results.retirementAge} años
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">En</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {results.yearsToRetirement} años
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Ingresos Mensuales</span>
          </div>
          <p className="text-xl font-bold text-blue-700">
            {formatCurrency(results.projectedMonthlyRetirementIncome)}
          </p>
          <p className="text-xs text-blue-600 mt-1">Estimado en jubilación</p>
        </div>

        <div className={`rounded-lg p-4 ${
          results.fundsLastYears >= 20 
            ? 'bg-green-50' 
            : results.fundsLastYears >= 15 
              ? 'bg-amber-50' 
              : 'bg-red-50'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <Clock className={`h-4 w-4 ${
              results.fundsLastYears >= 20 
                ? 'text-green-600' 
                : results.fundsLastYears >= 15 
                  ? 'text-amber-600' 
                  : 'text-red-600'
            }`} />
            <span className={`text-sm font-medium ${
              results.fundsLastYears >= 20 
                ? 'text-green-900' 
                : results.fundsLastYears >= 15 
                  ? 'text-amber-900' 
                  : 'text-red-900'
            }`}>
              Duración de Fondos
            </span>
          </div>
          <p className={`text-xl font-bold ${
            results.fundsLastYears >= 20 
              ? 'text-green-700' 
              : results.fundsLastYears >= 15 
                ? 'text-amber-700' 
                : 'text-red-700'
          }`}>
            {results.fundsLastYears} años
          </p>
          <p className={`text-xs mt-1 ${
            results.fundsLastYears >= 20 
              ? 'text-green-600' 
              : results.fundsLastYears >= 15 
                ? 'text-amber-600' 
                : 'text-red-600'
          }`}>
            Después de jubilarte
          </p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">Años para Jubilarse</span>
          </div>
          <p className="text-xl font-bold text-purple-700">
            {results.yearsToRetirement}
          </p>
          <p className="text-xs text-purple-600 mt-1">Desde ahora</p>
        </div>
      </div>

      {/* Status and Recommendations */}
      <div className={`rounded-xl p-6 ${
        isHealthyRetirement 
          ? 'bg-green-50 border border-green-200' 
          : 'bg-amber-50 border border-amber-200'
      }`}>
        <div className="flex items-start gap-3">
          {isHealthyRetirement ? (
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
          )}
          <div className="flex-1">
            <h4 className={`font-semibold mb-2 ${
              isHealthyRetirement ? 'text-green-900' : 'text-amber-900'
            }`}>
              {isHealthyRetirement 
                ? '¡Excelente! Tu plan de jubilación se ve sólido' 
                : 'Tu plan necesita algunos ajustes'
              }
            </h4>
            
            <div className="space-y-2 text-sm">
              {isHealthyRetirement ? (
                <div className="space-y-1">
                  <p className="text-green-700">
                    • Tus fondos durarán {results.fundsLastYears} años después de jubilarte
                  </p>
                  <p className="text-green-700">
                    • Tendrás aproximadamente {formatCurrency(results.projectedMonthlyRetirementIncome)} mensuales para gastos
                  </p>
                  <p className="text-green-700">
                    • Tu plan está bien encaminado para una jubilación cómoda
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-amber-700">
                    • Tus fondos solo durarán {results.fundsLastYears} años después de jubilarte
                  </p>
                  <p className="text-amber-700">
                    • Considera aumentar tus contribuciones mensuales o ajustar tu edad de jubilación
                  </p>
                  <p className="text-amber-700">
                    • Un perfil de inversión más agresivo podría mejorar tus resultados
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Actionable Recommendations */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Recomendaciones para Optimizar tu Plan</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h5 className="font-medium text-gray-700">Aumentar Ahorros:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Incrementá tus aportes mensuales cuando sea posible.</li>
              <li>• Aprovechá aumentos salariales para aumentar contribuciones.</li>
              <li>• Considerá aportes extraordinarios anuales.</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h5 className="font-medium text-gray-700">Optimizar Inversiones:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Revisá periódicamente tu perfil de riesgo.</li>
              <li>• Diversificá tus inversiones según tu edad.</li>
              <li>• Mantené un portafolio equilibrado y consistente.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}