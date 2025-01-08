import './App.css'
import React, { useState } from 'react';
import Header from './components/header';


const FixedBackground = () => {
  return (
      <div className="fixed-background"></div>
  );
};

const App = () => {
  const [selectedSection, setSelectedSection] = useState('about'); // Default section

  const renderSection = () => {
    switch (selectedSection) {
      case 'about':
        return <AboutUs />;
      case 'whatWeDo':
        return <WhatWeDo />;
      case 'join':
        return <JoinOurTeam />;
      case 'donate':
        return <Donate />;
      default:
        return <AboutUs />;
    }
  };

  return (
      <div>
          <FixedBackground />
          <Header />
      </div>
  );
};

export default App;
