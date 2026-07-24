import "./About.css";

const About = () => {
  return (
    <section className="about" id="sobre-mi">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <p className="section-subtitle">Sobre mí</p>

            <h2>
              Desarrollo aplicaciones web modernas con enfoque en eficacia y
              experiencia de usuario
            </h2>

            <p className="about-description">
              Soy desarrollador backend enfocado en crear aplicaciones webs. Me gusta transformar ideas y
              diseños en experiencias digitales funcionales utilizando
              tecnologías modernas.
            </p>

            <p className="about-description">
              Trabajo principalmente con Java, TypeScript y herramientas del
              ecosistema frontend como React y Angular, buscando siempre escribir código mantenible y
              con las mejores prácticas.
            </p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <span className="info-number">2+</span>

              <p>Años desarrollando aplicaciones webs modernas</p>
            </div>

            <div className="info-card">
              <span className="info-number">7+</span>

              <p>Tecnologías y frameworks utilizados</p>
            </div>

            <div className="info-card">
              <span className="info-number">Muchas</span>

              <p>ganas de seguir aprendiendo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
