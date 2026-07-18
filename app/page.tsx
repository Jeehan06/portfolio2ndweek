import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
       <Hero
  name="Jeeshan"
  role="Full Stack Developer"
  description="I build modern web applications using Django, HTML, CSS and JavaScript."
/>
        <About />
        <Projects />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}