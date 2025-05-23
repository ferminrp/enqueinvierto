import type { Portfolio } from "../types/portfolio"
import PortfolioCard from "./PortfolioCard"

interface PortfolioGridProps {
  portfolios: Portfolio[]
}

export default function PortfolioGrid({ portfolios }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolios.map((portfolio, index) => (
        <PortfolioCard key={index} portfolio={portfolio} index={index} />
      ))}
    </div>
  )
} 