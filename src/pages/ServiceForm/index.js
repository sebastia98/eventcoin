import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import { ACCOUNT_URL } from '../../utils/urls';
import './index.css';

export const ServiceForm = () => {

    const processServiceData = (e) => {

        e.preventDefault();

        if(isEditing) {
            editService()
                .then(() => history.push(ACCOUNT_URL))
                .catch(error => setError(error));
        } else {
            sendService()
                .then(() => history.push(ACCOUNT_URL))
                .catch(error => setError(error));
        }    
    }

    const editService = () => 
        new Promise((resolve, reject) => {
            fetch("/service/editService", {
                method: "POST",
                headers: {
                            "access-control-allow-origin" : "*",
                            "Content-Type": "application/json"
                        },
                body: JSON.stringify({...service, userId : JSON.parse(sessionStorage.getItem("userLogged"))._id})
                })
                .then(response => resolve(response))
                .catch(error => reject(error))
        });

    const sendService = () => 
        new Promise((resolve, reject) => {
            fetch("/service/insertService", {
                method: "POST",
                headers: {
                            "access-control-allow-origin" : "*",
                            "Content-Type": "application/json"
                        },
                body: JSON.stringify({...service, userId : JSON.parse(sessionStorage.getItem("userLogged"))._id})
                })
                .then(response => resolve(response))
                .catch(error => reject(error))
        });
    
    const history = useHistory();
    
    const [service, setService] = useState({});
    const [error, setError] = useState();
    const [isEditing, setEditing] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if(location.state) {
            setEditing(true)
            console.log("ok");
            setService(location.state);
        }
    }, []);

    return (
        <div className="service-form-page">
            <div className="service-form-container">
                <p className="title-service-form">Register your service</p>
                {error && <label>Have occurred an error. Try again!</label>}
                <form className = "service-form">
                    <div className="input-block">
                        <span>What do you offer?</span>
                        <input value = {service?.offeredServices} type="text" placeholder="Offered services" required onChange={(e) => {
                            setService({...service, offeredServices: e.target.value})
                        }}/>
                    </div>
                    <div className="input-block">
                        <span>What is your rate for hour?</span>
                        <input value = {service?.rate} type="number" placeholder="Specify your rate" required onChange={(e) => {
                            setService({...service, rate: e.target.value})
                        }}/>
                    </div>
                    <div className="input-block">
                        <span>What are your references?</span>
                        <input value = {service?.references} type="text" placeholder="Place where you have worked" required onChange={(e) => {
                            setService({...service, references: e.target.value})
                        }}/>
                    </div>
                    <div className="input-block">
                        <span>Describes you know to do</span>
                        <textarea value = {service?.description} className="input-textarea" type="textarea" placeholder="Type your experencies and you think about you could contribute" required onChange={(e) => {
                            setService({...service, description: e.target.value})
                        }}/>
                    </div>
                    <div className="button-add-service">
                        <input type="submit" value="Register your service" onClick={processServiceData}/>
                    </div>
                </form>
             </div>
        </div> 
    )
}
