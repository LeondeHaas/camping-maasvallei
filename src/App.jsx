import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import Index from './pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/authdetails' element={<AuthDetails />} />
        <Route path='/' element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
