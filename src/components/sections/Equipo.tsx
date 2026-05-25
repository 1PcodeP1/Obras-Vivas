import SectionLabel from "../ui/SectionLabel";
import RevealBlock from "../ui/RevealBlock";

const team = [
  { nombre: "Jakeline Maria Avila Verbel", rol: "Interactive developer", imagen: "/images/WhatsApp Image 2026-05-23 at 12.14.41.jpeg" },
  { nombre: "Jose Ignacio Trujillo Cano", rol: "Head of design", imagen: "/images/WhatsApp Image 2026-05-23 at 12.15.21.jpeg" },
  { nombre: "Sergio Nicolas Fonseca Niño", rol: "Head of development", imagen: "/images/WhatsApp Image 2026-05-23 at 12.15.50.jpeg" },
  { nombre: "Juan Felipe Gamboa Restrepo", rol: "Researcher and narrative designer", imagen: "/images/WhatsApp Image 2026-05-23 at 22.54.58.jpeg" },
  { nombre: "Luisa Fernanda García Gallego", rol: "Project Manager", imagen: "/images/WhatsApp Image 2026-05-25 at 10.38.42.jpeg" },
  { nombre: "Royman Stiveen Hoyos Vasquez", rol: "Physical systems developer", imagen: "/images/WhatsApp Image 2026-05-25 at 10.40.40.jpeg" },
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
            {[...team, ...team, ...team].map((member, i) => (
              <div key={i} className="flex-none w-[240px] md:w-[280px] flex flex-col items-center text-center group cursor-pointer">
                <div className="w-48 md:w-56 aspect-square rounded-full border-4 border-cream shadow-xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative bg-ink/5">
                  <img src={member.imagen} alt={member.nombre} className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-sans text-[16px] font-medium text-ink px-4">{member.nombre}</h4>
                <p className="font-sans text-[14px] font-normal text-gold mt-1 px-4">{member.rol}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
