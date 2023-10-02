import React from 'react';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import AuthDetails from './auth/AuthDetails';
import '../App.css';

function Index() {
  return (
    <div className='App'>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default Index;
