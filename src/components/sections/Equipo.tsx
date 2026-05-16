import SectionLabel from "../ui/SectionLabel";
import RevealBlock from "../ui/RevealBlock";

const team = [
  { nombre: "Elena Restrepo", rol: "Dirección Artística" },
  { nombre: "Andrés Silva", rol: "Diseño Sonoro" },
  { nombre: "Marta Gómez", rol: "Investigación Histórica" },
  { nombre: "Carlos Ruiz", rol: "Producción Técnica" },
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-[var(--section-padding)] bg-cream">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)]">
        <RevealBlock>
          <SectionLabel text="El Equipo" />
        </RevealBlock>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {team.map((member, i) => (
            <RevealBlock key={i} delay={i * 100} className="flex flex-col">
              <div className="w-full aspect-[3/4] bg-ink/10 mb-4 grayscale hover:grayscale-0 transition-all duration-500" />
              <h4 className="font-serif text-xl text-ink">{member.nombre}</h4>
              <p className="font-sans text-xs uppercase tracking-widest text-ember mt-1">{member.rol}</p>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
