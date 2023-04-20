import { useState } from "react";
import "./WeatherMain.css";

function WeatherForm({ weather }) {


    return (
        <div className="container">
            
            <div className="pais-ciudad">
                <div className="title">Ciudad: <p>{weather?.location.name}</p></div>
                <div className="title">Pais: <p>{weather?.location.country}</p></div>
            </div>
            
            <div className="title">
                Temperatura:<p>{weather?.current.temp_c}°</p>
                <div className="contenedor-imagen">
                    <img src={`http:${weather?.current.condition.icon}`}/>
                </div>
            </div>
            <div className="title">Hora y fecha de consulta: <p>{weather?.location.localtime}</p></div>
            
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15426.440114001327!2d${weather?.location.lon}9!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sgt!4v1682017395992!5m2!1ses-419!2sgt`}                                                                                              
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowfullscreen="allowfullscreen" 
                oading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}
export default WeatherForm;

