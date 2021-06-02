import React from 'react';
import Service from '../../components/service';
import FilterUser from '../../components/FilterService';
import './index.css'


const data = [
    {
        userName: "RHawtin",
        fullName: "Richy Hawtin",
        service: "DJ",
        description: "Minimal techno, electro techno and dubster techno",
        priceForHour: 15.50 
    }, 
    {
        userName: "Charls",
        fullName: "Carlos Sandoval",
        service: "Dancer, clown and gogo",
        description: "Salsa, tango and barchata",
        priceForHour: 12.50 
    },
    {
        userName: "MaxMi",
        fullName: "Maximilian Rodriguex",
        service: "Waiter",
        description: "Bar service and table service",
        priceForHour: 15.50 
    },
]

function Services() {
    return (
        <div className="services-wrapper">
            <div className="services-container">
                <div className="service-title">
                    <h1>Availability services</h1>
                </div>
                <div className="filter-form-wrapper">
                
                </div>
                <table className="table">
                <thead className = "table-header">
                            <th>Nick</th>
                            <th>Full name</th>
                            <th>Offered services</th>
                            <th>Rate</th>
                        </thead>
                    <tbody className="table-body">
                        
                        {data.map((service, index) => <Service key = {index} service = {service}></Service>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Services
