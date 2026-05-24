import RevealBlock from "../ui/RevealBlock";
import SectionLabel from "../ui/SectionLabel";

export default function Concepto() {
  return (
    <section id="concepto" className="py-[var(--section-padding)] bg-cream relative overflow-hidden">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)] relative z-10 text-center flex flex-col items-center">
        <RevealBlock>
          <SectionLabel text="Luz, Memoria y Eternidad" />
        </RevealBlock>
        
        <RevealBlock delay={100} className="w-full mt-6">
          <h2 className="font-serif text-[40px] md:text-[48px] font-medium text-ink leading-tight mb-8">
            El refugio que siempre estuvo ahí
          </h2>
        </RevealBlock>
        
        <RevealBlock delay={200} className="w-full max-w-4xl">
          <p className="font-sans text-ink text-[18px] md:text-[20px] leading-[1.8] font-medium mb-12 px-4 md:px-12">
            Entras. Cierras la puerta. Te pones los audífonos. El mundo de afuera desaparece. Frente a ti, un altar tradicional de Santa Fe de Antioquia te recibe con luz cálida. Vas a vivir una experiencia que te va a marcar.
          </p>
          
          <h3 className="font-serif text-[28px] md:text-[32px] text-ink mb-6 text-center max-w-3xl mx-auto">
            Queríamos que conocieras Santa Fe de Antioquia no desde afuera, sino desde adentro.
          </h3>
          
          <p className="font-sans text-ink text-[16px] md:text-[18px] leading-[1.8] font-normal mb-16 max-w-3xl mx-auto">
            En Luz, Memoria y Eternidad construimos un refugio. Una cabina donde el usuario atraviesa tres momentos de vida — niñez, adolescencia y adultez — acompañado por la fe, la pérdida y la comunidad que sostiene a este pueblo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20 mt-12">
            <div className="bg-gold/10 p-8 border-t-[3px] border-gold transform transition-transform hover:-translate-y-2">
              <h4 className="font-serif text-[24px] text-ink mb-4">Niñez</h4>
              <p className="font-sans text-[15px] text-ink/80 leading-relaxed">El descubrimiento de una comunidad que carga la fe con sus propias manos.</p>
            </div>
            <div className="bg-crimson/5 p-8 border-t-[3px] border-crimson transform transition-transform hover:-translate-y-2">
              <h4 className="font-serif text-[24px] text-ink mb-4">Adolescencia</h4>
              <p className="font-sans text-[15px] text-ink/80 leading-relaxed">El alejamiento, la duda y el ruido interior que todos conocemos.</p>
            </div>
            <div className="bg-gold/10 p-8 border-t-[3px] border-gold transform transition-transform hover:-translate-y-2">
              <h4 className="font-serif text-[24px] text-ink mb-4">Adultez</h4>
              <p className="font-sans text-[15px] text-ink/80 leading-relaxed">El reencuentro con lo que siempre estuvo ahí: las personas que te sostienen cuando más las necesitas.</p>
            </div>
          </div>
          
          <p className="font-serif italic text-[24px] md:text-[28px] text-ink/90">
            Así es como Santa Fe de Antioquia cuida a los suyos.<br className="hidden md:block" /> Y así fue como quisimos que lo sintieras.
          </p>
        </RevealBlock>
      </div>

      {/* Decorative details */}
      <div className="absolute top-1/2 right-10 md:right-32 -translate-y-1/2 w-32 h-32 border border-ember/20 rotate-45 rounded-none z-0 hidden lg:block" />
      <div className="absolute top-1/3 right-16 md:right-40 -translate-y-1/2 w-16 h-16 bg-sky/5 rotate-12 rounded-none z-0 hidden lg:block" />
    </section>
  );
}
