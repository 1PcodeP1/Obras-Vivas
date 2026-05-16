"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Button from "../ui/Button";

export default function Cierre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      tl.fromTo(h2Ref.current, 
        { y: 60, clipPath: "inset(0 0 100% 0)" },
        { y: 0, clipPath: "inset(0 0 0% 0)", ease: "power2.out" }
      )
      .fromTo(".cierre-body", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.3")
      .fromTo(".cierre-cta", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out(1.5)" }, "-=0.2");

      gsap.to(".cierre-particle", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cierre" className="relative py-[clamp(5rem,10vw,9rem)] bg-crimson overflow-hidden" ref={containerRef}>
      <div className="cierre-particle absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold/20 border-dashed" />
      <div className="cierre-particle absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full border border-gold/10 border-dotted" />

      <div className="relative z-10 max-w-4xl mx-auto px-[var(--container-pad)] text-center flex flex-col items-center">
        <h2 ref={h2Ref} className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] text-cream leading-tight mb-8">
          ¿Listo para caminar por<br/>los ecos de la historia?
        </h2>
        
        <p className="cierre-body font-sans text-cream/80 text-lg mb-12 max-w-2xl">
          Acompáñanos en la próxima activación en vivo. Únete a la lista de correo para recibir coordenadas secretas.
        </p>

        <div className="cierre-cta">
          <Button variant="primary">Agendar Visita</Button>
        </div>
      </div>
    </section>
  );
}
