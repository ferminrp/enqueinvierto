import type { RetirementInputs, RetirementResults, YearlyProjection, RiskProfileConfig } from '../types/retirement'

export const RISK_PROFILE_RETURNS: RiskProfileConfig = {
  conservative: 0.05, // 5%
  moderate: 0.07,     // 7%
  aggressive: 0.09    // 9%
}

export function getReturnRate(inputs: RetirementInputs): number {
  if (inputs.riskProfile === 'custom' && inputs.customReturn) {
    return inputs.customReturn / 100
  }
  if (inputs.riskProfile === 'custom') {
    return 0.07 // Default 7% for custom without value
  }
  return RISK_PROFILE_RETURNS[inputs.riskProfile]
}

export function calculateRetirementByAge(inputs: RetirementInputs): RetirementResults {
  if (!inputs.retirementAge) {
    throw new Error('Retirement age is required for age-based calculation')
  }

  const yearsToRetirement = inputs.retirementAge - inputs.currentAge
  const monthsToRetirement = yearsToRetirement * 12
  const monthlyReturn = getReturnRate(inputs) / 12
  const monthlyInflation = inputs.inflationRate / 100 / 12

  // Calculate future value of current savings
  const futureValueCurrentSavings = inputs.currentSavings * Math.pow(1 + getReturnRate(inputs), yearsToRetirement)

  // Calculate future value of monthly contributions (annuity)
  const futureValueContributions = inputs.monthlyContributions * 
    ((Math.pow(1 + monthlyReturn, monthsToRetirement) - 1) / monthlyReturn)

  const totalSavingsAtRetirement = futureValueCurrentSavings + futureValueContributions

  // Calculate how long funds will last in retirement
  const yearsInRetirement = inputs.lifeExpectancy - inputs.retirementAge
  const fundsLastYears = calculateFundsLastYears(
    totalSavingsAtRetirement,
    inputs.retirementMonthlyExpenses,
    getReturnRate(inputs),
    inputs.inflationRate / 100
  )

  // Generate projection data
  const projectionData = generateProjectionData(inputs, totalSavingsAtRetirement)

  // Calculate inflation-adjusted target
  const inflationAdjustedTarget = inputs.retirementMonthlyExpenses * 12 * yearsInRetirement * 
    Math.pow(1 + inputs.inflationRate / 100, yearsToRetirement)

  return {
    totalSavingsAtRetirement,
    monthlyContributionsNeeded: inputs.monthlyContributions,
    yearsToRetirement,
    retirementAge: inputs.retirementAge,
    projectedMonthlyRetirementIncome: calculateMonthlyRetirementIncome(totalSavingsAtRetirement, yearsInRetirement, getReturnRate(inputs)),
    fundsLastYears,
    inflationAdjustedTarget,
    projectionData
  }
}

export function calculateRetirementByAmount(inputs: RetirementInputs): RetirementResults {
  if (!inputs.targetAmount) {
    throw new Error('Target amount is required for amount-based calculation')
  }

  const monthlyReturn = getReturnRate(inputs) / 12
  const targetAmount = inputs.targetAmount

  // Calculate required monthly contribution using present value of annuity formula
  const futureValueCurrentSavings = inputs.currentSavings * Math.pow(1 + getReturnRate(inputs), 50) // Max 50 years
  
  // Binary search to find the retirement age that meets the target
  let minAge = inputs.currentAge + 1
  let maxAge = inputs.currentAge + 50
  let retirementAge = minAge
  let totalSavings = 0

  for (let age = minAge; age <= maxAge; age++) {
    const years = age - inputs.currentAge
    const months = years * 12
    
    const futureCurrentSavings = inputs.currentSavings * Math.pow(1 + getReturnRate(inputs), years)
    const futureContributions = inputs.monthlyContributions * 
      ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn)
    
    totalSavings = futureCurrentSavings + futureContributions
    
    if (totalSavings >= targetAmount) {
      retirementAge = age
      break
    }
  }

  const yearsToRetirement = retirementAge - inputs.currentAge
  const yearsInRetirement = inputs.lifeExpectancy - retirementAge

  const fundsLastYears = calculateFundsLastYears(
    targetAmount,
    inputs.retirementMonthlyExpenses,
    getReturnRate(inputs),
    inputs.inflationRate / 100
  )

  const projectionData = generateProjectionData({ ...inputs, retirementAge }, targetAmount)

  return {
    totalSavingsAtRetirement: targetAmount,
    monthlyContributionsNeeded: inputs.monthlyContributions,
    yearsToRetirement,
    retirementAge,
    projectedMonthlyRetirementIncome: calculateMonthlyRetirementIncome(targetAmount, yearsInRetirement, getReturnRate(inputs)),
    fundsLastYears,
    inflationAdjustedTarget: targetAmount,
    projectionData
  }
}

