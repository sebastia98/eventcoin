import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

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

    const sendRequestService = (e) => {

        e.preventDefault();

        fetch("/requestService/registerRequestService", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
        .then(response => response.json())
            .then(responseBody => console.log(responseBody))
            .catch(error => console.log(error)) 
    }

    const [event, setEvent] = useState({});
        useEffect(() => {setEvent({...event, 
            serviceOwnerId : user._id, 
            serviceId : service._id, 
            serviceApplicantId : JSON.parse(sessionStorage.getItem("userLogged"))._id, 
            ownerState: "pennding",
            applicantState: "pennding"
        })}, [sessionStorage])
    
    return (
        <div className = "service-page">
            <div className = "service-info-container">
                <div className = "service-info">
                    <div className = "service-details">
                        <p className = "services">{service.offeredServices}</p>
                        <hr></hr>
                        <p>{service.description}</p>
                        <p>{service.references}</p>
                        <p className = "rate">{service.rate} € for hour</p>
                        <hr></hr>
                    </div>   
                    <div className = "user-details">
                        <p className = "fullname">{user.fullName}</p>
                        <p>{user.email}</p>
                        <p>{user.phoneNumber}</p>
                        
                    </div>
                </div>
            </div>
            <div className = "request-form-container">
                <form className = "form-service-request">
                    <div className = "inputs-container">
                        <div className = "date-block">
                            <span>Choose date:</span>
                            <input className = "input-date" type = "date" required onChange = {
                                (e) => {setEvent({...event, dateRequestService: e.target.value})
                            }}/>
                        </div>
                        <div className = "start-time-block">
                            <span>Choose start time:</span>
                            <input className = "input-start-time"type = "time" required onChange = {
                                (e) => {setEvent({...event, startRequestService: e.target.value})}
                            }/>
                        </div>
                        <div className = "start-end-block">
                            <span>Choose end time:</span>
                            <input className = "input-end-time"type = "time" required onChange = {
                                (e) => {setEvent({...event, endRequestService: e.target.value})}
                            }/>
                        </div>
                        <div className = "textarea-block">
                            <span>Any information to add:</span>
                            <textarea className = "input-textarea" type = "textarea" placeholder = "Describe any relevant information" required onChange = {
                                (e) => {setEvent({...event, additionalInfo: e.target.value})}
                            }/>
                        </div>
                        <div className = "submit-block">
                            <input type = "submit" value = "Request" onClick = {sendRequestService}></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Service
