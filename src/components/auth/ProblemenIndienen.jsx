import React, { useState } from 'react';

function ProblemenIndienen() {
    const problemenOpties = ['Schoonmaak', 'Onderhoud', 'Anders'];
    const [geselecteerdProbleem, setGeselecteerdProbleem] = useState('');
    const [kampeerplaats, setKampeerplaats] = useState('');
    const [tijd, setTijd] = useState('');
    const [datum, setDatum] = useState('');
    const [melding, setMelding] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!geselecteerdProbleem) {
            setMelding('Kies het probleemtype.');
            return;
        }
        if (!kampeerplaats) {
            setMelding('Vul uw kampeerplaats in.');
            return;
        }
        // Hier kun je de probleemgegevens verwerken of verzenden naar het beheer
        console.log('Geselecteerd probleem:', geselecteerdProbleem);
        console.log('Kampeerplaats:', kampeerplaats);
        console.log('Tijd:', tijd);
        console.log('Datum:', datum);
        // Reset het formulier na het indienen
        setGeselecteerdProbleem('');
        setKampeerplaats('');
        setTijd('');
        setDatum('');
        setMelding('Bedankt voor je probleemmelding!');
    };

    return (
        <div className='problemen-form-container'>
            <h2>Probleem Indienen</h2>
            {melding && <div className='melding'>{melding}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Wat is het probleem?
                    <select
                        value={geselecteerdProbleem}
                        onChange={(e) => setGeselecteerdProbleem(e.target.value)}
                    >
                        <option value=''>Kies een optie</option>
                        {problemenOpties.map((optie, index) => (
                            <option key={index} value={optie}>
                                {optie}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Kampeerplaats (locatie):
                    <input
                        type='text'
                        value={kampeerplaats}
                        onChange={(e) => setKampeerplaats(e.target.value)}
                    />
                </label>
                <label>
                    Tijd:
                    <input
                        type='time'
                        value={tijd}
                        onChange={(e) => setTijd(e.target.value)}
                    />
                </label>
                <label>
                    Datum:
                    <input
                        type='date'
                        value={datum}
                        onChange={(e) => setDatum(e.target.value)}
                    />
                </label>
                <button type='submit'>Indienen</button>
            </form>
        </div>
    );
}

export default ProblemenIndienen;
