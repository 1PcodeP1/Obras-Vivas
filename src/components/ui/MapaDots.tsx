"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { PUNTOS_MAPA, MapPoint } from "@/lib/mapData";

interface MapaDotsProps {
  puntoActivo: MapPoint | null;
  onPuntoClick: (punto: MapPoint) => void;
}

export default function MapaDots({ puntoActivo, onPuntoClick }: MapaDotsProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const ctx = gsap.context(() => {
      const dots = gsap.utils.toArray(".map-dot") as SVGGElement[];
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 70%",
        }
      });

      // Animate path drawing
      tl.fromTo(".path-line", 
        { strokeDasharray: "2 100", strokeDashoffset: "100" },
        { strokeDasharray: "2 2", strokeDashoffset: "0", duration: 2, ease: "power1.inOut" }
      );
      
      // Animate river drawing
      tl.fromTo(".river-path",
        { strokeDasharray: "300", strokeDashoffset: "300" },
        { strokeDashoffset: "0", duration: 2.5, ease: "power2.out" },
        0
      );

      dots.forEach((dot, i) => {
        const circle = dot.querySelector("circle.core");
        const pulse = dot.querySelector("circle.pulse");
        
        tl.to(circle, { opacity: 0.9, duration: 0.4 }, i * 0.2 + 0.5)
          .fromTo(pulse, { scale: 0, opacity: 0.4 }, { scale: 3, opacity: 0, duration: 2, ease: "power2.out", repeat: -1 }, "<");
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg ref={svgRef} viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      {/* Background Grid */}
      <g stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.2">
        <line x1="20" y1="0" x2="20" y2="100" />
        <line x1="40" y1="0" x2="40" y2="100" />
        <line x1="60" y1="0" x2="60" y2="100" />
        <line x1="80" y1="0" x2="80" y2="100" />
        
        <line x1="0" y1="20" x2="100" y2="20" />
        <line x1="0" y1="40" x2="100" y2="40" />
        <line x1="0" y1="60" x2="100" y2="60" />
        <line x1="0" y1="80" x2="100" y2="80" />
        
        <rect x="5" y="5" width="90" height="90" fill="none" />
        <rect x="6" y="6" width="88" height="88" fill="none" />
      </g>

      {/* Abstract Topography / Region Shapes */}
      <g stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.3" fill="none">
        <path d="M 10 10 Q 30 20 50 10 T 90 20 Q 95 50 80 80 T 20 90 Q 5 60 10 10 Z" />
        <path d="M 20 25 Q 40 30 55 20 T 80 35 Q 85 60 70 75 T 30 80 Q 15 50 20 25 Z" />
        <path d="M 30 40 Q 45 45 55 35 T 70 45 Q 75 55 60 65 T 40 65 Q 25 50 30 40 Z" />
      </g>

      {/* River (Rio Cauca representation) */}
      <path 
        className="river-path"
        d="M 5 95 C 20 85, 25 70, 40 55 C 50 45, 75 40, 95 15" 
        fill="none" 
        stroke="var(--color-sky)" 
        strokeOpacity="0.3" 
        strokeWidth="1.5"
      />

      {/* Compass */}
      <g transform="translate(85, 85)" className="text-ink opacity-40">
        <text x="0" y="-12" fontSize="2.5" textAnchor="middle" fill="currentColor" fontFamily="var(--font-sans)">N</text>
        <path d="M 0 -8 L 2 0 L 0 8 L -2 0 Z" fill="currentColor" opacity="0.2" />
        <path d="M 0 -8 L 2 0 L 0 0 L 0 -8 Z" fill="currentColor" opacity="0.6" />
        <line x1="-5" y1="0" x2="5" y2="0" stroke="currentColor" strokeWidth="0.3" />
        <line x1="0" y1="-10" x2="0" y2="10" stroke="currentColor" strokeWidth="0.3" />
      </g>

      {/* Label Bottom Left */}
      <text x="8" y="94" fontSize="2.5" fill="var(--color-ink)" opacity="0.4" fontFamily="var(--font-serif)" fontStyle="italic">
        Santa Fe de Antioquia, Colombia (s. XVII)
      </text>

      {/* Connector lines between important points */}
      <path 
        className="path-line"
        d={`M ${PUNTOS_MAPA[0].svgX} ${PUNTOS_MAPA[0].svgY} L ${PUNTOS_MAPA[1].svgX} ${PUNTOS_MAPA[1].svgY} L ${PUNTOS_MAPA[2].svgX} ${PUNTOS_MAPA[2].svgY} L ${PUNTOS_MAPA[3].svgX} ${PUNTOS_MAPA[3].svgY} L ${PUNTOS_MAPA[4].svgX} ${PUNTOS_MAPA[4].svgY}`} 
        fill="none" 
        stroke="var(--color-ember)" 
        strokeOpacity="0.85" 
        strokeWidth="0.8"
      />
      
      {/* Points */}
      {PUNTOS_MAPA.map((p) => {
        const isActive = puntoActivo?.id === p.id;
        return (
          <g key={p.id} className="map-dot group cursor-pointer" transform={`translate(${p.svgX}, ${p.svgY})`} onClick={() => onPuntoClick(p)}>
            <circle className="pulse" r="5" fill={p.color} opacity="0" />
            <circle className="core" r={isActive ? "4.5" : "3.5"} fill={p.color} opacity="0" style={{ transition: "r 0.3s ease" }} />
            
            {isActive && (
              <circle r="8" fill="none" stroke={p.color} strokeWidth="0.8" opacity="0.6">
                <animate attributeName="r" values="8;14;8" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0;0.6" dur="1.8s" repeatCount="indefinite"/>
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}
