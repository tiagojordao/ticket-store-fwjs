'use client';

import { useEffect, useState } from 'react';
import { authenticate } from '../services/apiService';
import SigninCard from '../components/signin/SigninCard';
import { UserModel } from '../models/UserModel';

export default function Signin() {

    const [user, setUser] = useState<UserModel>();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        console.log(user?.id);
    }, [user])

    const getUser = (email: string, password: string) => {
        setEmail(email);
        setPassword(password);

        authenticate(email, password)
        .then(user => {
            setUser(user)}
        )
        .catch(error => {
            throw error;
        })
    }

    return (
        <div className="signin flex items-center grow justify-center content">
            <SigninCard auth={getUser} />
        </div>
    );
}