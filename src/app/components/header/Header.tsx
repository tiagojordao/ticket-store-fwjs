import "../../home.css";

export default function Header() {
    return (
        <nav className="w-full sticky top-0 right-0 z-50 home__cover__header">
            <div className="content flex justify-between items-center border-b-[.1px] border-white/30 px-5">
                <span>
                    <img src="./ticket.svg" height="100" width="100" alt="Logo Image" />
                </span>
                <span className="flex items-center gap-x-4">
                    <a href="/" className="py-4 px-2 font-thin hover:bg-rose-700/70">HOME</a>
                    <a href="/events" className="py-4 px-2 font-thin hover:bg-rose-700/70">EVENTS</a>
                    <a href="/my-events" className="py-4 px-2 font-thin hover:bg-rose-700/70">MY EVENTS</a>
                    <a href="/signup" className="py-4 px-2 font-thin hover:bg-rose-700/70">SIGN UP</a>
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
                </span>
            </div>
        </nav>
    );
}