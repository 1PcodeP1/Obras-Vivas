"use client";

import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import RevealBlock from "../ui/RevealBlock";
import MapaDots from "../ui/MapaDots";

export default function Mapa() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="mapa" className="py-[var(--section-padding)] bg-cream" ref={containerRef}>
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)]">
        <RevealBlock>
          <SectionLabel text="El Recorrido" />
        </RevealBlock>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <RevealBlock delay={100} className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-6">
              Una red invisible de historias que conectan los puntos cardinales del patrimonio.
            </RevealBlock>
            <RevealBlock delay={200} className="font-sans text-ink/70 leading-relaxed">
              Explora el mapa interactivo para descubrir la ubicación de cada instalación en el casco histórico de Santa Fe de Antioquia. El recorrido ha sido diseñado para seguir el flujo natural del agua y la luz durante el día.
            </RevealBlock>
          </div>

          <div className="order-1 lg:order-2 relative aspect-square bg-ink/5 rounded-full overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-ink)_1px,_transparent_1px)] bg-[size:20px_20px]" />
             
             <div className="relative w-3/4 h-3/4">
               <MapaDots />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
