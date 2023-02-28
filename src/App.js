import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };

  return (
    <div className="app">
      <div className="search">
        <input
          placeholder="Enter your Location"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div className="buttons">
        <button className="weather" onClick={searchLocation}>
          <h2>Get Weather Update</h2>
        </button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name} </p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feel">
            {data.main ? (
              <p className="bold">{data.main.feels_like}°F</p>
            ) : null}

            <p>Feels like</p>
          </div>
          <div className="hummidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}

            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
