"use client";

import { motion } from "framer-motion";

export interface Obra {
  id: string;
  nombre: string;
  descripcion: string;
  sonidos: string;
  imagen?: string;
}

export default function ObrasCard({ obra, onClick }: { obra: Obra; onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      className="obra-card group cursor-pointer bg-cream p-8 border border-ember/30 transition-colors duration-300 hover:border-gold flex flex-col h-full min-h-[300px] justify-between relative overflow-hidden"
      whileHover={{
        y: -8,
        rotateY: 4,
        rotateX: -2,
        scale: 1.01,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative z-10">
        <h3 className="font-serif font-bold text-[20px] text-ink leading-tight mb-2">{obra.nombre}</h3>
        <p className="font-sans text-[15px] font-normal text-ink leading-relaxed mb-6">{obra.descripcion}</p>
      </div>
      
      <div className="card-cta opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative z-10 flex items-center gap-2 mt-6">
        <span className="font-sans text-[12px] uppercase tracking-widest text-gold font-semibold">Activar personaje</span>
        <div className="w-4 h-px bg-gold" />
      </div>

      {/* Línea inferior animada via CSS */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ember to-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </motion.div>
  );
}
