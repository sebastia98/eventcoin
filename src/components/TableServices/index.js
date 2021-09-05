import React from 'react'
import './index.css'

import { Service } from '../Service';

export const TableServices = (props) => {

    return (
        <div className = "table-container">
            <table className = "table">
                <thead className = "table-header">
                    <th>Owner</th>
                    <th>Service</th>
                    <th>Rate</th>
                    <th>References</th>
                    <th></th>
                </thead>
                <tbody className = "table-body">
                    {props.data.map(service => <Service service = {service} userService = {props.userService} deleteService = {props.deleteService}></Service>)}
                </tbody>
            </table>
        </div>
    )
}