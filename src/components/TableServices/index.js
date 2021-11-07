import React from 'react'
import './index.css'

import { Service } from '../Service';

export const TableServices = (props) => {

    return (
        <div className = "table-container">
            <table className = "services-table">
                <thead className = "services-table-header">
                    <tr>
                        <th>Owner</th>
                        <th>Service</th>
                        <th>Rate</th>
                        <th>References</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className = "table-body">
                    {props.data.map((service, index) => <Service key = {index} service = {service} userService = {props.userService} deleteService = {props.deleteService}></Service>)}
                </tbody>
            </table>
        </div>
    )
}