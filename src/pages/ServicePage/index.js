import React from 'react'
import { useParams } from 'react-router-dom'

function Service() {
    const {serviceId} = useParams();
    
    return (
        <div>
            {serviceId}
        </div>
    )
}

export default Service
