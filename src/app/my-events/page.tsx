'use client';

import { useEffect, useState } from "react";
import { listEventsByUserId } from "../services/apiService";
import { useCookies } from "react-cookie";
import { cookiesList } from "../utils/cookies";
import EventInscribed, { Event } from "../components/event-inscribed/EventInscribed";

export default function MyEvents() {

    const [events, setEvents] = useState<Event[]>();
    const [cookies, setCookies, removeCookies] = useCookies(cookiesList);

    useEffect(() => {
        const getData = () => {
        listEventsByUserId(cookies?.['user-id'])
            .then(events => {
                setEvents(events);
            })
            .catch(error => {
                throw error;
            })
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleEvent = (id: string) => {
        setEvents(events => {
            return events?.filter((e: Event) => e.id !== id);
        })
    }

    return(
        <div className="w-full grow mt-20">
            <div className="content">
                <h2 className="home__event-title font-bold text-2xl mb-10">My Events</h2>
                <div className="w-full grid grid-cols-3 grid-flow-row gap-2 justify-items-center">
                    {events ? (events.map((event, index) => (
                    <EventInscribed 
                        key={index} 
                        id={event.id} 
                        name={event.name} 
                        date={event.date} 
                        image={event.image}
                        updateEvents={handleEvent}
                        isAvailable={event.isAvailable}
                    />
                    ))
                    ) : (
                        <p>You have no events!</p>
                    )}
                </div>
            </div>
        </div>
    );
}