import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { TableRequests } from "../../components/TableRequests";
import { TableServices } from '../../components/TableServices';
import { FORM_SERVICE_URL } from '../../utils/urls';
import "./index.css";

export const Account = () => {

    const userLogged = JSON.parse(sessionStorage.getItem("userLogged"));

    const [services, setServices] = useState([]);

    const [userOwnerRequests, setUserOwnerRequests] = useState([])
    
    const [userApplicantRequests, setUserApplicantRequests] = useState([])

    const deleteService = (service) => 
        new Promise((resolve, reject) => fetch("/service/deleteService", {
            method: "DELETE",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"},
            body: JSON.stringify(service)
        })
        .then(() => resolve(readUserServices()))
        .catch(error => reject(error)));

    const readUserServices = () => {
        fetch(`/service/readUserServices?userId=${userLogged._id}`, {
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
        fetch(`/serviceRequest/readUserOwnerRequests?userId=${userLogged._id}`, {
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
        fetch(`/serviceRequest/readUserApplicantRequests?userId=${userLogged._id}`, {
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
        console.log(id)
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
        console.log(id)
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

    useEffect(() => {
        readUserServices()
        readUserOwnerRequests()
        readUserApplicantRequests()
    }, []);

    return (
        <div className = "account-page">
            <div className = "account-wrapper">
                <div className = "add-service">
                    <Link to = {FORM_SERVICE_URL}><button className = "add-service-button">Add new service</button></Link>
                </div>
                <div className = "account-services-container">
                    <p>Your services: </p>
                    <TableServices userService = {true} deleteService = {deleteService} data = {services}></TableServices>
                </div>
                <div className = "account-requests-container">
                    <div>
                        <TableRequests requests = {userOwnerRequests} confirmRequest = {confirmOwnerRequest}></TableRequests>
                    </div>
                    <div>
                        <TableRequests requests = {userApplicantRequests} confirmRequest = {confirmApplicantRequest}></TableRequests>
                    </div>
                </div>
            </div>
        </div>
    )
}
