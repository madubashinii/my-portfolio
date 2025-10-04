import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "../styles/Projects.css";
import project1Image from "../assets/project1.png";
import projectImage from "../assets/projectImg.png";
import projectImage3 from "../assets/projectImg3.png";

const projectList = [
    {
        title: 'NeoMart - Shopping Web Application',
        description: 'A dynamic, responsive shopping app with Angular frontend and Spring Boot backend.',
        tools: 'Angular, Spring Boot, REST APIs, Material Design',
        codeLink: 'https://github.com/madubashinii/NeoMart',
        demoLink: 'https://yourliveprojectdemo.com',
        image: projectImage,
    },
    {
        title: 'WildWaves - Boat Safari Trip Management System',
        description: 'A web-based system to manage boat safari bookings.',
        tools: 'HTML, CSS, JS, PHP, MySQL, XAMMP server',
        codeLink: 'https://github.com/madubashinii/wildwaves',
        demoLink: 'https://yourliveprojectdemo.com',
        image: projectImage3,
    },
    {
        title: 'Boutique - Hotel Management System ',
        description: 'A full-stack hotel booking system',
        tools: 'Java, JSP, Servlets, HTML, CSS, JS, MySQL, Apache Tomcat',
        codeLink: 'https://github.com/madubashinii/Boutique',
        demoLink: 'https://yourliveprojectdemo.com',
        image: project1Image,
    },
];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h1 className="projects-title"> Featured Projects</h1>

            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="description">{project.description}</p>
                            <p className="tools">Tools:  {project.tools}</p>
                            <div className="project-links">
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn">
                                    <FaGithub /> Code
                                </a>
                                {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn demo">
                                    <FaLink /> Demo
                                </a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="see-all-container">
                <a href="https://github.com/madubashinii" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="see-all-button">
                    See All Projects
                </a>
            </div>
        </section>
    );
}

export default Projects;

