import './App.css'
import Header from './components/header';

const FixedBackground = () => {
  return (
      <div className="fixed-background"></div>
  );
};

const App = () => {
  return (
      <div>
          <FixedBackground />
          <Header />
          <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
              <h1>Welcome to Our Site</h1>
          </div>
      </div>
  );
};

export default App;
