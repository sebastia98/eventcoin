import React from 'react';
import './index.css';

const Service = ({service}) =>  {
    return (
        <tr className="service-container">
            <td className="user-name">{service?.username}</td>
            <td className="full-name">{service?.fullName}</td>
            <td className="offered-services">{service?.offeredServices}</td>
            <td className="service-price">{service?.rate} €</td>
        </tr>
    )
}

export default Service; 