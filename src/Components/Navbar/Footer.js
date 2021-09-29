import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div class="box">
            <h3>our branches</h3>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> india </a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> japan </a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> france </a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> russia </a>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#home"> <i className="fas fa-arrow-right"></i> home </a>
            <a href="#vehicles"> <i className="fas fa-arrow-right"></i> vehicles </a>
            <a href="#services"> <i className="fas fa-arrow-right"></i> services </a>
            <a href="#featured"> <i className="fas fa-arrow-right"></i> featured </a>
            <a href="#reviews"> <i className="fas fa-arrow-right"></i> reviews </a>
            <a href="#contact"> <i className="fas fa-arrow-right"></i> contact </a>
        </div>
        <div className="box">
            <h3>contact info</h3>
            <a href="/"> <i className="fas fa-phone"></i> +123-456-7890 </a>
            <a href="/"> <i className="fas fa-envelope"></i> abc@gmail.com </a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> mumbai, india - 400017 </a>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="/"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="/"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="/"> <i className="fab fa-instagram"></i> instagram </a>
            </div>
        </div>
        <div class="credit"> created by Rahul Tiwari | all rights reserved </div>
      </section>
    </>
  )
}
export default Footer;