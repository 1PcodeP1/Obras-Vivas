import RevealBlock from "../ui/RevealBlock";

export default function Concepto() {
  return (
    <section id="concepto" className="py-[var(--section-padding)] bg-cream relative overflow-hidden">
      <div className="max-w-[640px] mx-auto px-[var(--container-pad)] relative z-10 text-center flex flex-col items-center">
        <RevealBlock delay={100} className="w-full">
          <h2 className="font-serif text-[36px] md:text-[40px] font-medium text-ink leading-tight mb-8">
            La imagen siempre supo que la estabas mirando
          </h2>
        </RevealBlock>
        
        <RevealBlock delay={200} className="w-full">
          <div className="font-sans text-ink text-[17px] md:text-[18px] leading-[1.8] font-normal text-left">
            <p className="mb-6">
              Durante siglos, Gregorio Vásquez de Arce y Ceballos pintó figuras que parecían guardar algo. Un gesto contenido. Una mirada que no termina de irse. Obras Vivas parte de esa tensión: ¿qué pasa cuando lo que estaba quieto decide moverse?
            </p>
            <p>
              Esta experiencia no reproduce pinturas. Las despierta. A través de animación, sonido y presencia, cada obra responde al cuerpo que se le acerca. Lo que ocurre después depende de cuánto te detienes.
            </p>
          </div>
        </RevealBlock>
      </div>

      {/* Decorative details */}
      <div className="absolute top-1/2 right-10 md:right-32 -translate-y-1/2 w-32 h-32 border border-ember/20 rotate-45 rounded-none z-0 hidden lg:block" />
      <div className="absolute top-1/3 right-16 md:right-40 -translate-y-1/2 w-16 h-16 bg-sky/5 rotate-12 rounded-none z-0 hidden lg:block" />
    </section>
  );
}
