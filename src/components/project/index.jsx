import React from "react";
import data from "../../json/project.json"; // Assurez-vous que le chemin est correct
import './_project.scss'; // Importez le fichier SCSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    const projects = data.projects;

    return (
        <div className="project-content" id="projets">
            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.name} />
                        <div className="project-links">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="github-icon" />
                                GitHub
                            </a>
                        </div>
                        <div className="project-tags">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="project-tag">{tag.label}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;