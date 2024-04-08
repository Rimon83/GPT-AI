import React from 'react'
import "./features.css"
import Feature from "../../components/feature/Feature"

const featuresData = [
  {
    title: "title 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    title: "title 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    title: "title 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    title: "title 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
];

const Features = () => {
  return (
    <div className="features section__padding " id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          The Futures and you just Need to Realize it. Step into Future Today
          and make it Happen
        </h1>
        <p>The Futures and you just Need to Realize it.</p>
      </div>
      <div className='features-container'>
        {featuresData && featuresData.map((feature, index)=>(
          <Feature key={index} title={feature.title} text={feature.text}/>
        ))}
      </div>
    </div>
  );
}

export default Features