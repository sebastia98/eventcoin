import React, {useState, useEffect} from 'react'
import "./index.css"

export const FormRequestService = (props) => {

    const sendRequestService = (e) => {

        e.preventDefault();

        console.log(event)

        fetch("/requestService/registerRequestService", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
        .then(response => response.json())
            .then(responseBody => console.log(responseBody))
            .catch(error => console.log(error)) 
    }

    const [event, setEvent] = useState({});
    useEffect(() => {setEvent({...event, 
        serviceOwnerId : props.user._id, 
        serviceId : props.service._id, 
        serviceApplicantId : JSON.parse(sessionStorage.getItem("userLogged"))._id, 
        ownerState: "pennding",
        applicantState: "pennding"
    })}, [props, sessionStorage])

    return (
        <form>
            <div className = "form-request-service-wrapper">
                <div className = "form-request-service-container">
                    <div className = "date-block">
                        <span>Choose date:</span>
                        <input className = "input-date" type = "date" required onChange = {
                            (e) => {setEvent({...event, dateRequestService: e.target.value})
                        }}/>
                    </div>
                    <div className = "start-time-block">
                        <span>Choose start time:</span>
                        <input className = "input-start-time"type = "time" required onChange = {
                            (e) => {setEvent({...event, startRequestService: e.target.value})}
                        }/>
                    </div>
                    <div className = "start-end-block">
                        <span>Choose end time:</span>
                        <input className = "input-end-time"type = "time" required onChange = {
                            (e) => {setEvent({...event, endRequestService: e.target.value})}
                        }/>
                    </div>
                    <div className = "textarea-block">
                        <span>Any information to add:</span>
                        <textarea className = "input-textarea" type = "textarea" required onChange = {
                            (e) => {setEvent({...event, additionalInfo: e.target.value})}
                        }/>
                    </div>
                    <div className = "submit-block">
                        <input type = "submit" value = "Request" onClick = {sendRequestService}></input>
                    </div>
                </div>
            </div>
            
        </form>
        
    )

}
