import React, {useState} from 'react';
import './index.css';

export const FormService = () => {

    const [event, setEvent] = useState({});

    const processServiceData = (e) => {
        console.log(event);
    }

    return (
        <div className="service-form-wrapper">
            <div className="container">
           <div className="title">Register your service</div>
            <form>
                <div className="service-details">
                    <div className="input-box">
                        <span className="details">What do you offer?</span>
                        <input type="text" placeholder="Offered services" required onChange={(e) => {
                            setEvent({...event, offeredServices: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span className="details">What is your rate for hour?</span>
                        <input type="number" placeholder="Specify your rate" required onChange={(e) => {
                            setEvent({...event, rate: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span className="details">What are your references?</span>
                        <input type="text" placeholder="Place where you have worked" required onChange={(e) => {
                            setEvent({...event, references: e.target.value})
                        }}/>
                    </div>
                    <div className="input-box">
                        <span className="details">Describes you know to do</span>
                        <textarea className="input-textarea" type="textarea" placeholder="Type your experencies and you think about you could contribute" required onChange={(e) => {
                            setEvent({...event, description: e.target.value})
                        }}/>
                    </div>
                </div>
                <div className="button">
                    <input type="submit" value="Register your service" onClick={processServiceData}/>
                </div>
            </form>
            </div>
        </div> 
    )
}

export default FormService;
