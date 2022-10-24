import React from 'react'
import NewAccountForm from './NewAccountForm'
import styles from "../styles/NewAccountMain.module.css"
import { Link } from 'react-router-dom'


export default function NewAccountMain() {
  return (
    <div className={styles.container}>
      <div className={styles.newAccount_box}>
        <h1>Crear cuenta</h1>
        <NewAccountForm/>
        <p>¿Ya tienes una cuenta? <Link to={"/login"}><span>Iniciar sesión</span></Link></p>
      </div>
    </div>
  )
}

