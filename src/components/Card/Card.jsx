import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom'

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
      </div>
      <div className="card-body">
        <Link to={`/ciudad/${id}`} >
          <h5 className="card-title">{name}</h5>
        </Link>
        <div className='details'>
          <div className="details">
            <div>
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div >
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div >
              <img className="iconoClima" src={"https://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
