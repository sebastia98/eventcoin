import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom'
import './index.css';

import { ACCOUNT_URL, EVENT_URL, HOME_URL, LOG_IN_URL, SIGN_UP_URL } from '../../utils/urls';
import AuthContext from '../../contexts/authContext';

export const Navbar = () => {

    const [credits, setCredits] = useState();

    const {user, setUser} = useContext(AuthContext)

    const readUserCredits = () => {
      fetch(`/user/getCredits?userId=${user?._id}`, {
          method: "GET",
          headers: {
              "access-control-allow-origin" : "*",
              "Content-Type": "application/json"},
      })
      .then(response => response.json())
      .then(responseData => {
        setCredits(responseData.credits)
      })
      .catch(error => console.log(error))
  };

  useEffect(() => {
      if(user && Object.keys(user).length) {
        readUserCredits();
      }
  }, [user])

    const navbarAccount = 
            <div className = "navbar-account">
                <Link to = {ACCOUNT_URL} className = "navbar-user" >
                    <p>{user?.fullName}</p>
                    <i className="far fa-user"></i>
                    <button className = "button-logout" type = "button" onClick = {() => {setUser(undefined)}}>Log out</button>
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
                        <p>ServiceCoin <i className="fab fa-typo3"/></p>
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link to={EVENT_URL} className = "navbar-event">
                        <p>Events</p>
                    </Link>
                </div>
                <div className = "navbar-item">
                    {user && Object.keys(user).length ? navbarAccount : navbarUserOptions}
                </div>
            </nav>
        </div>
    )
}