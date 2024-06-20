import React from "react";

const EjercicioDetalle = ({ejercicio}) => {
  return (
    <div className="detalle">
      <img src={ejercicio.imagen} alt="ejericicio" />
      <div className="texto">
        <h2>{ejercicio.nombre}</h2>
        <p>{ejercicio.series} x {ejercicio.repeticiones}</p>
      </div>
    </div>
  );
};

export default EjercicioDetalle;
