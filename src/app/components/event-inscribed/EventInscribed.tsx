import { cookiesList } from "@/app/utils/cookies";
import { useCookies } from "react-cookie";
import { subscribeEvent } from "@/app/services/apiService";
import { useEffect } from "react";



export type Event = {
  id: string,
  name: string,
  date: string,
  image: string,
  isAvailable: boolean
}

/* eslint-disable @next/next/no-img-element */
export default function EventInscribed(props: Event) {

    const [cookies, setCookies, removeCookies] = useCookies(cookiesList);

    useEffect(() => {
      console.log(props);
    }, []);

    return (
      <div className="flex flex-col grow-0 w-full max-w-64 bg-white text-black">
        <img src={`./${props.image}`} alt="Event Image" />
        <div className="eventData w-full p-5">
          <h2 className="event__title font-medium">{ props.name }</h2>
          <h3 className="event__date font-normal mb-6">Date: { props.date }</h3>
          <button className={`hover:bg-rose-800 rounded text-white py-2 px-2 w-full ${ cookies?.['user-id'] ? ("bg-rose-600") : ("bg-black/10 pointer-events-none")}`}
            onClick={() => subscribeEvent(cookies?.['user-id'] , props.id)}
          >
            UNSUBSCRIBE
          </button>
        </div>
      </div>  
    );
}