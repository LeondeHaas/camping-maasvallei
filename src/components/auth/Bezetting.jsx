import React, { useState } from 'react';

function Bezetting() {
    const [campingBezetting, setCampingBezetting] = useState([
        { plaats: 1, status: 'Bezet' },
        { plaats: 2, status: 'Vrij' },
        { plaats: 3, status: 'Bezet' },
        // Voeg meer campingplaatsen en hun statussen toe zoals nodig
    ]);

    // Bereken het totaal aantal vrije en bezette plaatsen
    const totalPlaatsen = campingBezetting.length;
    const bezettePlaatsen = campingBezetting.filter(plaats => plaats.status === 'Bezet').length;
    const vrijePlaatsen = totalPlaatsen - bezettePlaatsen;

    return (
        <div className='occupancy-container'>
            <h2>Campingbezetting</h2>
            <div className="occupancy-summary">
                <p>Totaal aantal plaatsen: {totalPlaatsen}</p>
                <p>Bezette plaatsen: {bezettePlaatsen}</p>
                <p>Vrije plaatsen: {vrijePlaatsen}</p>
            </div>
            <table className='occupancy-table'>
                <thead>
                    <tr>
                        <th>Plaats</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {campingBezetting.map((plaats, index) => (
                        <tr key={index}>
                            <td>{plaats.plaats}</td>
                            <td>{plaats.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Bezetting;
