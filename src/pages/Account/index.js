import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { TableRequests } from "../../components/TableRequests";
import { TableServices } from '../../components/TableServices';
import AuthContext from '../../contexts/authContext';
import { FORM_SERVICE_URL } from '../../utils/urls';
import "./index.css";

export const Account = () => {

    const {user} = useContext(AuthContext);

    const [services, setServices] = useState([]);

    const [serviceDeleted, setServiceDeleted] = useState(false)

    const [userOwnerRequests, setUserOwnerRequests] = useState([])
    
    const [userApplicantRequests, setUserApplicantRequests] = useState([])

    const deleteService = (service) => 
        fetch("/service/deleteService", {
            method: "DELETE",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"},
            body: JSON.stringify(service)
        })
        .then(() => setServiceDeleted(true))
        .catch(error => console.log(error));

    const readUserServices = () => {
        fetch(`/service/readUserServices?userId=${user?._id}`, {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"},
        })
        .then(response => response.json())
        .then(responseData => {
            setServices(responseData.serv)
        })
        .catch(error => console.log(error))
    };

    const readUserOwnerRequests = () => {
        fetch(`/serviceRequest/readUserOwnerRequests?userId=${user?._id}`, {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"},
        })
        .then(response => response.json())
        .then(responseData => {
            setUserOwnerRequests(responseData.requests)
        })
        .catch(error => console.log(error))
    }

    const readUserApplicantRequests = () => {
        fetch(`/serviceRequest/readUserApplicantRequests?userId=${user?._id}`, {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"},
        })
        .then(response => response.json())
        .then(responseData => {
            setUserApplicantRequests(responseData.requests)
        })
        .catch(error => console.log(error))
    }

    const confirmApplicantRequest = (id) => {

        fetch("/serviceRequest/confirmApplicantRequest", {
            method: "POST",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        })
        .then(message => message)
        .catch(error => error)
    }

    const confirmOwnerRequest = (id) => {
        
        fetch("/serviceRequest/confirmOwnerRequest", {
            method: "POST",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        })
        .then(message => message)
        .catch(error => error)
    }

    const rejectRequest = (id) => {
        fetch("/serviceRequest/rejectRequest", {
            method: "POST",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        })
        .then(message => message)
        .catch(error => error)
    }

    const deleteRequest = (id) => {
        fetch("/serviceRequest/deleteRequest", {
            method: "DELETE",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        })
        .then(message => message)
        .catch(error => error)
    }

    const displayRecivedRequests = () => {
        let recivedRequests = document.getElementById("owner-requests")
        let sendRequests = document.getElementById("applicant-requests") 
        
        recivedRequests.style.display = "block"
        sendRequests.style.display = "none"
    }

    const displaySendRequests = () => {
        let recivedRequests = document.getElementById("owner-requests")
        let sendRequests = document.getElementById("applicant-requests")

        recivedRequests.style.display = "none"
        sendRequests.style.display = "block"
    }

    const servicesTable = services?.length > 0 ? 
                                <TableServices userService = {true} deleteService = {deleteService} data = {services}></TableServices> :
                                <p>You don't have pushed services</p>
                                

    const ownerRequestsTable = userOwnerRequests?.length > 0 ?
    <TableRequests requests = {userOwnerRequests} confirmRequest = {confirmOwnerRequest} participation = {"owner"} rejectRequest = {rejectRequest}></TableRequests> :
                                <p>You don't have any request</p>
                                

    const applicantRequestsTable = userApplicantRequests?.length > 0 ? 
    <TableRequests requests = {userApplicantRequests} confirmRequest = {confirmApplicantRequest} participation = {"applicant"} deleteRequest = {deleteRequest}></TableRequests> :
                                <p>You haven't requested any service</p> 

    useEffect(() => {
        readUserOwnerRequests()
        readUserApplicantRequests()
        readUserServices()
    }, [user])


    useEffect(() => {
        readUserOwnerRequests()
        readUserApplicantRequests()
        readUserServices()

        if (serviceDeleted) {
            setServiceDeleted(false)
        }
    }, [serviceDeleted]);

    return (
        <div className = "account-page page">
            <div className = "account-wrapper">
                <div className = "add-service">
                    <Link to = {FORM_SERVICE_URL}><button className = "add-service-button">Add new service</button></Link>
                </div>
                {servicesTable}
                <div className = "request-buttons">
                    <button onClick = {displayRecivedRequests}>
                        Show recived requests
                    </button>
                    <button onClick = {displaySendRequests}>
                        Show send requests
                    </button>
                </div>
                <div id = "owner-requests">{ownerRequestsTable}</div>
                <div id = "applicant-requests">{applicantRequestsTable}</div>
            </div>
        </div>
    )
}
