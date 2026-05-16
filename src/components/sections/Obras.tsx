"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import RevealBlock from "../ui/RevealBlock";
import ObrasCard from "../ui/ObrasCard";

const obrasData = [
  { id: "1", titulo: "Ecos del Puente", lugar: "Puente de Occidente" },
  { id: "2", titulo: "Sombras del Atrio", lugar: "Plaza Mayor" },
  { id: "3", titulo: "Murmullos de Agua", lugar: "Fuente de la Chiquita" },
  { id: "4", titulo: "Trazos de Oro", lugar: "Museo Juan del Corral" },
];

export default function Obras() {
  const [selectedObra, setSelectedObra] = useState<typeof obrasData[0] | null>(null);

  return (
    <section id="obras" className="py-[var(--section-padding)] bg-cream">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)]">
        <RevealBlock>
          <SectionLabel text="Las Obras" />
        </RevealBlock>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto-fit gap-6 lg:gap-8">
          {obrasData.map((obra, i) => (
            <RevealBlock key={obra.id} delay={i * 100}>
              <ObrasCard obra={obra} onClick={() => setSelectedObra(obra)} />
            </RevealBlock>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedObra && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50"
              onClick={() => setSelectedObra(null)}
            />
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-cream p-8 md:p-12 z-50 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedObra(null)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
              >
                <div className="w-full h-px bg-ink rotate-45 absolute" />
                <div className="w-full h-px bg-ink -rotate-45 absolute" />
              </button>

              <p className="font-sans text-xs uppercase tracking-widest text-ember mb-4">{selectedObra.lugar}</p>
              <h3 className="font-serif text-3xl md:text-4xl text-ink mb-6">{selectedObra.titulo}</h3>
              <p className="font-sans text-ink/70 leading-relaxed mb-8">
                Descripción detallada de la obra, artista, concepto e intención. 
                Esta información será cargada dinámicamente desde un CMS en el futuro.
              </p>
              
              <div className="inline-flex items-center gap-4 cursor-pointer group">
                <span className="font-sans text-sm uppercase tracking-widest text-ink group-hover:text-gold transition-colors">Escuchar audioguía</span>
                <div className="w-8 h-8 rounded-full border border-ink flex items-center justify-center group-hover:border-gold transition-colors">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-ink group-hover:border-l-gold border-b-[4px] border-b-transparent ml-1 transition-colors" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
