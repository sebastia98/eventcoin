import React from 'react';
import './index.css'


function Card({event}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={event?.image} alt=""/>
            </div>
            <h3 className="card-title">{event?.name}</h3>
            <div className="card-body">
                <div className="card-price">
                        <p>{event?.price}</p>
                        <i className="fas fa-euro-sign"></i>
                </div>
                <p className="card-date">{event?.date}</p>
            </div>
            <div className="card-button">
                    <p>View more</p>
            </div>
        </div>
    )
}

export default Card
