import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './index.css';

import { Button } from '../Button';
import { ACCOUNT_URL, HOME_URL, LOG_IN_URL, SERVICES_URL, SIGN_UP_URL } from '../../utils/urls';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', showButton);
        showButton();
        console.log("first");
        return () => {
            window.removeEventListener('resize', showButton)
        }
    }, []);

    useEffect(() => {
        console.log("second");
    }, []);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to={HOME_URL} className="navbar-logo" onClick={closeMobileMenu}>
                        SrvWeb <i className="fab fa-typo3"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to = {HOME_URL} className={`nav-links ${button ? 'nav-hover' : ''} `} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = {SERVICES_URL} className={`nav-links ${button ? 'nav-hover' : ''} `} onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = {ACCOUNT_URL} className={`nav-links ${button ? 'nav-hover' : ''} `} onClick={closeMobileMenu}>
                                Account
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to = {SIGN_UP_URL} className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                            <Link to = {LOG_IN_URL} className="nav-links-mobile" onClick={closeMobileMenu}>
                                Log In
                            </Link>
                        </li>
                    </ul>   
                    {button && <Button buttonStyle='btn--outline' path="/sign-up">SIGN UP</Button>}
                    {button && <Button buttonStyle='btn--outline' path="/log-in">LOG IN</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
