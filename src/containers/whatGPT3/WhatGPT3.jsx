import React from 'react'
import "./whatGPT3.css"
import Feature from "../../components/feature/Feature"

const WhatGPT3 = () => {
  return (
    <div className="whatgpt3 section__margin" id="wgpt3">
      <div className="whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        />
      </div>
      <div className="whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatgpt3-container">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        />
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        />
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
        />
      </div>
    </div>
  );
}

export default WhatGPT3