import Image from "next/image"

export default function LegalFooter() {
  return (
    <div className="w-full py-8 mt-8 flex flex-col items-center">
      <div className="mb-4">
        <Image
          src="https://ik.imagekit.io/ferminrp/enqueinvierto/quaestus?updatedAt=1745599861854&tr=w-500,q-100"
          alt="Quaestus Wealth Management"
          width={200}
          height={67}
          className="h-auto"
          quality={100}
        />
      </div>
      <p className="text-gray-400 text-xs text-center">
        Conformados como AAGI N°1098 CNV. Agente Asesor Global de Inversiones.
      </p>
    </div>
  )
} 