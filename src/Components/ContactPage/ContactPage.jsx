import React from "react";
import "./ContactPage.css";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="Contactbody">
      <h1>Get in Touch</h1>
      <div className="container">
        <div className="card">
          <div className="icon icon1"><MapPin/></div>
          <h2>Location</h2>
          <p className="p">Mhow - Neemuch Rd, <br />Fatehgarh, Richha Bachchha,<br /> Madhya Pradesh 458002,India</p>
          <div className="linkcon">
          <a href="#" className="link">See on Map</a>
          </div>
        </div>

        <div className="card">
          <div className="icon icon2"><Phone/></div>
          <h2>Contact Number</h2>
          <p className="p">+91 7440616322<br /></p>
          <div className="linkcon">
          <a href="tel:+917440616322" className="link">Call</a>
          </div>
        </div>

        <div className="card">
          <div className="icon icon3"><Mail/></div>
          <h2>Email</h2>
          <p className="p">HotelDevDhani.MDS <br /> @gmail.com</p>
          <div className="linkcon">
          <a href="mailto:HotelDevDhani.MDS@gmail.com" target="_blank" className="link">Send Mail</a>
          </div>
        </div>

        <div className="card">
          <div className="icon icon4"><Instagram/></div>
          <h2>Instagram</h2>
          <p className="p"> hotel_dev_dhani</p>
          <div className="linkcon">
          <a href="https://www.instagram.com/hotel_dev_dhani?igsh=ODhwNG02MGI5bGlw" target="_blank"  className="link">Visit Page</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
