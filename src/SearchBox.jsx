import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import "./index.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);


  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "40eb5ecaf40d546f6fe94c264e9603d5";

  let WeatherInfo = async () => {
   try{
     let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMax: jsonResponse.main.temp_max,
      tempMin: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
   }catch (err) {
      throw err
   }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
   event.preventDefault();
    console.log(city);
    setCity("");
   let infomation = await WeatherInfo();
   updateInfo(infomation)
    }catch (err){
      setError(true)

    }
 
  };

  return (
    <div className="searchbox">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          required
          id="standard-basic"
          onChange={handleChange}
          value={city}
          label="City Name"
          variant="standard"
        />
        <br />
        <br />
        <Button variant="contained" type="Submit" endIcon={<SendIcon />}>
          Send
        </Button>
        {error && <p style={{color : "red"}}>No such place exists!</p>}
      </form>
    </div>
  );
}
