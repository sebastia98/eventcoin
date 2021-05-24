import React from 'react'
import FormUser from '../../components/FormUser';

import './index.css';

function SignUp() {
    return (
        <div className="form-wrapper">
            <h1 className="title-form"> Create your user</h1>
            <div className="form-container">
                <FormUser/>
            </div>
        </div>
    )
}

export default SignUp;