import styles from "../styles/LoginForm.module.css";
import eyeImg from "../assets/img/eye.png"
import { useState } from "react";

export default function LoginForm({ onChange, onSubmit, form, errors }) {
  const [viewPassword, setViewPassword] = useState(false)

  const togglePassword=()=>{
    setViewPassword(!viewPassword)
  }

  const handleChange = (e) => {
    onChange(e);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  console.log(errors);
  return (
    <form className={styles.form_login} onSubmit={handleSubmit}>

      <label htmlFor={"email"}>Correo electrónico</label>
      <input id={"email"} className={`${errors.email? styles.error_input: ""}`} type="text" name={"email"} onChange={handleChange} value={form.email} placeholder={"ejemplo@gmail.com"}/>
      {errors.email && <p className={styles.error_message}>{errors.email}</p>}

      <label htmlFor={"password"}>Contraseña</label>
      <div className={styles.password_box}>
        <input className={`${errors.password? styles.error_input : ""}`}id={"password"}  type={viewPassword?"text":"password"} name={"password"} onChange={handleChange} value={form.password} placeholder={"Contraseña"}/>
        <img onClick={togglePassword} src={eyeImg} alt="img de ocultar o ver contraseña" />
      </div>
      {errors.password && <p className={styles.error_message}>{errors.password}</p>}

      <div className={styles.box_btn}>
        <input className={styles.submit_btn} type={"submit"} value={"Ingresar"} />
      </div>
    </form>
  );
}
