import React from 'react'
import styles from "../styles/LoginMain.module.css"
import LoginForm from './LoginForm'


export default function LoginMain() {
  return (
    <div className={styles.container}>
      <h1>Iniciar sesión </h1>
      <LoginForm/>
      <p>¿Aún no tenes cuenta?  Registrate</p>
    </div>
  )
}
