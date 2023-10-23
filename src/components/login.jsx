import React, { useState } from 'react';
import { auth } from '../config/firebase'; // Import Firebase authentication
import SignIn from './auth/SignIn';


function login() {
    return (
        <SignIn />
    );
  }

export default Login;
