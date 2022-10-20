import React from 'react'
import styles from "../styles/DropdownMenu.module.css"
import facebookImg from "../assets/img/facebook-dark.png"
import linkedinImg from "../assets/img/linkedin-dark.png"
import twitterImg from "../assets/img/twitter-dark.png"
import instagramImg from "../assets/img/instagram-dark.png"


export default function DropdownMenu({handleClick}) {
  return (
    <>
        <div className={styles.head_menu}>
            <div className={styles.icon_close}>
                <p onClick={handleClick} data-type="close">X</p>
            </div>
            <div className={styles.user_info}>
                <div className={styles.initials_name}>
                    <p>BR</p>
                </div>
                <p>Hola,</p>
                <p>Bruno rodriguez</p>
            </div>
        </div>
        <div className={styles.main_menu}>
            <p>Iniciar sesion</p>
            <p>¿Deseas cerrar sesion?</p>
        </div>
        <div className={styles.footer_menu}>
            <div>
                <img src={facebookImg} alt="facebookImg" />
                <img src={linkedinImg} alt="linkedinImg" />
                <img src={twitterImg} alt="twitterImg" />
                <img src={instagramImg} alt="instagramImg" />
            </div>
        </div>
    </>
  )
}
