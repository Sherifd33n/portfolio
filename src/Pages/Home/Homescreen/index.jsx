import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../Skills";
import Portfolio from "../Portfolio";
import ContactMe from "../Contact";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        {" "}
        <MySkills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        {" "}
        <ContactMe />
      </section>

      <Footer />
    </>
  );
}
