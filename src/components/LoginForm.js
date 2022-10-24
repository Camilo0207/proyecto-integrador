import styles from "../styles/LoginForm.module.css";

export default function LoginForm({ onChange, onSubmit, form, errors }) {
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
      <input id={"password"} className={`${errors.password? styles.error_input: ""}`} type="password" name={"password"} onChange={handleChange} value={form.password} placeholder={"Contraseña"}/>
      {errors.password && <p className={styles.error_message}>{errors.password}</p>}

      <div className={styles.box_btn}>
        <input className={styles.submit_btn} type={"submit"} value={"Ingresar"} />
      </div>
    </form>
  );
}
