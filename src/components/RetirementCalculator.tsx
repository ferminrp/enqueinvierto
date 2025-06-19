import { useState, useEffect, useCallback } from 'react'
import { TrendingUp, Target, DollarSign } from 'lucide-react'
import type { RetirementInputs, RetirementResults as RetirementResultsType, CalculationMode } from '../types/retirement'
import { calculateRetirementByAge, calculateRetirementByAmount, RISK_PROFILE_RETURNS } from '../utils/retirementCalculations'
import RetirementResults from './RetirementResults'
import RetirementChart from './RetirementChart'

export default function RetirementCalculator() {
  const [mode, setMode] = useState<CalculationMode>('age')
  
  // State for string inputs to avoid input issues
  const [inputValues, setInputValues] = useState({
    currentAge: '30',
    retirementAge: '65',
    currentSavings: '10000',
    monthlyContributions: '300',
    monthlyIncome: '5000',
    targetAmount: '1000000',
    customReturn: '',
    inflationRate: '3',
    lifeExpectancy: '85',
    retirementMonthlyExpenses: '4000'
  })
  
  const [inputs, setInputs] = useState<RetirementInputs>({
    currentAge: 30,
    retirementAge: 65,
    currentSavings: 10000,
    monthlyContributions: 300,
    monthlyIncome: 5000,
    targetAmount: 1000000,
    riskProfile: 'moderate',
    inflationRate: 3,
    lifeExpectancy: 85,
    retirementMonthlyExpenses: 4000
  })
  
  const [results, setResults] = useState<RetirementResultsType | null>(null)
  const [errors, setErrors] = useState<string[]>([])

  const validateInputs = useCallback((): string[] => {
    const newErrors: string[] = []
    
    if (inputs.currentAge < 18 || inputs.currentAge > 80) {
      newErrors.push('La edad actual debe estar entre 18 y 80 años')
    }
    
    if (mode === 'age' && inputs.retirementAge && inputs.retirementAge <= inputs.currentAge) {
      newErrors.push('La edad de jubilación debe ser mayor a la edad actual')
    }
    
    if (inputs.currentSavings < 0) {
      newErrors.push('Los ahorros actuales no pueden ser negativos')
    }
    
    if (inputs.monthlyContributions < 0) {
      newErrors.push('Las contribuciones mensuales no pueden ser negativas')
    }
    
    if (mode === 'amount' && inputs.targetAmount && inputs.targetAmount <= inputs.currentSavings) {
      newErrors.push('El monto objetivo debe ser mayor a los ahorros actuales')
    }
    
    if (inputs.riskProfile === 'custom' && (!inputs.customReturn || inputs.customReturn < 0 || inputs.customReturn > 20)) {
      newErrors.push('El rendimiento personalizado debe estar entre 0% y 20%')
    }
    
    return newErrors
  }, [inputs, mode])

  const calculateResults = useCallback(() => {
    const validationErrors = validateInputs()
    setErrors(validationErrors)
    
    if (validationErrors.length > 0) {
      setResults(null)
      return
    }

    try {
      let calculatedResults: RetirementResultsType
      
      if (mode === 'age') {
        calculatedResults = calculateRetirementByAge(inputs)
      } else {
        calculatedResults = calculateRetirementByAmount(inputs)
      }
      
      setResults(calculatedResults)
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'Error en el cálculo'])
      setResults(null)
    }
  }, [inputs, mode])

  useEffect(() => {
    calculateResults()
  }, [inputs, mode, calculateResults])

  const handleInputChange = (field: keyof RetirementInputs, value: number | string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNumberInputChange = (field: keyof typeof inputValues, value: string) => {
    // Update the string input state
    setInputValues(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Update the numeric inputs state for calculations
    const numValue = value === '' ? 0 : Number(value)
    if (!isNaN(numValue)) {
      setInputs(prev => ({
        ...prev,
        [field]: numValue
      }))
    }
  }

  const getCurrentReturnRate = (): number => {
    if (inputs.riskProfile === 'custom' && inputs.customReturn) {
      return inputs.customReturn
    }
    if (inputs.riskProfile === 'custom') {
      return 7 // Default fallback
    }
    return RISK_PROFILE_RETURNS[inputs.riskProfile] * 100
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Mode Selection */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Modo de Cálculo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setMode('age')}
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
              mode === 'age'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Por Edad de Retiro</div>
                <div className="text-sm opacity-70">Calcula cuánto necesitas ahorrar</div>
              </div>
            </div>
          </button>
          
          <button
            onClick={() => setMode('amount')}
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
              mode === 'amount'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Por Monto Objetivo</div>
                <div className="text-sm opacity-70">Calcula cuándo podrás jubilarte</div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Personal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Edad actual
                </label>
                <input
                  type="number"
                  value={inputValues.currentAge}
                  onChange={(e) => handleNumberInputChange('currentAge', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="18"
                  max="80"
                />
              </div>
              
              {mode === 'age' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Edad de jubilación objetivo
                  </label>
                  <input
                    type="number"
                    value={inputValues.retirementAge}
                    onChange={(e) => handleNumberInputChange('retirementAge', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min={inputs.currentAge + 1}
                    max="85"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expectativa de vida
                </label>
                <input
                  type="number"
                  value={inputValues.lifeExpectancy}
                  onChange={(e) => handleNumberInputChange('lifeExpectancy', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="70"
                  max="100"
                />
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Información Financiera</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ahorros actuales (USD)
                </label>
                <input
                  type="number"
                  value={inputValues.currentSavings}
                  onChange={(e) => handleNumberInputChange('currentSavings', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contribución mensual (USD)
                </label>
                <input
                  type="number"
                  value={inputValues.monthlyContributions}
                  onChange={(e) => handleNumberInputChange('monthlyContributions', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>
              
              {mode === 'amount' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monto objetivo para jubilación (USD)
                  </label>
                  <input
                    type="number"
                    value={inputValues.targetAmount}
                    onChange={(e) => handleNumberInputChange('targetAmount', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gastos mensuales estimados en jubilación (USD)
                </label>
                <input
                  type="number"
                  value={inputValues.retirementMonthlyExpenses}
                  onChange={(e) => handleNumberInputChange('retirementMonthlyExpenses', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Investment Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuración de Inversión</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Perfil de Riesgo
                </label>
                <select
                  value={inputs.riskProfile}
                  onChange={(e) => handleInputChange('riskProfile', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="conservative">Conservador (5% anual)</option>
                  <option value="moderate">Moderado (7% anual)</option>
                  <option value="aggressive">Agresivo (9% anual)</option>
                  <option value="custom">Personalizado</option>
                </select>
              </div>
              
              {inputs.riskProfile === 'custom' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rendimiento anual esperado (%)
                  </label>
                  <input
                    type="number"
                    value={inputValues.customReturn}
                    onChange={(e) => handleNumberInputChange('customReturn', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="20"
                    step="0.1"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tasa de inflación anual (%)
                </label>
                <input
                  type="number"
                  value={inputValues.inflationRate}
                  onChange={(e) => handleNumberInputChange('inflationRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="0"
                  max="15"
                  step="0.1"
                />
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">
                  Rendimiento seleccionado: {getCurrentReturnRate().toFixed(1)}% anual
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-medium text-red-900 mb-2">Errores de validación:</h4>
              <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          
          {results && <RetirementResults results={results} mode={mode} />}
        </div>
      </div>
      
      {/* Chart */}
      {results && (
        <div className="mt-8">
          <RetirementChart 
            key={`${inputs.lifeExpectancy}-${inputs.retirementAge}-${inputs.currentAge}`}
            data={results.projectionData} 
          />
        </div>
      )}
    </div>
  )
}