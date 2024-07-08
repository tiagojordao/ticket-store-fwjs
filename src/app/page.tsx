import EventCard from "./components/event-card/EventCard";

import "./home.css";

export default function Home() {
  return (
    <>
      <div className="home__cover flex items-center justify-center h-lvh bg-white/10">
        <h2>TICKET LOGO</h2>
      </div>

      <div className="home__event-list content h-lvh py-10">
        <h2 className="home__event-title font-bold text-2xl mb-10">Last Events</h2>
        <EventCard name="Presentations" date="07/10/2024" isAvailable={true} />
        <EventCard name="Exams" date="07/10/2024" isAvailable={true} />
        <EventCard name="Frontend Lectures" date="07/10/2024" isAvailable={true} />
      </div>
    </>
  );
}
