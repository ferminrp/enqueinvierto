import { Handshake, ExternalLink } from "lucide-react"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import RedirectPage from "./RedirectPage"

export default function HomeCTAFooter() {
  const [showRedirect, setShowRedirect] = useState(false)
  const asesorUrl = "https://qadvisory.com.ar/asesores-financieros/"
  const empresaUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSciLI3kcNBVv9z7a_0wTCoRHSvkTs3wfArGJctoFXeScFR8Hw/viewform?usp=pp_url&entry.946569307=En+Que+Invierto"

  const handleOpenAccount = () => {
    setShowRedirect(true)
  }

  const handleClose = () => {
    setShowRedirect(false)
  }

  return (
    <>
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm">
        <div className="p-6 md:p-8">
          {/* Sección para inversores */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 md:max-w-[70%]">
              <h3 className="text-xl font-bold text-gray-800">¿Te interesan nuestras carteras de inversión?</h3>
              <p className="text-gray-600">
                Nuestros asesores pueden ayudarte a implementar estas estrategias de inversión adaptadas a tu perfil.
              </p>
            </div>
            <button
              onClick={handleOpenAccount}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-md text-center transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center gap-2 w-auto self-start md:self-center whitespace-nowrap cursor-pointer"
            >
              <Handshake className="h-5 w-5" />
              Quiero Asesoramiento
            </button>
          </div>
          <div className="border-t border-gray-200 my-6"></div>
          {/* Sección para asesores */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 md:max-w-[70%]">
              <h3 className="text-xl font-bold text-gray-800">¿Sos Asesor?</h3>
              <p className="text-gray-600">Desbloqueá herramientas reales para llevar tu trabajo a otro nivel.</p>
            </div>
            <a
              href={asesorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 hover:bg-gray-100 text-gray-800 font-medium py-2.5 px-5 rounded-md text-center transition-all duration-300 inline-flex items-center gap-2 w-auto self-start md:self-center whitespace-nowrap cursor-pointer"
            >
              <ExternalLink className="h-5 w-5" />
              Conocer Más
            </a>
          </div>
          <div className="border-t border-gray-200 my-6"></div>
          {/* Sección para empresas */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 md:max-w-[70%]">
              <h3 className="text-xl font-bold text-gray-800">¿Sos Empresa?</h3>
              <p className="text-gray-600">Te ayudamos en la gestión de tu tesorería.</p>
            </div>
            <a
              href={empresaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 hover:bg-gray-100 text-gray-800 font-medium py-2.5 px-5 rounded-md text-center transition-all duration-300 inline-flex items-center gap-2 w-auto self-start md:self-center whitespace-nowrap cursor-pointer"
            >
              <ExternalLink className="h-5 w-5" />
              Conocer Más
            </a>
          </div>
        </div>
      </div>
      <AnimatePresence>{showRedirect && <RedirectPage onClose={handleClose} onContinue={() => {}} />}</AnimatePresence>
    </>
  )
} 