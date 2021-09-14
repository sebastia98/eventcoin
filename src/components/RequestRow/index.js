import React from 'react'
import './index.css'

export const RequestRow = (props) => {
    
    const checkOwnerConfirmed = props?.participation === "owner" && props?.request.ownerState === "done"


    const checkApplicantConfirmed =  props?.participation === "applicant" && props?.request.applicantState === "done"

    const checkParticipation = ( checkOwnerConfirmed || checkApplicantConfirmed) ?
            <p>Confirmed</p> :
            <button className="button-confirm" onClick = {() => {props.confirmRequest(props.request._id)}}>Confirm</button>

    return (
        <tr className = "request-row">
            <td>{props?.request.serviceId?.offeredServices}</td>
            <td>{props?.request.dateRequestService.substring(0, 10)}</td>
            <td>{props?.request.startRequestService + " - " + props?.request.endRequestService}</td>
            <td>{checkParticipation}</td>
        </tr>
    )
}