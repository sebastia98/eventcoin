import React, {useState} from 'react';
import './index.css';

function SignUpUser() {

    // const eventHandler = () => {
        
    //     fetch("http://localhost:8080/insertuser", 
    //     {method: "POST",
    //     body: JSON.stringify(event)}).then(data => {
    //         console.log(data)
    //     })
    //     console.log(event);
    // }

    const eventValidation = () => {
        console.log(event);
    }

    const [event, setEvent] = useState({}); 

    return (
        <div className="container">
            <div className="title">Registration</div>
            <form>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Full Name</span>
                        <input type="text" placeholder="Enter your Name" required onChange={(e) => {
                            setEvent({...event, name: e.target.value})
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
                            setEvent({...event, gender: "not binary"})
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
                    <input type="submit" value="Register" onClick={eventValidation}/>
                </div>
            </form>
        </div>
 
        // TODO: hacer peticion fetch en el eventHandler
    )
}


export default SignUpUser;
