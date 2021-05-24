import React from 'react'
import './index.css'
import HomeVideo from '../../assets/video/homeVideo.mp4';
import Card from '../../components/Card'

const events = [
    {
        image : "https://images.pexels.com/photos/2123606/pexels-photo-2123606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name : "EventOne",
        date : "21/09/2021",
        description : "Este evento está guay",
        price : 21.50,
        availableTickets : 400
    }, 
    {
        image : "https://images.pexels.com/photos/2123606/pexels-photo-2123606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name : "EventOne",
        date : "21/09/2021",
        description : "Este evento está guay",
        price : 21.50,
        availableTickets : 400
    }, 
    {
        image : "https://images.pexels.com/photos/2123606/pexels-photo-2123606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name : "EventOne",
        date : "21/09/2021",
        description : "Este evento está guay",
        price : 21.50,
        availableTickets : 400
    },
    {
        image : "https://images.pexels.com/photos/2123606/pexels-photo-2123606.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name : "EventOne",
        date : "21/09/2021",
        description : "Este evento está guay",
        price : 21.50,
        availableTickets : 400
    }
]

function Home() {
    return (
        <div className="home-page">
            <section className="header"> 
                <video className="video" src={HomeVideo} autoPlay muted loop></video>            
                <div className="video-cover"/>
                <div className="web-intro">
                    <h1 className="web-name">ServiceCoin</h1>
                    <p className="web-description">Los mejores eventos para ti y tus amigos</p>
                </div>
            </section>
            <section className="events-wrapper">
                <div className="event-cards">
                    {events.map((event, index) => <Card key = {index} event = {event}></Card>)}
                </div>
            </section>
        </div>
    )
}

export default Home
