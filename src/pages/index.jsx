// index.jsx
import React from 'react';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import AuthDetails from '../components/auth/AuthDetails';
import '../styles/App.css';

function Index() {
  return (
    <div className='login-form-container'>
      <div className='form'>
        <SignIn />
        <SignUp />
        <AuthDetails />
      </div>
    </div>
  );
}

export default Index;
