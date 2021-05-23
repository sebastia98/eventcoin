import React from 'react';
import { Link } from 'react-router-dom';
import { EVENT_URL } from '../../utils/urls';
import './index.css'


function Card({event}) {
    return (
        <Link to = {`${EVENT_URL}/${event?.name}`} className="event-wrapper">
            <div className="card-event">
                <div className="card-event-img" style={{backgroundImage:`url(${event?.image})`}}/>
                <div className="card-event-description">
                    <p>
                        {event?.name}
                    </p>
                    <p>
                        {event?.date}
                    </p>
                    <p>
                        {event?.description}
                    </p>
                    <div className="event-tickets">
                        <div className="event-ticket-wrapper">
                            <i className="fas fa-ticket-alt"></i>
                            <p>
                                {event?.price}
                            </p>
                        </div>
                        <div className="event-ticket-wrapper">
                            <i className="fas fa-money-check"></i>
                            <p>
                                {event?.availableTickets}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
