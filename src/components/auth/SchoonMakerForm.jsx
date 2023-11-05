import React, { useState } from 'react';

function SchoonMakerForm() {
  const [task, setTask] = useState(''); 
  const [location, setLocation] = useState(''); 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Taak:', task, 'Locatie:', location);
  };

  return (
    <div>
      <h2>Voeg een schoonmaaktaak toe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Taak:</label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location">Locatie:</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Selecteer een locatie</option>
            <option value="Locatie 1">Locatie 1</option>
            <option value="Locatie 2">Locatie 2</option>
            <option value="Locatie 3">Locatie 3</option>
          </select>
        </div>
        <button type="submit">Voeg taak toe</button>
      </form>
    </div>
  );
}

export default SchoonMakerForm;

