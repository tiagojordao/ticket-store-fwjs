'use client';

import { useEffect, useState } from "react";
import { authenticate } from "@/app/services/apiService";


export default function SigninCard() {

    const [id, setId] = useState<string>();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const auth = async (email: string, password: string) => {
        await authenticate(email, password)
        .then(response => {
            setId(response.id);
        })
        .catch(error => {
          throw error;
        })
    };

    return (
        <div className="signin__card bg-transparent max-w-80 w-full rounded p-6">
            <h2 className="text-xl text-white text-center mb-5">SIGN IN</h2>
            <form id="signInForm" action="" method="post">
                <input type="email" name="Email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="
                    py-2 
                    px-2 
                    w-full
                    border-2 
                    rounded" 
                />
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" value={password} 
                    onChange={e => setPassword(e.target.value)}  
                    className="
                        py-2 
                        px-2 
                        w-full
                        border-2 
                        rounded
                        mt-1
                        mb-6"
                />
                <button type="submit" className="bg-rose-600 text-white w-full rounded hover:bg-rose-800 py-2" 
                    onClick={() => auth(email, password)}
                >
                    SIGN IN
                </button>
            </form>
        </div>
    );
}