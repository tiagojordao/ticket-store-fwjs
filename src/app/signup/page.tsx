import SignupCard from "../components/signup/Signup";
import "../home.css";

export default function Signup() {
    return (
        <div className="home__cover signin flex items-center grow justify-center w-full">
            <SignupCard />
        </div>
    );
}
