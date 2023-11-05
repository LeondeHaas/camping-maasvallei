import React from 'react';

function SchoonmaakRooster() {
  const cleaningTasks = [
    { task: 'plaats 5',description: 'vertrekt 10-2-2023', priority: 'Schoonmaken voor: 12:00'},
    { task: 'plaats 3', description: 'vertrekt 12-2-2023', priority: 'Schoonmaken voor: 13:20' },
    { task: 'plaats 2', description: 'vertrekt 22-2-2023', priority: 'Schoonmaken voor: 14:40' },
    { task: 'plaats 1', description: 'vertrekt 27-2-2023', priority: 'Schoonmaken voor: 15:00' },
  ];

  return (
    <div className='Schoonmaker-table'>
      <h1>Beschikbare taken</h1>
      <table>
        <thead>
          <tr>
            <th>Locatie</th>
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


export default SchoonmaakRooster;
