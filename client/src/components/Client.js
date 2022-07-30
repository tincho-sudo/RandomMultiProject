import React from 'react';
import style from "./styles/Client.module.css";
import Popper from "./Popper";

function Client({email, name, surname, createdAt, id}) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Nombre: {name}</p>
        <Popper edit={"name"} email={email}/>
      </div>
      <div className={style.text}>
        <p>Apellido: {surname}</p>
        <Popper edit={"surname"} email={email}/>
      </div>
      <div className={style.text}>
        <p>Email: {email}</p>
        <Popper edit={"email"} email={email}/>
      </div>
      <div className={style.text}>
        <p>Registrado: {createdAt}</p>
      </div>
    </div>
  )
}

export default Client