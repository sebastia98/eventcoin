import React,{useState,useEffect} from 'react';
import Service from '../../components/service';
import ServiceForm from '../../components/ServiceForm';
import './index.css'

export const Services = () => {

    const [data, setData] = useState([]);

    const readServices = () => {

        fetch("/service/readServices", {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            return response.json();})
            .then(responseData => {
                console.log(responseData.serv)
                setData(responseData.serv)
            })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        readServices()
    }, [])

    return (
        <div className="services-wrapper">
            <div className="services-container">
                <div className="service-title">
                    <h1>Availability services</h1>
                </div>
                <div className="filter-form-wrapper">
                    <ServiceForm/>
                </div>
                <table className="table">
                    <thead className = "table-header">
                        <tr>
                            <th>Nick</th>
                            <th>Full name</th>
                            <th>Offered services</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">    
                        {data.map((service, index) => <Service key = {index} service = {service}></Service>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
