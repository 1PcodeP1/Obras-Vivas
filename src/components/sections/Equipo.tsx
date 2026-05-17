import SectionLabel from "../ui/SectionLabel";
import RevealBlock from "../ui/RevealBlock";

const team = [
  { nombre: "Elena Restrepo", rol: "Dirección Artística" },
  { nombre: "Andrés Silva", rol: "Diseño Sonoro" },
  { nombre: "Marta Gómez", rol: "Investigación Histórica" },
  { nombre: "Carlos Ruiz", rol: "Producción Técnica" },
  { nombre: "Sofía Medina", rol: "Iluminación" },
  { nombre: "Luis Fernando", rol: "Desarrollo Interactivo" },
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-[var(--section-padding)] bg-cream">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)] overflow-hidden">
        <RevealBlock>
          <SectionLabel text="Quiénes lo hicieron posible" />
        </RevealBlock>
        
        <RevealBlock delay={100} className="mb-12">
          <h2 className="font-serif text-[36px] md:text-[40px] font-medium text-ink mb-4">Personas que también se detuvieron a mirar</h2>
          <p className="font-sans text-[16px] text-ink/80 max-w-2xl font-normal leading-relaxed">
            Un equipo multidisciplinario trabajando en la intersección entre arte, tecnología e historia patrimonial.
          </p>
        </RevealBlock>
        
        <div className="overflow-hidden pb-8 -mx-[var(--container-pad)] px-[var(--container-pad)] md:mx-0 md:px-0 relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee gap-6">
            {[...team, ...team].map((member, i) => (
              <div key={i} className="flex-none w-[240px] md:w-[280px] flex flex-col items-center text-center group cursor-pointer">
                <div className="w-full aspect-square rounded-full border border-sky/40 bg-ink/5 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden" />
                <h4 className="font-sans text-[16px] font-medium text-ink">{member.nombre}</h4>
                <p className="font-sans text-[14px] font-normal text-gold mt-1">{member.rol}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
