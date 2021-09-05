import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { HOME_URL } from '../../utils/urls';
import './index.css';

function LogIn() {

    const history = useHistory();

    const sendCredentials = () => 
        new Promise((resolve, reject) => {
            fetch("/user/loginUser", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-Type": "application/json"},
            body: JSON.stringify(user) 
        })
        .then(response => resolve(response))
        .catch(error => reject(error))
        });

    const logUser = (event) => {

        event.preventDefault();

        sendCredentials()
            .then(response => response.json())
            .then(responseBody => {
                if (responseBody.user) {
                    sessionStorage.setItem("userLogged", JSON.stringify(responseBody.user));
                    setInvalidCredentials(false);
                    history.push(HOME_URL)
                } else {
                    setInvalidCredentials(true);
                }
            })
            .catch(error => {
                setInvalidCredentials(true)
                console.log(error)
            })
    };

    const [user, setUser] = useState({});
    const [invalidCredentials, setInvalidCredentials] = useState(false);

    return (
        <div className="login-page">
            <div className = "form-login-container">
                <p className = "title-login">Type your credentials</p>
                <form className = "form-login">
                    <div className="input-block">
                        <span className="">Username</span>
                        <input type="text" placeholder="Enter your Nick" required onChange={(event) => {
                            setUser({...user, username : event.target.value})}}/>
                    </div>
                    <div className="input-block">
                        <span className="">Password</span>
                        <input type="password" placeholder="Enter your Password" required onChange={(event) => {
                            setUser({...user, password : event.target.value})}}/>
                    </div>
                    {invalidCredentials && <p className = "invalid-credentials">Invalid credentials</p>}
                    <div className="button-login">
                        <input type="submit" value="Log in" onClick = {logUser}/>
                    </div>
                </form>  
            </div>      
        </div>
    )
}

export default LogIn;