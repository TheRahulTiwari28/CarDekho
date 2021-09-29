import React from 'react'
import Vehicles from './Vehicles'
import up1 from '../image/upcomming/Force-Motors-Gurkha.jpeg'
import up2 from '../image/upcomming/Jaguar-E-Pace.jpg'
import up3 from '../image/upcomming/Mahindra-XUV700.jpeg'
import up4 from '../image/upcomming/MG-Astor.jpeg'
import up5 from '../image/upcomming/Rolls-Royce-NewGhost.jpeg'
import up6 from '../image/upcomming/Tata-Altroz-EV.jpeg'
import up7 from '../image/upcomming/Volkswagen-Tiguan.jpeg'

const Upcoming = () => {
    return (
        <>
        <section className="services" id="services">
            <h1 className="heading"> our <span>Upcoming</span> </h1>
            <div className="vehicles">
                <Vehicles
                    img={up1}
                    name="Force Motors Gurkha"
                    price="27,00,000"
                    speed="177mph"
                    type="Petrol"
                />

                <Vehicles
                    img={up2}
                    name="Jaguar E Pace"
                    price="1,87,00,000"
                    speed="177mph"
                    type="Petrol"
                />

                <Vehicles
                    img={up3}
                    name="Mahindra XUV700"
                    price="37,00,000"
                    speed="156mph"
                    type="Petrol"
                />

                <Vehicles
                    img={up4}
                    name="MG Astor"
                    price="47,00,000"
                    speed="167mph"
                    type="Petrol"
                />

                <Vehicles
                    img={up5}
                    name="Rolls Royce NewGhost"
                    price="7,00,00,000"
                    speed="187mph"
                    type="Petrol"
                />

                <Vehicles
                    img={up6}
                    name="Tata Altroz"
                    price="47,00,000"
                    speed="164mph"
                    type="Petrol"
                />

                <Vehicles
                    img={up7}
                    name="Volkswagen Tiguan"
                    price="67,00,000"
                    speed="173mph"
                    type="Petrol"
                />

            </div>
        </section>
        </>
    )
}

export default Upcoming
