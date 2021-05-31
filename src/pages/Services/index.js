import React from 'react'
import Table from '../../components/Table';
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
        service: "Dancer",
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
            <Table
            tableData = {data}
            headingColums = {["Username", "FullName", "Service", "Description", "Price for Hour"]}
            title = "Available service's"
            />
        </div>
    )
}

export default Services
