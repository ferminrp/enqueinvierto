import PortfolioGrid from "@/components/PortfolioGrid"
import CTAFooter from "@/components/CTAFooter"
import LegalFooter from "@/components/LegalFooter"
import { portfolios } from "@/data/portfolios"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f0f4f8] via-[#fff] to-[#eef2f7] py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Carteras de Inversión</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Te compartimos las nueve carteras recomendadas por Quaestus Advisory S.A. para cada perfil. Hacé clic en cualquier tarjeta para ver la asignación detallada de activos.
          </p>
        </header>
        <section className="mb-16">
          <PortfolioGrid portfolios={portfolios} />
        </section>
        <CTAFooter />
        <LegalFooter />
      </div>
    </main>
  )
}
