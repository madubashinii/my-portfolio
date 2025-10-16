import React from 'react';
import '../styles/About.css';
// import cvFile from '../assets/Nilakshi_Madubashini_CV.pdf';
import { useState } from "react";

function About() {
    const [msgVisible, setMsgVisible] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setMsgVisible(true);
        setTimeout(() => setMsgVisible(false), 1000);
    };

    return (
        <div className="about-me-container" id="about">
            <div className="about-content">
                <h1>About Me</h1>
                <p>
                    Hi, I am <strong>Nilakshi Madubashini</strong>, a Software Engineering undergraduate at SLIIT, pursuing a BSc(Hons) in Information Technology with a specialization in Software Engineering.
                </p>

                <p>
                    I have gained hands-on experience in modern web technologies, software development practices, and a range of programming languages throughout my academic journey. I enjoy solving problems, exploring new ideas, and building practical, real-world applications.
                </p>

                <p>
                    My passion lies in <strong>full-stack development</strong>, where I bring together frontend creativity and backend logic to create complete, user-centric solutions. I value collaboration and believe that working with others enhances both learning and innovation.
                </p>


                <p className="gpa">
                    🎓 <strong>Current GPA:</strong> 3.52 / 4.0
                </p>

                <h2 className="skills-heading">Core Strengths</h2>
                <ul className="skills-list">
                    <li>Full Stack Development</li>
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>UI/UX Design</li>
                </ul>

                {/* <div className="cv-download">
                    <a href={cvFile} download className="download-btn">
                        📄 Download My CV
                    </a>
                </div> */}

                <div className="cv-download" style={{ marginTop: "2rem", position: "relative", display: "inline-block" }}>
                    <a
                        href="#"
                        onClick={handleClick}
                        className="download-btn"
                        style={{
                            display: "inline-block",
                            padding: "0.75rem 1.8rem",
                            fontSize: "1.05rem",
                            fontWeight: 600,
                            color: "#ffffff",
                            background: "linear-gradient(135deg, #00b4d8, #0077b6)",
                            borderRadius: "8px",
                            textDecoration: "none",
                            boxShadow: "0 6px 15px rgba(0, 180, 216, 0.3)",
                            transition: "background 0.3s ease, transform 0.3s ease",
                        }}
                    >
                        📄 Download My CV
                    </a>

                    {/* Tooltip */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "120%",
                            left: "50%",
                            backgroundColor: "#ff5555",
                            color: "#fff",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            fontSize: "0.85rem",
                            whiteSpace: "nowrap",
                            opacity: msgVisible ? 1 : 0,
                            pointerEvents: "none",
                            transition: "opacity 0.4s ease, transform 0.4s ease",
                            transformOrigin: "bottom center",
                            transform: msgVisible
                                ? "translate(-50%, 0)"
                                : "translate(-50%, 5px)",
                            zIndex: 10,
                        }}
                    >
                        CV download is currently not available
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;

