export default function SignupCard() {
    return (
        <div className="signin__card bg-transparent max-w-80 w-full rounded p-6">
        <h2 className="text-xl text-white text-center mb-5">SIGN IN</h2>
        <form action="submin" method="post" className="flex gap-2 flex-col">
            <input type="text" name="Name" id="name" placeholder="Name" className="
                py-2 
                px-2 
                w-full
                border-2 
                rounded" 
            />
            <input type="email" name="Email" id="email" placeholder="Email" className="
                py-2 
                px-2 
                w-full
                border-2 
                rounded" 
            />
            <input type="password" name="password" id="password" placeholder="Password" className="
                py-2 
                px-2 
                w-full
                border-2 
                rounded"
            />
            <input type="password" name="password" id="password" placeholder="Confirm Password" className="
                py-2 
                px-2 
                w-full
                border-2 
                rounded"
            />
            <button type="submit" className="mt-6 bg-rose-600 text-white w-full rounded hover:bg-rose-800 py-2">SIGN UP</button>
        </form>
    </div>
    );
}