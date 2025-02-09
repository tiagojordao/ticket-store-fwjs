'use client';

import { getEvents } from './services/apiService';
import EventCard from "./components/event-card/EventCard";

import "./home.css";
import { useEffect } from 'react';

export default function Home() {

  const handleClick = (id: number) => {
    alert(`Button clicked in ChildComponent with ID: ${id}`);
  };

  useEffect(() => {
    const events = getEvents();
    console.log("aklsjfas");
    console.log("lalalala " + events);
  }, []);

  return (
    <>
      <div className="home__cover flex items-center justify-center h-lvh bg-white/10">
        <img src="./logo1.svg" height="1000" width="1000" alt="Logo Image" />
        
      </div>

      <div className="about-ticket-online w-full py-16 bg-rose-600">
        <div className="content">
          <h2 className="title text-2xl font-bold">
            Ticket Online: Facilitando o Acesso a Eventos e Experiências
          </h2>
          <p className="text mt-2">
            A Ticket Online é uma inovadora plataforma digital dedicada à venda de ingressos para eventos de todos os tipos. Fundada em 2022, a empresa surgiu com a missão de simplificar a forma como as pessoas compram ingressos, oferecendo uma experiência de compra rápida, segura e conveniente.
          </p>
          <h2 className="our-mission text-xl mt-5 font-semibold">
            Nossa Missão
          </h2>
          <p className="our-mission__text mt-2">
            Na Ticket Online, acreditamos que a vida é feita de momentos inesquecíveis, e nossa missão é facilitar o acesso a esses momentos. Quer seja um concerto, uma peça de teatro, um evento esportivo ou uma conferência, estamos aqui para garantir que você consiga seu ingresso de forma prática e sem complicações.
          </p>
        </div>
      </div>

      <div className="home__event-list w-full content pt-16 pb-32">
        <h2 className="home__event-title font-bold text-2xl mb-10">Last Events</h2>
        <div className="w-full grid grid-cols-3 grid-flow-row gap-2 justify-items-center">
          <EventCard id={1} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
          <EventCard id={2} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
          <EventCard id={3} name="Presentations" date="07/10/2024" image="event-image.avif" handleSubscribe={handleClick} isAvailable={true} />
        </div>
      </div>
    </>
  );
}
