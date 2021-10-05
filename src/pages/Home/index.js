import React, {useEffect, useState} from 'react'
import './index.css'

import { TableServices } from '../../components/TableServices'

export const Home = () => {

    const [data, setData] = useState([]);

    const readServices = () => {
        fetch("/service/readServices", {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"}
            
        })
        .then(response => response.json())
        .then(responseData => {setData(responseData.serv)})
        .catch(error => console.log(error))
    };

    useEffect(() => {
        readServices()
    }, []);

    return (
        <div className="home-page">
            <div className = "services-container">
                <p className = "available-services">Available services</p>
                {data.length === 0 ? <p>There aren't available services</p> : <TableServices data = {data}></TableServices>}
            </div>
        </div>
    )
}
