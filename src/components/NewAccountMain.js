import React from 'react'
import NewAccountForm from './NewAccountForm'
import styles from "../styles/NewAccountMain.module.css"


export default function NewAccountMain() {
  return (
    <div className={styles.container}>
      <h1>Crear cuenta</h1>
      <NewAccountForm/>
      <p>¿Ya tienes una cuenta? Iniciar sesión</p>
    </div>
  )
}

