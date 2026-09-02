import { useState } from "react";
import "./Projects.css";

const projects = [
     
    {
        id: 1,
        name: "Portfolio",
        category: "design",
        image: "/images/portfolio.png",
        tech: ["HTML", "CSS"]
    },
    
];

function Projects() {
    const [filter, setFilter] = useState("all");

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter(
                  (project) => project.category === filter
              );

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>

            <div className="filter-buttons">
                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    className={filter === "web" ? "active" : ""}
                    onClick={() => setFilter("web")}
                >
                    Web
                </button>

                <button
                    className={filter === "design" ? "active" : ""}
                    onClick={() => setFilter("design")}
                >
                    Design
                </button>
            </div>

            <div className="project-grid">
                {filteredProjects.map((project) => (
                    <article
                        className="project-card"
                        key={project.id}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                        />

                        <div className="project-card-body">
                            <h3>{project.name}</h3>

                            <p>
                                A useful project created using
                                modern web technologies.
                            </p>

                            <div className="project-tags">
                                {project.tech.map((tech) => (
                                    <span
                                        className="tag"
                                        key={tech}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="#"
                                className="btn btn-primary"
                            >
                                View Project
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
