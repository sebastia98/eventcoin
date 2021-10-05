import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./index.css"
import { SERVICE_URL } from '../../utils/urls';
import { FORM_SERVICE_URL } from '../../utils/urls';

export const Service = (props) =>  {

    const history = useHistory();
    
    return (
        <tr className="service-container">
            <td className="user-name">{props.service?.userId.username}</td>
            <td className="offered-services">{props.service?.offeredServices}</td>
            <td className="service-price">{props.service?.rate} €</td>
            <td className="references">{props.service?.references}</td>
            {!props.userService && 
                <td className = "view-more">
                    <Link to = {`${SERVICE_URL}/${props.service?._id}`}>
                        <button className = "button-more">View</button>
                    </Link>
                </td>}
            {props.userService && 
                <td className = "user-options">
                    <button className = "edit" onClick = { () => history.push(FORM_SERVICE_URL, props.service)}>Edit</button>
                    <button className = "delete" onClick = {() => props.deleteService(props.service)}>Delete</button>
                </td>}
        </tr>
    )
}
