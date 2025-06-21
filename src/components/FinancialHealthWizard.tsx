import React, { useState, useEffect } from 'react';

// Global gtag function type declaration
declare global {
  function gtag(...args: any[]): void;
}
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, RotateCcw } from 'lucide-react';
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

  const [showPositiveFeedback, setShowPositiveFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  // Load saved state on component mount
  useEffect(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        setAssessmentState({
          ...parsed,
          startedAt: new Date(parsed.startedAt),
          lastUpdated: new Date(parsed.lastUpdated)
        });
      } catch (error) {
        console.error('Failed to parse saved assessment state:', error);
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

    // Show positive feedback if available
    if (currentQuestion?.positiveResponse && answer.score >= 2) {
      setFeedbackText(currentQuestion.positiveResponse);
      setShowPositiveFeedback(true);
      setTimeout(() => setShowPositiveFeedback(false), 2000);
    }

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (assessmentState.currentQuestionIndex < questions.length - 1) {
        setAssessmentState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1
        }));
      } else {
        // Assessment complete
        const result = calculateAssessmentResult(newAnswers);
        
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
    }, 1200);
  };

  const handlePrevious = () => {
    if (assessmentState.currentQuestionIndex > 0) {
      setAssessmentState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
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
      <div className="wizard-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12"
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Evaluá tu Salud Financiera
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Descubrí cómo está tu situación financiera actual y obtené recomendaciones 
              personalizadas para mejorar tus finanzas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            {categoryInfo.map((category) => (
              <div key={category.id} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="font-semibold text-blue-900 mb-2">¿Qué vas a obtener?</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>✅ Evaluación completa de tu situación financiera</li>
              <li>✅ Puntaje personalizado por categoría</li>
              <li>✅ Recomendaciones específicas para mejorar</li>
              <li>✅ Links a herramientas y recursos útiles</li>
            </ul>
          </div>

          <p className="text-gray-500 text-sm mb-6">
            ⏱️ Tiempo estimado: 3-5 minutos • {questions.length} preguntas
          </p>

          <Button onClick={handleStart} size="lg" className="text-lg px-8 py-3">
            <Play className="mr-2 h-5 w-5" />
            Comenzar Evaluación
          </Button>
        </motion.div>
      </div>
    );
  }

  // Results Screen
  if (assessmentState.isComplete && assessmentState.result) {
    return (
      <div className="wizard-container">
        <ResultsDashboard 
          result={assessmentState.result} 
          onRestart={handleRestart}
        />
      </div>
    );
  }

  // Question Screen
  return (
    <div className="wizard-container">
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
          disabled={assessmentState.currentQuestionIndex === 0}
          className="flex items-center"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Anterior
        </Button>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleRestart}
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Empezar de nuevo
          </Button>
        </div>
      </div>

      {/* Positive Feedback Toast */}
      <AnimatePresence>
        {showPositiveFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg max-w-md">
              <p className="text-sm font-medium">{feedbackText}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinancialHealthWizard;