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
        </div>

        <div className="links-col">
          <h4>Liens Utiles</h4>
          <a href="#">Accueil</a>
          <a href="#">À propos</a>
          <a href="#">Compétences</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>

        <div className="links-col">
          <h4>Réseaux Sociaux</h4>
          <a href="https://www.linkedin.com/in/alexeis-rocha-b047b0124/">
            Linkedin
          </a>
          <a href="https://github.com/Alexeis-R">Github</a>
        </div>

        {/* <div className="news-col">
          <h4>Newsletter</h4>
          <p>Entrez votre email et soyez informé des nouveautés.</p>

          <form>
            <label htmlFor="newsletter-email">Votre adresse email</label>
            <input type="email" id="newsletter-email" placeholder="Votre adresse email" />
            <button>
              <i className="bx bxl-telegram"></i>
            </button>
          </form>
        </div> */}
      </div>

      <ContactUs isOpen={isModalOpen} onRequestClose={closeModal} />
    </footer>
  );
}

export default Footer;