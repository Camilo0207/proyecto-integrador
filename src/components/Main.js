import React from 'react'
import Categories from './Categories'
import Searcher from './Searcher'
import styles from "../styles/Main.module.css"

export default function Main() {
  return (
    <div className={styles.container}>
        <Searcher/>
        <Categories/>
    </div>
  )
}
