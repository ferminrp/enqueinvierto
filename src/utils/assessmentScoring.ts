import type { Answer, AssessmentResult, CategoryScore, QuestionCategory } from '../types/financialHealth';
import { getQuestionsByCategory, getCategoryMaxScore, getMaxScore } from '../data/healthQuestions';
import { getRecommendationsByScore } from '../data/recommendations';

export const calculateCategoryScore = (
  category: QuestionCategory, 
  answers: Answer[]
): CategoryScore => {
  const categoryQuestions = getQuestionsByCategory(category);
  const categoryAnswers = answers.filter(answer => 
    categoryQuestions.some(q => q.id === answer.questionId)
  );

  const totalScore = categoryAnswers.reduce((sum, answer) => sum + answer.score, 0);
  const maxScore = getCategoryMaxScore(category);
  const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

  let level: 'excellent' | 'good' | 'needs_improvement' | 'critical';
  if (percentage >= 85) level = 'excellent';
  else if (percentage >= 70) level = 'good';
  else if (percentage >= 50) level = 'needs_improvement';
  else level = 'critical';

  return {
    category,
    score: totalScore,
    maxScore,
    percentage: Math.round(percentage),
    level
  };
};

export const calculateAssessmentResult = (answers: Answer[]): AssessmentResult => {
  const categories: QuestionCategory[] = ['emergency', 'debt', 'investment', 'planning', 'knowledge'];
  
  const categoryScores = categories.map(category => 
    calculateCategoryScore(category, answers)
  );

  const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
  const maxTotalScore = getMaxScore();
  const overallPercentage = Math.round((totalScore / maxTotalScore) * 100);

  let overallLevel: 'excellent' | 'good' | 'needs_improvement' | 'critical';
  if (overallPercentage >= 85) overallLevel = 'excellent';
  else if (overallPercentage >= 70) overallLevel = 'good';
  else if (overallPercentage >= 50) overallLevel = 'needs_improvement';
  else overallLevel = 'critical';

  const recommendations = getRecommendationsByScore(categoryScores);

  return {
    totalScore,
    maxTotalScore,
    overallPercentage,
    overallLevel,
    categoryScores,
    completedAt: new Date(),
    recommendations
  };
};

export const getLevelColor = (level: string): string => {
  switch (level) {
    case 'excellent':
      return 'text-green-600 bg-green-100';
    case 'good':
      return 'text-blue-600 bg-blue-100';
    case 'needs_improvement':
      return 'text-yellow-600 bg-yellow-100';
    case 'critical':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

export const getLevelIcon = (level: string): string => {
  switch (level) {
    case 'excellent':
      return '🌟';
    case 'good':
      return '👍';
    case 'needs_improvement':
      return '⚠️';
    case 'critical':
      return '🚨';
    default:
      return '❓';
  }
};

export const getLevelText = (level: string): string => {
  switch (level) {
    case 'excellent':
      return 'Excelente';
    case 'good':
      return 'Bueno';
    case 'needs_improvement':
      return 'Mejorable';
    case 'critical':
      return 'Crítico';
    default:
      return 'Sin evaluar';
  }
};