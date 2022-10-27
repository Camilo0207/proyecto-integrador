import React, { useState } from "react";
import { helpValidaciones } from "../helpers/helpValidaciones";
import { useApi } from "../hooks/useApi";
import styles from "../styles/Searcher.module.css";
import Calendar from "./Calendar";
import location from "../assets/img/location1.png"
import optionLocation from "../assets/img/optionLocation.png"

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
  const [openOptions, setOpenOptions] = useState(false)


  const handleSelectOption = (element) => {
    setForm({
      ...form,
        destiny:element
    });
    handleOptions()
  };

  const handleOptions=()=>{
    setOpenOptions(!openOptions)
  }

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
  // console.log(form);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Busca ofertas en hoteles,</h1>
        <p>casas y mucho más</p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className={styles.options_destiny}>
          <div className={styles.info_destiny} onClick={handleOptions}>
            <img src={location} alt="imagen de localizacion" />
            <p>{form.destiny?form.destiny:"¿A dónde vamos?"}</p>
          </div>
            {errors.destiny && <p className={styles.error}>{errors.destiny}</p>}

          {(db && openOptions) &&<ul>
            {db && db.map((el) => (
                <li key={el.id} onClick={()=>handleSelectOption(el.departamento)}>
                  <img  src={optionLocation} alt="imagen de ubicacion" />
                  <div >
                    <p className={styles.state_name}>{el.departamento}</p>
                    <p className={styles.country_name}>{el.pais}</p>
                  </div>
                </li>
                ))}
            </ul>}
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
