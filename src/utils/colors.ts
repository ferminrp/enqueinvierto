export function getColorForAssetType(type: string, opacity = 1): string {
  // Nuevo esquema de colores según lo solicitado
  if (type.includes("Cash") || type.includes("Caución")) {
    // Gama verde para Cash
    return `rgba(34, 197, 94, ${opacity})` // Verde
  } else if (type.includes("Alternativos") || type.includes("Metales")) {
    // Gama amarilla para Alternativos
    return `rgba(234, 179, 8, ${opacity})` // Amarillo
  } else if (
    type.includes("Renta Fija") ||
    type.includes("Soberanos") ||
    type.includes("Corporativos") ||
    type.includes("Bopreal") ||
    type.includes("CER") ||
    type.includes("Tasa Fija")
  ) {
    // Gama azul/celeste para Renta Fija (cambiado de violeta a azul)
    return `rgba(59, 130, 246, ${opacity})` // Azul
  } else if (
    type.includes("Renta Variable") ||
    type.includes("Tecnología") ||
    type.includes("S&P") ||
    type.includes("Financials") ||
    type.includes("Energía") ||
    type.includes("Oil & Gas") ||
    type.includes("Growth") ||
    type.includes("Value") ||
    type.includes("EWZ")
  ) {
    // Gama roja para Renta Variable
    return `rgba(239, 68, 68, ${opacity})` // Rojo
  }

  // Colores específicos para subcategorías
  if (type.includes("USD")) {
    return `rgba(16, 185, 129, ${opacity})` // Verde azulado (variante de verde)
  } else if (type.includes("ARS")) {
    return `rgba(74, 222, 128, ${opacity})` // Verde claro (variante de verde)
  } else if (type.includes("EEUU")) {
    return `rgba(220, 38, 38, ${opacity})` // Rojo oscuro (variante de rojo)
  } else if (type.includes("Brasil")) {
    return `rgba(248, 113, 113, ${opacity})` // Rojo claro (variante de rojo)
  } else if (type.includes("Arg")) {
    return `rgba(254, 202, 202, ${opacity})` // Rojo muy claro (variante de rojo)
  }

  // Color por defecto
  return `rgba(107, 114, 128, ${opacity})` // Gris
}

// Función auxiliar para obtener el color de la categoría principal
export function getCategoryColor(category: string): string {
  const categoryColors: { [key: string]: string } = {
    "Cash - MM": "rgba(34, 197, 94, 1)",      // Verde
    "Renta Fija": "rgba(59, 130, 246, 1)",   // Azul
    "Renta Variable": "rgba(239, 68, 68, 1)", // Rojo
    "Alternativos": "rgba(234, 179, 8, 1)"   // Amarillo
  };
  
  return categoryColors[category] || "rgba(107, 114, 128, 1)";
} 