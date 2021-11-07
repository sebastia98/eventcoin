import {React, useEffect, useState} from 'react'
import { Event } from '../../components/Event'
import './index.css'

export const EventPage = () => {

    const [events, setEvents] = useState([])

    const readEvents = () => {
        fetch("/event/readEvents", {
            method: "GET",
            headers: {
                "access-control-allow-origin" : "*",
                "Content-Type": "application/json"}
            
        })
        .then(response => response.json())
        .then(response => setEvents(response.events))
        .catch(error => console.log(error))
    }

    useEffect(readEvents, [])

    return (
        <div className = "event-page page">
            <div className = "events-container">
                {events.map((event, index) => <Event key = {index} event = {event}></Event>)}
            </div>
        </div>
    )
}