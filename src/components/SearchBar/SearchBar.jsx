import React, { useState } from "react";
import './SearchBar.css'


export default function SearchBar({onSearch}) {


  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className = "inputBox"
        type="text"
        placeholder="Nueva Ciudad..."
        // a medida que esta variable recibe el valor de SetCity la va poniendo el value del imput y lo muestra en pantalla
        value={city} 
        //se ejecuta al escibir una letra en el input y establece setCity en el valor escrito para despues pasarselo a city
        //(e) es el objeto que lanzo el evento (el input en este caso) y target es el objeto
        onChange={e => setCity(e.target.value)}
      />
      
      <input className = 'btnAdd' type="submit" value="+" />
     
    </form>
  );
}
