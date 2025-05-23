import { motion } from "framer-motion"
import type { Portfolio } from "../types/portfolio"
import { getColorForAssetType } from "../utils/colors"

interface PortfolioCardProps {
  portfolio: Portfolio
  index: number
}

export default function PortfolioCard({ portfolio, index }: PortfolioCardProps) {
  const portfolioName = portfolio.nombre.replace("Cartera Táctica: ", "")
  
  // Ordenar composición principal por porcentaje descendente
  const sortedComposicionPrincipal = [...portfolio.composicion_principal].sort(
    (a, b) => b.porcentaje - a.porcentaje
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <a
        href={`/cartera/${index}`}
        className="block bg-white rounded-xl border border-[#E5E7EB] hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md p-6 h-full"
      >
        <div className="flex flex-col h-full">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
              {portfolioName}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{portfolio.fecha}</p>
          </div>

          <div className="mt-3 flex-grow flex flex-col">
            <div className="space-y-3 flex-grow flex flex-col">
              <div className="flex-grow flex flex-col justify-center">
                <div className="flex h-5 rounded-lg overflow-hidden">
                  {sortedComposicionPrincipal.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="h-full flex items-center justify-center relative transition-all duration-300"
                        style={{
                          width: `${item.porcentaje}%`,
                          backgroundColor: getColorForAssetType(item.tipo, 0.8),
                        }}
                      >
                      </div>
                    )
                  })}
                </div>
                <div className="mt-2 min-h-[40px] flex items-center">
                  <div className="flex flex-wrap gap-2">
                    {sortedComposicionPrincipal.map((item, index) => (
                      <div key={index} className="flex items-center text-xs bg-gray-50 px-1.5 py-0.5 rounded-full">
                        <div
                          className="w-2 h-2 mr-1 rounded-full"
                          style={{
                            backgroundColor: getColorForAssetType(item.tipo, 0.8),
                          }}
                        ></div>
                        <span className="text-gray-600 text-xs">{item.tipo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  )
} 