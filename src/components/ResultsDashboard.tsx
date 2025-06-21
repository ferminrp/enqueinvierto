import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Share2, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import type { AssessmentResult } from '../types/financialHealth';
import { categoryInfo } from '../data/healthQuestions';
import { getLevelColor, getLevelIcon, getLevelText } from '../utils/assessmentScoring';

interface ResultsDashboardProps {
  result: AssessmentResult;
  onRestart: () => void;
}

const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ result, onRestart }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mi Evaluación de Salud Financiera',
          text: `Obtuve un ${result.overallPercentage}% en mi evaluación financiera. ¡Evaluá tu salud financiera también!`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado al portapapeles');
    }
  };

  const getOverallMessage = () => {
    switch (result.overallLevel) {
      case 'excellent':
        return {
          title: '¡Excelente salud financiera! 🌟',
          description: 'Tenés una situación financiera muy sólida. Seguí así y considerá optimizar aún más tus inversiones.',
          color: 'text-green-600'
        };
      case 'good':
        return {
          title: 'Buena salud financiera 👍',
          description: 'Estás en buen camino. Con algunos ajustes podés mejorar aún más tu situación.',
          color: 'text-blue-600'
        };
      case 'needs_improvement':
        return {
          title: 'Hay margen para mejorar ⚠️',
          description: 'Tenés una base, pero hay oportunidades importantes de mejora. ¡Empecemos!',
          color: 'text-yellow-600'
        };
      case 'critical':
        return {
          title: 'Necesitás atención urgente 🚨',
          description: 'Tu situación financiera requiere acción inmediata. No te desanimes, con un plan podés mejorar.',
          color: 'text-red-600'
        };
    }
  };

  const overallMessage = getOverallMessage();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tu Salud Financiera
          </h1>
          <p className="text-gray-600 text-lg">
            Completaste la evaluación el {result.completedAt.toLocaleDateString('es-AR')}
          </p>
        </div>

        {/* Overall Score */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8 text-center"
        >
          <div className="mb-6">
            <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-2">
              {result.overallPercentage}%
            </div>
            <div className={`text-2xl font-semibold ${overallMessage.color}`}>
              {overallMessage.title}
            </div>
          </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            {overallMessage.description}
          </p>

          <div className="flex justify-center space-x-4">
            <Button onClick={handleShare} variant="outline" className="flex items-center">
              <Share2 className="mr-2 h-4 w-4" />
              Compartir
            </Button>
            <Button onClick={onRestart} variant="outline" className="flex items-center">
              <RotateCcw className="mr-2 h-4 w-4" />
              Empezar de nuevo
            </Button>
          </div>
        </motion.div>

        {/* Category Breakdown */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Detalle por Categoría
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.categoryScores.map((categoryScore, index) => {
              const categoryData = categoryInfo.find(cat => cat.id === categoryScore.category);
              return (
                <motion.div
                  key={categoryScore.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md border border-gray-200 p-6"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{categoryData?.icon}</span>
                    <h3 className="font-semibold text-gray-900">{categoryData?.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {categoryScore.percentage}%
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(categoryScore.level)}`}>
                        {getLevelIcon(categoryScore.level)} {getLevelText(categoryScore.level)}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-full rounded-full ${
                          categoryScore.percentage >= 85 ? 'bg-green-500' :
                          categoryScore.percentage >= 70 ? 'bg-blue-500' :
                          categoryScore.percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${categoryScore.percentage}%` }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    {categoryData?.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        {result.recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Recomendaciones Personalizadas
            </h2>
            
            <div className="grid gap-6">
              {result.recommendations.map((recommendation, index) => {
                const categoryData = categoryInfo.find(cat => cat.id === recommendation.category);
                return (
                  <motion.div
                    key={recommendation.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                    className="border border-gray-200 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium mr-3 ${
                            recommendation.priority === 'high' ? 'bg-red-100 text-red-800' :
                            recommendation.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {recommendation.priority === 'high' ? '🔥 Alta' :
                             recommendation.priority === 'medium' ? '⚡ Media' : '📋 Baja'}
                          </span>
                          {categoryData && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryData.color}`}>
                              {categoryData.icon} {categoryData.name}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                          {recommendation.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {recommendation.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Plan de acción:</h4>
                      <ul className="space-y-2">
                        {recommendation.actionItems.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {recommendation.relatedLinks && recommendation.relatedLinks.length > 0 && (
                      <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-medium text-gray-900 mb-2">Recursos útiles:</h4>
                        <div className="flex flex-wrap gap-2">
                          {recommendation.relatedLinks.map((link, linkIndex) => (
                            <Button
                              key={linkIndex}
                              variant="outline"
                              size="sm"
                              asChild
                              className="text-sm"
                            >
                              <a href={link.url} target={link.type === 'external' ? '_blank' : '_self'}>
                                {link.text}
                                {link.type === 'external' && <ExternalLink className="ml-1 h-3 w-3" />}
                              </a>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {recommendation.estimatedTimeToComplete && (
                      <div className="mt-4 text-sm text-gray-500">
                        ⏱️ Tiempo estimado: {recommendation.estimatedTimeToComplete}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>
            💡 Recordá que la salud financiera es un proceso continuo. 
            Revisá tu situación regularmente y ajustá tu estrategia según sea necesario.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsDashboard;