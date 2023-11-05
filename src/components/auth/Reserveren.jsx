import React, { useState } from 'react';

function Reserveren() {
    const beschikbarePlaatsen = [
        { naam: 'Plaats 1', beschikbaar: true },
        { naam: 'Plaats 2', beschikbaar: false },
        { naam: 'Plaats 3', beschikbaar: true },
        { naam: 'Plaats 4', beschikbaar: true },
    ];

    const [geselecteerdePlaats, setGeselecteerdePlaats] = useState('');
    const [reserveringsNaam, setReserveringsNaam] = useState('');
    const [melding, setMelding] = useState('');

    const handlePlaatsSelectie = (plaats) => {
        if (beschikbarePlaatsen.find((p) => p.naam === plaats && !p.beschikbaar)) {
            setMelding('Deze plaats is al geboekt. Kies een andere plaats.');
        } else {
            setGeselecteerdePlaats(plaats);
            setMelding('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (geselecteerdePlaats) {
            // Hier kun je de reserveringsgegevens verwerken of verzenden naar een database
            console.log('Reservering voor', reserveringsNaam, 'op', geselecteerdePlaats);
            // Reset het formulier na het indienen
            setGeselecteerdePlaats('');
            setReserveringsNaam('');
            setMelding('Bedankt voor je reservering!');
        } else {
            setMelding('Kies eerst een beschikbare plaats voordat je reserveert.');
        }
    };

    return (
        <div className='reserveren-container'>
            <h2>Reserveren</h2>
            {melding && <div className='melding'>{melding}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Uw naam:
                    <input
                        type='text'
                        value={reserveringsNaam}
                        onChange={(e) => setReserveringsNaam(e.target.value)}
                    />
                </label>
                <label>Kies een beschikbare plaats:</label>
                <ul>
                    {beschikbarePlaatsen.map((plaats, index) => (
                        <li
                            key={index}
                            className={plaats.beschikbaar ? 'beschikbaar' : 'niet-beschikbaar'}
                            onClick={() => handlePlaatsSelectie(plaats.naam)}
                        >
                            {plaats.naam}
                        </li>
                    ))}
                </ul>
                <button type='submit'>Reserveren</button>
            </form>
            <p>Geselecteerde plaats: {geselecteerdePlaats}</p>
        </div>
    );
}

export default Reserveren;
