import React from 'react'
import './Vehicles.css'

const Vehicles = ({speed, price, name, img, type }) => {
    return (
        <>
        <div className="vehicles-box">
            <img src={img} alt=""/>
            <div className="vehicles-content">
                <h3>{name}</h3>
                <p>Price : {price} | Speed : {speed} | Type : {type} </p>
                <a href="/" class="btn"> read more</a>
            </div>
        </div>
        </>
    )
}

export default Vehicles
