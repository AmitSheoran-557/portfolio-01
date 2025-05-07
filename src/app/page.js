import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skill";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <AboutMe />
      <Project />
      <Services />
      <Skills />
      <Contact />
    </>
  );
}
