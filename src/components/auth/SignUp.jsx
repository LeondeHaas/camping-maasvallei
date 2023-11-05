import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../config/firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='sign-in-container'> {/* Dezelfde CSS-klasse als de rest van de componenten */}
            <form onSubmit={signUp}>
                <h1 className='welcome-header'>Create Account</h1>
                <h1 className='login-header'>Sign up</h1>
                <input
                    type='text'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
