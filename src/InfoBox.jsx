import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  let INTI_URL =
    "https://images.unsplash.com/photo-1663774718003-14c125ac0d1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const Hot_URL =
    "https://images.unsplash.com/photo-1641994083335-30cef444b6d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold_URL =
    "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_URL =
    "https://images.unsplash.com/photo-1558920778-a82b686f0521?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



  return (
    <div className="infoBox">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? Rain_URL : info.temp > 15 ? Hot_URL : Cold_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
            info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
          }
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
            <div>Min Temperature = {info.tempMin}</div>
            <div>Max Temperature = {info.tempMax}</div>
            <div>
              The weather can be described as <i>{info.weather}</i> and feels
              Like {info.feelsLike}&deg;C
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
