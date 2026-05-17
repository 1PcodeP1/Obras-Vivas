import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import Concepto from "@/components/sections/Concepto";
import Proceso from "@/components/sections/Proceso";
import Obras from "@/components/sections/Obras";
import Mapa from "@/components/sections/Mapa";
import Equipo from "@/components/sections/Equipo";
import Cierre from "@/components/sections/Cierre";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">
      <Nav />
      <div className="flex flex-col gap-16 md:gap-32 pb-16 md:pb-32">
        <Hero />
        <Concepto />
        <Proceso />
        <Obras />
        <Mapa />
        <Equipo />
      </div>
      <Cierre />
      <Footer />
    </main>
  );
}
