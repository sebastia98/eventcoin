import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FORM_SERVICE_URL } from '../../utils/urls';
import './index.css';

export const ServiceForm = ({onFilter}) => {

    const [filter, setFilter] = useState("");

    return (
        <div className="service-form-container">
            <div className="button-container">
                <Link to={FORM_SERVICE_URL}>
                    <button className="button-service">Add a new service</button>
                </Link>
            </div>
            <div className="service-form">
                <input type="text" placeholder="Type your search" onChange = {(e) => setFilter(e.target.value)}/>
                <button type = "button" onClick = {() => onFilter(filter)}><i className="fas fa-search"></i></button>
            </div>
        </div>
        
    )
}
