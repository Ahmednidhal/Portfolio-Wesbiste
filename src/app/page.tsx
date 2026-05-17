import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Skills from "@/components/Skills";
import ReelsGallery from "@/components/ReelsGallery";
import Photography from "@/components/Photography";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ClientLogos />
      <Portfolio />
      <Experience />
      <Skills />
      <ReelsGallery />
      <Photography />
      <Contact />
    </>
  );
}
