import React from 'react';

function Weektabel() {
    return (
        <div className='week-table-container'>
            <h2>Weektabel</h2>
            <table className='week-table'>
                <thead>
                    <tr>
                        <th>Dag</th>
                        <th>Medewerker</th>
                        <th>Beschikbaar</th>
                        <th>Tijd</th>
                        <th>Klanten</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maandag</td>
                        <td>John</td>
                        <td>Ja</td>
                        <td>8:00 - 16:00</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Dinsdag</td>
                        <td>Sarah</td>
                        <td>Nee</td>
                        <td>12:00 - 20:00</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Woensdag</td>
                        <td>David</td>
                        <td>Ja</td>
                        <td>9:00 - 17:00</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>Donderdag</td>
                        <td>Emily</td>
                        <td>Ja</td>
                        <td>8:30 - 16:30</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Vrijdag</td>
                        <td>Michael</td>
                        <td>Nee</td>
                        <td>10:00 - 18:00</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>Zaterdag</td>
                        <td>Olivia</td>
                        <td>Ja</td>
                        <td>7:00 - 15:00</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>Zondag</td>
                        <td>Daniel</td>
                        <td>Ja</td>
                        <td>8:00 - 16:00</td>
                        <td>22</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Weektabel;
