import { cookiesList } from "@/app/utils/cookies";
import { useCookies } from "react-cookie";



export type Event = {
  id: string,
  name: string,
  date: string,
  image: string,
  handleSubscribe: (id: string) => void;
  isAvailable: boolean
}

/* eslint-disable @next/next/no-img-element */
export default function EventCard(props: Event) {

    const [cookies, setCookies, removeCookies] = useCookies(cookiesList);

    return (
      <div className="flex flex-col grow-0 w-full max-w-64 bg-white text-black">
        <img src={`./${props.image}`} alt="Event Image" />
        <div className="eventData w-full p-5">
          <h2 className="event__title font-medium">{ props.name }</h2>
          <h3 className="event__date font-normal mb-6">Date: { props.date }</h3>
          <button className={`hover:bg-rose-800 rounded text-white py-2 px-2 w-full ${ cookies?.['user-id'] ? ("bg-rose-600") : ("bg-black/10 pointer-events-none")}`}
            onClick={() => props.handleSubscribe(props.id)}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>  
    );
}