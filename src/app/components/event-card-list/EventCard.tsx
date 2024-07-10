'use client';

import { subscribeEvent } from "@/app/services/apiService";
import { cookiesList } from "@/app/utils/cookies";
import { useCookies } from "react-cookie";

export type Event = {
  id: string,
  name: string,
  date: string,
  image: string,
  isAvailable: boolean
}

/* eslint-disable @next/next/no-img-element */
export default function EventCard(props: Event) {

  const [cookies, setCookies, removeCookies] = useCookies(cookiesList);

    return (
      <div className="flex flex-row  w-full bg-white text-black">
        <img src={`./${props.image}`} height="200" width="200" alt="Event Image" />
        <div className="eventData flex flex-row justify-between w-full p-5">
          <div className="flex flex-col justify-center">
            <h2 className="event__title font-medium">{ props.name }</h2>
            <h3 className="event__date font-normal ">Date: { props.date }</h3>
          </div>
          <div className="flex flex-col justify-center">
            <button className={`hover:bg-rose-800 rounded text-white py-2 px-2 w-full ${ cookies?.['user-id'] ? ("bg-rose-600") : ("bg-black/10 pointer-events-none")}`}
              onClick={() => subscribeEvent(cookies?.['user-id'] , props.id)}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>  
    );
}