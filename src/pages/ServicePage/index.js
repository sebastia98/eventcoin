import React, {useEffect, useState, useContext} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { TableUnavailableRequests } from '../../components/TableUnavaibleRequest';
import AuthContext from '../../contexts/authContext';
import { ACCOUNT_URL } from '../../utils/urls';

import './index.css';

export const ServicePage = () => {

    const history = useHistory()

    const {serviceId} = useParams();

    const {user, setUser} = useContext(AuthContext)

    const [error, setError] = useState("")

    const [isPublic, setIsPublic] = useState(false);
    
    const [serviceInfo, setServiceInfo] = useState({})

    const [requestInfo, setRequestInfo] = useState({});
    
    const [eventToPost, setEventToPost] = useState({})

    const [unavailableRequests, setUnavailableRequests] = useState([])
    
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

    const registerRequestAndEvent = (e) => {

        e.preventDefault() 

        createRequest()
            .then((request) => {
                console.log(request)
                if(isPublic) {
                    const newEvent = {...eventToPost, startEvent : request.startRequestService, dateEvent : request.dateRequestService}
                    createEvent(newEvent)
                        .then(event => {
                            history.push(ACCOUNT_URL)           
                            console.log(event)})
                        .catch(error => console.log(error))
                } else {
                    history.push(ACCOUNT_URL)
                }
            })
            .catch(() => {})
    }

    const createEvent = (newEvent) => 
        new Promise((resolve, reject) => {
            fetch("/event/registerEvent", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEvent)
            })
                .then(response => response.json())
                .then(response => {
                    if(!response.eventCreated) {
                        throw new Error(response.message)
                    }
                    resolve(response.eventCreated)
                })
                .catch(error => setError(error.message))
            })
    
    const createRequest = () => 
        new Promise((resolve, reject) => {
            fetch("/serviceRequest/registerRequestService", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestInfo)
            })
                .then(response => response.json())
                .then(response => {
                    if(!response.requestCreated) {
                        throw new Error(response.message)
                    }
                    setUser({...user, credits : user.credits - response.requestCreated.priceRate})
                    resolve(response.requestCreated)
                })
                .catch(error => setError(error.message))
        })
    
    const obtainUnnavailableRequests = (serviceId) => {
        if(serviceId) {
            fetch(`/serviceRequest/obtainServiceRequests?serviceId=${serviceId}`, {
                method: "GET",
                headers: {
                    "access-control-allow-origin" : "*",
                    "Content-Type": "application/json"}
            })
            .then(response => response.json())
            .then(response => setUnavailableRequests(response.requests))
            .catch(error => console.log(error))
        }
    }
    
    useEffect(() => {
        obtainService()
            .then((service) => {
                setRequestInfo((lastState) => ({...lastState, 
                    serviceOwnerId : service?.userId?._id, 
                    serviceId : service?._id 
                }))
                obtainUnnavailableRequests(service?._id)
                setServiceInfo(service)})
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        setRequestInfo({...requestInfo, serviceApplicantId : user?._id})
    }, [user])

    const requestForm = 
        <div className = "request-form-container">
            <form className = "form-service-request" onSubmit = {registerRequestAndEvent}>
                <div className = "inputs-container">
                    <div className = "date-block">
                        <span>*Choose date:</span>
                        <input className = "input-date" type = "date" required onChange = {
                            (e) => {setRequestInfo({...requestInfo, dateRequestService: e.target.value})
                        }}/>
                    </div>
                    <div className = "start-time-block">
                        <span>*Choose start time:</span>
                        <input className = "input-start-time"type = "time" required onChange = {
                            (e) => {setRequestInfo({...requestInfo, startRequestService: e.target.value})}
                        }/>
                    </div>
                    <div className = "time-block">
                        <span>*Choose final time:</span>
                        <input className = "input-end-time" type = "time" required onChange = {
                            (e) => {setRequestInfo({...requestInfo, endRequestService: e.target.value})}
                        }/>
                    </div>
                    <div className = "textarea-block">
                        <span>You can suggest a new rate:</span>
                        <input className = "input-segested-price" type = "number" placeholder = "Optional" onChange = {
                            (e) => {setRequestInfo({...requestInfo, suggestedPrice: e.target.value})}
                        }/>
                    </div>
                    <ul className = "checkbox-block">
                        <li>
                            <label htmlFor = "checkbox-hidden" className = {!isPublic ? "active" : ""}>
                                <input className = "checkbox" type = "radio" name = "post-event" id = "checkbox-hidden" checked = {!isPublic} onChange = {() => setIsPublic(false)}/>Private event
                            </label>
                        </li>
                        <li>
                            <label htmlFor = "checkbox-post" className = {isPublic ? "active" : ""}>
                                <input className = "checkbox" type = "radio" name = "post-event" id = "checkbox-post" checked = {isPublic} onChange = {() => setIsPublic(true)}/>Post event
                            </label>
                        </li>
                    </ul>
                    {isPublic && 
                        <>
                            <div className = "name-event-block">
                                <span>*Event name:</span>
                                <input className = "input-local-url" type = "text" onChange = {(e) => {setEventToPost({...eventToPost, event : e.target.value})}}/>
                            </div>
                            <div className = "price-event-block">
                                <span>*Price event:</span>
                                <input className = "input-local-url" type = "Number" onChange = {(e) => {setEventToPost({...eventToPost, priceEvent : e.target.value})}}/>
                            </div>
                            <div className = "name-local-block">
                                <span>*Local name:</span>
                                <input className = "input-local-name" type = "text" onChange = {(e) => {setEventToPost({...eventToPost, localNameEvent : e.target.value})}}/>
                            </div>
                            <div className = "url-local-block">
                                <span>*Local direccion:</span>
                                <input className = "input-local-url" type = "text" onChange = {(e) => {setEventToPost({...eventToPost, directionLocalEvent : e.target.value})}}/>
                            </div>
                        </>}
                        {error && <label id = "error-message">{error}</label>}
                    <div className = "submit-block">
                        <input type = "submit" value = "Request"></input>
                    </div>
                </div>
            </form>
        </div>

    const notLogged = 
        <div className = "not-logged-container">
            <p>If you want request this service first Log in</p>
        </div>
    
    return (
        <div className = "service-page page">
            <div className = "service-wrapper">
            <div className = "service-info-container">
                <div className = "service-info">
                    <div className = "service-details">
                        <div className = "service-presentation">
                            <p className = "services title">{serviceInfo?.offeredServices}</p>
                            <p className = "rate">{serviceInfo?.rate} € for hour</p>
                        </div>
                        <hr></hr>
                        <p>{serviceInfo.description}</p>
                        <p>{serviceInfo?.references}</p>
                        <hr></hr>
                    </div>   
                    <div className = "user-details">
                        <p className = "fullname title">{serviceInfo.userId?.fullName}</p>
                        <p>{serviceInfo.userId?.email}</p>
                        <p>{serviceInfo.userId?.phoneNumber}</p>                        
                    </div>
                </div>
                {!!unavailableRequests.length && <TableUnavailableRequests requests = {unavailableRequests}></TableUnavailableRequests>}
            </div>
           {Object.keys(user).length ? requestForm : notLogged }
            </div>
        </div>
    )
}
