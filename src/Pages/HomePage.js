import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Richard Estes</span>
        </h1>
        <p className="h-subtext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium eum placeat
          incidunt, cupiditate natus mollitia ullam voluptatum at, eaque quo inventore hic illum
          distinctio similique doloremque numquam quasi quos.
        </p>
        <div className="icons">
          <a
            className="icon-link"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </a>
          <a
            className="icon-link"
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            className="icon-link"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
