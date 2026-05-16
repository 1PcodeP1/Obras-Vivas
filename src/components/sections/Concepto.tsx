import RevealBlock from "../ui/RevealBlock";
import SectionLabel from "../ui/SectionLabel";

export default function Concepto() {
  return (
    <section id="concepto" className="py-[var(--section-padding)] bg-cream relative">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)] relative z-10">
        <RevealBlock>
          <SectionLabel text="El Concepto" number="00" />
        </RevealBlock>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <RevealBlock delay={100} className="font-serif text-3xl md:text-5xl text-ink leading-tight">
            La ciudad como lienzo, la historia como pigmento.
          </RevealBlock>
          <RevealBlock delay={200} className="font-sans text-ink/80 text-lg leading-relaxed">
            <p className="mb-6">
              Obras Vivas no es solo una exposición; es un diálogo entre el pasado colonial de Santa Fe de Antioquia y el arte contemporáneo.
            </p>
            <p>
              A través de microinteracciones e instalaciones site-specific, invitamos a los espectadores a redescubrir espacios cotidianos transformados en experiencias poéticas.
            </p>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
