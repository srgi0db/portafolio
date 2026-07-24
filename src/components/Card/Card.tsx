import "./Card.css";
import type { Project } from "../../sections/Project/Types/Project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
          {project.desploy && (
            <a href={project.desploy} target="_blank" rel="noreferrer">
              Desplegar
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
