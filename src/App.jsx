import './App.css'
import React, { useState } from 'react';
import Header from './components/header';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';


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
