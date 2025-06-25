import React, { useState, useEffect } from 'react';

// Global gtag function type declaration
declare global {
  function gtag(...args: any[]): void;
}
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, RotateCcw, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { questions, categoryInfo } from '../data/healthQuestions';
import type { Answer, AssessmentState } from '../types/financialHealth';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import ResultsDashboard from './ResultsDashboard';
import { calculateAssessmentResult } from '../utils/assessmentScoring';

const STORAGE_KEY = 'financial-health-assessment';

const FinancialHealthWizard: React.FC = () => {
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentQuestionIndex: -1, // -1 means welcome screen
    answers: [],
    isComplete: false,
    startedAt: new Date(),
    lastUpdated: new Date()
  });

  const [currentAnswer, setCurrentAnswer] = useState<Answer | null>(null);

  // Load saved state on component mount
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        
        // Convert date strings back to Date objects and fix result if needed
        const processedState = {
          ...parsed,
          startedAt: new Date(parsed.startedAt),
          lastUpdated: new Date(parsed.lastUpdated)
        };

        // If assessment is complete, ensure result exists and dates are properly converted
        if (parsed.isComplete && parsed.answers && parsed.answers.length > 0) {
          if (!parsed.result) {
            // Result is missing, recalculate it
            const result = calculateAssessmentResult(parsed.answers);
            processedState.result = result;
          } else {
            // Result exists but need to convert completedAt back to Date
            processedState.result = {
              ...parsed.result,
              completedAt: new Date(parsed.result.completedAt)
            };
          }
        }

        setAssessmentState(processedState);
      } catch (error) {
        console.error('Failed to parse saved assessment state:', error);
        // If there's an error, reset to welcome screen
        setAssessmentState({
          currentQuestionIndex: -1,
          answers: [],
          isComplete: false,
          startedAt: new Date(),
          lastUpdated: new Date()
        });
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (assessmentState.currentQuestionIndex >= 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(assessmentState));
    }
  }, [assessmentState]);

  const currentQuestion = assessmentState.currentQuestionIndex >= 0 
    ? questions[assessmentState.currentQuestionIndex] 
    : null;

  const progress = assessmentState.currentQuestionIndex >= 0 
    ? ((assessmentState.currentQuestionIndex + 1) / questions.length) * 100 
    : 0;

  const handleStart = () => {
    // Track assessment start
    if (typeof gtag !== 'undefined') {
      gtag('event', 'assessment_started', {
        event_category: 'financial_health',
        event_label: 'assessment_started'
      });
    }
    
    setAssessmentState(prev => ({
      ...prev,
      currentQuestionIndex: 0,
      startedAt: new Date(),
      lastUpdated: new Date()
    }));
  };

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...assessmentState.answers];
    const existingIndex = newAnswers.findIndex(a => a.questionId === answer.questionId);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = answer;
    } else {
      newAnswers.push(answer);
    }

    setAssessmentState(prev => ({
      ...prev,
      answers: newAnswers,
      lastUpdated: new Date()
    }));

    setCurrentAnswer(answer);
  };

  const handleNext = () => {
    if (assessmentState.currentQuestionIndex < questions.length - 1) {
      setAssessmentState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
      setCurrentAnswer(null);
    } else {
      // Assessment complete
      const result = calculateAssessmentResult(assessmentState.answers);
      
      // Track assessment completion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'assessment_completed', {
          event_category: 'financial_health',
          event_label: 'assessment_completed',
          value: result.overallPercentage
        });
      }
      
      setAssessmentState(prev => ({
        ...prev,
        isComplete: true,
        result
      }));
    }
  };

  const handlePrevious = () => {
    if (assessmentState.currentQuestionIndex > 0) {
      setAssessmentState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
      setCurrentAnswer(null);
    } else if (assessmentState.currentQuestionIndex === 0) {
      // If on first question, go back to intro and clear progress
      localStorage.removeItem(STORAGE_KEY);
      setAssessmentState({
        currentQuestionIndex: -1,
        answers: [],
        isComplete: false,
        startedAt: new Date(),
        lastUpdated: new Date()
      });
    }
  };

  const handleRestart = () => {
    // Track assessment restart
    if (typeof gtag !== 'undefined') {
      gtag('event', 'assessment_restarted', {
        event_category: 'financial_health',
        event_label: 'assessment_restarted'
      });
    }
    
    localStorage.removeItem(STORAGE_KEY);
    setAssessmentState({
      currentQuestionIndex: -1,
      answers: [],
      isComplete: false,
      startedAt: new Date(),
      lastUpdated: new Date()
    });
  };

  const getExistingAnswer = (questionId: string): Answer | undefined => {
    return assessmentState.answers.find(a => a.questionId === questionId);
  };

  // Welcome Screen
  if (assessmentState.currentQuestionIndex === -1) {
    return (
      <div className="wizard-container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-8 sm:py-12"
        >
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Evaluá tu Salud Financiera
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Descubrí cómo está tu situación financiera actual y obtené recomendaciones 
              personalizadas para mejorar tus finanzas.
            </p>
          </div>

          <Button onClick={handleStart} size="lg" className="text-lg px-8 py-3 mb-2">
            <Play className="mr-2 h-5 w-5" />
            Comenzar Evaluación
          </Button>
          
          <p className="text-gray-400 text-xs mb-8">
            ⏱️ Tiempo estimado: 3-5 minutos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            {categoryInfo.map((category) => (
              <div key={category.id} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm text-center">
                <div className="flex flex-col items-center mb-2">
                  <span className="text-2xl mb-2">{category.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
                </div>
                <p className="text-gray-600 text-xs">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="font-semibold text-blue-900 mb-4 text-center">¿Qué vas a obtener?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-blue-800 text-sm">Evaluación completa de tu situación financiera</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-blue-800 text-sm">Puntaje personalizado por categoría</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-blue-800 text-sm">Recomendaciones específicas para mejorar</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-blue-800 text-sm">Links a herramientas y recursos útiles</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    );
  }

  // Results Screen
  if (assessmentState.isComplete && assessmentState.result) {
    return (
      <div className="wizard-container px-2 sm:px-4">
        <ResultsDashboard 
          result={assessmentState.result} 
          onRestart={handleRestart}
        />
      </div>
    );
  }

  // Question Screen
  return (
    <div className="wizard-container px-2 sm:px-4">
      <div className="mb-6">
        <ProgressBar progress={progress} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={assessmentState.currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentQuestion && (
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              existingAnswer={getExistingAnswer(currentQuestion.id)}
              questionNumber={assessmentState.currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center mt-8">
        <Button
          variant="outline"
          onClick={handlePrevious}
          className="flex items-center"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Anterior
        </Button>

        <div className="flex items-center space-x-4">
          {currentAnswer && (
            <Button
              onClick={handleNext}
              className="flex items-center"
            >
              {assessmentState.currentQuestionIndex === questions.length - 1 ? 'Finalizar' : 'Continuar'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

    </div>
  );
};

export default FinancialHealthWizard;