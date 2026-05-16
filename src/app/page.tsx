import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import Concepto from "@/components/sections/Concepto";
import Proceso from "@/components/sections/Proceso";
import Obras from "@/components/sections/Obras";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <Concepto />
      <Proceso />
      <Obras />
      {/* 
        Future sections will go here:
        <Mapa />
        <Equipo />
        <Cierre />
      */}
      <Footer />
    </main>
  );
}
