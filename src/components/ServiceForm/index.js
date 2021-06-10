import React from 'react';
import {Link} from 'react-router-dom';
import { FORM_SERVICE_URL } from '../../utils/urls';
import './index.css';

const ServiceForm = () => {
    return (
        <div className="service-form-container">
            <div className="button-container">
                <Link to={FORM_SERVICE_URL}>
                    <button className="button-service">Add a new service</button>
                </Link>
            </div>
            <form className="service-form">
                <input type="text" placeholder="Type your search"/>
                <button><i className="fas fa-search"></i></button>
            </form>
        </div>
        
    )
}

export default ServiceForm;
