import React from 'react';
import style from "./styles/FilteredClient.module.css";

function FilteredClient({email,password, name, surname, dir, createdAt, current, setClientSelected}) {

  if(current=="home"){

    const handleClientSelected = ()=>{
      setClientSelected({email,password,name,surname,dir});
    }

    return(
      <div 
      onClick={handleClientSelected} 
      className={style.containerHome}>
        <p>Nombre: {name}</p>
        <p>Apellido: {surname}</p>
        <p>Email: {email}</p>
    </div>
    )
  }

  return (
    <div className={style.container}>
      <p>Nombre: {name}</p>
      <p>Apellido: {surname}</p>
      <p>Email: {email}</p>
      <p>Registrado: {createdAt}</p>
    </div>
  )
}

export default FilteredClient