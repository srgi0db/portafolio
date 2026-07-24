import "./Hero.css";
import DogHero from "../../assets/images/Dog-hero.png";
import Button from "../../components/Button/Button";
import HeroTyping from "./Functions/HeroTyping";

interface HeroProps {
  auraHero?: string;
}

const Hero: React.FC<HeroProps> = ({ auraHero }) => {
  return (
    <section className="hero" id="inicio">
      {auraHero && <img src={auraHero} alt="" className="hero-aura" />}
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-row">
          <div className="hero-content">
            <h1>
              Desarrollador <br />
              $/
              <HeroTyping />
            </h1>
            <p className="hero-description">
              Desarrollo aplicaciones web y móviles con Java, Spring Boot y
              React. Me enfoco en crear soluciones escalables, seguras y fáciles
              de mantener, aplicando buenas prácticas de desarrollo.
            </p>
            <div className="hero-buttons">
              <a href="#proyectos">
                <Button variant="primary">Ver proyectos</Button>
              </a>
              <a href="#contacto">
                <Button variant="secondary">Contactarme</Button>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <img src={DogHero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
