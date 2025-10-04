import React from 'react';
import '../styles/Navbar.css';

function Navbar({ isMenuOpen, toggleMenu, closeMenu }) {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <a href="#home" onClick={closeMenu}>Nilakshi Madubashini</a>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
