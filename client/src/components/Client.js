import React from 'react';
import style from "./styles/Client.module.css";
import Popper from "./Popper";

function Client({email, name, surname, createdAt, id}) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>Nombre: {name}</p>
        <button><Popper edit={"name"} email={email}/></button>
      </div>
      <div className={style.text}>
        <p>Apellido: {surname}</p>
        <button><Popper edit={"surname"} email={email}/></button>
      </div>
      <div className={style.text}>
        <p>Email: {email}</p>
        <button><Popper edit={"email"} email={email}/></button>
      </div>
      <div className={style.text}>
        <p>Registrado: {createdAt}</p>
      </div>
    </div>
  )
}

export default Client