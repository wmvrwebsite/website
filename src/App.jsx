import './App.css'
import React, { useState } from 'react';
import Header from './components/header';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import JoinOurTeam from './components/JoinOurTeam';


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
      default:
        return <AboutUs />;
    }
  };

  return (
      <div>
          <FixedBackground />
          <Header />
          <div style={{ paddingTop: '20px' }}></div>
          <Menu onSelectSection={setSelectedSection} />
          {renderSection()}
      </div>
  );
};

export default App;
