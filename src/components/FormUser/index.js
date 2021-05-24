import React from 'react'
import './index.css';

function FormUser() {
    return (
        <div className="form-inputs">
            <div className="form-input">
                <label>Name: </label>
                <input type="text" placeholder="E.g.: Sebastia"/>
            </div>
            <div className="form-input">
                <label>Surname: </label>
                <input type="text" placeholder="E.g.: Adrover"/>
            </div>
            <div className="form-input">
                <label>Your birthday: </label>
                <input type="date" placeholder="E.g.: Your birthday"/>
            </div>
            <div className="form-input">
                <label>Your password: </label>
                <input type="password" placeholder="E.g.: Your birthday"/>
            </div>
            <div className="form-input">
                <label>Confirm password: </label>
                <input type="password" placeholder="E.g.: Your birthday"/>
            </div>
            <div className="form-input">
                <label>Your Number: </label>
                <input type="tel" placeholder="E.g.: Your birthday"/>
            </div>
            <div className="form-input">
                <label>Your email: </label>
                <input type="email" placeholder="E.g.: Your birthday"/>
            </div>
        </div>
    )
}

export default FormUser
