import { motion } from "framer-motion"
import { ArrowRight, Shield } from "lucide-react"
import { createPortal } from "react-dom"
import { useEffect, useState, useRef } from "react"

interface RedirectPageProps {
  onClose: () => void
  onContinue: () => void
}

export default function RedirectPage({ onClose }: RedirectPageProps) {
  const [mounted, setMounted] = useState(false)
  const modalContentRef = useRef<HTMLDivElement>(null)
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSc5yekqpbmP4MsNkLcS80oFh0KujT3Z2Y2-9v2UNEl6shjS2A/viewform?usp=pp_url&entry.946569307=Web+-+EnqueInvierto"

  useEffect(() => {
    setMounted(true)
    document.body.style.overflow = "hidden"
    const handleClickOutside = (event: MouseEvent) => {
      if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        ref={modalContentRef}
        className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8 relative my-24 sm:my-12 z-10"
      >
        <div className="flex justify-center -mt-20 mb-4">
          <div className="relative w-32 h-32 bg-white rounded-full border-2 border-gray-200 shadow-md flex items-center justify-center">
            <img
              src="https://images.compara.ar/quaestus.webp"
              alt="Quaestus Wealth Management"
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="absolute bottom-1 right-1 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center shadow-md border-2 border-white">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quiero Asesoramiento</h2>
          <p className="text-gray-600 text-lg mb-8">
            A continuación te vamos a redirigir a un formulario seguro para la apertura de cuenta con
            <span className="font-medium text-gray-800"> Quaestus Wealth Management</span>.
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setTimeout(() => onClose(), 100)
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md text-center transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2"
            >
              Continuar
              <ArrowRight className="h-5 w-5" />
            </a>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-300"
            >
              Volver
            </button>
          </div>
          <p className="text-gray-400 text-xs mt-8">
            Conformados como AAGI N°1098 CNV. Agente Asesor Global de Inversiones.
          </p>
        </div>
      </div>
    </motion.div>
  )

  return mounted ? createPortal(modalContent, document.body) : null
} 