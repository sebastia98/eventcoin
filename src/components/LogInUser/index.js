import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { HOME_URL } from '../../utils/urls';
import './index.css';

function LogInUser() {

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
        <div className="container">
            <div className="title">Type your credentials</div>
            <form>
                {invalidCredentials && <p>Invalid credentials</p>}
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Username</span>
                        <input type="text" placeholder="Enter your Nick" required onChange={(event) => {
                            setUser({...user, username : event.target.value})}}/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="password" placeholder="Enter your Password" required onChange={(event) => {
                            setUser({...user, password : event.target.value})}}/>
                    </div>
                </div>
                <div className="button">
                    <input type="submit" value="LogIn" onClick = {logUser}/>
                </div>
            </form>
        </div>
    )
}

export default LogInUser;