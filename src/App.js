import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <input type="text"/>
      </header>
       <main>
        <div className="info">
            <div className="city">Łódź</div>
            <div className="date">Monday 04 march 2020</div>
            <div className="temp">27&#8451;</div>
            <div className="weather">Sunny</div>
            <div className="high-low-temp">-133/27</div>
        </div>
       </main>
    </div>
  );
}

export default App;
