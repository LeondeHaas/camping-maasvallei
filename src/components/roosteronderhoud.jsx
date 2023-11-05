import React, { Component } from 'react';
import '../Styles/Header.css';

class RoosterOnderhoud extends Component {
  constructor() {
    super();
 





    
    this.state = {
      rooster: [
        { datum: "2023-01-02", begin_tijd: "08:00", eind_tijd: "12:00" },
        { datum: "2023-01-04", begin_tijd: "13:00", eind_tijd: "17:00" },
        { datum: "2023-01-06", begin_tijd: "09:00", eind_tijd: "15:00" },
        { datum: "2023-01-09", begin_tijd: "08:00", eind_tijd: "12:00" },
        { datum: "2023-01-11", begin_tijd: "13:00", eind_tijd: "17:00" },
        { datum: "2023-01-13", begin_tijd: "09:00", eind_tijd: "15:00" },
        { datum: "2023-01-16", begin_tijd: "08:00", eind_tijd: "12:00" },
        { datum: "2023-01-18", begin_tijd: "13:00", eind_tijd: "17:00" },
        { datum: "2023-01-20", begin_tijd: "09:00", eind_tijd: "15:00" },
        { datum: "2023-01-23", begin_tijd: "08:00", eind_tijd: "12:00" },
        { datum: "2023-01-25", begin_tijd: "13:00", eind_tijd: "17:00" },
        { datum: "2023-01-27", begin_tijd: "09:00", eind_tijd: "15:00" },
        { datum: "2023-01-30", begin_tijd: "08:00", eind_tijd: "12:00" },
      ],
    };
  }

  getDagenInMaand() {
    const dagenInMaand = [];
    for (let dag = 1; dag <= 31; dag++) {
      dagenInMaand.push(dag);
    }
    return dagenInMaand;
  }

  getWerktijdVoorDatum(datum) {
    return this.state.rooster.find(werktijd => werktijd.datum === datum);
  }

  render() {
    const dagenInMaand = this.getDagenInMaand();

    return (
      <div>
        <h1>Agenda Kalender voor de onderhoudsmedewerker (Januari 2023)</h1>
        <div className="agenda-kalender">
          {dagenInMaand.map(dag => (
            <div key={dag} className="dag">
              <div className="datum">{dag}</div>
              <div className="werktijd">
                {this.getWerktijdVoorDatum(`2023-01-${dag}`) ? (
                  <>
                    <div>Begint: {this.getWerktijdVoorDatum(`2023-01-${dag}`).begin_tijd}</div>
                    <div>Eindigt: {this.getWerktijdVoorDatum(`2023-01-${dag}`).eind_tijd}</div>
                  </>
                ) : (
                  <div>Vrij</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RoosterOnderhoud;
