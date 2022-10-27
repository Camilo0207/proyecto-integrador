import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { helpValidaciones } from '../helpers/helpValidaciones'
import { useApi } from '../hooks/useApi'
import { useLocalStorage } from '../hooks/useLocalStorage'
import styles from "../styles/LoginMain.module.css"
import LoginForm from './LoginForm'

const initialForm={
  email:"",
  password:""
}


export default function LoginMain() {
  const [form, setForm] = useState(initialForm)
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const {validateFormLogin}=helpValidaciones()
  const url="http://localhost:5000/usersCreated"
  const {db}=useApi(url)
  const {setLocalStorage}=useLocalStorage("userName")


  const handleChange=(e)=>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
  }
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newErrors = validateFormLogin(form, db);
    const {errorsValidation,userFound}=newErrors;
    setErrors(errorsValidation);

    if (Object.keys(errorsValidation).length === 0) {
      setLocalStorage({name:userFound.name,lastname:userFound.lastname})
      navigate("/");
    } else {
      return;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h1>Iniciar sesión </h1>
        <LoginForm onChange={handleChange} onSubmit={handleSubmit} form={form} errors={errors}/>
        <p>¿Aún no tenes cuenta? <Link to={"/newAccount"}><span>Registrate</span></Link></p>
      </div>
    </div>
  )
}
