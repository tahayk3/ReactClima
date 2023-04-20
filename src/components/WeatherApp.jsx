import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMain from "./WeatherMain";
import Loading from "./loading";
import './WeatherApp.css';


function WeatherApp(){
    const [weather, setWeather] = useState(null);
    useEffect(()=>{
        loadInfo();
    }, []);

    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ""}`;
    },[weather]);


    async function loadInfo(city = 'quetzaltenango'){
        try
        {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const json = await request.json();
           

            setTimeout(() => {
                setWeather({ ...json });
              }, 1500);

            console.log(json);
        } 
        catch(error)
        {
        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return(
       <div className="weatherContainer">
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMain weather={weather} /> : <Loading />}
       </div>
    );
}
export default WeatherApp;

