"use client";

import Link from 'next/link'
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export default function Auth() {

    const [registerEmail, setRegisterEmail] = useState(''); 
    const [registerPassword, setRegisterPassword] = useState(''); 
    const [loginEmail, setLoginEmail] = useState(''); 
    const [loginPassword, setLoginPassword] = useState(''); 
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        } catch (error) {
            alert(error.message);
        };
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch (error) {
            alert(error.message);
        };
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div>
            <div className="register-user">
                <h1>Register user</h1>
                <input type="text" placeholder="Email address" onChange={((e) => {setRegisterEmail(e.target.value)})} />
                <input type="text" placeholder="Password" onChange={((e) => {setRegisterPassword(e.target.value)})} />
                <button onClick={register}>Create User</button>
            </div>
            <div className="login-user">
                <h1>Login</h1>
                <input type="text" placeholder="Email address" onChange={((e) => {setLoginEmail(e.target.value)})} />
                <input type="text" placeholder="Password" onChange={((e) => {setLoginPassword(e.target.value)})} />         
                <Link onClick={login} href='/home'>Login</Link>       
            </div>
            <div className="signout-user">
                <h2>User logged in:</h2>
                {user?.email}
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    )
};