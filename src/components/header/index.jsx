import React, { useState } from "react";
import "./header.scss";
import ContactUs from "../contact/ContactUs";

function Header() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const closeModal = () => {
    setShowContactForm(false);
  };

  return (
    <header>
      <nav>
        <h1>Alexeis ROCHA</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#" onClick={handleContactClick}>Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <ContactUs isOpen={showContactForm} onRequestClose={closeModal} />
    </header>
  );
}

export default Header;