// index.jsx
import React from 'react';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Header from '../components/auth/Header';
import AuthDetails from '../components/auth/AuthDetails';
import Klachten from '../components/auth/klachten';
import Geld from '../components/auth/geld';
import Bezetting from '../components/auth/Bezetting';
import Weektabel from '../components/auth/weektabel';
import KlachtIndienen from '../components/auth/klachtindienen';
import Reserveren from '../components/auth/Reserveren';
import ProblemenIndienen from '../components/auth/ProblemenIndienen';

import '../Styles/Header.css';




function Index() {
  return (
    
    <div className='login-form-container1'>
      <Header />
      <div className='form'>
       
        <SignIn />
        <SignUp />
        <AuthDetails />

        
        
        
        
      </div>
      
   
   
    </div>
    
  );
}


export default Index;
