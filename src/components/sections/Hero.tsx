"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import HeroParticles from "./HeroParticles";
import Button from "../ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    
    const ctx = gsap.context(() => {});
    
    const initSplitting = async () => {
      const Splitting = (await import("splitting")).default;
      Splitting({ target: titleRef.current!, by: "chars" });

      const chars = titleRef.current!.querySelectorAll(".char");
      
      ctx.add(() => {
        const tl = gsap.timeline();
        
        tl.fromTo(
          ".hero-eyebrow",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0
        )
        .fromTo(
          chars,
          { opacity: 0, y: 40, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.02, ease: "power3.out" },
          0.3
        )
        .fromTo(
          ".hero-h2",
          { opacity: 0, y: 20 },
          { opacity: 0.58, y: 0, duration: 0.7, ease: "power2.out" },
          0.9
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
          1.1
        )
        .fromTo(
          ".hero-scroll",
          { opacity: 0 },
          { opacity: 0.35, duration: 1 },
          1.4
        );

        // Parallax background
        gsap.to(".hero-bg", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    };
    
    initSplitting();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-cream pt-20">
      <div className="hero-bg absolute inset-0 bg-cream z-0" />
      <HeroParticles />
      
      <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-pad)] flex flex-col items-center">
        <h1 ref={titleRef} className="hero-h1 font-serif text-[clamp(2.5rem,6vw,72px)] font-light leading-[1.1] mb-6 text-ink [perspective:1000px]">
          Lo que ves no es todo lo que existe
        </h1>
        <h2 className="hero-h2 font-sans text-[18px] font-normal text-ink/60 max-w-2xl mx-auto mb-12">
          Una experiencia donde las imágenes recuerdan que alguna vez estuvieron vivas
        </h2>
        
        <div className="hero-cta">
          <Button 
            variant="primary" 
            className="rounded-none"
            onClick={() => {
              const target = "#concepto";
              if ((window as unknown as { lenis: { scrollTo: (t: string) => void } }).lenis) {
                (window as unknown as { lenis: { scrollTo: (t: string) => void } }).lenis.scrollTo(target);
              } else {
                document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Entra / Descubre la experiencia
          </Button>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-ink">Scroll</span>
        <div className="w-px h-12 bg-ink/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-ink animate-bounce" />
        </div>
      </div>
    </section>
  );
}
