"use client";

import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../../Todo-List/.env/firebase-config';

export default function Auth() {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, []);

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (err) {
            alert(err.message);
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch (err) {
            alert(err.message);
        }        
    }

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div>
            <div className="register">
                <h1>Register</h1>
                <input type="text" placeholder="Email" onChange={(e) => {setRegisterEmail(e.target.value)}} />
                <input type="text" placeholder="Password" onChange={(e) => {setRegisterPassword(e.target.value)}} />
                <button onClick={register}>Register</button>
            </div>
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Email" onChange={(e) => {setLoginEmail(e.target.value)}} />
                <input type="text" placeholder="Password" onChange={(e) => {setLoginPassword(e.target.value)}} />
                <button onClick={login}>Login</button>
            </div>
            <div className="current-user">
                <h1>Current user:</h1>
                {user?.email}
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    )
}