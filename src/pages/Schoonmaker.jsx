
import React from 'react';
import Header from '../components/auth/Header';
import SchoonmaakRooster from '../components/auth/SchoonmaakRooster';
import SchoonmakerKlantInfo from '../components/auth/SchoonmakerKlantInfo';
import SchoonMakerForm from '../components/auth/SchoonMakerForm';
import '../Styles/Schoonmaker.css';


function Schoonmaker() {
  return (
    
    <div className='Schoonmaker-pagina'>
      <Header />
      <h1>Schoonmaker</h1>
      <SchoonmaakRooster />
      <SchoonmakerKlantInfo />
      <SchoonMakerForm />
    </div>
    
    
  );
}

export default Schoonmaker;
