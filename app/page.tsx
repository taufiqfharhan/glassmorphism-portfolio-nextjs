import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import GradientBg from "@/sections/GradientBg";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Portfolio from "@/sections/Portfolio";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <GradientBg />
      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
