import React, {useState } from 'react'
import { useApi } from '../hooks/useApi'
import styles from "../styles/Searcher.module.css"
import Calendar from './Calendar'



const initialForm={
    destiny:"",
    checkInOut:""
}

export default function Searcher() {
    const [form, setForm] = useState(initialForm)
    const url="http://localhost:5000/ciudades"
    const {db}=useApi(url)

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
            
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    
        console.log(form);

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Busca ofertas en hoteles,</h1>
            <p>casas y mucho más</p>
        </div>
        <form onSubmit={handleSubmit}>
            <select name={"destiny"} id="" onChange={handleChange}>
                <option value="">¿A donde vamos?</option>
                {db &&  db.map(el=>(
                    <option key={el.id} value={el.departamento}>
                        {el.departamento} 
                    </option>
                ))}
            </select>

                {/* El div con className calendar es el que contiene el componente del calendario,
                 el cual no logro darle estilo */}
                <div className={styles.calendar}>
                    <Calendar/>
                </div>

            <input className={styles.btn_submit} type={"submit"} value={"Buscar"} />
        </form>
            
    </div>
  )
}
