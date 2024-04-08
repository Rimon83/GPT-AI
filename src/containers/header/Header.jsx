import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding">
      <div className="header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="header-content-input">
          <input type="email" placeholder="Your email" />
          <button type="button">Get Started</button>
        </div>
        <div className="header-content-people">
          <img src={people} alt={people} />
          <p>1600 people requested</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt={ai} />
      </div>
    </div>
  );
};

export default Header;
