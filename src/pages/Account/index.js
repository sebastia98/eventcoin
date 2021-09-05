import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { TableServices } from '../../components/TableServices';
import { FORM_SERVICE_URL } from '../../utils/urls';
import "./index.css";

function Account() {

    const userLogged = JSON.parse(sessionStorage.getItem("userLogged"));

    const [data, setData] = useState([]);

    const deleteService = (service) => 
        new Promise((resolve, reject) => fetch("/service/deleteService", {
            method: "DELETE",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"},
            body: JSON.stringify(service)
        })
        .then(() => resolve(readServices()))
        .catch(error => reject(error)));

    const readServices = () => {
        fetch("/service/readServices", {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"},
        })
        .then(response => response.json())
        .then(responseData => {
            setData(responseData.serv)
            console.log(data);
        })
        .catch(error => console.log(error))
    };

    const filterUserServices = () => {
        return data.filter(serv => JSON.stringify(serv.userId) === JSON.stringify(userLogged));
    }

    useEffect(() => {
        readServices()
    }, []);

    return (
        <div className = "account-page">
            <div className = "account-wrapper">
                <div className = "add-service">
                    <Link to = {FORM_SERVICE_URL}><button className = "add-service-button">Add new service</button></Link>
                </div>
                <div className = "account-services-container">
                    <p>Your services: </p>
                    <TableServices userService = {true} deleteService = {deleteService} data = {filterUserServices()}></TableServices>
                </div>
            </div>
        </div>
    )
}

export default Account
