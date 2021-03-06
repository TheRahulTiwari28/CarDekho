import React from 'react';
import Iframe from 'react-iframe'
import Footer from '../../Components/Navbar/Footer';
import './Contact.css';
const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading"><span>contact</span> us</h1>
        <div className="row">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.64332765207!2d72.74109986532547!3d19.082522320565186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1632568665064!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            // style="border:0;" 
            allowfullscreen="" 
            loading="lazy" />           
            <form action="">
                <h3>get in touch</h3>
                <input type="text" placeholder="your name" className="box"/>
                <input type="email" placeholder="your email" className="box"/>
                <input type="tel" placeholder="subject" className="box"/>
                <textarea placeholder="your message" className="box" cols="30" rows="10"></textarea>
                <input type="submit" value="send message" className="btn"/>
            </form>
        </div>
    </section>
    <Footer/>
    </>
  )
}
export default Contact;