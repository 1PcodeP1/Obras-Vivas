"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const points = [
  { id: 1, x: 20, y: 30, label: "Puente de Occidente" },
  { id: 2, x: 50, y: 20, label: "Plaza Mayor" },
  { id: 3, x: 80, y: 40, label: "Fuente de la Chiquita" },
  { id: 4, x: 60, y: 80, label: "Museo Juan del Corral" },
];

export default function MapaDots() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const ctx = gsap.context(() => {
      const dots = gsap.utils.toArray(".map-dot") as SVGGElement[];
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 60%",
        }
      });

      dots.forEach((dot, i) => {
        const circle = dot.querySelector("circle.core");
        const pulse = dot.querySelector("circle.pulse");
        
        tl.to(circle, { opacity: 0.8, duration: 0.4 }, i * 0.2)
          .fromTo(pulse, { scale: 0, opacity: 1 }, { scale: 2, opacity: 0, duration: 1, ease: "power2.out" }, "<");
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      {/* Connector lines mockup */}
      <path d="M 20 30 L 50 20 L 80 40 L 60 80" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 2" className="text-ink" />
      
      {points.map((p) => (
        <g key={p.id} className="map-dot group cursor-pointer" transform={`translate(${p.x}, ${p.y})`}>
          <circle className="pulse" r="4" fill="var(--color-gold)" opacity="0" />
          <circle className="core" r="2" fill="var(--color-ink)" opacity="0" />
          
          <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <rect x="5" y="-12" width="60" height="12" fill="var(--color-cream)" rx="2" className="shadow-sm" />
            <text x="8" y="-4" fontSize="4" fill="var(--color-ink)" fontFamily="var(--font-sans)" className="uppercase tracking-wider">
              {p.label}
            </text>
          </g>
        </g>
      ))}
    </svg>
  );
}
