import React, { useState } from "react";
import { helpValidaciones } from "../helpers/helpValidaciones";
import { useApi } from "../hooks/useApi";
import styles from "../styles/Searcher.module.css";
import Calendar from "./Calendar";

const initialForm = {
  destiny: "",
  checkIn: "",
  checkOut: "",
};

export default function Searcher() {
  const [form, setForm] = useState(initialForm);
  const url = "http://localhost:5000/ciudades";
  const { db } = useApi(url);
  const [errors, setErrors] = useState({})
    
    const {validateFormMenu}=helpValidaciones()


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateFormMenu(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
        setForm(initialForm)
      alert("Enviando formulario")
    //   setTimeout(() => {
    //     setLoading(false);
    //     handleReset(e);
    //     navigate("/");
    //   }, 3000);
    } else {
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Busca ofertas en hoteles,</h1>
        <p>casas y mucho más</p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className={styles.options_destiny}>
            <select name={"destiny"} onChange={handleChange}>
            <option value="">¿A donde vamos?</option>
            {db &&
                db.map((el) => (
                <option key={el.id} value={el.departamento}>
                    {el.departamento}
                </option>
                ))}
            </select>
            {errors.destiny && <p className={styles.error}>{errors.destiny}</p>}
        </div>
        

        <div className={styles.calendar}>
            <div>
                <Calendar setForm={setForm} form={form} />
            </div>
            {errors.checkInOut && <p className={styles.error}>{errors.checkInOut}</p>}
        </div>

        <div className={styles.btn_submit}>
            <input   type={"submit"} value={"Buscar"} />
        </div>
      </form>
    </div>
  );
}
