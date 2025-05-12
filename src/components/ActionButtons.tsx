"use client"

import { useState } from "react"
import { Handshake } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import RedirectPage from "./RedirectPage"

export default function ActionButtons() {
  const [showRedirect, setShowRedirect] = useState(false)

  const handleOpenAccount = () => {
    setShowRedirect(true)
  }

  const handleClose = () => {
    setShowRedirect(false)
  }

  return (
    <>
      <div className="flex">
        <button
          onClick={handleOpenAccount}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-md text-center transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center gap-2 w-auto"
        >
          <Handshake className="h-5 w-5" />
          Quiero Asesoramiento
        </button>
      </div>
      <AnimatePresence>{showRedirect && <RedirectPage onClose={handleClose} onContinue={() => {}} />}</AnimatePresence>
    </>
  )
} 