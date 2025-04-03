import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs({ isOpen, onRequestClose }) {
  const formRef = useRef(null);

  const [userName, setUserName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setConfirmationMessage("");
    setErrorMessage("");

    // Vérification que tous les champs sont remplis
    if (!userName || !userFirstName || !userEmail || !userPhone || !message) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    // Vérification si formRef.current est bien défini avant d'envoyer
    if (!formRef.current) {
      setErrorMessage("Le formulaire n'est pas encore disponible.");
      return;
    }

    console.log("Envoi de l'email...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Email envoyé avec succès !");
          setConfirmationMessage("Email envoyé avec succès !");
          setTimeout(() => {
            onRequestClose();
          }, 1000);
        },
        (error) => {
          console.error("Erreur lors de l'envoi :", error);
          setErrorMessage(
            "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard."
          );
        }
      );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onRequestClose}>
          <i className="fas fa-times"></i>
        </button>
        <form ref={formRef} className="form" onSubmit={sendEmail}>
          <label>Nom</label>
          <input
            type="text"
            name="from_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label>Prénom</label>
          <input
            type="text"
            name="from_firstname"
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="from_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />

          <label>Téléphone</label>
          <input
            type="tel"
            name="from_phone"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <input type="submit" value="Envoyer" className="send-button" />
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {confirmationMessage && (
          <p className="confirmation-message_success">{confirmationMessage}</p>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
