import React from 'react';
import './Home.css';
import Vehicles from '../../Components/Vehicles';
import car from "../../image/Hyundai-Venue.jpeg"
import car1 from "../../image/kia.jpeg"
import car2 from "../../image/Kia-Sonet.jpeg"
import car3 from "../../image/Mahindra-XUV300.jpeg"
import car4 from "../../image/Mahindra-XUV700.jpeg"
import car5 from "../../image/Maruti-Suzuki-Baleno.jpg"
import car6 from "../../image/Maruti-Suzuki-S-Cross.jpeg"
import car7 from "../../image/marutisuzuki-vitara-brezza.jpeg"
import car8 from "../../image/Tata-Altroz-EV.jpeg"
import car9 from "../../image/tata-nexon.jpeg"

import Footer from '../../Components/Navbar/Footer';
const Home = () => {
  return (
    <>
    {/* Home */}
      <section className="home">
        <h3>Find Your car</h3>
        <img src="/image/home-img.png" alt="" />
        <a href="/" className="btn home-parallax">Explore Cars</a>
      </section>

      {/* Icons */}
      <section className="icons-container">
        <div className="icons">
            <i className="fas fa-home"></i>
            <div className="content">
                <h3>100+</h3>
                <p>Branches</p>
            </div>
        </div>

        <div className="icons">
            <i className="fas fa-car"></i>
            <div className="content">
                <h3>5000+</h3>
                <p>cars sold</p>
            </div>
        </div>
    
        <div className="icons">
            <i className="fas fa-users"></i>
            <div className="content">
                <h3>200+</h3>
                <p>happy clients</p>
            </div>
        </div>
    
        <div className="icons">
            <i className="fas fa-car"></i>
            <div className="content">
                <h3>100+</h3>
                <p>news cars</p>
            </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="services" id="services">
      <h1 className="heading"> our <span>Vehicles</span> </h1>
        <div className="vehicles">
          <Vehicles
            img={car}
            name="Hyundai Venue"
            price="5,00,000"
            speed="150mph"
            type="Petrol"
          />
          
          <Vehicles
            img={car1}
            name="kia"
            price="6,00,000"
            speed="160mph"
            type="Battery"
          />

          <Vehicles
            img={car2}
            name="Kia Sonet"
            price="8,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car3}
            name="Mahindra XUV300"
            price="10,00,000"
            speed="173mph"
            type="Petrol"
          />
          <Vehicles
            img={car4}
            name="Mahindra XUV700"
            price="9,00,000"
            speed="160mph"
            type="Petrol"
          />

          <Vehicles
            img={car5}
            name="Maruti Suzuki Baleno"
            price="8,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car6}
            name="Maruti Suzuki S Cross"
            price="8,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car7}
            name="marutisuzuki vitara brezza"
            price="8,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car8}
            name="Tata Altroz EV"
            price="8,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car9}
            name="tata nexon"
            price="8,00,000"
            speed="170mph"
            type="Petrol"
          />
        </div>
    </section>

      {/* News */}
      <section className="newsletter">
        <h3>subscribe for latest updates</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, suscipit.</p>
        <form action="">
          <input type="email" placeholder="enter your email" />
          {/* <input type="submit" value="subscribe" /> */}
          <a href="mailto: tiwarirahul28042002@gmail.com" >Subscribe</a>
        </form>
      </section>

      {/* Footer */}
      <Footer/>
    </>
  )
}
export default Home;