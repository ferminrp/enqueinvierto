globalThis.process ??= {}; globalThis.process.env ??= {};
function getColorForAssetType(type, opacity = 1) {
  if (type.includes("Cash") || type.includes("Caución")) {
    return `rgba(34, 197, 94, ${opacity})`;
  } else if (type.includes("Alternativos") || type.includes("Metales")) {
    return `rgba(234, 179, 8, ${opacity})`;
  } else if (type.includes("Renta Fija") || type.includes("Soberanos") || type.includes("Corporativos") || type.includes("Bopreal") || type.includes("CER") || type.includes("Tasa Fija")) {
    return `rgba(59, 130, 246, ${opacity})`;
  } else if (type.includes("Renta Variable") || type.includes("Tecnología") || type.includes("S&P") || type.includes("Financials") || type.includes("Energía") || type.includes("Oil & Gas") || type.includes("Growth") || type.includes("Value") || type.includes("EWZ")) {
    return `rgba(239, 68, 68, ${opacity})`;
  }
  if (type.includes("USD")) {
    return `rgba(16, 185, 129, ${opacity})`;
  } else if (type.includes("ARS")) {
    return `rgba(74, 222, 128, ${opacity})`;
  } else if (type.includes("EEUU")) {
    return `rgba(220, 38, 38, ${opacity})`;
  } else if (type.includes("Brasil")) {
    return `rgba(248, 113, 113, ${opacity})`;
  } else if (type.includes("Arg")) {
    return `rgba(254, 202, 202, ${opacity})`;
  }
  return `rgba(107, 114, 128, ${opacity})`;
}

