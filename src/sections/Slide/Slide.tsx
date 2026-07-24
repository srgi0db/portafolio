import "./Slide.css";
import { technologies } from "./Functions/SlideCarousel";

export default function Marquee() {
  return (
    <section className="tech-stack">
      <div className="slider-header">
        <span className="slider-tag">Tech Stack</span>

        <h2>Tecnologías con las que trabajo</h2>

        <p>
          Utilizo herramientas modernas para desarrollar aplicaciones rápidas,
          escalables y con una excelente experiencia de usuario.
        </p>
      </div>

      <div className="slider">
        <div className="slide-track">
          {[...technologies, ...technologies].map((tech, index) => (
            <div className="slide" key={index}>
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
