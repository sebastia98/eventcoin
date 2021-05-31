import React from 'react';
import { Link } from 'react-router-dom';
import { EVENT_URL } from '../../utils/urls';
import './index.css'


function Card({event}) {
    return (
        <Link to = {`${EVENT_URL}/${event?.name}`} className="card-link">
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
        </Link>
    )
}

export default Card
