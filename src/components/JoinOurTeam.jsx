import React, { useState } from 'react';
import '../assets/CSS/JoinOurTeam.css'; // Import your external CSS file
import teamPhoto from '../assets/Images/dean.webp'; // Update the path to your actual photo

const JoinOurTeam = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = (e) => {
    client.models.Todo.create({ name, phone, email });
    e.preventDefault();
    alert(`Thank you for your interest, ${name}!\nPhone: ${phone}\nEmail: ${email}`);
    handleClosePopup();
  };

  return (
    <section className="join-section">
      <h2 className="join-title">Join Our Team</h2>
      <div className="content-container">
        <div className="description-container">
          <p className="description">
            We are always looking for passionate individuals to join our team! If you’re interested 
            in making a difference in the lives of veterans, we want to hear from you.
          </p>
        </div>
        <div className="image-container">
          <img 
            src={teamPhoto} 
            alt="Team" 
            className="team-image" 
          />
        </div>
      </div>
      <button onClick={handleOpenPopup} className="join-button">Join Us</button>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Join Our Team</h3>
            <form onSubmit={handleSubmit}>
              <label className="popup-label">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="popup-input"
                  required
                />
              </label>
              <label className="popup-label">
                Phone Number:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="popup-input"
                  required
                />
              </label>
              <label className="popup-label">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="popup-input"
                  required
                />
              </label>
              <div className="button-container">
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" onClick={handleClosePopup} className="cancel-button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinOurTeam;