'use client';

import { useEffect, useState } from "react";
import EventCard from "../components/event-card-list/EventCard";
import { EventModel } from "../models/EventModel";
import { getEvents } from "../services/apiService";
import "../home.css";

export default function Events() {

    const [events, setEvents] = useState<EventModel[]>();
    
    const handleClick = (id: number | string) => {
        alert(`Button clicked in ChildComponent with ID: ${id}`);
    };

    useEffect(() => {
        const getData = () => {
          getEvents()
          .then(events => {
            setEvents(events);
          })
          .catch(error => {
            throw error;
          })
        }
    
        getData();
      }, []);

    return (
        <div className="home__cover w-full grow pt-20 h-lvh">
            <div className="content">
                <h1 className="home__event-title font-bold text-2xl mb-10">All Events</h1>
                <div className="w-full grid gap-2 justify-items-center mb-10">
                {events ? (
                    events.map(event => (
                    <EventCard 
                        key={event.id} 
                        id={event.id} 
                        name={event.name} 
                        date={event.date} 
                        image={event.image} 
                        handleSubscribe={handleClick} 
                        isAvailable={event.isAvailable}
                    />
                    ))
                ) : (
                    <p>There are no registered events.</p>
                )}
                </div>            
            </div>
        </div>
    );
}