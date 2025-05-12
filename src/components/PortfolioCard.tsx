"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import type { Portfolio } from "@/types/portfolio"

interface PortfolioCardProps {
  portfolio: Portfolio
  index: number
}

export default function PortfolioCard({ portfolio, index }: PortfolioCardProps) {
  const portfolioName = portfolio.nombre.replace("Cartera Táctica: ", "")
  const mainColor = getMainColorForPortfolio(portfolioName)
  const sortedComposicionPrincipal = [...portfolio.composicion_principal].sort((a, b) => b.porcentaje - a.porcentaje)

  return (
    <motion.div
      layout
      className="bg-white rounded-xl overflow-hidden border border-[#E5E7EB] w-full group h-full flex flex-col transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/cartera/${index}`} className="p-4 cursor-pointer relative flex-grow flex flex-col">
        <div
          className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-5 transition-opacity duration-300 group-hover:opacity-10"
          style={{ background: `radial-gradient(circle, ${mainColor.medium} 0%, transparent 70%)` }}
        ></div>
        <div className="flex flex-col mb-3">
          <div className="h-14 flex items-start">
            <h2 className="text-lg font-bold text-gray-800 relative">
              {portfolioName}
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gray-200 transition-all duration-300 group-hover:w-full"
                style={{ background: mainColor.light }}
              ></span>
            </h2>
          </div>
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
      </Link>
    </motion.div>
  )
}

function getMainColorForPortfolio(name: string) {
  if (name.includes("Conservador")) {
    return {
      light: "rgba(59, 130, 246, 0.6)",
      medium: "rgba(59, 130, 246, 0.8)",
      dark: "rgba(37, 99, 235, 0.9)",
    }
  } else if (name.includes("Moderado")) {
    return {
      light: "rgba(16, 185, 129, 0.6)",
      medium: "rgba(16, 185, 129, 0.8)",
      dark: "rgba(5, 150, 105, 0.9)",
    }
  } else if (name.includes("Agresivo")) {
    return {
      light: "rgba(245, 158, 11, 0.6)",
      medium: "rgba(245, 158, 11, 0.8)",
      dark: "rgba(217, 119, 6, 0.9)",
    }
  }
  return {
    light: "rgba(107, 114, 128, 0.6)",
    medium: "rgba(107, 114, 128, 0.8)",
    dark: "rgba(75, 85, 99, 0.9)",
  }
}

function getColorForAssetType(type: string, opacity = 1): string {
  if (type.includes("Cash") || type.includes("Caución")) {
    return `rgba(34, 197, 94, ${opacity})`
  } else if (type.includes("Alternativos") || type.includes("Metales")) {
    return `rgba(234, 179, 8, ${opacity})`
  } else if (
    type.includes("Renta Fija") ||
    type.includes("Soberanos") ||
    type.includes("Corporativos") ||
    type.includes("Bopreal") ||
    type.includes("CER") ||
    type.includes("Tasa Fija")
  ) {
    return `rgba(59, 130, 246, ${opacity})`
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
    return `rgba(239, 68, 68, ${opacity})`
  }
  if (type.includes("USD")) {
    return `rgba(16, 185, 129, ${opacity})`
  } else if (type.includes("ARS")) {
    return `rgba(74, 222, 128, ${opacity})`
  } else if (type.includes("EEUU")) {
    return `rgba(220, 38, 38, ${opacity})`
  } else if (type.includes("Brasil")) {
    return `rgba(248, 113, 113, ${opacity})`
  } else if (type.includes("Arg")) {
    return `rgba(254, 202, 202, ${opacity})`
  }
  return `rgba(107, 114, 128, ${opacity})`
} 