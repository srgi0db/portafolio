import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "navbar slidedown" : "navbar"}>
      <div className="container">
        <div className="navbar-content">
          <img src="/favicon.png" alt="Logo" className="logo-img" />

          <nav className="nav-menu">
            <ul className="nav-list">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#sobre-mi">Sobre mí</a>
              </li>
              <li>
                <a href="#proyectos">Proyectos</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
