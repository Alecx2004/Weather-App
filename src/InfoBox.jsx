/* eslint-disable react/prop-types */
 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Info({ info }) {

    let HOT_URL = "https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    let RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg="
    let COLD_URL = "https://images.unsplash.com/photo-1704305978921-2f640b8aaf20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

  return (
    <div className="InfoBox">
      <div className="cardInfo">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={info.humidity > 80 ? RAIN_URL : info.temp > 24 ? HOT_URL : COLD_URL }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">               
                {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 24 ? <WbSunnyIcon/> : <AcUnitIcon/> }
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <div>Humidity={info.humidity}</div>
                <div>Temperature ={info.temp}&deg;C</div>
                <div>Feel Like ={info.feelLike}&deg;C</div>
                <div>Max_Temperature ={info.temp_max}&deg;C</div>
                <div>Min_Temperature ={info.temp_min}&deg;C</div>
                <div>Weather_Decription: {info.weather}</div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
