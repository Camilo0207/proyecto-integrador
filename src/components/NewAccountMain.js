import React, { useState } from 'react'
import NewAccountForm from './NewAccountForm'
import styles from "../styles/NewAccountMain.module.css"
import { Link, useNavigate } from 'react-router-dom'
import { helpValidaciones } from '../helpers/helpValidaciones'
import { useApi } from '../hooks/useApi'



const initialForm={
  name:"",
  lastname:"",
  email:"",
  password:"",
  confirmPassword:""
}

export default function NewAccountMain() {
  const url="http://localhost:5000/usersCreated"
  const {db,createData}=useApi(url)
  const [form, setForm] = useState(initialForm)
  const {validateNewUser}= helpValidaciones()
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();



  const handleChange=(e)=>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
  }

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateNewUser(form, db));
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    const newErrors = validateNewUser(form,db);
    setErrors(newErrors)

    if(Object.keys(newErrors).length === 0){
      createData(form)
        navigate("/")
    }else{
      return
    }
  }

  console.log(errors);

  return (
    <div className={styles.container}>
      <div className={styles.newAccount_box}>
        <h1>Crear cuenta</h1>
        <NewAccountForm onChange={handleChange} form={form} onSubmit={handleSubmit} errors={errors} onBlur={handleBlur}/>
        <p>¿Ya tienes una cuenta? <Link to={"/login"}><span>Iniciar sesión</span></Link></p>
      </div>
    </div>
  )
}

