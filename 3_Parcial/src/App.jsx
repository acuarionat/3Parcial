import React, { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [ejercicios, setEjercicios] = useState();

  useEffect(()=>{
    fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/ejercicios')
    .then ((res)=>(res.json))
    .then (()=>{
      setEjercicios(data.ejercicios.slice(0,4));
    })
  },[])

  return (
    <>
     {ejercicios.map((ejercicio)=>(
      <Card key={ejercicios.id} ejercicio={ejercicio}/>
     ))}
    </>
  )
}

export default App
