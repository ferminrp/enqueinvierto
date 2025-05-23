import { Handshake } from "lucide-react"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import RedirectPage from "./RedirectPage"

export default function CTAFooter() {
  const [showRedirect, setShowRedirect] = useState(false)

  const handleOpenAccount = () => {
    setShowRedirect(true)
  }

  const handleClose = () => {
    setShowRedirect(false)
  }

  return (
    <>
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm mt-8">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2 md:max-w-[70%]">
              <h3 className="text-xl font-bold text-gray-800">¿Necesitás asesoramiento financiero?</h3>
              <p className="text-gray-600">
                En Quaestus Advisory (AAGI N° 1098 CNV) te podemos ayudar. Estructuramos, ejecutamos y administramos carteras de inversión.
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
        </div>
      </div>
      <AnimatePresence>{showRedirect && <RedirectPage onClose={handleClose} onContinue={() => {}} />}</AnimatePresence>
    </>
  )
} 