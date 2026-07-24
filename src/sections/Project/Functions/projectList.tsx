import librocloudImage from "../../../assets/project/librocloud-web.png";
import portfolioImage from "../../../assets/project/portfolio-web.png";
import type { Project } from "../Types/Project";

export const projectList: Project[] = [
  {
    id: 1,
    title: "LibroCloud",
    description:
      "Sistema Full Stack para la gestión y venta de libros, con control de inventario y panel administrativo. La Demo puede tardar unos minutos en cargar debido al hosting gratuito del mismo.",

    technologies: ["React", "Spring Boot", "Java", "JWT", "MySQL"],

    github: "https://github.com/srgi0db/AppGestionLibro",

    demo: "https://libroclouds.onrender.com/",

    desploy: "https://portfolio-10926.web.app/",

    image: librocloudImage,
  },

  {
    id: 2,

    title: "Portfolio",

    description:
      "Aplicación web desarrollada con React y TypeScript, implementando componentes reutilizables, estilos personalizados y una estructura escalable para la presentación de proyectos profesionales.",
    technologies: ["React", "TypeScript", "CSS"],

    github: "https://github.com/usuario/portfolio",

    image: portfolioImage,
  },
];
