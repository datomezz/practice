import React from 'react';
import './App.css';
import Car from "./Car/Car";

function App() {
  return (
    <div className="App">
      <h1>Hellow World !</h1>
      <Car name="Jaguar" year="2013" />
      <Car name={"BMW"} year={2015} />
      <Car name={"Mercedes"} year={1975}>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </Car>
      <Car name="Jaguar" year="2013" />
    </div>
  );
}

export default App;
