import React from 'react';

function SchoonmaakKlantInfo() {
  const cleaningTasks = [
    { task: 'Gang receptie',description: 'bruine vlekken op de grond', priority: 1 },
    { task: 'WC receptie', description: 'Wc verstopt', priority: 2 },
    { task: 'Kantoorruimte', description: 'koffie over de vloer', priority: 3 },
    { task: 'ingang receptie', description: 'koffie over de vloer', priority: 3 },
  ];

  return (
    <div className='Schoonmaker-table'>
      <h1>Beschikbare taken</h1>
      <table>
        <thead>
          <tr>
            <th>Taak</th>
            <th>Prioriteit</th>
            <th>Omschrijving</th>
          </tr>
        </thead>
        <tbody>
          {cleaningTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.task}</td>
              <td>{task.priority}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default SchoonmaakKlantInfo;
