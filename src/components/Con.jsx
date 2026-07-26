import "../Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
          Have an idea, a question, or a project in mind? Let's connect and create something extraordinary together.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <FaPhoneAlt className="icon" />
              <h3>Phone</h3>
              <a href="tel:+919274070120">+91 92740 70120</a>
            </div>

            <div className="contact-card">
              <FaEnvelope className="icon" />
              <h3>Email</h3>
              <a href="mailto:infoaddinmedia@gmail.com">
                infoaddinmedia@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <FaInstagram className="icon" />
              <h3>Instagram</h3>
              <a
                href="https://www.instagram.com/addin_media"
                target="_blank"
                rel="noopener noreferrer"
              >
                @addin_media
              </a>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt className="icon" />
              <h3>Address</h3>
              <p>
                B-2, Opera Business Hub,
                <br />
                Lajamni Chowk,
                <br />
                Surat, Gujarat
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} <strong>AddInMedia</strong>. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;