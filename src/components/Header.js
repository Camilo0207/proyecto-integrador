import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import principalLogo from "../assets/img/logo1.png"
import menu from "../assets/img/menu.png"
import styles from "../styles/Header.module.css"
import DropdownMenu from './DropdownMenu'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick=(e)=>{
        const type = e.target.dataset.type;
        switch (type) {
            case "open":
                setOpenMenu(true)
                break;
            case "close":
                setOpenMenu(false)
                break;
            default:
                break;
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.principal_logo}>
            <Link>
                <img  src={principalLogo} alt="Logo principal" />
            </Link>
            <p>Sentite como en tu hogar</p>
        </div>

        <div className={styles.principal_menu}>
            <img src={menu} alt="Imagen menu" data-type="open" onClick={handleClick}/>
            <button>Crear cuenta</button>
            <button>Iniciar sesion</button>
        </div>
        {openMenu && 
            <div className={styles.dropDown}>
                {/* <p onClick={handleClick} data-type="close">X</p> */}
                <DropdownMenu handleClick={handleClick}/>
            </div>
        }
    </div>
  )
}
