import React from 'react';
import logo from './logo.svg';
import './App.css';

const SERVER = window.SERVER || process.env.SERVER || "https://default.server";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <a href={SERVER}>{SERVER}</a>
        </p>
      </header>
    </div>
  );
}

export default App;
