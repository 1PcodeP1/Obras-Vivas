"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealBlock from "../ui/RevealBlock";
import MapaDots from "../ui/MapaDots";
import { PUNTOS_MAPA, MapPoint } from "@/lib/mapData";
import { useMapAudio } from "@/hooks/useMapAudio";

export default function Mapa() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [puntoActivo, setPuntoActivo] = useState<MapPoint | null>(null);
  const { play, stop } = useMapAudio();

  const activarPunto = (punto: MapPoint) => {
    stop();
    setPuntoActivo(punto);
    play(punto.audio);
  };

  const cerrarPunto = () => {
    stop();
    setPuntoActivo(null);
  };

  return (
    <section id="mapa" className="py-[var(--section-padding)] bg-cream overflow-hidden" ref={containerRef}>
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <RevealBlock delay={100}>
              <span className="font-sans text-[12px] uppercase tracking-widest text-gold font-semibold mb-4 block">Instalación complementaria</span>
            </RevealBlock>
            <RevealBlock delay={200} className="font-serif text-[36px] font-medium text-ink leading-tight mb-6">
              El mapa también tiene memoria
            </RevealBlock>
            <RevealBlock delay={300} className="font-sans text-[16px] text-ink/70 font-normal leading-[1.8] mb-6">
              En un muro aparte, Santa Fe de Antioquia aparece como siempre la dibujaron: calles, puntos, conexiones. Pero al acercarte, los puntos se encienden. Con unos audífonos, cada lugar te cuenta lo que cargó.
            </RevealBlock>
            <RevealBlock delay={400} className="font-sans text-[16px] text-ink/70 font-normal leading-[1.8] mb-8">
              La matrona, el carguero, el mayordomo — todos tuvieron un lugar en ese mapa.
            </RevealBlock>

            <RevealBlock delay={500}>
              <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-ember/20">
                {PUNTOS_MAPA.map(p => (
                  <button
                    key={p.id}
                    className={`flex items-center gap-3 bg-transparent border-none cursor-pointer py-1.5 text-left transition-opacity duration-200 hover:opacity-75 ${puntoActivo?.id === p.id ? 'opacity-100' : 'opacity-60'}`}
                    onClick={() => puntoActivo?.id === p.id ? cerrarPunto() : activarPunto(p)}
                  >
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: p.color }} />
                    <span className={`text-[14px] transition-colors duration-200 ${puntoActivo?.id === p.id ? 'text-gold font-medium' : 'text-ink'}`}>
                      {p.nombre}
                    </span>
                  </button>
                ))}
              </div>
            </RevealBlock>
          </div>

          <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:max-w-none aspect-square bg-[#ece8dd] rounded-full overflow-hidden flex items-center justify-center shadow-[inset_0_0_40px_rgba(0,0,0,0.15)] border-8 border-cream">
             <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-60" style={{ backgroundImage: "url('/images/mapa_santafe.png')" }} />
             
             <div className="relative w-[95%] h-[95%] flex items-center justify-center">
               <MapaDots puntoActivo={puntoActivo} onPuntoClick={(p) => puntoActivo?.id === p.id ? cerrarPunto() : activarPunto(p)} />
             </div>

             {/* Tooltip del punto activo */}
            <AnimatePresence>
              {puntoActivo && (
                <motion.div
                  className="absolute bottom-8 left-8 right-8 lg:left-12 lg:right-12 bg-cream border border-ember/30 border-l-[3px] p-6 z-10 shadow-lg"
                  style={{ borderLeftColor: puntoActivo.color }}
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button className="absolute top-3 right-4 bg-transparent border-none text-[20px] cursor-pointer opacity-40 hover:opacity-100 transition-opacity" onClick={cerrarPunto} aria-label="Cerrar">×</button>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-sky block mb-1.5 font-sans font-bold" style={{ color: puntoActivo.color }}>{puntoActivo.personaje}</span>
                  <h4 className="font-serif text-[20px] font-medium mb-2.5 text-ink">{puntoActivo.nombre}</h4>
                  <p className="text-[14px] leading-[1.7] opacity-70 mb-4 font-sans text-ink">{puntoActivo.descripcion}</p>
                  <div className="flex items-center gap-2.5 text-[12px] text-ember tracking-[0.06em] font-sans">
                    <span className="flex items-center gap-[2px]">
                      <span className="w-[2px] h-[8px] bg-ember rounded-sm animate-[audioBar_1.2s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
                      <span className="w-[2px] h-[14px] bg-ember rounded-sm animate-[audioBar_1.2s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }} />
                      <span className="w-[2px] h-[6px] bg-ember rounded-sm animate-[audioBar_1.2s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }} />
                    </span>
                    Escuchando historia...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes audioBar {
          0%, 100% { transform: scaleY(0.4); }
          50%       { transform: scaleY(1); }
        }
      `}} />
    </section>
  );
}
