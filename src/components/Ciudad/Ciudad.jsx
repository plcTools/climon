import React from "react";
import './Ciudad.css'

export default function Ciudad({ city }) {

    if (!city) { return <h1>Ciudad no encontrada</h1> }

    return (
        <div className="ciudad">
            <div className="container">
                <h2 className='title'>{city.name}</h2>
                <div className="info">
                    <div style={{textAlign:'center'}} >
                        <img className="iconoClima" src={"https://openweathermap.org/img/wn/" + city.img + "@2x.png"} width="80" height="80" alt="" />
                    </div>
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div>
    )
}


/////////////////******************** */


////******hacer una class para que al refrescar vuelva poner la cards */

// class Ciudad extends React.Component {

// constructor(props){
//     super(props);
//     this.state = 
// }

// }