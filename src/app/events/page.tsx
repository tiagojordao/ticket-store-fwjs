'use client';

import EventCard from "../components/event-card-list/EventCard";

export default function Events() {
    const handleClick = (id: number) => {
        alert(`Button clicked in ChildComponent with ID: ${id}`);
    };

    return (
        <div className="w-full grow mt-20">
            <div className="content">
                <h1 className="home__event-title font-bold text-2xl mb-10">All Events</h1>
                <div className="w-full grid gap-2 justify-items-center mb-10">
                    <EventCard id={1} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
                    <EventCard id={2} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
                    <EventCard id={3} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
                    <EventCard id={1} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
                    <EventCard id={2} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
                    <EventCard id={3} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
                    <EventCard id={1} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
                    <EventCard id={2} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
                    <EventCard id={3} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
                </div>            
            </div>
        </div>
    );
}