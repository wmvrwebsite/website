import './App.css'
import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import JoinOurTeam from './components/JoinOurTeam';
import Donate from './components/Donate';

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
          <div style={{ paddingTop: '80px' }}></div>
          <Menu onSelectSection={setSelectedSection} />
          {renderSection()}
      </div>
  );
};

export default App;
