import React from "react"
import "./index.css"

import { UnavailableRequestRow } from "../UnavailableRequestRow"

export const TableUnavailableRequests = (props) => {

    return (
        <div className = "unavailable-requests-container">
            <p>Unavailable requests</p>
            <table className = "unavailable-requests-table">
                <thead className = "unavailable-requests-header">
                    <tr>
                        <th>Date</th>
                        <th>Schedule</th>
                    </tr>
                </thead>
                <tbody>
                    {props.requests.map(request => <UnavailableRequestRow request = {request}></UnavailableRequestRow>)}
                </tbody>
            </table>
        </div>
    )
}