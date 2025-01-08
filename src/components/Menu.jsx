import React from 'react';

const Menu = ({ onSelectSection }) => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <button onClick={() => onSelectSection('about')} style={styles.button}>About Us</button>
        </li>
        <li style={styles.li}>
          <button onClick={() => onSelectSection('whatWeDo')} style={styles.button}>What We Do</button>
        </li>
        <li style={styles.li}>
          <button onClick={() => onSelectSection('join')} style={styles.button}>Join Our Team</button>
        </li>
        <li style={styles.li}>
          <button onClick={() => onSelectSection('donate')} style={styles.button}>Donate</button>
        </li>
      </ul>
    </nav>
  );
};

// Example styles for the menu
const styles = {
  nav: {
    padding: '10px',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  li: {
    margin: '0 15px',
  },
  button: {
    color: 'black',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    textDecoration: 'underline',
  },
};

export default Menu;