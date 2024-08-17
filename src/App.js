import React from 'react';

function App() {
  const turnOn = () => {
    fetch("http://192.168.2.128/on")
      .then(response => response.text())
      .then(data => console.log(data));
  };

  const turnOff = () => {
    fetch("http://192.168.2.128/off")
      .then(response => response.text())
      .then(data => console.log(data));
  };

  return (
    <div className="App">
      <h1>LED Control</h1>
      <button onClick={turnOn}>Turn On</button>
      <button onClick={turnOff}>Turn Off</button>
    </div>
  );
}

export default App;