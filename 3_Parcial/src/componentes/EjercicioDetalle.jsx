import React from "react";
import './EjercicioDetalle.css'
const EjercicioDetalle = () => {
  return (
    <div className="detalle">
      <img src={'imagenes/image.png'} alt="ejericicio" />
      <div className="texto">
        <h2>Puxada frontal</h2>
        <p>3 séries x 12 repetições</p>
      </div>
    </div>
  );
};

export default EjercicioDetalle;
