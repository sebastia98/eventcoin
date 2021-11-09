import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { LOG_IN_URL } from '../../utils/urls';

import './index.css';

export const SignUp = () => {
    const history = useHistory();

    const sendUser = () => 
        new Promise((resolve, reject) => {
            fetch("/user/insertUser", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    "Content-Type": "application/json"},
                body: JSON.stringify(event)
            })
            .then(response => resolve(response))
            .catch(error => reject(error))
        });

    const checkPassword = (password, confirmPassword) => password === confirmPassword;

    const processUserData = (e) => {

        e.preventDefault();

        const errs = {};

        if(!checkPassword(event.password, event.confirmPassword)) {
            errs.hasError = true;
            errs.confirmPassword = true;
        }
        if(errs.hasError) {
            setError(errs)
        } else {
            setLoading(true);
            sendUser()
                .then(response => response.json())
                .then((responseBody) => {
                    if(!responseBody.ok) {
                        console.log(responseBody);
                        setInvalidParams(responseBody.message);
                    } else {
                        history.push(LOG_IN_URL);
                    } 
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false));
        }
    }

    const [event, setEvent] = useState({});
    const [error, setError] = useState({});
    const [invalidParams, setInvalidParams] = useState("");
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {setError({...error, hasError : false, confirmPassword : false})}, [event.password, event.confirmPassword])

    return (
        <div className = "signup-page page">
            <div className="form-signup-container">
                <p className="title-signup">Registration</p>
                {invalidParams && (<span>{invalidParams}</span>)}
                <form className = "form-signup">
                    <div className="input-box">
                        <span>Full Name</span>
                        <input type="text" placeholder="Enter your Name" required onChange={(e) => {
                            setEvent({...event, fullName: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span>Username</span>
                        <input type="text" placeholder="Enter your Nick" required onChange={(e) => {
                            setEvent({...event, username: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span>Email</span>
                        <input type="email" placeholder="Enter your Email" required onChange={(e) => {
                            setEvent({...event, email: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span>Phone Number</span>
                        <input type="tel" placeholder="Enter your Number" required onChange={(e) => {
                            setEvent({...event, phoneNumber: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span>Password</span>
                        <input type="password" placeholder="Enter your Password" required onChange={(e) => {
                            setEvent({...event, password: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span>Confirm Password</span>
                        <input type="password" placeholder="Repeat your Password" required onChange={(e) => {
                            setEvent({...event, confirmPassword: e.target.value})
                        }}/>
                    </div>
                    {error.confirmPassword && (<p className = "invalid-password">Passwords don't match</p>)}
                    <div className = "button-signup">
                        <input className = "register-button" disabled={loading} type="submit" value="Register" onClick={processUserData}/>
                    </div>
                </form>
            </div>
        </div>
    )
}