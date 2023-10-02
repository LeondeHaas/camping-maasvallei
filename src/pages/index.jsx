import React from 'react';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import AuthDetails from '../components/auth/AuthDetails';
import '../Styles/App.css';

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
