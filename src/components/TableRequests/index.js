import React from "react"
import { RequestRow } from "../RequestRow"
import "./index.css"

export const TableRequests = (props) => {

    return (
        <div className = "table-requests-container">
            <table className = "table-requests">
                <thead className = "table-requests-header">
                    <th>Service</th>
                    <th>Date</th>
                    <th>Schedule</th>
                    <th className = "request-options"></th>
                </thead>
                <tbody>
                    {props.requests?.map((request, index) => <RequestRow key = {index} 
                                                                         request = {request} 
                                                                         confirmRequest = {props.confirmRequest} 
                                                                         participation = {props.participation} 
                                                                         rejectRequest = {props.rejectRequest}
                                                                         deleteRequest = {props.deleteRequest}/>)}
                </tbody>
            </table>
        </div>
    )
}