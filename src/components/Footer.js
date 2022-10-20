import React from 'react'
import facebook from "../assets/img/facebook.png"
import linkedin from "../assets/img/linkedin.png"
import twitter from "../assets/img/twitter.png"
import instagram from "../assets/img/instagram.png"
import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.container}>
        <p>©2021 Digital Booking</p>
        <div>
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
        </div>
    </div>
  )
}
