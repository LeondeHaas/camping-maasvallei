import React, { useState } from 'react';
//import hier de header.css file
import '../../Styles/Header.css';

function Klachten() {
    const [complaints, setComplaints] = useState([
        {
            id: 1,
            text: "Probleem met internetverbinding",
            color: "red",
            date: new Date("2023-11-05T10:30:00"),
        },
        {
            id: 2,
            text: "Gebroken kraan in de badkamer",
            color: "yellow",
            date: new Date("2023-11-05T11:15:00"),
        },
        {
            id: 3,
            text: "Lekkend dak in Campeerder 3",
            color: "orange",
            date: new Date("2023-11-05T12:45:00"),
        },
    ]);

    return (
        <div className='complaints-container'>
            <h2>Klachten</h2>
            <table className="complaint-table">
                <thead>
                    <tr>
                        <th>Klacht</th>
                        <th>Kleur</th>
                        <th>Datum en Tijd</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map((complaint) => (
                        <tr key={complaint.id}>
                            <td>{complaint.text}</td>
                            <td style={{ backgroundColor: complaint.color }}></td>
                            <td>{complaint.date.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Klachten;
