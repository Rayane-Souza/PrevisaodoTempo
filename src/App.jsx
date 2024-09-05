import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import WeatherInformation5Days from "./components/WeatherInformation5Days/WeatherInformation5Days";


function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();

  const inputRef = useRef();
  
  async function searchCity() {
    const city = inputRef.current.value;
    const key = "d9dbf6b22db5ebdb1493fc6d9c7ef229";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiDataWeather = await axios.get(url);
    const apiDataIndo5Days = await axios.get(url5Days);

    setWeather5Days(apiDataIndo5Days.data);
    setWeather(apiDataWeather.data);
  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformation5Days weather5Days={weather5Days}/>}
    </div>
  );
}

export default App;
