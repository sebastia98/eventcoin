import React from 'react';
import './index.css';

function SignUpUser() {

    return (
        <div className="container">
            <div className="title">Registration</div>
            <form>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Full Name</span>
                        <input type="text" placeholder="Enter your Name" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Username</span>
                        <input type="text" placeholder="Enter your Nick" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="email" placeholder="Enter your Email" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="tel" placeholder="Enter your Number" required />
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="password" placeholder="Enter your Password" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input type="password" placeholder="Enter your Password" required/>
                    </div>
                </div>
                <div className="gender-details">
                    <input type="radio" name="gender" id="dot-1"/>
                    <input type="radio" name="gender" id="dot-2"/>
                    <input type="radio" name="gender" id="dot-3"/>
                    <span className="gender-title">Gender</span>
                    <div className="category">
                        <label htmlFor="dot-1">
                            <span className = "dot one"></span>
                            <span className = "gender">Male</span>
                        </label>
                        <label htmlFor="dot-2">
                            <span className = "dot two"></span>
                            <span className = "gender">Female</span>
                        </label>
                        <label htmlFor="dot-3">
                            <span className = "dot three"></span>
                            <span className = "gender">Not binay</span>
                        </label>
                    </div>
                </div>
                <div className="button">
                    <input type="submit" value="Register"/>
                </div>
            </form>
        </div>
    )
}


export default SignUpUser;
