"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import PortfolioCard from "./PortfolioCard"
import type { Portfolio } from "@/types/portfolio"
import { useRouter } from "next/navigation"

interface PortfolioGridProps {
  portfolios: Portfolio[]
}

export default function PortfolioGrid({ portfolios }: PortfolioGridProps) {
  const router = useRouter()

  // Precargar las páginas de detalle
  useEffect(() => {
    portfolios.forEach((_, index) => {
      router.prefetch(`/cartera/${index}`)
    })
  }, [portfolios, router])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {portfolios.map((portfolio, index) => (
        <motion.div key={index} variants={itemVariants} className="h-full">
          <PortfolioCard portfolio={portfolio} index={index} />
        </motion.div>
      ))}
    </motion.div>
  )
} 