import React, {useState, useEffect} from 'react';
import './index.css';

function SignUpUser() {

    const sendUser = () => 
        new Promise((resolve, reject) => {
            fetch("/user/insertUser", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin" : "*",
                    "Content-Type": "application/json"},
                body: JSON.stringify(event)
            })
            .then(response => resolve(response))
            .catch(error => reject(error))
        });

    const checkPassword = (password, confirmPassword) => password === confirmPassword;

    const processUserData = (e) => {

        e.preventDefault();

        const errs = {};

        if(!checkPassword(event.password, event.confirmPassword)) {
            errs.hasError = true;
            errs.confirmPassword = true;
        }
        if(errs.hasError) {
            setError(errs)
        } else {
            setLoading(true);
            sendUser()
                .then(response => response.json())
                .then((responseBody) => {
                    if(!responseBody.ok) {
                        setInvalidParams(responseBody.message);
                    }
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false));
        }
    }

    const [event, setEvent] = useState({});
    const [error, setError] = useState({});
    const [invalidParams, setInvalidParams] = useState("");
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {setError({...error, hasError:false, confirmPassword:false})}, [event.password, event.confirmPassword])

    return (
        <div className="container">
            <div className="title">Registration</div>
            {invalidParams && (<span>Invalid params</span>)}
            <form>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Full Name</span>
                        <input type="text" placeholder="Enter your Name" required onChange={(e) => {
                            setEvent({...event, fullName: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span className="details">Username</span>
                        <input type="text" placeholder="Enter your Nick" required onChange={(e) => {
                            setEvent({...event, username: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="email" placeholder="Enter your Email" required onChange={(e) => {
                            setEvent({...event, email: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="tel" placeholder="Enter your Number" required onChange={(e) => {
                            setEvent({...event, phoneNumber: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="password" placeholder="Enter your Password" required onChange={(e) => {
                            setEvent({...event, password: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input type="password" placeholder="Repeat your Password" required onChange={(e) => {
                            setEvent({...event, confirmPassword: e.target.value})
                        }}/>
                        {error.confirmPassword && (<span>Passwords don't match</span>)}
                    </div>
                </div>
                <div className="gender-details">
                    <input type="radio" name="gender" id="dot-1" onChange={(e) => {
                            setEvent({...event, gender: "male"})
                        }}/>
                    <input type="radio" name="gender" id="dot-2" onChange={(e) => {
                            setEvent({...event, gender: "female"})
                        }}/>
                    <input type="radio" name="gender" id="dot-3" onChange={(e) => {
                            setEvent({...event, gender: "notbinary"})
                        }}/>
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
                    <input disabled={loading} type="submit" value="Register" onClick={processUserData}/>
                </div>
            </form>
        </div>
    )
}


export default SignUpUser;
