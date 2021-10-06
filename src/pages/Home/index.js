import React, {useEffect, useState} from 'react'
import './index.css'

import { TableServices } from '../../components/TableServices'

export const Home = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");

    const readServices = (filter) => {
        fetch("/service/readServices", {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"}
            
        })
        .then(response => response.json())
        .then(responseData => filterServices(filter, responseData.serv))
        .catch(error => console.log(error))
    };

    const filterServices = (filter, services) => {
        if(filter) {
            const filteredServices = services.filter(service => service.userId.username.toLowerCase().includes(filter) || 
                                                                service.userId.fullName.toLowerCase().includes(filter) || 
                                                                service.offeredServices.toLowerCase().includes(filter) ||
                                                                service.references.toLowerCase().includes(filter))
            setData(filteredServices)
        } else {
            setData(services)
        }
    }

    useEffect(() => {
        readServices(filter)
    }, [filter]);

    return (
        <div className="home-page">
            <div className = "services-container">
                <p className = "available-services">Available services</p>
                <div className = "input-container">
                    <input className = "input-filter" type = "text" placeholder = "Filter services" onChange = {(e) => {setFilter(e.target.value)}}></input><i class="fas fa-search"></i>
                </div>
                {data.length === 0 ? <p>There aren't available services</p> : <TableServices data = {data}></TableServices>}
            </div>
        </div>
    )
}
