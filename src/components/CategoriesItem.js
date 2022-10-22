import React from 'react'
import styles from "../styles/CategoryItem.module.css"


export default function CategoriesItem({item}) {
    const{imgUrl,name,results}=item
    // console.log(item);

  return (
    <div className={styles.card}>
        <img src={imgUrl} alt="" />
        <div>
            <h4>{name}</h4>
            <p>{results.length}  {name}</p>
        </div>
    </div>
  )
}
