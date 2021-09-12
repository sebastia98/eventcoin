import './index.css'

export const RequestRow = (props) => {
    return (
        <tr className = "request-row">
            <td>{props?.request.serviceId.offeredServices}</td>
            <td>{props?.request.dateRequestService.substring(0, 10)}</td>
            <td>{props?.request.startRequestService + " - " + props?.request.endRequestService}</td>
            <td><button className="button-confirm" onClick = {() => {
                props.confirmRequest(props.request._id)}}>Confirm</button></td>
        </tr>
    )
}