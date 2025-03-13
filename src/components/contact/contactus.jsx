import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs({ isOpen, onRequestClose }) {
  const form = useRef();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Réinitialiser les messages de confirmation et d'erreur avant d'envoyer
    setConfirmationMessage('');
    setErrorMessage('');

    if (!userName || !userEmail || !message) {
      setErrorMessage('Veuillez remplir tous les champs.');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          // Message de confirmation
          setConfirmationMessage('Email envoyé avec succès!');
          // Ferme la modale après 1 seconde pour permettre l'affichage du message
          setTimeout(() => {
            onRequestClose();
          }, 1000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.');
        }
      );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onRequestClose}>X</button>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
      </div>
    </div>
  );
}

export default ContactUs;
