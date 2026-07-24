import "./Project.css";

import ProjectCard from "../../components/Card/Card";
import { projectList } from "./Functions/projectList";

const Projects = () => {
  return (
    <section className="projects" id="proyectos">
      <div className="container">
        <span className="section-subtitle">PROYECTOS</span>

        <h2 className="section-title">Algunos de mis proyectos</h2>

        <div className="projects-grid">
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
