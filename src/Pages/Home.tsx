import About from "../sections/About/About";
import Hero from "../sections/Hero/Hero";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import Slide from "../sections/Slide/Slide";
import Form from "../layout/Form/Form";
import Project from "../sections/Project/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <Slide />
      <About />
      <Project />
      <Form />
      <Footer />
    </>
  );
}
