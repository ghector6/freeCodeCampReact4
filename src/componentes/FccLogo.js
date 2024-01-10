import React from 'react';
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png'
import '../stylesheets/FccLogo.css';
const FreeCodeCampLogo = () => {
  return (

    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="Logo de FreeCodeCamp" />
    </div>
  );
}
 export default FreeCodeCampLogo;
