import React from 'react';
import { ExternalLink } from 'lucide-react';

// Global gtag function type declaration
declare global {
  function gtag(...args: any[]): void;
}

interface FinancialAdvisorCTAProps {
  variant?: 'retirement' | 'health' | 'general';
  className?: string;
}

const FinancialAdvisorCTA: React.FC<FinancialAdvisorCTAProps> = ({ 
  variant = 'general',
  className = ''
}) => {
  const getContent = () => {
    switch (variant) {
      case 'retirement':
        return {
          title: '¿Todavía no armaste tu fondo retiro? ¿Vas a depender de la jubilación del Estado?',
          description: 'En Quaestus te ayudamos a que tengas tranquilidad hoy y mañana. Te acompañamos para que puedas armarte tu jubilación y tener tu retiro asegurado. Nuestros asesores financieros diagraman una estrategia de acuerdo a tu situación financiera y objetivos específicos.',
          buttonText: 'Quiero jubilarme tranquilo',
          formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfSe5TgzbjWIAhK3G9ywzo-O0knx_wky8KcC8RKpEIaJYeZeg/viewform?usp=pp_url&entry.946569307=En+Que+Invierto'
        };
      case 'health':
        return {
          title: '¿Querés mejorar tu salud financiera con ayuda profesional?',
          description: 'Nuestros asesores financieros pueden ayudarte a implementar las recomendaciones de tu evaluación. Te acompañamos para crear un plan personalizado que se adapte a tu situación actual y objetivos futuros.',
          buttonText: 'Quiero asesoramiento personalizado',
          formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfSe5TgzbjWIAhK3G9ywzo-O0knx_wky8KcC8RKpEIaJYeZeg/viewform?usp=pp_url&entry.946569307=Salud+Financiera'
        };
      default:
        return {
          title: '¿Te interesa recibir asesoramiento financiero profesional?',
          description: 'En Quaestus te ayudamos a alcanzar tus objetivos financieros. Nuestros asesores diseñan estrategias personalizadas según tu perfil y situación particular.',
          buttonText: 'Quiero asesoramiento',
          formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfSe5TgzbjWIAhK3G9ywzo-O0knx_wky8KcC8RKpEIaJYeZeg/viewform?usp=pp_url&entry.946569307=En+Que+Invierto'
        };
    }
  };

  const content = getContent();

  const handleCTAClick = () => {
    // Track CTA click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        event_category: 'financial_advisor',
        event_label: `advisor_cta_${variant}`,
        source: variant === 'health' ? 'financial_health_results' : variant
      });
    }
  };

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 text-center text-white ${className}`}>
      <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-tight">
        {content.title}
      </h3>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        {content.description}
      </p>
      <a
        href={content.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCTAClick}
        className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base"
      >
        {content.buttonText}
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
};

export default FinancialAdvisorCTA;