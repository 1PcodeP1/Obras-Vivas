"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "../ui/SectionLabel";
import RevealBlock from "../ui/RevealBlock";
import { motion, AnimatePresence } from "framer-motion";

const pasos = [
  { numero: "01", titulo: "El silencio que antecede", texto: "Cinco pinturas navegan lentamente en el espacio. No están quietas, pero tampoco tienen prisa. Un paisaje sonoro distante — rezos, campanas, viento de Santa Fe — sostiene el ambiente." },
  { numero: "02", titulo: "La obra te reconoce", texto: "Cuando te detienes frente a ella, se ilumina. Las demás se retiran un poco. El murmullo que le pertenece empieza a escucharse con más claridad." },
  { numero: "03", titulo: "Tú decides qué se mueve", texto: "Con un gesto de la mano puedes navegar entre las obras o invocar a una. Al acercarte del todo, la pintura cobra vida al estilo que Hogwarts siempre prometió: el personaje comienza a existir." },
  { numero: "04", titulo: "La obra vuelve a esperar", texto: "Cuando te alejas, todo regresa. La obra deja de animarse. El cosmos de pinturas recupera su deriva lenta. El sonido se desvanece hasta que alguien más se detenga." },
];

export default function Proceso() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".proceso-item") as HTMLElement[];
      
      items.forEach((item) => {
        const line = item.querySelector(".proceso-linea");
        const numero = item.querySelector(".proceso-numero");
        const contenido = item.querySelector(".proceso-contenido");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        });

        tl.fromTo(numero, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6 })
          .fromTo(contenido, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
          .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.out" }, "-=0.4");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="proceso" className="pt-[var(--section-padding)] pb-24 bg-cream" ref={containerRef}>
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)] mb-16">
        <RevealBlock>
          <SectionLabel text="Así funciona" />
        </RevealBlock>
      </div>
      
      <div className="flex flex-col">
        {pasos.map((paso, index) => (
          <div key={index} className={`proceso-item group relative flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-16 px-[var(--container-pad)] ${index % 2 !== 0 ? 'bg-gold/15' : 'bg-cream'}`}>
            <div className="max-w-[var(--container-max)] mx-auto w-full flex flex-col md:flex-row gap-4 md:gap-12 relative">
              <div className="proceso-linea absolute top-0 left-0 w-full h-px bg-crimson origin-left -mt-16" />
              
              <div className="proceso-numero font-sans text-ember text-[24px] tracking-tighter font-normal md:w-[80px] shrink-0 pt-1">
                {paso.numero}
              </div>
              
              <div className="proceso-contenido flex-1 max-w-2xl">
                <h3 className="font-serif text-[22px] md:text-[24px] font-medium text-ink mb-4">{paso.titulo}</h3>
                <p className="font-sans text-[16px] text-ink font-normal leading-relaxed">{paso.texto}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="proceso-item relative px-[var(--container-pad)]">
          <div className="max-w-[var(--container-max)] mx-auto w-full relative">
            <div className="proceso-linea absolute top-0 left-0 w-full h-px bg-crimson origin-left" />
          </div>
        </div>
        
        <div className="mt-16 text-center relative z-10">
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="font-sans text-[12px] uppercase tracking-widest text-ink/60 hover:text-ink transition-colors border-b border-ink/20 pb-1 hover:border-ink cursor-pointer bg-transparent"
          >
            EL DETRÁS DE CÁMARAS
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 md:p-12"
          >
            <div 
              className="absolute inset-0" 
              onClick={() => setIsVideoOpen(false)} 
            />
            
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-cream opacity-60 hover:opacity-100 transition-opacity text-4xl font-light z-10"
              aria-label="Cerrar video"
            >
              ×
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-lg overflow-hidden border border-cream/10 z-10"
            >
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/5_zOZ8jKBzs?si=uLmg5H_KKA75qoRP" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
