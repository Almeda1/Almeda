import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services"; 
import Portfolio from "@/components/landing/Portfolio";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen"> 
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}