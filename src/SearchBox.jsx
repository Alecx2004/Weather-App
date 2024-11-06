/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "dbe1c940e7220f47d1cee6a8c0f75c40";

  let getWeatherInfo = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      let respone = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRespone = await respone.json();
      console.log(jsonRespone);

      let result = {
        city: jsonRespone.name,
        feelLike: jsonRespone.main.feels_like,
        humidity: jsonRespone.main.humidity,
        pressure: jsonRespone.main.pressure,
        temp: jsonRespone.main.temp,
        temp_max: jsonRespone.main.temp_max,
        temp_min: jsonRespone.main.temp_min,
        weather: jsonRespone.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
        throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleForm = async (event) => {
    try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    // eslint-disable-next-line no-unused-vars
    }catch (err) {
        setError(true) ;
    }
   
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleForm}>
        <TextField
          id="outlined-basic"
          label="City"
          value={city}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error &&<p style={{color:"red"}}> The place you search is not exist</p>}
      </form>
    </div>
  );
}
