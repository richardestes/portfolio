import React from "react";
import about from "../img/weezer-me.jpg";
import { Link } from "react-router-dom";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Richard Estes</span>
        </h4>
        <p className="about-text">
          I'm a full-stack software developer who also loves UI/UX design. Currently, I'm working at
          as a Software Engineer at LinkMunch. Feel free to check out my projects here or on my
          GitHub!
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Location</p>
            <p>Hobbies</p>
          </div>
          <div className="right-section">
            <p>: Richard Estes</p>
            <p>: 24</p>
            <p>: Costa Mesa</p>
            <p>: Reading, Video Games, Collecting Vinyls</p>
          </div>
        </div>
        <button className="btn">
          <Link to="../data/richard-estes-resume.pdf" target="_blank" download className="btn-text">
            Download Resume
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
