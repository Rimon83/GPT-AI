import React from 'react'
import possibilityImage from "../../assets/possibility.png"
import "./possibility.css"

const Possibility = () => {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possibilityImage} alt={possibilityImage} />
      </div>
      <div className="possibility-content">
        <h4>Request Early Access to get started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
        <h4>Request Early Access to get started</h4>
      </div>
    </div>
  );
}

export default Possibility