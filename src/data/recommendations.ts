import type { Recommendation, CategoryScore } from '../types/financialHealth';

const emergencyRecommendations: Recommendation[] = [
  {
    id: 'emergency_build_fund',
    title: 'Construí tu fondo de emergencia',
    description: 'Empezá ahorrando para cubrir 3-6 meses de gastos básicos en caso de imprevistos.',
    priority: 'high',
    category: 'emergency',
    actionItems: [
      'Calculá tus gastos mensuales básicos',
      'Abrir una cuenta de ahorros separada',
      'Automatizar transferencias mensuales pequeñas',
      'Aumentar gradualmente el monto hasta alcanzar tu meta'
    ],
    relatedLinks: [
      {
        text: 'Calculadora de Jubilación',
        url: '/jubilacion',
        type: 'internal'
      }
    ],
    estimatedTimeToComplete: '3-6 meses'
  },
  {
    id: 'emergency_improve_access',
    title: 'Mejorá el acceso a tus ahorros',
    description: 'Asegurate de poder acceder rápidamente a tus ahorros de emergencia.',
    priority: 'medium',
    category: 'emergency',
    actionItems: [
      'Mover parte de los ahorros a una cuenta más líquida',
      'Considerar una cuenta remunerada en lugar de plazo fijo',
      'Mantener un pequeño fondo en efectivo en casa',
      'Configurar transferencias rápidas desde inversiones'
    ],
    estimatedTimeToComplete: '1-2 semanas'
  },
  {
    id: 'emergency_diversify_income',
    title: 'Diversificá tus fuentes de ingresos',
    description: 'Reducí la dependencia de una sola fuente de ingresos.',
    priority: 'medium',
    category: 'emergency',
    actionItems: [
      'Explorar oportunidades de ingresos adicionales',
      'Desarrollar habilidades que puedan generar ingresos',
      'Considerar inversiones que generen renta pasiva',
      'Crear un plan de contingencia laboral'
    ],
    estimatedTimeToComplete: '3-12 meses'
  }
];

const debtRecommendations: Recommendation[] = [
  {
    id: 'debt_create_budget',
    title: 'Creá un presupuesto detallado',
    description: 'Conocé exactamente en qué gastás tu dinero para tomar mejores decisiones.',
    priority: 'high',
    category: 'debt',
    actionItems: [
      'Registrar todos los gastos por una semana',
      'Categorizar los gastos (necesarios vs. opcionales)',
      'Usar una app de control de gastos',
      'Revisar y ajustar el presupuesto mensualmente'
    ],
    estimatedTimeToComplete: '1 mes'
  },
  {
    id: 'debt_pay_down_strategy',
    title: 'Desarrollá una estrategia para reducir deudas',
    description: 'Priorizá el pago de deudas con mayor tasa de interés.',
    priority: 'high',
    category: 'debt',
    actionItems: [
      'Listar todas las deudas con sus tasas de interés',
      'Aplicar el método "avalancha" (mayor tasa primero)',
      'Considerar consolidación de deudas si es conveniente',
      'Evitar contraer nuevas deudas innecesarias'
    ],
    estimatedTimeToComplete: '6-24 meses'
  },
  {
    id: 'debt_improve_payment_habits',
    title: 'Mejorá tus hábitos de pago',
    description: 'Establecé un historial crediticio sólido pagando siempre a tiempo.',
    priority: 'medium',
    category: 'debt',
    actionItems: [
      'Configurar débito automático para cuotas mínimas',
      'Establecer recordatorios de vencimiento',
      'Pagar más del mínimo cuando sea posible',
      'Revisar regularmente tu historial crediticio'
    ],
    estimatedTimeToComplete: '1-3 meses'
  }
];

const investmentRecommendations: Recommendation[] = [
  {
    id: 'investment_start_simple',
    title: 'Empezá con inversiones simples',
    description: 'Comenzá con instrumentos básicos y seguros antes de diversificar.',
    priority: 'high',
    category: 'investment',
    actionItems: [
      'Abrir una cuenta en un broker regulado',
      'Comenzar con fondos comunes de inversión',
      'Investigar sobre bonos del gobierno',
      'Destinar un pequeño % a inversiones cada mes'
    ],
    relatedLinks: [
      {
        text: 'Ver Carteras Recomendadas',
        url: '/',
        type: 'internal'
      },
      {
        text: 'Glosario Financiero',
        url: '/glosario',
        type: 'internal'
      }
    ],
    estimatedTimeToComplete: '1-2 meses'
  },
  {
    id: 'investment_increase_savings',
    title: 'Aumentá tu tasa de ahorro',
    description: 'Buscá oportunidades para ahorrar más dinero cada mes.',
    priority: 'high',
    category: 'investment',
    actionItems: [
      'Revisar gastos fijos y buscar recortes',
      'Automatizar transferencias a ahorro',
      'Usar la regla 50/30/20 (gastos/diversión/ahorro)',
      'Aumentar gradualmente el % de ahorro'
    ],
    estimatedTimeToComplete: '2-6 meses'
  },
  {
    id: 'investment_diversify_portfolio',
    title: 'Diversificá tu cartera',
    description: 'No pongas todos los huevos en la misma canasta.',
    priority: 'medium',
    category: 'investment',
    actionItems: [
      'Investigar diferentes tipos de activos',
      'Considerar inversiones en distintas monedas',
      'Balancear entre renta fija y variable',
      'Revisar y rebalancear tu cartera regularmente'
    ],
    relatedLinks: [
      {
        text: 'Ver Carteras Recomendadas',
        url: '/',
        type: 'internal'
      }
    ],
    estimatedTimeToComplete: '3-6 meses'
  }
];

