import React, {useEffect, useState} from 'react';
import Service from '../../components/service';
import {Button} from '../../components/Button';
import "./index.css";

function Account() {

    const userLogged = JSON.parse(sessionStorage.getItem("userLogged"));

    const [data, setData] = useState([]);

    const readUserServices = () => {
        fetch("/service/readServices", {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"},
        })
        .then(response => response.json())
        .then(responseData => {
            setData(responseData.serv)})
        .catch(error => console.log(error))
    };

    useEffect(() => {
        readUserServices()
    }, []);

    const notLoggedContainer = <div className = "logged-container">
                                    <p className = "welcome">Please register or login</p>
                                    <div className = "buttom-container">
                                        {<Button buttonStyle='btn--outline' path="/sign-up">SIGN UP</Button>}
                                        {<Button buttonStyle='btn--outline' path="/log-in">LOG IN</Button>}
                                    </div>
                                </div>;

    const loggedContainer = <div className = "logged-container">
                                <p className = "welcome">Welcome sr. {userLogged && userLogged.fullName}</p>
                                <div className = "table-container">
                                <table className = "table">
                                    <thead className = "table-header">
                                        <tr>
                                            <th>Nick</th>
                                            <th>Full name</th>
                                            <th>Offered services</th>
                                            <th>Rate</th>
                                            <th className = "options"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-body">    
                                        {data.filter(serv => JSON.stringify(serv.userId) === JSON.stringify(userLogged)).map((service, index) => <Service key = {index} service = {service} userService = {true}></Service>)}
                                    </tbody>
                                </table>
                                </div>
                            </div>



    return (
        <div className = "account-wrapper">
            {sessionStorage.getItem("userLogged") === null ?  notLoggedContainer : loggedContainer}
        </div>
    )
}

export default Account
