import React from 'react';
import '../assets/CSS/Menu.css';

const Menu = ({ onSelectSection }) => {
  return (
    <nav className="nav">
      <ul className="ul">
        <li className="li">
          <button onClick={() => onSelectSection('about')} className="button">About Us</button>
        </li>
        <li className="li">
          <button onClick={() => onSelectSection('whatWeDo')} className="button">What We Do</button>
        </li>
        <li className="li">
          <button onClick={() => onSelectSection('join')} className="button">Join Our Team</button>
        </li>
        <li className="li">
          <button onClick={() => onSelectSection('donate')} className="button">Donate</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;