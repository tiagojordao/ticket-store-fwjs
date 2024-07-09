'use client';

export type Event = {
  id: number | string,
  name: string,
  date: string,
  image: string,
  handleSubscribe: (id: number | string) => void;
  isAvailable: boolean
}

/* eslint-disable @next/next/no-img-element */
export default function EventCard(props: Event) {

    return (
      <div className="flex flex-row  w-full bg-white text-black">
        <img src={`./${props.image}`} height="200" width="200" alt="Event Image" />
        <div className="eventData flex flex-row justify-between w-full p-5">
          <div className="flex flex-col justify-center">
            <h2 className="event__title font-medium">{ props.name }</h2>
            <h3 className="event__date font-normal ">Date: { props.date }</h3>
          </div>
          <div className="flex flex-col justify-center">
            <button className="bg-rose-600 hover:bg-rose-800 rounded text-white py-2 px-2 h-25" 
              onClick={() => props.handleSubscribe(props.id)}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>  
    );
}