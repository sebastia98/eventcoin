import React from 'react';
import "./index.css";

function Account() {

    const notLoggedContainer = <div className = "logged-container">
                                    <h1>User not logged</h1>
                                </div>;

    const loggedContainer = <div className = "logged-container">
        <h1>User logged</h1>
    </div>



    return (
        <div className = "account-wrapper">
            {sessionStorage.getItem("userLogged") === null ?  notLoggedContainer : loggedContainer}
        </div>
    )
}

export default Account
