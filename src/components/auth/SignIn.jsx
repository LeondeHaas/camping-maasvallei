import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../config/firebase';

import '../../Styles/Header.css'; // Mogelijk niet nodig als je de stijlen al hebt gekopieerd

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='sign-in-container'>
            <form onSubmit={signIn} className='sign-in-form'>
                <h1 className='welcome-header'>WELKOM</h1>
                <h1 className='login-header'>INLOGGEN</h1>
                <input
                    type='text'
                    className='input-field'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    className='input-field'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='login-button'>Log In</button>
            </form>
        </div>
    );
};

export default SignIn;
