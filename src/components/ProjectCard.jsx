import React from "react";
import "../design/projectCard.css";
import { FaCalendarAlt, FaGraduationCap } from "react-icons/fa";

export default function ProjectCard({
  title,
  date,
  type,
  buttonText,
  img,
  codeLink,
  liveLink,
}) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={img} alt={title} />
      </div>

      <h3 className="project-title">{title}</h3>

      <div className="project-tags">
        <div className="tag">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>
        <div className="tag">
          <FaGraduationCap />
          <span>{type}</span>
        </div>
      </div>

      <div className="project-buttons">
        {/* Code Button */}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cssbuttons-io"
          >
            <span>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-icon"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>
              {buttonText || "Code"}
            </span>
          </a>
        )}

        {/* Live Demo Button */}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cssbuttons-io secondary-btn"
          >
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}
