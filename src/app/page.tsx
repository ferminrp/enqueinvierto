import PortfolioGrid from "@/components/PortfolioGrid"
import { portfolios } from "@/data/portfolios"
import ActionButtons from "@/components/ActionButtons"
import HomeCTAFooter from "@/components/HomeCTAFooter"
import LegalFooter from "@/components/LegalFooter"
import type { Metadata } from "next"

const ogImageUrl = "https://ik.imagekit.io/ferminrp/Meta%20Images/enqueinvierto.png"

export const metadata: Metadata = {
  title: "Carteras de Inversión | Quaestus Advisory S.A.",
  description:
    "Explora las nueve carteras de inversión recomendadas por Quaestus Advisory S.A. para diferentes perfiles de riesgo.",
  openGraph: {
    title: "Carteras de Inversión | Quaestus Advisory S.A.",
    description:
      "Explora las nueve carteras de inversión recomendadas por Quaestus Advisory S.A. para diferentes perfiles de riesgo.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Enqueinvierto - Carteras de Inversión",
      },
    ],
  },
  twitter: {
    title: "Carteras de Inversión | Quaestus Advisory S.A.",
    description:
      "Explora las nueve carteras de inversión recomendadas por Quaestus Advisory S.A. para diferentes perfiles de riesgo.",
    images: [ogImageUrl],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Gradiente más pronunciado para el fondo */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #f0f4f8 0%, #ffffff 50%, #eef2f7 100%)",
          zIndex: -1,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        {/* Header con diseño premium */}
        <div className="max-w-4xl mx-auto mb-10 md:mb-16">
          <div className="relative mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight relative inline-block z-10">
              Carteras de Inversión
              <span className="absolute -bottom-2 md:-bottom-3 left-0 h-3 md:h-4 bg-amber-200 -z-10 opacity-70 w-full"></span>
            </h1>
          </div>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed md:leading-relaxed relative z-10">
            Te compartimos las nueve carteras recomendadas por
            <span className="font-medium text-gray-800"> Quaestus Advisory S.A. </span>
            para cada perfil. Hacé clic en cualquier tarjeta para ver la asignación detallada de activos.
          </p>

          {/* Nueva leyenda con menor jerarquía */}
          <p className="text-gray-500 text-sm md:text-base mt-4 mb-6 max-w-3xl relative z-10">
            ¿Necesitás una mano para implementar estas carteras? Nuestros asesores te pueden ayudar.
          </p>

          {/* Botones de acción alineados con el texto */}
          <div className="mt-8 relative z-10">
            <ActionButtons />
          </div>
        </div>

        {/* Grid de carteras con el mismo ancho máximo que el header */}
        <div className="max-w-4xl mx-auto mt-16 relative z-10">
          <PortfolioGrid portfolios={portfolios} />
        </div>

        {/* Footer CTA */}
        <div className="max-w-4xl mx-auto mt-16 md:mt-24 relative z-10">
          <HomeCTAFooter />
        </div>

        {/* Leyenda legal */}
        <div className="max-w-4xl mx-auto relative z-10">
          <LegalFooter />
        </div>
      </div>
    </main>
  )
}
