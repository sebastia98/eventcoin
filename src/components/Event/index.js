import React from "react";

import './index.css'

export const Event = (props) => {

    return (
        <div className = "event-wrapper">   
            <div className = "event-image-container">
                <img/>
            </div>
            <div className = "event-info-container">
                <p className = "event-title">{props.event?.event}</p>
                <hr/>
                <div className = "event-time">
                    <p className = "event-hour">{props.event?.startEvent}</p>
                    <p className = "event-date">{props.event?.dateEvent.substring(0, 10)}</p>
                </div>
                <div className = "event-position">
                    <p className = "event-location">{props.event?.localNameEvent}</p>
                    <p className = "event-direction">{props.event?.directionLocalEvent}</p>
                </div>
            </div>
            <div className = "event-price-container">
                <p className = "event-price">{props.event?.priceEvent} €</p>
            </div>
        </div>        
    )
}