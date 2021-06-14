import React from 'react'
import { useParams } from 'react-router-dom'

function Service() {
    const {name} = useParams();
    
    return (
        <div>
            {name}
        </div>
    )
}

export default Service
