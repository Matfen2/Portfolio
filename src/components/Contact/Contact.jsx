import "../Contact/Contact.scss";

function Contact() {
  return (
    <section id="contact-section" className="contact">
      <h2 className="nameContact">CONTACT</h2>
      <div className="listContact d-flex justify-content-center align-items-center">
        <div className="contact-item">
          <i className="fa-solid fa-phone"></i>
          <p className="contact-text">06 05 15 24 23</p>
        </div>
        <div className="contact-item">
          <i className="fa-solid fa-envelope"></i>
          <p className="contact-text">matfen2.0@outlook.fr</p>
        </div>
        <div className="contact-item social">
          <a href="https://www.facebook.com/mathieu.fenouil.56/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/mathieu-fenouil-5884a8193/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Matfen2/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Mathieu FENOUIL, Tous droits réservés.</p>
      </footer>
    </section>
  );
}

export default Contact;
