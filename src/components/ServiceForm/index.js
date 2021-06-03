import React from 'react';
import './index.css';

const ServiceForm = () => {
    return (
        <div className="service-form-container">
            <div className="button-container">
                <button className="button-service">Add a new service</button>
            </div>
            <form className="service-form">
                <input type="text" placeholder="Type your search"/>
                <button><i class="fas fa-search"></i></button>
            </form>
        </div>
        
    )
}

export default ServiceForm;
