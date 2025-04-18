import React, { useState } from "react";
import ContactUs from "../contact/contactus";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer>
      <div className="start">
        <h3>Prêt à démarrer un projet ?</h3>
        <p>
          Intéressé à travailler ensemble ? Nous devrions organiser une
          discussion.
        </p>
        <button onClick={openModal}>Allons-y</button>
      </div>

      <div className="cols">
        <div className="about-col">
          <h3>Alexeis ROCHA</h3>
          <p>Développeur Front-end</p>
          <p>E-mail: alexeis.rocha1@icloud.com</p>
        </div>

        <div className="links-col">
          <h4>Liens Utiles</h4>
          <a href="#">Accueil</a>
          <a href="#about">A Propos</a>
          <a href="#skills">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>Contact</a>
        </div>

        <div className="links-col">
          <h4>Réseaux Sociaux</h4>
          <a href="https://www.linkedin.com/in/alexeis-rocha-b047b0124/">
            Linkedin
          </a>
          <a href="https://github.com/Alexeis-R">Github</a>
        </div>
      </div>

      <ContactUs isOpen={isModalOpen} onRequestClose={closeModal} />
    </footer>
  );
}

export default Footer;