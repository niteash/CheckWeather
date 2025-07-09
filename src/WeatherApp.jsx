import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";



export default function WeatherApp () {
    let [weatherinfo, setWeatherInfo ] = useState({
     city : "Mandalay",
        feelsLike : 35.68,
        humidity : 57,
        temp : 31.76,
        tempMax : 31.76,
        tempMin :  31.76,
        weather : "overcast clouds"
})

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }
    return (
        <div>
            <h3>Weather App</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherinfo}/>
        </div>
    )
}