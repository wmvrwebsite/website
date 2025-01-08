import React from 'react';
import logo from '../assets/Images/logo.webp';
import '../assets/CSS/Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="logo" 
                />
            </div>
            <h1 className="title">West Michigan Veterans Ranch</h1>
        </header>
    );
};

export default Header;