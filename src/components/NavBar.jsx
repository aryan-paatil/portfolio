import React from "react";
import "../design/nav.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-border">
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="logo">
            <span>AP</span>
          </div>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