const portfolios = [
  {
    nombre: "Cartera Táctica: Conservador - Corto Plazo",
    fecha: "Abril 2025 - Pos salida del cepo",
    composicion_principal: [
      { tipo: "Cash - MM", porcentaje: 70 },
      { tipo: "Renta Fija", porcentaje: 30 }
    ],
    composicion_detallada: [
      { tipo: "USD - Caución", porcentaje: 60 },
      { tipo: "USD - Corporativos", porcentaje: 20 },
      { tipo: "USD - Bopreal", porcentaje: 10 },
      { tipo: "ARS - Caución", porcentaje: 10 }
    ]
  },
  {
    nombre: "Cartera Táctica: Moderado - Corto Plazo",
    fecha: "Abril 2025 - Pos salida del cepo",
    composicion_principal: [
      { tipo: "Cash - MM", porcentaje: 25 },
      { tipo: "Renta Fija", porcentaje: 70 },
      { tipo: "Renta Variable", porcentaje: 5 }
    ],
    composicion_detallada: [
      { tipo: "USD - Caución", porcentaje: 15 },
      { tipo: "ARS - Caución", porcentaje: 10 },
      { tipo: "USD - Corporativos", porcentaje: 30 },
      { tipo: "USD - Bopreal", porcentaje: 20 },
      { tipo: "USD - Soberanos hard", porcentaje: 10 },
      { tipo: "ARS - CER", porcentaje: 10 },
      { tipo: "EEUU - Tecnología", porcentaje: 3 },
      { tipo: "Arg - Oil & Gas", porcentaje: 2 }
    ]
  },
  {
    nombre: "Cartera Táctica: Agresivo - Corto Plazo",
    fecha: "Abril 2025 - Pos salida del cepo",
    composicion_principal: [
      { tipo: "Cash - MM", porcentaje: 5 },
      { tipo: "Renta Fija", porcentaje: 72 },
      { tipo: "Renta Variable", porcentaje: 20 },
      { tipo: "Alternativos", porcentaje: 3 }
    ],
    composicion_detallada: [
      { tipo: "USD - Bopreal", porcentaje: 10 },
      { tipo: "USD - Soberanos hard", porcentaje: 32 },
      { tipo: "ARS - Tasa Fija", porcentaje: 10 },
      { tipo: "ARS - CER", porcentaje: 20 },
      { tipo: "ARS - Caución", porcentaje: 5 },
      { tipo: "Metales", porcentaje: 3 },
      { tipo: "EEUU - Tecnología", porcentaje: 3 },
      { tipo: "EEUU - S&P", porcentaje: 2 },
      { tipo: "Brasil - EWZ", porcentaje: 5 },
      { tipo: "Arg - Energía", porcentaje: 2 },
      { tipo: "Arg - Financials", porcentaje: 3 },
      { tipo: "Arg - Oil & Gas", porcentaje: 5 }
    ]
  },
  {
    nombre: "Cartera Táctica: Conservador - Mediano Plazo",
    fecha: "Abril 2025 - Pos salida del cepo",
    composicion_principal: [
      { tipo: "Cash - MM", porcentaje: 25 },
      { tipo: "Renta Fija", porcentaje: 75 }
    ],
    composicion_detallada: [
      { tipo: "USD - Caución", porcentaje: 20 },
      { tipo: "ARS - Caución", porcentaje: 5 },
      { tipo: "USD - Corporativos", porcentaje: 50 },
      { tipo: "USD - Bopreal", porcentaje: 15 },
      { tipo: "ARS - CER", porcentaje: 10 }
    ]
  },
  {
    nombre: "Cartera Táctica: Moderado - Mediano Plazo",
    fecha: "Abril 2025 - Pos salida del cepo",
    composicion_principal: [
      { tipo: "Cash - MM", porcentaje: 10 },
      { tipo: "Alternativos", porcentaje: 2 },
      { tipo: "Renta Variable", porcentaje: 15 },
      { tipo: "Renta Fija", porcentaje: 73 }
    ],
    composicion_detallada: [
      { tipo: "USD - Caución", porcentaje: 5 },
      { tipo: "ARS - Caución", porcentaje: 5 },
      { tipo: "USD - Corporativos", porcentaje: 23 },
      { tipo: "USD - Bopreal", porcentaje: 20 },
      { tipo: "USD - Soberanos hard", porcentaje: 15 },
      { tipo: "ARS - CER", porcentaje: 15 },
      { tipo: "Metales", porcentaje: 2 },
      { tipo: "EEUU - Tecnología", porcentaje: 2 },
      { tipo: "EEUU - S&P", porcentaje: 5 },
      { tipo: "Brasil - EWZ", porcentaje: 3 },
      { tipo: "Arg - Financials", porcentaje: 2 },
      { tipo: "Arg - Oil & Gas", porcentaje: 3 }
    ]
  },
  {
    nombre: "Cartera Táctica: Agresivo - Mediano Plazo",
    fecha: "Abril 2025 - Pos salida del cepo",
    composicion_principal: [
      { tipo: "Alternativos", porcentaje: 5 },
      { tipo: "Renta Variable", porcentaje: 35 },
      { tipo: "Renta Fija", porcentaje: 60 }
    ],
    composicion_detallada: [
      { tipo: "USD - Bopreal", porcentaje: 5 },
      { tipo: "USD - Soberanos hard", porcentaje: 20 },
      { tipo: "ARS - Tasa Fija", porcentaje: 10 },
      { tipo: "ARS - CER", porcentaje: 25 },
      { tipo: "Metales", porcentaje: 5 },
      { tipo: "EEUU - Tecnología", porcentaje: 4 },
      { tipo: "EEUU - S&P", porcentaje: 4 },
      { tipo: "EEUU - Financials", porcentaje: 2 },
      { tipo: "EEUU - Energía", porcentaje: 3 },
      { tipo: "Brasil - EWZ", porcentaje: 7 },
      { tipo: "Arg - Energía", porcentaje: 2 },
      { tipo: "Arg - Financials", porcentaje: 5 },
      { tipo: "Arg - Oil & Gas", porcentaje: 6 },
      { tipo: "EEUU - Growth", porcentaje: 2 }
    ]
  },
  {
    nombre: "Cartera Táctica: Conservador - Largo Plazo",
    fecha: "Abril 2025 - Pos salida del cepo",
    composicion_principal: [
      { tipo: "Cash - MM", porcentaje: 10 },
      { tipo: "Alternativos", porcentaje: 3 },
      { tipo: "Renta Variable", porcentaje: 10 },
      { tipo: "Renta Fija", porcentaje: 77 }
    ],
    composicion_detallada: [
      { tipo: "USD - Caución", porcentaje: 7 },
      { tipo: "ARS - Caución", porcentaje: 3 },
      { tipo: "USD - Corporativos", porcentaje: 50 },
      { tipo: "USD - Bopreal", porcentaje: 15 },
      { tipo: "ARS - CER", porcentaje: 12 },
      { tipo: "Metales", porcentaje: 3 },
      { tipo: "EEUU - Tecnología", porcentaje: 1 },
      { tipo: "EEUU - S&P", porcentaje: 2 },
      { tipo: "EEUU - Financials", porcentaje: 3 },
      { tipo: "Brasil - EWZ", porcentaje: 1 },
      { tipo: "EEUU - Value", porcentaje: 2 },
      { tipo: "Arg - Oil & Gas", porcentaje: 1 }
    ]
  },
  {
    nombre: "Cartera Táctica: Moderado - Largo Plazo",
    fecha: "Abril 2025 - Pos salida del cepo",
    composicion_principal: [
      { tipo: "Alternativos", porcentaje: 5 },
      { tipo: "Renta Variable", porcentaje: 30 },
      { tipo: "Renta Fija", porcentaje: 65 }
    ],
    composicion_detallada: [
      { tipo: "Metales", porcentaje: 5 },
      { tipo: "USD - Corporativos", porcentaje: 15 },
      { tipo: "USD - Soberanos hard", porcentaje: 25 },
      { tipo: "USD - Bopreal", porcentaje: 10 },
      { tipo: "ARS - CER", porcentaje: 15 },
      { tipo: "EEUU - Tecnología", porcentaje: 5 },
      { tipo: "EEUU - S&P", porcentaje: 6 },
      { tipo: "EEUU - Financials", porcentaje: 3 },
      { tipo: "Brasil - EWZ", porcentaje: 4 },
      { tipo: "Arg - Financials", porcentaje: 3 },
      { tipo: "Arg - Oil & Gas", porcentaje: 5 },
      { tipo: "EEUU - Growth", porcentaje: 2 },
      { tipo: "EEUU - Value", porcentaje: 2 }
    ]
  },
  {
    nombre: "Cartera Táctica: Moderado - Largo Plazo (Alternativa)",
    fecha: "Abril 2025 - Pos salida del cepo",
    composicion_principal: [
      { tipo: "Alternativos", porcentaje: 5 },
      { tipo: "Renta Variable", porcentaje: 45 },
      { tipo: "Renta Fija", porcentaje: 50 }
    ],
    composicion_detallada: [
      { tipo: "Metales", porcentaje: 5 },
      { tipo: "USD - Soberanos hard", porcentaje: 35 },
      { tipo: "ARS - CER", porcentaje: 15 },
      { tipo: "EEUU - Tecnología", porcentaje: 6 },
      { tipo: "EEUU - S&P", porcentaje: 7 },
      { tipo: "EEUU - Financials", porcentaje: 4 },
      { tipo: "EEUU - Energía", porcentaje: 3 },
      { tipo: "Brasil - EWZ", porcentaje: 7 },
      { tipo: "Arg - Energía", porcentaje: 3 },
      { tipo: "Arg - Financials", porcentaje: 5 },
      { tipo: "Arg - Oil & Gas", porcentaje: 7 },
      { tipo: "EEUU - Growth", porcentaje: 3 }
    ]
  }
];

export { getColorForAssetType as g, portfolios as p };
