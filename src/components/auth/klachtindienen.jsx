import React, { useState } from 'react';

function KlachtIndienen() {
    const [klacht, setKlacht] = useState('');
    const [melding, setMelding] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hier kun je de klachtgegevens verwerken of verzenden naar een database
        console.log('Klacht ingediend:', klacht);
        // Reset het formulier na het indienen
        setKlacht('');
        // Toon de melding
        setMelding('Bedankt voor uw klacht, we gaan ermee aan de slag!');
    };

    return (
        <div className='klacht-form-container'>
            <h2>Klacht Indienen</h2>
            {melding && <div className='melding'>{melding}</div>}
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder='Voer uw klacht in...'
                    value={klacht}
                    onChange={(e) => setKlacht(e.target.value)}
                ></textarea>
                <button type='submit'>Indienen</button>
            </form>
        </div>
    );
}

export default KlachtIndienen;
