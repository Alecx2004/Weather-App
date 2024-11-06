import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  let [weather, setWeatherInfo] = useState({
    city: "Manipur",
    feelLike: 15.43,
    humidity: 93,
    pressure: 1017,
    temp: 15.41,
    temp_max: 15.41,
    temp_min: 15.41,
    weather: "Few Clouds",
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weather}/>
    </div>
  );
}
