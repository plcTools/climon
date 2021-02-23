import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom' //se importa el metodo Link de react



function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark"> {/* nav de boostrap */}

      <Link to='/'> {/* la dice cual va a ser la ruta del la proxima etiqueta */}
        <span className="navbar-brand">
         {/*  <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
          Climòn
        </span>
      </Link>


      <Link to='/About'> {/* la dice cual va a ser la ruta del la proxima etiqueta */}
        <span>About</span> 
      </Link>

{/* /renderiza el elemento SearchBar y le pasa el parametro (hace un pasamano)
 onSearch que viene de la funcion */}
      <SearchBar 
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
