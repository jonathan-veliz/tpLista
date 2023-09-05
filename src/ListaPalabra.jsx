
import { useState } from 'react'
import { AgregarPalabras } from '../componentes/AgregarPalabras'

export const ListaPalabra = () => {
 
  
  const [palabra, setPalabra] = useState([])

   const addTask=(nuevaPalabra)=>{
    setPalabra([...palabra,nuevaPalabra])
  }

  return (
    <>
    <AgregarPalabras agregarPalabras={setPalabra}></AgregarPalabras> 
    <ul>
      {palabra.map((item,index)=>(
        <li key={index}>{item.nombre}</li>
      ))}
    </ul>
    
    </>
  )
}
