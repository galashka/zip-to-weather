import React from 'react';
import '../styles/Weather.css';

export default function WeatherInfo(props) {
  const{temp, humidity, desc, city} = props.data;
  
  return (
    <React.Fragment>
      <h3>
        {desc}
      </h3>

      <div className='header-description'>
        <h4>CITY:</h4>
        <h3>{city}</h3>
      </div>

      <div className='header-description'>
        <h4>TEMPERATURE:</h4>
        <p>{temp}
          <span className='degree-symbol'> F</span>
        </p>
      </div>

      <div className='header-description'>
        <h4>HUMIDITY:</h4>
        <p>{humidity}%</p>
      </div>
    </React.Fragment>
  )
}
