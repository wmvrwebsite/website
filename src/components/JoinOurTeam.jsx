import React from 'react';

const JoinOurTeam = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>About Us</h2>
      <p style={styles.paragraph}>
        We are a dedicated organization committed to supporting veterans in our community. 
        Our mission is to enhance the lives of veterans and their families through various
        programs, outreach initiatives, and community services.
      </p>
    </section>
  );
};

// Styles for the component
const styles = {
  section: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    marginTop: '40px',
    textAlign: 'center',
    maxWidth: '70%',
    margin: '0 auto',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
};

export default JoinOurTeam;