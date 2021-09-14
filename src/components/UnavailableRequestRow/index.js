import React from "react";
import "./index.css"

export const UnavailableRequestRow = (props) => {
    return (
        <tr className = "unavailable-request-row">
            <td>{props.request?.dateRequestService.substring(0, 10)}</td>
            <td>{props.request?.startRequestService + " - " + props.request?.endRequestService}</td>
        </tr>
    )
}