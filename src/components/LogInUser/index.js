import React, {useState} from 'react';
import './index.css';

function LogInUser() {

    const sendCredentials = () => {
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
        })
    };

    const logUser = () => {
        sendCredentials()
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .finally(() => console.log("se acabó"))
    };

    const [user, setUser] = useState({});

    return (
        <div className="container">
            <div className="title">Type your credentials</div>
            <form>
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