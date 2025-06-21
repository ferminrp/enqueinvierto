import type { Question, QuestionCategory, CategoryInfo } from '../types/financialHealth';

export const categoryInfo: CategoryInfo[] = [
  {
    id: 'emergency',
    name: 'Fondo de Emergencia',
    description: 'Tu colchón financiero para imprevistos',
    icon: '🛡️',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'debt',
    name: 'Deudas y Gastos',
    description: 'Manejo de tus obligaciones financieras',
    icon: '💳',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'investment',
    name: 'Inversiones y Ahorro',
    description: 'Tu estrategia de crecimiento financiero',
    icon: '📈',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'planning',
    name: 'Planificación Futura',
    description: 'Preparación para objetivos a largo plazo',
    icon: '🎯',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'knowledge',
    name: 'Conocimiento Financiero',
    description: 'Tu nivel de educación financiera',
    icon: '🧠',
    color: 'bg-indigo-100 text-indigo-800'
  }
];

export const questions: Question[] = [
  // Emergency Fund (4 questions)
  {
    id: 'emergency_fund',
    category: 'emergency',
    text: '¿Tenés ahorros suficientes para cubrir gastos inesperados?',
    subtitle: 'Como una reparación del auto o una emergencia médica',
    type: 'single',
    weight: 1.2,
    options: [
      { value: 'none', label: 'No tengo ahorros de emergencia', score: 0 },
      { value: 'partial', label: 'Tengo algo, pero menos de 3 meses de gastos', score: 1 },
      { value: 'good', label: 'Tengo entre 3-6 meses de gastos cubiertos', score: 2 },
      { value: 'excellent', label: 'Tengo más de 6 meses cubiertos', score: 3 }
    ],
    positiveResponse: '¡Excelente! Tener un colchón financiero te da mucha tranquilidad 💪'
  },
  {
    id: 'emergency_access',
    category: 'emergency',
    text: '¿Qué tan rápido podés acceder a tus ahorros de emergencia?',
    subtitle: 'En caso de necesitar el dinero urgentemente',
    type: 'single',
    weight: 1.0,
    options: [
      { value: 'no_savings', label: 'No tengo ahorros de emergencia', score: 0 },
      { value: 'slow', label: 'Más de una semana (plazo fijo, inversiones)', score: 1 },
      { value: 'medium', label: 'Pocos días (cuenta de ahorro)', score: 2 },
      { value: 'immediate', label: 'Inmediatamente (cuenta corriente, efectivo)', score: 3 }
    ],
    positiveResponse: 'Perfecto! La liquidez es clave en emergencias 🚀'
  },
  {
    id: 'income_stability',
    category: 'emergency',
    text: '¿Cómo describirías la estabilidad de tus ingresos?',
    subtitle: 'Pensá en los próximos 6-12 meses',
    type: 'single',
    weight: 1.1,
    options: [
      { value: 'unstable', label: 'Muy inestables, no sé qué va a pasar', score: 0 },
      { value: 'somewhat_stable', label: 'Algo variables, pero tengo cierta previsibilidad', score: 1 },
      { value: 'stable', label: 'Bastante estables, trabajo en relación de dependencia', score: 2 },
      { value: 'very_stable', label: 'Muy estables, múltiples fuentes de ingresos', score: 3 }
    ],
    positiveResponse: '¡Qué bueno tener estabilidad! Eso facilita la planificación 📊'
  },
  {
    id: 'emergency_plan',
    category: 'emergency',
    text: '¿Tenés un plan claro para manejar una crisis financiera?',
    subtitle: 'Como perder el trabajo o tener una emergencia médica grande',
    type: 'single',
    weight: 1.0,
    options: [
      { value: 'no_plan', label: 'No tengo ningún plan', score: 0 },
      { value: 'basic_plan', label: 'Tengo una idea básica de qué haría', score: 1 },
      { value: 'detailed_plan', label: 'Tengo un plan detallado y lo reviso regularmente', score: 2 },
      { value: 'comprehensive', label: 'Tengo plan + seguros + red de contactos', score: 3 }
    ],
    positiveResponse: 'Excelente planificación! Estar preparado es la clave 🎯'
  },

  // Debt Management (4 questions)
  {
    id: 'debt_level',
    category: 'debt',
    text: '¿Cuál es tu nivel de deudas actualmente?',
    subtitle: 'Considerá tarjetas de crédito, préstamos, hipoteca',
    type: 'single',
    weight: 1.3,
    options: [
      { value: 'high', label: 'Altas - me cuesta mucho pagar las cuotas', score: 0 },
      { value: 'manageable', label: 'Manejables - pago las cuotas pero es ajustado', score: 1 },
      { value: 'low', label: 'Bajas - pago sin problemas', score: 2 },
      { value: 'none', label: 'No tengo deudas', score: 3 }
    ],
    positiveResponse: '¡Muy bien! Tener las deudas bajo control es fundamental 💯'
  },
  {
    id: 'payment_history',
    category: 'debt',
    text: '¿Cómo es tu historial de pagos?',
    subtitle: 'En los últimos 12 meses',
    type: 'single',
    weight: 1.1,
    options: [
      { value: 'poor', label: 'Varios pagos atrasados o mínimos', score: 0 },
      { value: 'fair', label: 'Algunos atrasos ocasionales', score: 1 },
      { value: 'good', label: 'Generalmente pago a tiempo', score: 2 },
      { value: 'excellent', label: 'Siempre pago a tiempo y completo', score: 3 }
    ],
    positiveResponse: 'Perfecto! Un buen historial crediticio abre muchas puertas 🔓'
  },
  {
    id: 'budget_control',
    category: 'debt',
    text: '¿Llevás un control de tus gastos mensuales?',
    subtitle: 'Conocés en qué gastás tu dinero cada mes',
    type: 'single',
    weight: 1.0,
    options: [
      { value: 'no_control', label: 'No tengo idea en qué gasto', score: 0 },
      { value: 'basic', label: 'Tengo una idea general', score: 1 },
      { value: 'detailed', label: 'Llevo un registro detallado', score: 2 },
      { value: 'automated', label: 'Uso apps y tengo todo automatizado', score: 3 }
    ],
    positiveResponse: '¡Excelente! Conocer tus gastos es el primer paso para controlarlos 📋'
  },
  {
    id: 'spending_habits',
    category: 'debt',
    text: '¿Cómo describirías tus hábitos de gasto?',
    subtitle: 'Sé honesto contigo mismo',
    type: 'single',
    weight: 1.0,
    options: [
      { value: 'impulsive', label: 'Bastante impulsivos, compro sin pensar mucho', score: 0 },
      { value: 'mixed', label: 'A veces impulsivos, a veces planificados', score: 1 },
      { value: 'planned', label: 'Generalmente planificados, pero con algunos caprichos', score: 2 },
      { value: 'disciplined', label: 'Muy disciplinados, siempre pienso antes de comprar', score: 3 }
    ],
    positiveResponse: '¡Qué disciplina! Eso te va a ayudar mucho a largo plazo 🏆'
  },

  // Investment & Savings (4 questions)
  {
    id: 'investment_portfolio',
    category: 'investment',
    text: '¿Tenés inversiones más allá de tu cuenta de ahorros?',
    subtitle: 'Plazo fijo, bonos, acciones, fondos comunes de inversión',
    type: 'single',
    weight: 1.2,
    options: [
      { value: 'none', label: 'No tengo ninguna inversión', score: 0 },
      { value: 'basic', label: 'Solo plazo fijo o caja de ahorro', score: 1 },
      { value: 'diversified', label: 'Tengo varias opciones (bonos, fondos)', score: 2 },
      { value: 'advanced', label: 'Portfolio diversificado con distintos activos', score: 3 }
    ],
    positiveResponse: '¡Genial! Diversificar es clave para hacer crecer tu dinero 📈'
  },
  {
    id: 'savings_rate',
    category: 'investment',
    text: '¿Qué porcentaje de tus ingresos lográs ahorrar mensualmente?',
    subtitle: 'Considerá todos tus ingresos netos',
    type: 'single',
    weight: 1.3,
    options: [
      { value: 'none', label: 'No logro ahorrar nada', score: 0 },
      { value: 'low', label: 'Menos del 10%', score: 1 },
      { value: 'good', label: 'Entre 10% y 20%', score: 2 },
      { value: 'excellent', label: 'Más del 20%', score: 3 }
    ],
    positiveResponse: '¡Increíble capacidad de ahorro! Eso te da mucha libertad financiera 💰'
  },
  {
    id: 'investment_knowledge',
    category: 'investment',
    text: '¿Cómo evaluás tu conocimiento sobre inversiones?',
    subtitle: 'Entendés los riesgos y las opciones disponibles',
    type: 'single',
    weight: 1.0,
    options: [
      { value: 'none', label: 'No entiendo nada de inversiones', score: 0 },
      { value: 'basic', label: 'Conozco lo básico (plazo fijo, bonos)', score: 1 },
      { value: 'intermediate', label: 'Entiendo bastante bien los distintos instrumentos', score: 2 },
      { value: 'advanced', label: 'Tengo conocimientos avanzados', score: 3 }
    ],
    positiveResponse: '¡Excelente! El conocimiento es tu mejor herramienta de inversión 🎓'
  },
  {
    id: 'investment_strategy',
    category: 'investment',
    text: '¿Tenés una estrategia clara para tus inversiones?',
    subtitle: 'Objetivos, horizonte temporal, tolerancia al riesgo',
    type: 'single',
    weight: 1.1,
    options: [
      { value: 'no_strategy', label: 'No tengo estrategia definida', score: 0 },
      { value: 'basic', label: 'Tengo ideas básicas pero no muy claras', score: 1 },
      { value: 'defined', label: 'Tengo objetivos y plazos definidos', score: 2 },
      { value: 'comprehensive', label: 'Estrategia completa que reviso regularmente', score: 3 }
    ],
    positiveResponse: '¡Perfecto! Una buena estrategia es el camino al éxito 🎯'
  },

  // Future Planning (3 questions)
  {
    id: 'retirement_planning',
    category: 'planning',
    text: '¿Estás pensando en tu jubilación?',
    subtitle: 'Más allá de los aportes obligatorios',
    type: 'single',
    weight: 1.2,
    options: [
      { value: 'no_planning', label: 'No pienso en eso todavía', score: 0 },
      { value: 'aware', label: 'Sé que debería pero no hago nada', score: 1 },
      { value: 'planning', label: 'Estoy empezando a planificar', score: 2 },
      { value: 'saving', label: 'Ya estoy ahorrando para la jubilación', score: 3 }
    ],
    positiveResponse: '¡Qué visión! Empezar temprano hace una diferencia enorme 🌟'
  },
  {
    id: 'financial_goals',
    category: 'planning',
    text: '¿Tenés objetivos financieros claros?',
    subtitle: 'Comprar una casa, viajar, cambiar de auto',
    type: 'single',
    weight: 1.1,
    options: [
      { value: 'no_goals', label: 'No tengo objetivos específicos', score: 0 },
      { value: 'vague', label: 'Tengo ideas vagas de lo que quiero', score: 1 },
      { value: 'specific', label: 'Tengo objetivos específicos y plazos', score: 2 },
      { value: 'detailed_plan', label: 'Objetivos detallados con plan de acción', score: 3 }
    ],
    positiveResponse: '¡Excelente! Tener objetivos claros te mantiene enfocado 🎯'
  },
  {
    id: 'insurance_coverage',
    category: 'planning',
    text: '¿Tenés seguros para proteger tu patrimonio?',
    subtitle: 'Seguro de vida, auto, hogar, salud',
    type: 'single',
    weight: 1.0,
    options: [
      { value: 'none', label: 'No tengo seguros', score: 0 },
      { value: 'basic', label: 'Solo los obligatorios (auto)', score: 1 },
      { value: 'adequate', label: 'Tengo los principales seguros', score: 2 },
      { value: 'comprehensive', label: 'Tengo cobertura completa', score: 3 }
    ],
    positiveResponse: '¡Muy bien! Proteger lo que construiste es fundamental 🛡️'
  },

  // Financial Knowledge (3 questions)
  {
    id: 'inflation_understanding',
    category: 'knowledge',
    text: '¿Entendés cómo la inflación afecta tus ahorros?',
    subtitle: 'Por qué es importante invertir y no solo ahorrar',
    type: 'single',
    weight: 1.0,
    options: [
      { value: 'no_understanding', label: 'No entiendo bien el concepto', score: 0 },
      { value: 'basic', label: 'Entiendo lo básico', score: 1 },
      { value: 'good', label: 'Lo entiendo bien y lo considero', score: 2 },
      { value: 'expert', label: 'Lo entiendo perfectamente y adapto mi estrategia', score: 3 }
    ],
    positiveResponse: '¡Excelente! Entender la inflación es clave para preservar tu poder adquisitivo 📊'
  },
  {
    id: 'financial_education',
    category: 'knowledge',
    text: '¿Buscás activamente educarte sobre finanzas?',
    subtitle: 'Libros, cursos, blogs, podcasts',
    type: 'single',
    weight: 1.0,
    options: [
      { value: 'never', label: 'No busco información financiera', score: 0 },
      { value: 'occasionally', label: 'De vez en cuando leo algo', score: 1 },
      { value: 'regularly', label: 'Leo regularmente sobre finanzas', score: 2 },
      { value: 'actively', label: 'Constantemente busco aprender más', score: 3 }
    ],
    positiveResponse: '¡Fantástico! La educación financiera es la mejor inversión 📚'
  },
  {
    id: 'financial_confidence',
    category: 'knowledge',
    text: '¿Qué tan confiado te sentís tomando decisiones financieras?',
    subtitle: 'Elegir inversiones, solicitar créditos, negociar',
    type: 'single',
    weight: 1.1,
    options: [
      { value: 'not_confident', label: 'Nada confiado, me da miedo decidir', score: 0 },
      { value: 'somewhat', label: 'Algo confiado, pero con dudas', score: 1 },
      { value: 'confident', label: 'Bastante confiado en mis decisiones', score: 2 },
      { value: 'very_confident', label: 'Muy confiado, entiendo bien los riesgos', score: 3 }
    ],
    positiveResponse: '¡Genial! La confianza viene del conocimiento 💪'
  }
];

export const getQuestionsByCategory = (category: QuestionCategory): Question[] => {
  return questions.filter(q => q.category === category);
};

export const getTotalQuestions = (): number => {
  return questions.length;
};

export const getMaxScore = (): number => {
  return questions.reduce((total, question) => total + (3 * question.weight), 0);
};

export const getCategoryMaxScore = (category: QuestionCategory): number => {
  return getQuestionsByCategory(category).reduce((total, question) => total + (3 * question.weight), 0);
};