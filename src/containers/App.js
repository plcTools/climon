import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "../components/Nav/Nav.jsx";
import Cards from "../components/Cards/Cards.jsx";
import About from "../components/About/About.jsx";
import Ciudad from "../components/Ciudad/Ciudad";
const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {

 /* //se crea el state que devuelve el estado actual y
   la funcion para actualizar el actua por un nuevo */
  const [cities, setCities] = useState([]); 

 
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id != id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };

          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }



 

  function onFilter(ciudadId) {
    let ciudad = cities.filter((current) => current.id == parseInt(ciudadId));
    console.log('cities2',cities)
    if (ciudad.length > 0) {
      console.log('devuelve onFilter',ciudad[0])
      return ciudad[0];
    } else {
      console.log('devuelve onFilter',null)
      return null;
    }
  }

  return (
    <div>
      <Route 
      path="/" //que compnente quiero mostrar cuando en la barra del navegador pongo este path
      render={() => <Nav onSearch={onSearch} />} /> {/* renderiza Nav y le envia props al componente SearchBar */}

      <Route
        exact //el exact hace que se renderize solo cuando 
        path="/"//que compnente quiero mostrar cuando en la barra del navegador pongo este path
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route 
      path="/about" component={About} />

      <Route
        exact
        path="/ciudad/:ciudadId"//este path es dinamico por los dos puntos....puede ser cualquier nombre y es el que usamos depues en match
        render={(m) => <Ciudad city={onFilter(m.match.params.ciudadId)} />}//match me devuelve un objeto con con propiedades, entre ellas el final de la ruta con el id
      />
    </div>
  );
}
export default App;
