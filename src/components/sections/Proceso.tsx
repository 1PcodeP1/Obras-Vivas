"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "../ui/SectionLabel";
import RevealBlock from "../ui/RevealBlock";

const pasos = [
  { numero: "01", titulo: "Investigación", texto: "Inmersión en los archivos históricos y entrevistas con habitantes locales." },
  { numero: "02", titulo: "Concepción", texto: "Diseño de las intervenciones artísticas respetando la arquitectura patrimonial." },
  { numero: "03", titulo: "Producción", texto: "Trabajo conjunto con artesanos locales para materializar las instalaciones." },
  { numero: "04", titulo: "Activación", texto: "Apertura al público y programa de mediación cultural." },
];

export default function Proceso() {
  const containerRef = useRef<HTMLDivElement>(null);

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

        tl.fromTo(numero, { opacity: 0, x: -20 }, { opacity: 0.35, x: 0, duration: 0.6 })
          .fromTo(contenido, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
          .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.out" }, "-=0.4");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="proceso" className="py-[var(--section-padding)] bg-cream" ref={containerRef}>
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)]">
        <RevealBlock>
          <SectionLabel text="Proceso Creativo" />
        </RevealBlock>
        
        <div className="flex flex-col">
          {pasos.map((paso, index) => (
            <div key={index} className="proceso-item group relative flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-12 md:py-16">
              {/* Línea animada superior */}
              <div className="proceso-linea absolute top-0 left-0 w-full h-px bg-ink/20 origin-left" />
              
              <div className="proceso-numero font-sans text-ember text-4xl md:text-5xl tracking-tighter font-light opacity-35 md:w-[80px] shrink-0">
                {paso.numero}
              </div>
              
              <div className="proceso-contenido flex-1 max-w-2xl">
                <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4">{paso.titulo}</h3>
                <p className="font-sans text-ink/70 leading-relaxed">{paso.texto}</p>
              </div>
            </div>
          ))}
          {/* Última línea */}
          <div className="proceso-item relative">
            <div className="proceso-linea absolute top-0 left-0 w-full h-px bg-ink/20 origin-left" />
          </div>
        </div>
      </div>
    </section>
  );
}
