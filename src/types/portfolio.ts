export interface Portfolio {
  nombre: string
  fecha: string
  composicion_principal: { tipo: string; porcentaje: number }[]
  composicion_detallada: { tipo: string; porcentaje: number }[]
} 