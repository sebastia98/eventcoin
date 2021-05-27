import React from 'react';
import './index.css';

function LogInUser() {

    return (
        <div className="container">
            <div className="title">Type your credentials</div>
            <form>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Username</span>
                        <input type="text" placeholder="Enter your Nick" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="password" placeholder="Enter your Password" required/>
                    </div>
                </div>
                <div className="button">
                    <input type="submit" value="LogIn"/>
                </div>
            </form>
        </div>
    )
}


export default LogInUser;