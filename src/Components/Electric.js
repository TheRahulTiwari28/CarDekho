import React from 'react'
import Vehicles from './Vehicles'
import e1 from '../image/electric/Audi-e-tron.jpeg'
import e2 from '../image/electric/Audi-e-tron-GT.jpeg'
import e3 from '../image/electric/BMW7series.jpg'
import e4 from '../image/electric/Hyundai-Kona-Electric.jpg'
import e5 from '../image/electric/Jaguar-I-Pace.jpeg'
import e6 from '../image/electric/Mercedes-Benz.jpeg'
import e7 from '../image/electric/MG-hector.jpeg'
import e8 from '../image/electric/Tata-Nexon-EV.jpeg'
import e9 from '../image/electric/Volvo-XC90.jpg'

const Electric = () => {
    return (
        <>
        <section className="services" id="services">
            <h1 className="heading"> our <span>Electric Car</span> </h1>
            <div className="vehicles">
                <Vehicles
                    img={e1}
                    name="Audi e tron"
                    price="9,00,000"
                    speed="150mph"
                    type="Electic & Automatic"
                />

                <Vehicles
                    img={e2}
                    name="Audi e tron GT"
                    price="19,00,000"
                    speed="160mph"
                    type="Electic & Automatic"
                />

                <Vehicles
                    img={e3}
                    name="BMW 7 series"
                    price="97,00,000"
                    speed="165mph"
                    type="Electic & Automatic"
                />

                <Vehicles
                    img={e4}
                    name="Hyundai Kona Electric"
                    price="18,00,000"
                    speed="169mph"
                    type="Electic & Automatic"
                />

                <Vehicles
                    img={e5}
                    name="Jaguar I Pace"
                    price="5,00,00,000"
                    speed="169mph"
                    type="Electic & Automatic"
                />

                <Vehicles
                    img={e6}
                    name="Mercedes Benz"
                    price="3,25,00,000"
                    speed="157mph"
                    type="Electic & Automatic"
                />

                <Vehicles
                    img={e7}
                    name="MG hector"
                    price="1,98,00,000"
                    speed="168mph"
                    type="Electic & Automatic"
                />

                <Vehicles
                    img={e8}
                    name="Tata Nexon EV"
                    price="37,00,000"
                    speed="170mph"
                    type="Electic & Automatic"
                />

                <Vehicles
                    img={e9}
                    name="Volvo XC90"
                    price="90,00,000"
                    speed="174mph"
                    type="Electic & Automatic"
                />
            </div>
        </section>    
        </>
    )
}

export default Electric
