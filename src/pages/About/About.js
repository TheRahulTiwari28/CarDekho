import React from 'react'
import car4 from "../../image/Mahindra-XUV700.jpeg"
import car5 from "../../image/Maruti-Suzuki-Baleno.jpg"
import car6 from "../../image/Maruti-Suzuki-S-Cross.jpeg"
import car7 from "../../image/marutisuzuki-vitara-brezza.jpeg"
import car8 from "../../image/Tata-Altroz-EV.jpeg"
import car9 from "../../image/tata-nexon.jpeg"
import car10 from "../../image/Tata-Tigor-EV.jpeg"
import car11 from "../../image/Toyota-Camry.jpg"
import car12 from "../../image/Toyota-Vellfire.jpeg"
import car13 from "../../image/MG-Hector-Plus.jpeg"
import Vehicles from '../../Components/Vehicles'
import Footer from '../../Components/Navbar/Footer'
import Upcoming from '../../Components/Upcoming'
import Electric from '../../Components/Electric'

const About = () => {
  return (
    <>
    <section className="services" id="services">
      <h1 className="heading"> our <span>Vehicles</span> </h1>
        <div className="vehicles">
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
            price="4,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car6}
            name="Maruti Suzuki S Cross"
            price="9,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car7}
            name="marutisuzuki vitara brezza"
            price="7,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car8}
            name="Tata Altroz EV"
            price="3,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car9}
            name="tata nexon"
            price="20,00,000"
            speed="170mph"
            type="Petrol"
          />

          <Vehicles
            img={car10}
            name="Tata Tigor"
            price="10,80,000"
            speed="165mph"
            type="Petrol"
          />

          <Vehicles
            img={car11}
            name="Toyota Camry"
            price="7,55,000"
            speed="160mph"
            type="Petrol"
          />

          <Vehicles
            img={car12}
            name="Toyota Vellfire"
            price="1,75,00,000"
            speed="174mph"
            type="Electric & Automatic"
          />
          
          <Vehicles
            img={car13}
            name="MG Hector Plus"
            price="8,00,000"
            speed="150mph"
            type="Automatic"
          />
        </div>
    </section> 
    {/* electric car */}
    <Electric/>

    {/* upcomming */}
    <Upcoming/>
    <Footer/>
    </>
  )
}

export default About
