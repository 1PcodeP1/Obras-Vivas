export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-16">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-serif text-3xl tracking-wide text-gold">Obras Vivas</div>
        <div className="text-sm opacity-60 font-sans tracking-wide">
          © {new Date().getFullYear()} Inspirado en Gregorio Vásquez de Arce y Ceballos · Santa Fe de Antioquia
        </div>
      </div>
    </footer>
  );
}
