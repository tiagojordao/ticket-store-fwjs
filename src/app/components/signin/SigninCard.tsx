export default function SigninCard() {
    return (
        <div className="signin__card bg-transparent max-w-80 w-full rounded p-6">
            <h2 className="text-xl text-white text-center mb-5">SIGN IN</h2>
            <form action="" method="post">
                <input type="email" name="Email" id="email" placeholder="Email" className="
                    py-2 
                    px-2 
                    w-full 
                    text-black/70 
                    border-2 
                    rounded" 
                />
                <input type="password" name="password" id="password" placeholder="Password" className="
                    py-2 
                    px-2 
                    w-full 
                    text-black/70 
                    border-2 
                    rounded
                    mt-1
                    mb-6"
                />
                <button type="submit" className="bg-rose-600 text-white w-full rounded hover:bg-rose-800 py-2">SIGN IN</button>
            </form>
        </div>
    );
}