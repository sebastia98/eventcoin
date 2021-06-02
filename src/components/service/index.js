import React from 'react';
import './index.css';

const Service = ({service}) =>  {
    return (
        <tr className="service-container">
            <td className="user-name">{service?.userName}</td>
            <td className="full-name">{service?.fullName}</td>
            <td className="offered-services">{service?.service}</td>
            <td className="service-price">{service?.priceForHour} €</td>
        </tr>
    )
}

export default Service; 