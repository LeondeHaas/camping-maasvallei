import React, { useState } from 'react';

function Geld() {
    const [inkomsten, setInkomsten] = useState(10000);
    const [uitgaven, setUitgaven] = useState(7500);

    return (
        <div className='financial-container'>
            <h2>Financiële Gegevens</h2>
            <div className='financial-summary'>
                <div className='financial-box'>
                    <h3>Inkomsten</h3>
                    <p>Totaal: €{inkomsten}</p>
                </div>
                <div className='financial-box'>
                    <h3>Uitgaven</h3>
                    <p>Totaal: €{uitgaven}</p>
                </div>
            </div>
        </div>
    );
}

export default Geld;
