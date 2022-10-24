import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { helpValidaciones } from '../helpers/helpValidaciones'
import { useApi } from '../hooks/useApi'
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
  const {db}=useApi("http://localhost:5000/usersCreated")

  const handleChange=(e)=>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
  }
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newErrors = validateFormLogin(form, db);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/");
    } else {
      return;
    }
  }

  console.log(form);

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
