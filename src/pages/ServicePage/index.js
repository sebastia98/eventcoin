import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { TableUnavailableRequests } from '../../components/TableUnavaibleRequest';
import { ACCOUNT_URL } from '../../utils/urls';

import './index.css';

export const ServicePage = () => {

    const history = useHistory()

    const {serviceId} = useParams();

    const [error, setError] = useState("")
    const userLogged = JSON.parse(sessionStorage.getItem("userLogged"))
    
    const [requestInfo, setRequestInfo] = useState({})
    const [event, setEvent] = useState({});

    const [requests, setRequests] = useState([])
    

    const obtainService = () => 
        new Promise((resolve, reject) => {
            fetch(`/service/obtainService?id=${serviceId}`, {
                method: "GET",
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-Type": "application/json"}
                
            })
            .then(response => response.json())
            .then(response => resolve(response.service))
            .catch(error => console.log(error))
        })
    

    const registerRequestService = (e) => {

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
        .then(response => {
            if(!response.requestCreated) {
                throw new Error(response.message)
            }
            history.push(ACCOUNT_URL)
        })
        .catch(error => {
            console.log(error)
            setError(error.message)})
    }

    const obtainRequests = (serviceId) => {
        console.log(serviceId)
        if(serviceId) {
            fetch(`/serviceRequest/obtainServiceRequests?serviceId=${serviceId}`, {
                method: "GET",
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-Type": "application/json"}
            })
            .then(response => response.json())
            .then(response => setRequests(response.requests))
            .catch(error => console.log(error))
        }
    }
    
    useEffect(() => {
        obtainService()
            .then((service) => {
                setEvent({...event, 
                    serviceOwnerId : service?.userId?._id, 
                    serviceId : service?._id, 
                    serviceApplicantId : userLogged?._id, 
                    ownerState: "pennding",
                    applicantState: "pennding"
                })
                obtainRequests(service?._id)
                setRequestInfo(service)})
            .catch(error => console.log(error))
    }, [])

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
                    <div className = "time-block">
                        <span>Choose work hours:</span>
                        <input className = "input-end-time" type = "time" required onChange = {
                            (e) => {setEvent({...event, endRequestService: e.target.value})}
                        }/>
                    </div>
                    <div className = "textarea-block">
                        <span>Any information to add:</span>
                        <textarea className = "input-textarea" type = "textarea" placeholder = "Describe any relevant information" required onChange = {
                            (e) => {setEvent({...event, additionalInfo: e.target.value})}
                        }/>
                    </div>
                    {error && <label id = "error-message">{error}</label>}
                    <div className = "submit-block">
                        <input type = "submit" value = "Request" onClick = {registerRequestService}></input>
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
                        <p className = "rate">{requestInfo?.rate} € for hour</p>
                        <hr></hr>
                    </div>   
                    <div className = "user-details">
                        <p className = "fullname">{requestInfo.userId?.fullName}</p>
                        <p>{requestInfo.userId?.email}</p>
                        <p>{requestInfo.userId?.phoneNumber}</p>                        
                    </div>
                </div>
                {requests && <TableUnavailableRequests requests = {requests}></TableUnavailableRequests>}
            </div>
           {userLogged ? requestForm : notLogged}
        </div>
    )
}
