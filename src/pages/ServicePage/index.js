import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { FormRequestService } from '../../components/FormRequestService';

import './index.css';

function Service() {

    const {serviceId} = useParams();

    const [service, setService] = useState({});
    const [user, setUser] = useState({});

    const obtainService = () => {
        fetch(`/service/obtainService?id=${serviceId}`, {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"}
            
        })
        .then(response => response.json())
        .then(responseData => {
            setService(responseData.serv);
            setUser(responseData.serv.userId);
        })
        .catch(error => console.log(error))
    };

    useEffect(() => {
        obtainService()
    }, []);
    
    return (
        <div className = "service-page-wrapper">
            <div className = "service-page-container">
                <p className = "service-username">{user.fullName}</p>
                <hr></hr>
                <div className = "service-info">
                    <div className = "user-details">
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.phoneNumber}</p>
                    </div>
                    <hr></hr>
                    <p className = "service-offeredServices">{service.offeredServices}</p>
                    <div className = "service-details">
                        <p>References: {service.references}</p>
                        <p>Rate: {service.rate} € for hour</p>
                        <p>Description: {service.description}</p>
                    </div>      
                </div>
                <FormRequestService user = {user} service = {service}/>
            </div>
        </div>
    )
}

export default Service
