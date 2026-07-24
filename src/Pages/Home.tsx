import About from "../sections/About/About";
import Hero from "../sections/Hero/Hero";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import Slide from "../sections/Slide/Slide";
import Form from "../layout/Form/Form";
import Project from "../sections/Project/Project";

interface HomeProps {
  AuraHero?: string;
}

export default function Home({AuraHero}: HomeProps) {
  return (
    <>
      <Hero auraHero={AuraHero} />
      <Navbar />
      <Slide />
      <About />
      <Project />
      <Form />
      <Footer />
    </>
  );
}
