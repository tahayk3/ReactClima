import { useState } from "react";
import './WeatherForm.css';

function WeatherForm({ onChangeCity }) {
    const [city, setCity] = useState('');

    function onChange(e) {
        const value = e.target.value;
        if (value !== '') {
            setCity(value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        onChangeCity(city);
    }

    return (
        <form className="buscar" onSubmit={handleSubmit}>
            <input className="inputForm" type="text" onChange={onChange} placeholder="Busca una ciudad 🔍️" />
        </form>
    );
}
export default WeatherForm;