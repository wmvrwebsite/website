import React from 'react';
import '../assets/CSS/Donate.css'; // Make sure this is the correct path

const Donate = () => {
  return (
    <div className="donate-section">
      <h2 className="donate-title">Donate</h2>
      <div className="donate-container">
        <div className="donate-description">
          <p className="donate-paragraph">
            Your generous donations help us carry out our mission to support veterans. 
            Every contribution makes a significant impact on the lives of those who have served 
            our country, allowing us to provide essential programs and services for their well-being.
          </p>
          <p className="donate-paragraph">
            Please consider making a donation to help us continue our initiatives and outreach efforts. 
            Together, we can create a brighter future for veterans and their families.
          </p>
        </div>
        <div className="donate-button-container">
          <a href="https://www.paypal.com/donate/?hosted_button_id=2YST93UCCR8F4" target="_blank" rel="noopener noreferrer">
            <button className="donate-button">Donate Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;