import React from 'react'



export default function NewAccountForm() {
  return (
    <form >

      <div>
        <div>
          <label htmlFor="name">Nombre</label>
          <input id={"name"} type="text" />
        </div>
        <div>
          <label htmlFor="lastname">Apellido</label>
          <input id={"lastname"} type="text" />
        </div>
      </div>

      <label htmlFor="email">Correo electrónico</label>
      <input id={"email"} type="text" />

      <label htmlFor="password">Contraseña</label>
      <input id={"password"} type="password" />

      <label htmlFor="passwordConfirm">Confirmar contraseña</label>
      <input id={"passwordConfirm"} type="password" />

      <input type="submit" value={"Crear cuenta"} />
    </form>
  )
}
