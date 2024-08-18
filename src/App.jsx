import React from 'react';
import axios from 'axios';

const API_URL = 'https://react-nodemcu-vercel.vercel.app/api/settings/1';

function App() {
  const updateStatus = (newStatus) => {
    axios.patch(API_URL, { status: newStatus })
      .then(response => {
        console.log(`Status updated to ${newStatus}`);
      })
      .catch(error => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <button onClick={() => updateStatus(1)} style={{ padding: '10px 20px', marginBottom: '10px' }}>On</button>
      <button onClick={() => updateStatus(0)} style={{ padding: '10px 20px' }}>Off</button>
    </div>
  );
}

export default App;