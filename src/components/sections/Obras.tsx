"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import RevealBlock from "../ui/RevealBlock";
import ObrasCard, { Obra } from "../ui/ObrasCard";

const obrasData: Obra[] = [
  { id: "1", nombre: "Cargueros", descripcion: "Caminan con el peso de lo sagrado sobre los hombros. En la experiencia, traspasan el marco de su pintura y aparecen en otro: mismas personas, otro mundo detrás.", sonidos: "jadeos, murmullos, pasos sobre piedra", imagen: "/images/Carguero.jpg" },
  { id: "2", nombre: "Sahumadoras", descripcion: "El humo de su sahumerio no se detiene en el borde del cuadro. Se cuela hacia otras pinturas, arrastrando con él algo que no tiene nombre pero que se reconoce.", sonidos: "marcha espiritual, vaivén rítmico", imagen: "/images/Saumadora.jpg" },
  { id: "3", nombre: "Hacedores", descripcion: "Están en medio del trabajo cuando te ven. Sonríen. Siguen. Cuando terminan, giran la figura para que la puedas ver mejor.", sonidos: "pinceladas, silencio concentrado", imagen: "/images/Hacedor.jpeg" },
  { id: "4", nombre: "Matronas", descripcion: "Están frente a un altar. Te dan la bienvenida con la misma naturalidad con la que llevan años cuidando lo que nadie más cuida.", sonidos: "canciones de devoción, viento entre hojas, velas que se encienden", imagen: "/images/Matrona.jpeg" },
  { id: "5", nombre: "Mayordomos", descripcion: "Hombres de presencia. De formalidad que no pesa. Su rol en la experiencia está tomando forma — por ahora, están ahí, observando también.", sonidos: "(en desarrollo)", imagen: "/images/Mayordomo.jpg" },
];

export default function Obras() {
  const [selectedObra, setSelectedObra] = useState<Obra | null>(null);

  return (
    <section id="obras" className="py-[var(--section-padding)] bg-crimson/5">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)]">
        <RevealBlock>
          <SectionLabel text="Los que habitan la obra" />
        </RevealBlock>
        
        <RevealBlock delay={100} className="mb-12">
          <h2 className="font-serif text-[36px] md:text-[40px] text-ink mb-6 leading-tight">Obras vivas</h2>
          <p className="font-sans text-[16px] text-ink font-normal leading-relaxed max-w-3xl mb-4">
            Obras Vivas nace de esa pregunta: ¿qué pasa cuando una imagen deja de quedarse quieta?
          </p>
          <p className="font-sans text-[16px] text-ink font-normal leading-relaxed max-w-3xl">
            Esta experiencia no busca reproducir pinturas. Busca que ellas te enseñen a través de animación, sonido y presencia, cada obra reacciona a quien se acerca. A veces de forma sutil. A veces no tanto.
          </p>
        </RevealBlock>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {obrasData.map((obra, i) => (
            <div key={obra.id} className="relative">
              <RevealBlock delay={i * 100} className="h-full">
                <ObrasCard obra={obra} onClick={() => setSelectedObra(obra)} />
              </RevealBlock>

              <AnimatePresence>
                {selectedObra?.id === obra.id && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="fixed inset-0 bg-ink/20 backdrop-blur-[2px] z-40"
                      onClick={() => setSelectedObra(null)}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                      className="absolute top-0 left-0 w-[calc(100%+2rem)] -ml-4 min-h-[calc(100%+2rem)] -mt-4 bg-cream p-6 md:p-8 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gold/40 flex flex-col justify-start"
                    >
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedObra(null); }}
                        className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity z-10 bg-cream rounded-full"
                      >
                        <div className="w-[60%] h-px bg-ink rotate-45 absolute" />
                        <div className="w-[60%] h-px bg-ink -rotate-45 absolute" />
                      </button>

                      {selectedObra.imagen && (
                        <div 
                          className="w-full h-56 md:h-72 mb-6 bg-contain bg-no-repeat bg-center border border-ink/5" 
                          style={{ backgroundImage: `url('${selectedObra.imagen}')` }} 
                        />
                      )}

                      <p className="font-sans text-[12px] text-sky mb-2">{selectedObra.sonidos}</p>
                      <h3 className="font-serif text-[28px] text-ink mb-4 leading-tight">{selectedObra.nombre}</h3>
                      <p className="font-sans text-[15px] text-ink font-normal leading-relaxed mb-6">
                        {selectedObra.descripcion}
                      </p>
                      
                      <div className="mt-auto inline-flex items-center gap-3 cursor-pointer group">
                        <span className="font-sans text-xs uppercase tracking-widest text-ink group-hover:text-gold transition-colors font-semibold">Ver en la experiencia</span>
                        <div className="w-6 h-6 rounded-full border border-ink flex items-center justify-center group-hover:border-gold transition-colors">
                          <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-ink group-hover:border-l-gold border-b-[3px] border-b-transparent ml-0.5 transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
