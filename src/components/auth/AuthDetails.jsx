// AuthDetails.js

import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import '../../Styles/Header.css';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out succes')
        }).catch(error => console.log(error))
    }

    return (
        <div>{authUser ? <><p className='p1'>{`Signed In as ${authUser.email}`}</p><button className='button1' onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}</div>
    )
}

export default AuthDetails;
