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








// import React from "react";
// import "./Footer.css";
// import Dalbati from '../../assets/image/Dalbati.jpg'
// import matarpaneer from '../../assets/image/matarpaneer.jpg'

// const About = () => {
//   return (
//     <div className="container">
//       <h1 className="title">About Dev Dhani</h1>
//       <div className="aboutcon">
//       <img className="img" src={Dalbati} alt="" />
//       <p className="text">
//         Welcome to Dev Dhani, where tradition meets taste! Our restaurant brings
//         you authentic flavors inspired by Rajasthan's rich culinary heritage.
//         We take pride in serving delicious, home-style meals prepared with
//         fresh ingredients and lots of love.
//       </p>
//       </div>
//     </div>

//   );
// };

// const Contact = () => {
//   return (
//     <div className="container">
//       <h1 className="title">Contact Us</h1>
//       <p className="text">We'd love to hear from you!</p>
//       <div className="info">
//         <p className="text">📍 Location: Jaipur, Rajasthan</p>
//         <p className="text">📞 Phone: +91 98765 43210</p>
//         <p className="text">✉️ Email: contact@devdhani.com</p>
//       </div>
//     </div>
//   );
// };

// export { About, Contact };

