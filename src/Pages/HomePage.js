import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDribbbleSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Richard Estes</span>
        </h1>
        <p className="h-subtext">
          I'm a full-stack software developer who also loves UI/UX design. Currently, I'm working at
          as a Software Engineer at LinkMunch. Feel free to check out my projects here or on my
          GitHub!
        </p>
        <div className="icons">
          <a
            className="icon-link"
            target="_blank"
            href="https://www.linkedin.com/in/richardaestes97/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon lk" />
          </a>
          <a
            className="icon-link"
            target="_blank"
            href="https://github.com/richardestes/"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            className="icon-link"
            target="_blank"
            href="https://dribbble.com/richardestes"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDribbbleSquare} className="icon db" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