function calculateFundsLastYears(
  totalSavings: number,
  monthlyExpenses: number,
  annualReturn: number,
  inflationRate: number
): number {
  let remainingFunds = totalSavings
  let years = 0
  const monthlyReturn = annualReturn / 12
  const monthlyInflation = inflationRate / 12

  while (remainingFunds > 0 && years < 50) {
    for (let month = 0; month < 12; month++) {
      // Apply investment growth
      remainingFunds *= (1 + monthlyReturn)
      
      // Subtract inflation-adjusted expenses
      const inflationAdjustedExpenses = monthlyExpenses * Math.pow(1 + inflationRate, years)
      remainingFunds -= inflationAdjustedExpenses
      
      if (remainingFunds <= 0) break
    }
    years++
  }

  return years
}

function calculateMonthlyRetirementIncome(
  totalSavings: number,
  yearsInRetirement: number,
  annualReturn: number
): number {
  // Using the withdrawal rate approach (4% rule adjusted for return rate)
  const safeWithdrawalRate = Math.min(annualReturn * 0.8, 0.04) // Conservative approach
  return (totalSavings * safeWithdrawalRate) / 12
}

function generateProjectionData(inputs: RetirementInputs, finalAmount: number): YearlyProjection[] {
  const data: YearlyProjection[] = []
  const currentYear = new Date().getFullYear()
  const annualReturn = getReturnRate(inputs)
  const inflationRate = inputs.inflationRate / 100
  
  let currentSavings = inputs.currentSavings
  let currentAge = inputs.currentAge
  const retirementAge = inputs.retirementAge || inputs.currentAge + 30
  
  
  // Accumulation phase
  for (let year = 0; currentAge < retirementAge; year++) {
    const annualContributions = inputs.monthlyContributions * 12
    const interestEarned = currentSavings * annualReturn
    
    currentSavings += annualContributions + interestEarned
    
    const inflationAdjustedValue = currentSavings / Math.pow(1 + inflationRate, year)
    
    data.push({
      age: currentAge + 1,
      year: currentYear + year + 1,
      totalSavings: currentSavings,
      annualContributions,
      interestEarned,
      inflationAdjustedValue,
      phase: 'accumulation'
    })
    
    currentAge++
  }
  
  // Retirement phase
  currentSavings = finalAmount
  const annualExpenses = inputs.retirementMonthlyExpenses * 12
  const yearsInRetirement = inputs.lifeExpectancy - retirementAge
  
  for (let year = 0; year < yearsInRetirement && currentSavings > 0; year++) {
    const interestEarned = currentSavings * annualReturn
    const inflationAdjustedExpenses = annualExpenses * Math.pow(1 + inflationRate, year)
    
    currentSavings = currentSavings + interestEarned - inflationAdjustedExpenses
    
    if (currentSavings < 0) currentSavings = 0
    
    const inflationAdjustedValue = currentSavings / Math.pow(1 + inflationRate, data.length)
    
    data.push({
      age: currentAge + 1,
      year: currentYear + data.length + 1,
      totalSavings: currentSavings,
      annualContributions: 0,
      interestEarned: interestEarned,
      inflationAdjustedValue,
      phase: 'retirement',
      annualExpenses: inflationAdjustedExpenses
    })
    
    currentAge++
  }
  
  return data
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export function formatPercentage(rate: number): string {
  return `${(rate * 100).toFixed(1)}%`
}