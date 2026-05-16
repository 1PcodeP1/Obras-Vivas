"use client";

import { motion } from "framer-motion";

interface Obra {
  id: string;
  titulo: string;
  lugar: string;
}

export default function ObrasCard({ obra, onClick }: { obra: Obra; onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      className="obra-card group cursor-pointer bg-ink/5 p-8 border border-transparent transition-colors duration-300 hover:border-gold/30 flex flex-col h-[300px] justify-between relative overflow-hidden"
      whileHover={{
        y: -8,
        rotateY: 4,
        rotateX: -2,
        scale: 1.01,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative z-10">
        <p className="font-sans text-xs uppercase tracking-widest text-ember mb-2">{obra.lugar}</p>
        <h3 className="font-serif text-2xl text-ink leading-tight">{obra.titulo}</h3>
      </div>
      
      <div className="card-cta opacity-0 group-hover:opacity-100 transition-opacity duration-200 relative z-10 flex items-center gap-2">
        <span className="font-sans text-xs uppercase tracking-widest text-gold">Ver Detalles</span>
        <div className="w-4 h-px bg-gold" />
      </div>

      {/* Línea inferior animada via CSS */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ember to-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </motion.div>
  );
}
