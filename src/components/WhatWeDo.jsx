import React, { useState } from 'react';
import '../assets/CSS/WhatWeDo.css';
import EventsPhoto from '../assets/Images/events.jpg';
import FundRaiserPhoto from '../assets/Images/fund.jpg';
import TheRanchPhoto from '../assets/Images/ranch.jpg';
import BuildingBondsPhoto from '../assets/Images/bonds.jpg';

// Sample data for demonstration
const tabData = {
  Events: {
    image: EventsPhoto,
    description: (
      <>
      <p>By participating in events we are able to build ties within the community, it is also a way of helping the veterans we are helping, and those we work with by getting them out into the world and meeting people and helping them form essential connections that are an important aspect of helping them not feel so isolated.</p>
      </>
    ),
  },
  FundRaisers: {
    image: FundRaiserPhoto,
    description: (
      <>
      <p>We use fund raisers to raise awareness to our cause and hosting booths gives our volunteers a sense of purpose and another opportunity to build bonds and form ties to the community.</p>
      </>
    ),
  },
  TheRanch: {
    image: TheRanchPhoto,
    description: (
      <>
      <p>The ranch is one of our most valuable tools, it allows us to do so much for those we help and also allows us to be able to give back to the community as a retreat. Our property located in White Cloud Michigan, it is dedicated mainly to veteran use. We host retreat weekends, cookouts, and other events to bring our community together. It is currently under development, we're always looking for volunteers to help us continue to grow.</p>
      </>
    ),
  },
  BuildingBonds: {
    image: BuildingBondsPhoto,
    description: (
      <>
      <p>As stated in Events and Fund Raisers, building bonds is an essential part of what we do here. Our belief is that the more connected someone feels, the more strongly they're willing to fight. That is why at WMVR we have outings for the sole purpose of coming together as a team so we continue to build on the bonds already there.</p>
      </>
    ),
  },
};

const WhatWeDo = () => {
  const [activeTab, setActiveTab] = useState('Events'); // Default active tab

  return (
    <section className="what-we-do-section">
      <h2 className="section-title">What We Do</h2>
      <div className="tab-container">
        {Object.keys(tabData).map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)} 
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="content-container">
        <div className="image-column">
          <img 
            src={tabData[activeTab].image} 
            alt={activeTab} 
            className="content-image"
          />
        </div>
        <div className="description-column">
          <p className="description-text">
            {tabData[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;