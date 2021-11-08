import React from 'react'
import './index.css'

export const RequestRow = (props) => {
    
    const checkOwnerConfirmed = props?.participation === "owner" && props?.request.ownerState === "done"


    const checkApplicantConfirmed =  props?.participation === "applicant" && props?.request.applicantState === "done"

    const confirmedOrOptions = checkOwnerConfirmed || checkApplicantConfirmed ?
            <p>Confirmed</p> :
            <div>
                <button className="button-confirm" onClick = {() => {props.confirmRequest(props.request._id)}}><i className="far fa-check-circle"></i></button>
                {props?.participation === "owner" && <button className="button-reject" onClick = {() => props?.rejectRequest(props?.request._id)}><i className="fas fa-times"></i></button>}
            </div>
    
    const rejectOptions = 
        <div>
            {props?.participation === "applicant" ? 
                <button className = "button-delete" onClick = {() => props?.deleteRequest(props?.request._id)}><i className="fas fa-trash-alt"></i></button> :
                <p>Rejected</p>}
        </div>

    const options = props?.request.ownerState === "rejected" ? rejectOptions : confirmedOrOptions
           

    return (
        <tr className = "request-row">
            <td>{props?.request.serviceId?.offeredServices}</td>
            <td>{props?.request.dateRequestService.substring(0, 10)}</td>
            <td>{props?.request.startRequestService + " - " + props?.request.endRequestService}</td>
            <td>{props?.request.suggestedPrice ? props?.request?.suggestedPrice + " €" : " - "}</td>
            <td>{options}</td>
        </tr>
    )
}