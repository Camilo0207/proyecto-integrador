import React, { useState } from 'react'
import styles from "../styles/NewAccountForm.module.css"
import eyeImg from "../assets/img/eye.png"

export default function NewAccountForm({onChange,form,onSubmit,errors,onBlur}) {
  const [viewPassword, setViewPassword] = useState(false)

  const togglePassword=()=>{
    setViewPassword(!viewPassword)
  }

  const handleChange=(e)=>{
    onChange(e)
  }

  const handleBlur=(e)=>{
    onBlur(e)
}

  const handleSubmit=(e)=>{
    onSubmit(e)
  }

  return (
    <form className={styles.form_newAccount} onSubmit={handleSubmit}>

      <div className={styles.info_user}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input onBlur={handleBlur} className={`${errors.name? styles.error_input: ""}`} id={"name"} type="text" name={"name"} onChange={handleChange} value={form.name}/>
          {errors.name && <p className={styles.error_message}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="lastname">Apellido</label>
          <input onBlur={handleBlur} className={`${errors.lastname? styles.error_input: ""}`} id={"lastname"} type="text" name={"lastname"} onChange={handleChange} value={form.lastname}/>
          {errors.lastname && <p className={styles.error_message}>{errors.lastname}</p>}
        </div>
      </div>

      <label htmlFor="email">Correo electrónico</label>
      <input onBlur={handleBlur} className={`${errors.email? styles.error_input: ""}`} id={"email"} type="text" name={"email"} onChange={handleChange} value={form.email}/>
      {errors.email && <p className={styles.error_message}>{errors.email}</p>}

      <label htmlFor="password">Contraseña</label>
      <div className={styles.password_box}>
        <input onBlur={handleBlur} className={`${errors.password? styles.error_input: ""}`} id={"password"} type={viewPassword?"text":"password"} name={"password"} onChange={handleChange} value={form.password}/>
        <img onClick={togglePassword} src={eyeImg} alt="img de ocultar o ver contraseña" />
      </div>
      {errors.password && <p className={styles.error_message}>{errors.password}</p>}


      <label htmlFor="confirmPassword">Confirmar contraseña</label>
      <input onBlur={handleBlur} className={`${errors.confirmPassword? styles.error_input: ""}`} id={"confirmPassword"} type="password" name={"confirmPassword"} onChange={handleChange} value={form.confirmPassword}/>
      {errors.confirmPassword && <p className={styles.error_message}>{errors.confirmPassword}</p>}


      <div className={styles.box_btn}>
        <input className={styles.submit_btn} type="submit" value={"Crear cuenta"} />
      </div>
    </form>
  )
}
