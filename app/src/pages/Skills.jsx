import React, { useState } from 'react';
import '../styles/Skills.css';
import {
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiMysql, SiMongodb, SiNodedotjs, SiGithub, SiFigma,
  SiPostman, SiGit
} from "react-icons/si";
import { FaJava, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const skills = [
  { title: 'React', icon: <SiReact />, category: 'frontend' },
  { title: 'JavaScript', icon: <SiJavascript />, category: 'frontend' },
  { title: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frontend' },
  { title: 'HTML', icon: <SiHtml5 />, category: 'frontend' },
  { title: 'CSS', icon: <SiCss3 />, category: 'frontend' },
  { title: 'Java', icon: <FaJava />, category: 'backend' },
  { title: 'MySQL', icon: <SiMysql />, category: 'backend' },
  { title: 'Node.js', icon: <SiNodedotjs />, category: 'backend' },
  { title: 'MongoDB', icon: <SiMongodb />, category: 'backend' },
  { title: 'GitHub', icon: <SiGithub />, category: 'tools' },
  { title: 'Figma', icon: <SiFigma />, category: 'tools' },
  { title: 'Git', icon: <SiGit />, category: 'tools' },
  { title: 'Postman', icon: <SiPostman />, category: 'tools' },
];

const categories = ['All', 'Frontend', 'Backend', 'Tools'];
const ITEMS_PER_PAGE = 8;

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [pageIndex, setPageIndex] = useState(0);

  const filteredSkills =
    activeFilter === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeFilter.toLowerCase());

  const totalPages = Math.ceil(filteredSkills.length / ITEMS_PER_PAGE);

  const pagedSkills = filteredSkills.slice(
    pageIndex * ITEMS_PER_PAGE,
    (pageIndex + 1) * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (pageIndex < totalPages - 1) setPageIndex((prev) => prev + 1);
  };

  const handleFilterChange = (cat) => {
    setActiveFilter(cat);
    setPageIndex(0);
  };

  return (
    <section className="skills-section-dark" id="skills">
      <div className="header">
        <h1>Skills</h1>
      </div>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => handleFilterChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="carousel-wrapper">
        {filteredSkills.length > ITEMS_PER_PAGE && (
          <button className="carousel-arrow left" onClick={handlePrev} disabled={pageIndex === 0}>
            <FaChevronLeft />
          </button>
        )}

        <div className="skills-grid no-scroll">
          {pagedSkills.map((skill, index) => (
            <div className={`skill-box-dark ${skill.category}`} key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <span className={`category-tag ${skill.category}`}>
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        {filteredSkills.length > ITEMS_PER_PAGE && (
          <button
            className="carousel-arrow right"
            onClick={handleNext}
            disabled={pageIndex === totalPages - 1}
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </section>
  );
};

export default Skills;
