import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    let [search, setSearch] = useState("");
    let [city, setCity] = useState("");
    let [country, setCountry] = useState("");
    let [date, setDate] = useState("");
    let [temp, setTemp] = useState("");
    let [weather, setWeather] = useState("");
    let [high_temp, setHigh_temp] = useState("");
    let [low_temp, setLow_temp] = useState("");


    const API = {
      key: "8ffbd7f64ff3a63da2914cd9fdc92da3",
      url: "https://api.openweathermap.org/data/2.5/",
    }

    useEffect(() => {
      console.log("mount")
      results("Warszawa");
    }, []);
      
  

    function handleKeyPress(e){
      if(e.key === "Enter"){
        results(search);
        setSearch(search ="");
      }
    }
    
    const results = (query) => { 
      setTimeout(fetch(`${API.url}weather?q=${query}&units=metric&appid=${API.key}`)
      .then(response => response.json())
      .then(updateData), 1000);
    }

    const updateData = (data) => {
      if(data.cod === 200){
        setCity(city = data.name);
        setDate(date = new Date().toDateString());
        setTemp(temp = Math.round(data.main.temp));
        setWeather(weather = data.weather[0].main);
        setHigh_temp(high_temp = Math.round(data.main.temp_max));
        setLow_temp(low_temp = Math.round(data.main.temp_min));
        setCountry(country = data.sys.country);
      } else {
        return null;
      }
    }

    const handleChangeInput = (e) => setSearch(search = e.target.value);

  return (
    <div className="App">
      <header>
        <input type="text" onKeyPress={handleKeyPress} value={search} onChange={handleChangeInput}/>
      </header>
       <main>
        <div className="info">
            <div className="city">{city}, {country}</div>
            <div className="date">{date}</div>
            <div className="temp">{temp}&#8451;</div>
            <div className="weather">{weather}</div>
            <div className="high-low-temp"><span>{low_temp}&#176; / {high_temp}&#176;</span></div>
        </div>
       </main>
    </div>
  );
}

export default App;
