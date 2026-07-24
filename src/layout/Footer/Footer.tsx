import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/srgi0db/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/srg10db/",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>
              Sergio
              <span>.</span>
            </h3>

            <p>Frontend Developer creando experiencias web modernas.</p>
          </div>

          <div className="footer-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sergio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
