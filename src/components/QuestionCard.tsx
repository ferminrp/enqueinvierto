import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import type { Question, Answer, QuestionOption } from '../types/financialHealth';
import { categoryInfo } from '../data/healthQuestions';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
  existingAnswer?: Answer;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  existingAnswer,
  questionNumber,
  totalQuestions
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    existingAnswer?.value as string || ''
  );

  const categoryData = categoryInfo.find(cat => cat.id === question.category);

  const handleOptionSelect = (option: QuestionOption) => {
    setSelectedValue(option.value);
    
    const answer: Answer = {
      questionId: question.id,
      value: option.value,
      score: option.score * question.weight
    };
    
    onAnswer(answer);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {categoryData && (
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryData.color}`}>
                  {categoryData.icon} {categoryData.name}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-500 font-medium">
              {questionNumber} de {totalQuestions}
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="px-6 py-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              {question.text}
            </h2>
            {question.subtitle && (
              <p className="text-gray-600 text-lg leading-relaxed">
                {question.subtitle}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant={selectedValue === option.value ? "default" : "outline"}
                  className={`w-full text-left justify-start h-auto p-4 rounded-xl transition-all duration-200 ${
                    selectedValue === option.value
                      ? 'bg-blue-600 text-white shadow-lg transform scale-[1.02]'
                      : 'hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  <div className="flex items-center w-full">
                    <div className={`w-5 h-5 rounded-full border-2 mr-4 flex-shrink-0 ${
                      selectedValue === option.value
                        ? 'bg-white border-white'
                        : 'border-gray-300'
                    }`}>
                      {selectedValue === option.value && (
                        <div className="w-full h-full rounded-full bg-blue-600 scale-50"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${
                        selectedValue === option.value ? 'text-white' : 'text-gray-900'
                      }`}>
                        {option.label}
                      </div>
                      {option.description && (
                        <div className={`text-sm mt-1 ${
                          selectedValue === option.value ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {option.description}
                        </div>
                      )}
                    </div>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Help text */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          💡 Respondé con honestidad para obtener resultados más precisos
        </p>
      </div>
    </div>
  );
};

export default QuestionCard;