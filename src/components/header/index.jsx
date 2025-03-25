import React, { useState } from "react";
import ContactUs from "../contact/contactus";
import ThemeToggle from "../toogle_theme/index";

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
        <div className="nav-header">
          <h1>Alexeis ROCHA</h1>
          <ThemeToggle />
        </div>
        <ul>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#" onClick={handleContactClick}>Contact</a></li>
          <li><a href="#about">A Propos</a></li>
        </ul>
      </nav>

      <ContactUs isOpen={showContactForm} onRequestClose={closeModal} />
    </header>
  );
}

export default Header;