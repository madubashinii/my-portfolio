import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import project1Image from '../assets/copy.png';

function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 150);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`home stacked ${isVisible ? "visible" : ""}`} id="home">
            {/* Profile Image */}
            <div className="home-image animate-float">
                <div className="image-outer-circle">
                    <div className="image-inner-circle">
                        <img
                            src={project1Image}
                            alt="Nilakshi Madubashini"
                        />
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="intro text-center">
                <div className="name-title">
                    <h1>Nilakshi Madubashini</h1>
                    <h2>Software Engineering Undergraduate</h2>
                </div>

                <p className="bio">
                    Passionate about building elegant, scalable solutions through
                    full-stack web development. This portfolio showcases my creativity,
                    innovation, and continuous growth in the world of software engineering.
                </p>

                <div className="cta-buttons">
                    <a href="#projects" className="cta-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="cta-secondary">
                        Get in Touch
                    </a>
                </div>

                <div className="social-icons">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />
        </div>
    );
}

export default Home;
