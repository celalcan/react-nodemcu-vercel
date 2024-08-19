

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [status, setStatus] = useState(0);

  // JSON Server'dan status değerini almak için useEffect kullanın
  useEffect(() => {
    axios.get('https://react-nodemcu-vercel-2598v675m-celalcans-projects-d09855ab.vercel.app/api/json-server')
      .then(response => setStatus(response.data.status))
      .catch(error => console.error('Error fetching status:', error));
  }, []);

  // Status değerini güncellemek için Axios kullanın
  const updateStatus = (newStatus) => {
    axios.put('https://<vercel-project-name>.vercel.app/api/json-server', { status: newStatus })
      .then(response => setStatus(response.data.status))
      .catch(error => console.error('Error updating status:', error));
  };

  return (
    <div className="App">
      <h1>Status: {status}</h1>
      <button onClick={() => updateStatus(1)}>On</button>
      <button onClick={() => updateStatus(0)}>Off</button>
    </div>
  );
}

export default App;
