import React from 'react';
import '../design/intro.css';

export default function Intro() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='IntroName'>
      <h1>Hey! I’m Aryan</h1>
      <p>I design and code.</p>

      <div className="intro-buttons">
        <button className="btn" onClick={scrollToProjects}>
          View My Work
        </button>
        <a href="mailto:yourmail@example.com">
          <button className="btn">
            Get in Touch
          </button>
        </a>
      </div>
    </div>
  );
}
