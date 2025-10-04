import React from 'react';
import '../styles/About.css';
import cvFile from '../assets/Nilakshi_Madubashini_CV.pdf';

function About() {
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

                <div className="cv-download">
                    <a href={cvFile} download className="download-btn">
                        📄 Download My CV
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;

