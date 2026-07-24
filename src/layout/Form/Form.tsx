import { useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_f0mj6ci",
        "template_wq5az8e",
        form.current,
        "rA9gVzezX2X_rrEgz",
      )
      .then(() => {
        alert("Correo enviado");
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Error al enviar");
      });
  };

  return (
    <div className="contact-section" id="contacto">
      <div className="contact-header">
        <h2>Pongámonos en contacto</h2>

        <p>
          ¿Tienes alguna pregunta, una propuesta o un proyecto en mente?
          Completa el formulario y me pondré en contacto contigo lo antes
          posible. Normalmente respondo en un plazo de 24 horas.
        </p>
      </div>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Nombre completo"
          required
        />

        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />

        <input
          className="contact-input"
          type="tel"
          name="number"
          placeholder="Número de teléfono (opcional)"
        />

        <input
          className="contact-input"
          type="text"
          name="subject"
          placeholder="Asunto"
          required
        />

        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Escribe tu mensaje..."
          rows={6}
          required
        />

        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString("es-PE")}
        />

        <button className="contact-button" type="submit">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
