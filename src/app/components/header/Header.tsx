import "../../home.css";

import { useCookies } from "react-cookie";
import { cookiesList } from "@/app/utils/cookies";

/* eslint-disable @next/next/no-img-element */
export default function Header() {

    const [cookies, setCookies, removeCookies] = useCookies(cookiesList);

    const handleLogOut = () => {
        cookiesList.map(c => {
            removeCookies(c);
        })
    }

    return (
        <nav className="w-full sticky top-0 right-0 z-50 home__cover__header">
            <div className="content flex justify-between items-center border-b-[.1px] border-white/30 px-5">
                <span>
                    <img src="./ticket.svg" height="100" width="100" alt="Logo Image" />
                </span>
                <span className="flex items-center gap-x-4">
                    <a href="/" className="py-4 px-2 font-thin hover:bg-rose-700/70">HOME</a>
                    <a href="/events" className="py-4 px-2 font-thin hover:bg-rose-700/70">EVENTS</a>
                    { cookies?.['user-id'] ? 
                        (<a href="/my-events" className="py-4 px-2 font-thin hover:bg-rose-700/70">MY EVENTS</a>
                        ) : 
                        ("")
                    }
                    <a href="/signup" className="py-4 px-2 font-thin hover:bg-rose-700/70">SIGN UP</a>
                    { !cookies?.['user-id'] ? (
                        <a href="/signin" 
                            className="
                                py-2
                                px-4
                                font-thin
                                text-white
                                rounded-full
                                font-normal
                                bg-rose-600
                                hover:bg-rose-800
                                active:bg-rose-800"
                        >
                            SIGN IN
                        </a>
                        ) : (
                            <button onClick={handleLogOut}
                            className="
                                py-2
                                px-4
                                font-thin
                                text-white
                                rounded-full
                                font-normal
                                bg-rose-600
                                hover:bg-rose-800
                                active:bg-rose-800"
                        >
                            SIGN OUT
                        </button>
                        )}
                </span>
            </div>
        </nav>
    );
}