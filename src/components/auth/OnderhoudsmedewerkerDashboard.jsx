import React, { Component } from 'react';
import '../../Styles/Header.css';


class OnderhoudsmedewerkerDashboard extends Component {
  constructor() {
    super();
    this.state = {
      prioritaireReparaties: [
        { id: 1, probleem: "Waterlekkage in hoofdgebouw", prioriteit: "Hoog" },
        { id: 2, probleem: "Kapotte elektrische bedrading in kampeerhuisje 3", prioriteit: "Middel" },
        { id: 3, probleem: "Gebroken sanitair in toiletgebouw A", prioriteit: "Hoog" },
      ],
      apparatuurStatus: [
        { id: 1, naam: "Zwembadpomp", status: "In bedrijf" },
        { id: 2, naam: "Airconditioning receptie", status: "In bedrijf" },
        { id: 3, naam: "Generatoren", status: "Uitgeschakeld" },
      ],
      nieuweKlachten: [
        { id: 1, klacht: "Geen warm water in kampeerhuisje 5" },
        { id: 2, klacht: "Verstopte afvoer in toiletgebouw B" },
        { id: 3, klacht: "Storing in elektriciteitsvoorziening campingterrein" },
      ],
    };
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Onderhoudsmedewerker Dashboard</h1>

        <div className="sectie">
          <h2>Prioritaire Reparaties</h2>
          <table>
            <thead>
              <tr>
                <th>Probleem</th>
                <th>Prioriteit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.prioritaireReparaties.map(reparatie => (
                <tr key={reparatie.id}>
                  <td>{reparatie.probleem}</td>
                  <td>{reparatie.prioriteit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sectie">
          <h2>Apparatuur Status</h2>
          <table>
            <thead>
              <tr>
                <th>Naam</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.apparatuurStatus.map(apparaat => (
                <tr key={apparaat.id}>
                  <td>{apparaat.naam}</td>
                  <td>{apparaat.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="sectie">
          <h2>Nieuwe Klachten</h2>
          <table>
            <thead>
              <tr>
                <th>Klacht</th>
              </tr>
            </thead>
            <tbody>
              {this.state.nieuweKlachten.map(klacht => (
                <tr key={klacht.id}>
                  <td>{klacht.klacht}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default OnderhoudsmedewerkerDashboard;
