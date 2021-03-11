import React from "react";
import about from "../img/weezer-me.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Lorem Ipsum</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea praesentium consequuntur iusto
          dolorum itaque beatae magni eligendi quae! Quis dolorem repellendus nostrum, odit
          blanditiis totam vitae quae officiis similique assumenda!
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Location</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Richard Estes</p>
            <p>: 24</p>
            <p>: Costa Mesa</p>
            <p>: English</p>
            <p>: 1234 Ocean Ave.</p>
            <p>: United States</p>
          </div>
        </div>
        <button className="btn">Download Resume</button>
      </div>
    </div>
  );
}

export default ImageSection;
