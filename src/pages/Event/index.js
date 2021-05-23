import React from 'react'
import { useParams } from 'react-router-dom'

function Event() {
    const {name} = useParams();
    
    return (
        <div>
            {name}
        </div>
    )
}

export default Event
