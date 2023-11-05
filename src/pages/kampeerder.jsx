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




function Kampeerder() {
  return (
    
    <div className='login-form-container'>
      <Header />
      <h1>Kampeerder</h1>
      <KlachtIndienen />
      <Reserveren />
      <ProblemenIndienen />
   
    </div>
    
    
  );
}

export default Kampeerder;
