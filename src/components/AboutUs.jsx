import React from 'react';
import photo from '../assets/Images/dean.webp';
import BoardMembers from './BoardMembers';
import '../assets/CSS/AboutUs.css'

const AboutUs = () => {
  return (
    <div>
      <section className="section">
        <h2 className="title">About Us</h2>
        <div className="container">
          <div className="imageContainer">
            <img 
              src={photo} 
              alt="About Us"
              className="image" 
            />
          </div>
          <div className="descriptionContainer">
            <p className="paragraph">
              We are a dedicated organization committed to supporting veterans in our community. 
              Our mission is to enhance the lives of veterans and their families through various
              programs, outreach initiatives, and community services. We believe in ensuring that 
              every veteran has access to the resources they need to thrive.
            </p>
            <p className="paragraph">
              Our team consists of passionate individuals who understand the challenges faced by 
              veterans. We work tirelessly to create an inclusive environment where veterans feel 
              valued and supported. Join us in our efforts to make a positive impact in the lives 
              of those who have served our country.
            </p>
          </div>
        </div>
      </section>
      <BoardMembers />
    </div>
  );
};

export default AboutUs;