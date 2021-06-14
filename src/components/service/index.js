import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import { SERVICE_URL } from '../../utils/urls';

export const Service = ({service, userService}) =>  {
    return (
        
        <tr className="service-container">
            <td className="user-name">{service?.userId.username}</td>
            <td className="full-name">{service?.userId.fullName}</td>
            <td className="offered-services">{service?.offeredServices}</td>
            <td className="service-price">{service?.rate} €</td>
            {!userService && <Link to = {`${SERVICE_URL}/${service?.name}`} className = "view-more"><td><button className = "button-more">View</button></td> </Link>}
            {userService && <td className = "user-options"><button className = "edit">Edit</button><button className = "delete">Delete</button></td>}
        </tr>
    )
}
