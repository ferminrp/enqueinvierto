import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0-100
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  showPercentage = false 
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Progreso
        </span>
        {showPercentage && (
          <span className="text-sm text-gray-500">
            {Math.round(progress)}%
          </span>
        )}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ 
            duration: 0.5, 
            ease: "easeInOut" 
          }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
      
      <div className="mt-2 text-xs text-gray-500 text-center">
        {progress < 25 && "🚀 ¡Excelente! Has comenzado"}
        {progress >= 25 && progress < 50 && "💪 ¡Vas muy bien!"}
        {progress >= 50 && progress < 75 && "🌟 ¡Ya casi llegás!"}
        {progress >= 75 && progress < 100 && "🎯 ¡Último tramo!"}
        {progress >= 100 && "🎉 ¡Completado!"}
      </div>
    </div>
  );
};

export default ProgressBar;