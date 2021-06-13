import React from 'react';
import './index.css';

const Service = ({service, userService}) =>  {
    return (
        <tr className="service-container">
            <td className="user-name">{service?.userId.username}</td>
            <td className="full-name">{service?.userId.fullName}</td>
            <td className="offered-services">{service?.offeredServices}</td>
            <td className="service-price">{service?.rate} €</td>
            {userService && <td className = "user-options"><button className = "edit">Edit</button><button className = "delete">Delete</button></td>}
        </tr>
    )
}

export default Service; 