import React from 'react';
import style from "./styles/FilteredClient.module.css";

function FilteredClient({email, name, surname, createdAt}) {
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