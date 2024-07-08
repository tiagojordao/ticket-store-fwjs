export type Event = {
    name: string,
    date: string,
    isAvailable: boolean
}

export default function EventCard(props: Event) {
    return (
      <div className="flex flex-col grow-0 w-full max-w-64 bg-white text-black py-5 px-5">
        <h2 className="event__title font-medium">{ props.name }</h2>
        <h3 className="event__date font-normal mb-6">Date: { props.date }</h3>
        <button className="bg-rose-600 hover:bg-rose-800 rounded text-white py-2 px-2">SUBSCRIBE</button>
      </div>  
    );
}