const planningRecommendations: Recommendation[] = [
  {
    id: 'planning_set_goals',
    title: 'Definí objetivos financieros claros',
    description: 'Establecé metas específicas, medibles y con plazos definidos.',
    priority: 'high',
    category: 'planning',
    actionItems: [
      'Escribir objetivos a corto y largo plazo',
      'Calcular cuánto dinero necesitás para cada meta',
      'Crear un plan de ahorro para cada objetivo',
      'Revisar y ajustar objetivos regularmente'
    ],
    estimatedTimeToComplete: '1-2 semanas'
  },
  {
    id: 'planning_retirement',
    title: 'Empezá a planificar tu jubilación',
    description: 'Cuanto antes empieces, más dinero vas a tener cuando te jubiles.',
    priority: 'high',
    category: 'planning',
    actionItems: [
      'Calcular cuánto dinero vas a necesitar',
      'Investigar opciones de ahorro previsional',
      'Considerar inversiones a largo plazo',
      'Revisar tu situación previsional regularmente'
    ],
    relatedLinks: [
      {
        text: 'Calculadora de Jubilación',
        url: '/jubilacion',
        type: 'internal'
      }
    ],
    estimatedTimeToComplete: '1 mes'
  },
  {
    id: 'planning_insurance',
    title: 'Evaluá tu cobertura de seguros',
    description: 'Protegé tu patrimonio y tu familia con los seguros adecuados.',
    priority: 'medium',
    category: 'planning',
    actionItems: [
      'Revisar seguros existentes (auto, hogar, vida)',
      'Evaluar si necesitás cobertura adicional',
      'Comparar precios entre diferentes aseguradoras',
      'Considerar seguro de vida si tenés dependientes'
    ],
    estimatedTimeToComplete: '2-4 semanas'
  }
];

const knowledgeRecommendations: Recommendation[] = [
  {
    id: 'knowledge_learn_basics',
    title: 'Aprendé los conceptos básicos',
    description: 'Entender las finanzas te va a ayudar a tomar mejores decisiones.',
    priority: 'high',
    category: 'knowledge',
    actionItems: [
      'Leer libros básicos sobre finanzas personales',
      'Seguir blogs y podcasts financieros',
      'Tomar un curso online de finanzas',
      'Practicar con calculadoras financieras'
    ],
    relatedLinks: [
      {
        text: 'Glosario Financiero',
        url: '/glosario',
        type: 'internal'
      }
    ],
    estimatedTimeToComplete: '1-3 meses'
  },
  {
    id: 'knowledge_understand_inflation',
    title: 'Entendé el impacto de la inflación',
    description: 'Aprendé por qué es importante invertir y no solo ahorrar.',
    priority: 'medium',
    category: 'knowledge',
    actionItems: [
      'Investigar sobre inflación en Argentina',
      'Calcular cómo afecta la inflación a tus ahorros',
      'Buscar inversiones que protejan del poder adquisitivo',
      'Entender la diferencia entre tasa nominal y real'
    ],
    relatedLinks: [
      {
        text: 'Glosario: Inflación',
        url: '/glosario/inflacion',
        type: 'internal'
      }
    ],
    estimatedTimeToComplete: '2-4 semanas'
  },
  {
    id: 'knowledge_build_confidence',
    title: 'Construí confianza en tus decisiones',
    description: 'Empezá con decisiones pequeñas y construí experiencia gradualmente.',
    priority: 'medium',
    category: 'knowledge',
    actionItems: [
      'Comenzar con inversiones pequeñas para aprender',
      'Unirse a comunidades financieras online',
      'Practicar con simuladores de inversión',
      'Consultar con asesores financieros cuando sea necesario'
    ],
    estimatedTimeToComplete: '3-6 meses'
  }
];

const allRecommendations = [
  ...emergencyRecommendations,
  ...debtRecommendations,
  ...investmentRecommendations,
  ...planningRecommendations,
  ...knowledgeRecommendations
];

export const getRecommendationsByScore = (categoryScores: CategoryScore[]): Recommendation[] => {
  const selectedRecommendations: Recommendation[] = [];

  categoryScores.forEach(categoryScore => {
    const categoryRecs = allRecommendations.filter(rec => rec.category === categoryScore.category);
    
    if (categoryScore.level === 'critical') {
      // Add all high priority recommendations for critical categories
      selectedRecommendations.push(...categoryRecs.filter(rec => rec.priority === 'high'));
    } else if (categoryScore.level === 'needs_improvement') {
      // Add high priority recommendations for categories that need improvement
      selectedRecommendations.push(...categoryRecs.filter(rec => rec.priority === 'high').slice(0, 1));
      selectedRecommendations.push(...categoryRecs.filter(rec => rec.priority === 'medium').slice(0, 1));
    } else if (categoryScore.level === 'good') {
      // Add medium priority recommendations for good categories
      selectedRecommendations.push(...categoryRecs.filter(rec => rec.priority === 'medium').slice(0, 1));
    }
    // For excellent categories, don't add recommendations
  });

  // Sort by priority and limit to top 6 recommendations
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  return selectedRecommendations
    .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
    .slice(0, 6);
};

export const getRecommendationById = (id: string): Recommendation | undefined => {
  return allRecommendations.find(rec => rec.id === id);
};