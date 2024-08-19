import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    axios.get('https://your-vercel-url/api/status')
      .then(response => {
        setStatus(response.data.status);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const updateStatus = (newStatus) => {
    axios.post('https://your-vercel-url/api/status', { status: newStatus })
      .then(response => {
        setStatus(response.data.status);
      })
      .catch(error => {
        console.error('Error updating status:', error);
      });
  };

  return (
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => updateStatus(1)}>Turn On</button>
      <button onClick={() => updateStatus(0)}>Turn Off</button>
    </div>
  );
}

export default App;