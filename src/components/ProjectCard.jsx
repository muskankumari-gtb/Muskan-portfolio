import { Github, ExternalLink } from "lucide-react";

function ProjectCard({projects}) {
  return (
    <div className="card project-card">
      <div className="project-image">
      {
        projects.image ? (
            <img src={projects.image} alt={projects.title} />
        ):(
        <span className="image-placeholder">{projects.title[0]}</span>
        )
      }
      </div>

      <h3>{projects.title}</h3>
      <p className="muted">{projects.description}</p>

      <div className="badges">
     {
      projects.technologies.map((tech)=>(
           <span className="badge small" key={tech}>{tech}</span>
      ))
     }
      </div>

      <div className="project-links">
        <a className="btn btn-ghost btn-small" href={projects.github}><Github size={16} />Github</a>
        <a className="btn btn-primary btn-small" href={projects.demo}><ExternalLink size={16} />Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;
