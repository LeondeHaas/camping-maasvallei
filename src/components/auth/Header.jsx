import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//impoirteer de css file
import '../../Styles/Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <nav className="header-container">
           
            <ul className="nav-list">
            <li className={`nav-item ${location.pathname === '/beheer' ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/beheer' ? 'active' : ''}`}>
                    <Link to="/beheer">Beheer</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/schoonmaak' ? 'active' : ''}`}>
                    <Link to="/schoonmaak">Schoonmaak</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/onderhoud' ? 'active' : ''}`}>
                    <Link to="/onderhoud">Onderhoud</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/Kampeerder' ? 'active' : ''}`}>
                    <Link to="/kampeerder">Campeerder</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
