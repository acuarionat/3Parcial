import React from 'react'
import './Card.css'
import EjercicioDetalle from './EjercicioDetalle'
import Boton from './Boton'
const Card = () => {
  return (
    <div className='tarjeta'>
        <EjercicioDetalle/>
        <Boton/>
    </div>
  )
}

export default Card