import React from 'react'
import "./footer.css"
import gpt3Logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='footer section-padding'>
      <div className='footer-heading'>
        <h1 className='gradient__text'>Do you want to step in the future before others</h1>

      </div>
      <div className='footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='footer-links'>
        <div className='footer-links-logo'>
          <img src={gpt3Logo} alt="logo"/>
          <p>
            the address here
          </p>

        </div>
        <div className='footer-links-div'>
          <h4>Links</h4>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='footer-links-div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className='footer-links-div'>
          <h4>Get in touch</h4>
          <p>phone number</p>
          <p>email</p>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>©️ company name 2020</p>
      </div>

    </div>
  )
}

export default Footer