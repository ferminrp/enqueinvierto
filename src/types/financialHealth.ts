export type QuestionCategory = 'emergency' | 'debt' | 'investment' | 'planning' | 'knowledge';

export type QuestionType = 'single' | 'multiple' | 'range' | 'input';

export interface QuestionOption {
  value: string;
  label: string;
  score: number;
  description?: string;
}

export interface Question {
  id: string;
  category: QuestionCategory;
  text: string;
  subtitle?: string;
  type: QuestionType;
  options?: QuestionOption[];
  validation?: {
    required: boolean;
    min?: number;
    max?: number;
  };
  positiveResponse?: string;
  weight: number; // For scoring importance
}

export interface Answer {
  questionId: string;
  value: string | number | string[];
  score: number;
}

export interface CategoryScore {
  category: QuestionCategory;
  score: number;
  maxScore: number;
  percentage: number;
  level: 'excellent' | 'good' | 'needs_improvement' | 'critical';
}

export interface AssessmentResult {
  totalScore: number;
  maxTotalScore: number;
  overallPercentage: number;
  overallLevel: 'excellent' | 'good' | 'needs_improvement' | 'critical';
  categoryScores: CategoryScore[];
  completedAt: Date;
  recommendations: Recommendation[];
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: QuestionCategory;
  actionItems: string[];
  relatedLinks?: {
    text: string;
    url: string;
    type: 'internal' | 'external';
  }[];
  estimatedTimeToComplete?: string;
}

export interface AssessmentState {
  currentQuestionIndex: number;
  answers: Answer[];
  isComplete: boolean;
  result?: AssessmentResult;
  startedAt: Date;
  lastUpdated: Date;
}

export interface CategoryInfo {
  id: QuestionCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}