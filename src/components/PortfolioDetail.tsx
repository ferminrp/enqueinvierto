import { useState, useEffect } from "react"
import type { Portfolio } from "../types/portfolio"
import { getColorForAssetType } from "../utils/colors"

interface PortfolioDetailProps {
  portfolio: Portfolio
}

export default function PortfolioDetail({ portfolio }: PortfolioDetailProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Ordenar composiciones por porcentaje descendente
  const sortedComposicionPrincipal = [...portfolio.composicion_principal].sort(
    (a, b) => b.porcentaje - a.porcentaje
  )
  const sortedComposicionDetallada = [...portfolio.composicion_detallada].sort(
    (a, b) => b.porcentaje - a.porcentaje
  )

  // Dividir la composición detallada en dos columnas para pantallas grandes
  const midpoint = Math.ceil(sortedComposicionDetallada.length / 2)
  const column1 = sortedComposicionDetallada.slice(0, midpoint)
  const column2 = sortedComposicionDetallada.slice(midpoint)

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
      <div className="p-6 md:p-8">
        {/* Asignación Principal */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Asignación Principal</h2>
          <div className="flex h-8 rounded-lg overflow-hidden mb-4">
            {sortedComposicionPrincipal.map((item, index) => (
              <div
                key={index}
                className="h-full flex items-center justify-center relative transition-all duration-300"
                style={{
                  width: `${item.porcentaje}%`,
                  backgroundColor: getColorForAssetType(item.tipo, 0.8),
                }}
              >
                {item.porcentaje >= 10 && (
                  <span className="text-sm font-medium text-white drop-shadow-md">{item.porcentaje}%</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {sortedComposicionPrincipal.map((item, index) => (
              <div key={index} className="flex items-center text-sm bg-gray-50 px-3 py-1.5 rounded-full">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: getColorForAssetType(item.tipo, 0.8) }}
                ></div>
                <span className="text-gray-700">{item.tipo}</span>
              </div>
            ))}
          </div>
        </section>
        
        {/* Asignación Detallada */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Asignación Detallada</h2>
          <div className="mb-6">
            <div className="flex h-4 rounded-full overflow-hidden">
              {sortedComposicionDetallada.map((item, index) => (
                <div
                  key={index}
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${item.porcentaje}%`,
                    backgroundColor: getColorForAssetType(item.tipo, 0.8),
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {isLargeScreen ? (
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                {column1.map((item, index) => (
                  <div
                    key={`col1-${index}`}
                    className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: getColorForAssetType(item.tipo, 0.8) }}
                      ></div>
                      <span className="text-gray-700">{item.tipo}</span>
                    </div>
                    <span
                      className="text-gray-900 font-medium px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: `${getColorForAssetType(item.tipo, 0.1)}` }}
                    >
                      {item.porcentaje}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {column2.map((item, index) => (
                  <div
                    key={`col2-${index}`}
                    className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: getColorForAssetType(item.tipo, 0.8) }}
                      ></div>
                      <span className="text-gray-700">{item.tipo}</span>
                    </div>
                    <span
                      className="text-gray-900 font-medium px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: `${getColorForAssetType(item.tipo, 0.1)}` }}
                    >
                      {item.porcentaje}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {sortedComposicionDetallada.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: getColorForAssetType(item.tipo, 0.8) }}
                    ></div>
                    <span className="text-gray-700">{item.tipo}</span>
                  </div>
                  <span
                    className="text-gray-900 font-medium px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: `${getColorForAssetType(item.tipo, 0.1)}` }}
                  >
                    {item.porcentaje}%
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
} 