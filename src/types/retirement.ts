export interface RetirementInputs {
  currentAge: number
  retirementAge?: number
  currentSavings: number
  monthlyContributions: number
  monthlyIncome: number
  targetAmount?: number
  riskProfile: 'conservative' | 'moderate' | 'aggressive' | 'custom'
  customReturn?: number
  inflationRate: number
  lifeExpectancy: number
  retirementMonthlyExpenses: number
}

export interface RetirementResults {
  totalSavingsAtRetirement: number
  monthlyContributionsNeeded: number
  yearsToRetirement: number
  retirementAge: number
  projectedMonthlyRetirementIncome: number
  fundsLastYears: number
  inflationAdjustedTarget: number
  projectionData: YearlyProjection[]
}

export interface YearlyProjection {
  age: number
  year: number
  totalSavings: number
  annualContributions: number
  interestEarned: number
  inflationAdjustedValue: number
  phase: 'accumulation' | 'retirement'
  annualExpenses?: number
}

export interface RiskProfileConfig {
  conservative: number
  moderate: number
  aggressive: number
}

export type CalculationMode = 'age' | 'amount'