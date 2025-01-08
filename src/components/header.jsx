import React from 'react';
import logo from '../assets/Images/logo.webp'; // Update the path to your logo image

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img 
                    src={logo} 
                    alt="Logo" 
                    style={styles.logo} 
                />
            </div>
            <h1 style={styles.title}>West Michigan Veterans Ranch</h1>
        </header>
    );
};

// Styles for the component
const styles = {
    header: {
        display: 'flex',
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center header content horizontally
        padding: '20px',
        position: 'relative', // Positioning context
        top: '0', // Align at the top
        zIndex: 10, // Ensure it's above other elements
    },
    logoContainer: {
        marginRight: '10px', // Space between logo and title
    },
    logo: {
        width: '50px', // Set width for logo
        height: '50px', // Set height for logo
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center', // Center text
    },
};

export default Header;