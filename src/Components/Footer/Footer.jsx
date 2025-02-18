import { MapPin, Phone, Mail } from "lucide-react";
import "./Footer.css"; // Import किया लेकिन styles. के बिना इस्तेमाल किया

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-heading">Contact Us</h3>
            <div className="space-y-2">
              <div className="contact-info">
                <MapPin className="review-star" />
                <span>Mhow - Neemuch Rd, <br />Fatehgarh, Richha Bachchha</span>
              </div>
              <div className="contact-info">
                <Phone className="review-star" />
                <span>(555) 123-4567</span>
              </div>
              <div className="contact-info">
                <Mail className="review-star" />
                <span>info@devdani.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 11am - 10pm</p>
              <p>Saturday: 10am - 11pm</p>
              <p>Sunday: 10am - 9pm</p>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <p className="footer-text">
              Follow us on social media for updates, special offers, and behind-the-scenes content.
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Devdani Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
