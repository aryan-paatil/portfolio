import React from 'react'
import '../design/projects.css'
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div>
        <h1>My work</h1>
            <section id="projects" className="projects-section">
      <ProjectCard
        title="Healthcare appointment system"
        date="October 25"
        type="Academic"
        github="github"
        buttonText="Code"
        codeLink="https://github.com/aaryan-exe/Healthcare-Appointment-System"
        // img={projectImg}
      />


            <ProjectCard
        title="Movie Ticket Booking Site"
        date="February 25"
        type="Academic"
        github="github"
        buttonText="Code"
        // img={projectImg}
      />
    </section>
    </div>
  )
}
