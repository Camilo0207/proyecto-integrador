import React from 'react'
import { useApi } from '../hooks/useApi'
import CategoriesItem from './CategoriesItem'
import styles from "../styles/Categories.module.css"



const categories =[
    {

        id:1,
        name:"hoteles",
        imgcategory:"https://i.imgur.com/B9Kuf6S.png",
        results:[
            {
                id:1,
                nombre:"Hotel 1",
                numeroEstrella:4,
                descripción:"Este es el hotel 1",
                ubicación:"lat 11111 longitud 1111",
                imgUrl:"urlimg1"
            },
            {
                id:2,
                nombre:"Hotel 2",
                numeroEstrella:4,
                descripción:"Este es el hotel 2",
                ubicación:"lat 11111 longitud 1111",
                imgUrl:"urlimg2"
            },
            {
                id:3,
                nombre:"Hotel 3",
                numeroEstrella:4,
                descripción:"Este es el hotel 3",
                ubicación:"lat 11111 longitud 1111",
                imgUrl:"urlimg3"
            },
            {
                id:4,
                nombre:"Hotel 4",
                numeroEstrella:4,
                descripción:"Este es el hotel 4",
                ubicación:"lat 11111 longitud 1111",
                imgUrl:"urlimg4"
            },
        ]
    }
    ]


export default function Categories() {
    const url="http://localhost:5000/categorias"
    const {db} = useApi(url)
  return (
    <div className={styles.container}>
        <h2>Buscar por tipo de alojamiento</h2>
        <div className={styles.container_elements}>
            {db && db.map(el=>(
                    <CategoriesItem key={el.id} item={el}/>
            ))}
        </div>
        <h2>Recomendaciones</h2>

    </div>
  )
}
