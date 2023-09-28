

import { useState } from "react";

export const AgregarPalabras = ({ agregarPalabras }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
   
    const envio = {
      nombre: inputValue
    };

    agregarPalabras((tareas) => [...tareas, envio]);

   
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="ingrese palabra o frase"
        value={inputValue}
        onChange={onInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

