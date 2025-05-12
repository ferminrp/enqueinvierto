import Link from "next/link"
import { ChevronLeft, Home } from "lucide-react"
import { portfolios } from "@/data/portfolios"
import PortfolioDetail from "@/components/PortfolioDetail"
import CTAFooter from "@/components/CTAFooter"
import LegalFooter from "@/components/LegalFooter"

// Definir el tipo de props compatible con Next.js 15+
type PageProps = {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function CarteraPage({ params }: PageProps) {
  const portfolioId = Number.parseInt(params.id)
  if (isNaN(portfolioId) || portfolioId < 0 || portfolioId >= portfolios.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="fixed inset-0 w-full h-full pointer-events-none" style={{background: "linear-gradient(135deg, #f0f4f8 0%, #ffffff 50%, #eef2f7 100%)", zIndex: -1}}></div>
        <div className="text-center relative z-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Cartera no encontrada</h1>
          <Link href="/" className="text-blue-500 hover:text-blue-600 inline-flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Volver a la página principal
          </Link>
        </div>
      </div>
    )
  }
  const portfolio = portfolios[portfolioId]
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 w-full h-full pointer-events-none" style={{background: "linear-gradient(135deg, #f0f4f8 0%, #ffffff 50%, #eef2f7 100%)", zIndex: -1}}></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center mb-8 text-sm overflow-hidden">
            <Link href="/" className="text-gray-500 hover:text-gray-700 inline-flex items-center gap-1 flex-shrink-0">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Inicio</span>
            </Link>
            <span className="mx-2 text-gray-400 flex-shrink-0">/</span>
            <span className="text-gray-800 font-medium truncate">Detalle de Cartera</span>
          </nav>
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{portfolio.nombre}</h1>
            <p className="text-gray-600">Fecha: <span className="font-medium">{portfolio.fecha}</span></p>
          </div>
          <PortfolioDetail portfolio={portfolio} />
          <div className="mt-12">
            <CTAFooter />
          </div>
          <div className="mt-10">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium">
              <ChevronLeft className="h-5 w-5" />
              Volver a todas las carteras
            </Link>
          </div>
          <LegalFooter />
        </div>
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return portfolios.map((_, index) => ({ id: index.toString() }))
} 