import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import Beheer from './pages/beheer';
import Index from './pages/index';
import Kampeerder from './pages/kampeerder';
import Schoonmaker from './pages/Schoonmaker';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/authdetails' element={<AuthDetails />} />
        <Route path='/' element={<Index />} />
        <Route path='/kampeerder' element={<Kampeerder />} />
        <Route path='/beheer' element={<Beheer />} />
        <Route path='/Schoonmaker' element={<Schoonmaker />} />
      </Routes>
    </Router>
  );
}

export default App;
