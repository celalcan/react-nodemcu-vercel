import React from 'react';

function App() {
  const turnOn = () => {
    fetch("https://4559-188-119-62-218.ngrok-free.app/on")
      .then(response => response.text())
      .then(data => console.log(data));
  };

  const turnOff = () => {
    fetch("http://https://4559-188-119-62-218.ngrok-free.app/off")
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