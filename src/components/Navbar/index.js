import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './index.css';

import { ACCOUNT_URL, HOME_URL, LOG_IN_URL, SIGN_UP_URL } from '../../utils/urls';

export const Navbar = () => {

    const [credits, setCredits] = useState();

    const userLogged = JSON.parse(sessionStorage.getItem("userLogged"))

    const readUserCredits = () => {
      fetch(`/user/getCredits?userId=${userLogged?._id}`, {
          method: "GET",
          headers: {
              "access-control-allow-origin" : "*",
              "Content-Type": "application/json"},
      })
      .then(response => response.json())
      .then(responseData => {
          console.log(responseData)
        setCredits(responseData.credits)
      })
      .catch(error => console.log(error))
  };

  useEffect(() => {
      if(userLogged) {
        readUserCredits();
      }
  }, [])

    const navbarAccount = 
            <div className = "navbar-account">
                <Link to = {ACCOUNT_URL} className = "navbar-user" >
                    {JSON.parse(sessionStorage.getItem("userLogged"))?.fullName + " "}<i className="far fa-user"></i>
                </Link>
                <p className = "credits">
                    {credits} tokens
                </p>
            </div>;
    
    const navbarUserOptions = 
            <div className = "navbar-user-options">
                <Link to = {SIGN_UP_URL} className = "option">
                    <button className = "option-buttom">
                        Sign Up
                    </button>
                </Link>
                <Link to = {LOG_IN_URL} className = "option">
                    <button className = "option-buttom">
                        Log in
                    </button>
                </Link>
            </div>

    return (
        <div className = "navbar-container">
            <nav className="navbar">
                <div className = "navbar-item">
                    <Link to={HOME_URL} className="navbar-home">
                        ServiceCoin <i className="fab fa-typo3"/>
                    </Link>
                </div>
                <div className = "navbar-item">
                    {sessionStorage.getItem("userLogged") == null ? navbarUserOptions : navbarAccount}
                </div>
            </nav>
        </div>
    )
}