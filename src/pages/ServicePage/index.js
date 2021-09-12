import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import './index.css';

export const ServicePage = () => {

    const {serviceId} = useParams();

    //const [error, setError] = useState({})
    const userLogged = JSON.parse(sessionStorage.getItem("userLogged"))
    const [requestInfo, setRequestInfo] = useState({})

    const obtainService = () => {
        fetch(`/service/obtainService?id=${serviceId}`, {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"}
            
        })
        .then(response => response.json())
        .then(response => {
            setRequestInfo(response.service)
            console.log(requestInfo)
        })
        .catch(error => console.log(error))
    };

    const sendRequestService = (e) => {

        e.preventDefault();

        fetch("/serviceRequest/registerRequestService", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
        .then(response => response.json())
        .then(response => response.requestCreated === false && document.getElementById("error-message"))
    }

    const [event, setEvent] = useState({});
    
    useEffect(() => {
        setEvent({...event, 
        serviceOwnerId : requestInfo?.userId?._id, 
        serviceId : requestInfo?._id, 
        serviceApplicantId : userLogged?._id, 
        ownerState: "pennding",
        applicantState: "pennding"
    })}, [sessionStorage])

    useEffect(() => {
        obtainService()
    }, []);

    const requestForm = 
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
                    <label id = "error-message"></label>
                    <div className = "submit-block">
                        <input type = "submit" value = "Request" onClick = {sendRequestService}></input>
                    </div>
                </div>
            </form>
        </div>

    const notLogged = 
        <div className = "not-logged-container">
            <p>If you want request this service first Log in</p>
        </div>
    
    return (
        <div className = "service-page">
            <div className = "service-info-container">
                <div className = "service-info">
                    <div className = "service-details">
                        <p className = "services">{requestInfo?.offeredServices}</p>
                        <hr></hr>
                        <p>{requestInfo.description}</p>
                        <p>{requestInfo?.references}</p>
                        <p className = "rate">{requestInfo.service?.rate} € for hour</p>
                        <hr></hr>
                    </div>   
                    <div className = "user-details">
                        <p className = "fullname">{requestInfo.userId?.fullName}</p>
                        <p>{requestInfo.userId?.email}</p>
                        <p>{requestInfo.userId?.phoneNumber}</p>
                        
                    </div>
                </div>
            </div>
           {userLogged ? requestForm : notLogged}
        </div>
    )
}
