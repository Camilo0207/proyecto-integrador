import React, {  useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import principalLogo from "../assets/img/logo1.png"
import menu from "../assets/img/menu.png"
import styles from "../styles/Header.module.css"
import DropdownMenu from './DropdownMenu'
import useBodyScrollLock from "../hooks/useBodyScrollLock"


export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
  const [toggle]=useBodyScrollLock()
  const location = useLocation()
  console.log(location.pathname);

    const handleClick=(e)=>{
        const type = e.target.dataset.type;
        switch (type) {
            case "open":
                setOpenMenu(true)
                toggle()
                break;
            case "close":
                setOpenMenu(false)
                toggle()
                break;
            default:
                break;
        }
    }


  return (
    <div className={styles.container}>
        <Link to={"/"}>
            <div className={styles.principal_logo}>
                <img  src={principalLogo} alt="Logo principal" />
                <p>Sentite como en tu hogar</p>
            </div>
        </Link>

        <div className={styles.principal_menu}>
            <img src={menu} alt="Imagen menu" data-type="open" onClick={handleClick}/>

        {(location.pathname === "/login" || location.pathname === "/" ) &&
            <Link to={"/newAccount"}>
                <button>Crear cuenta</button>
            </Link>
        }

        {(location.pathname === "/newAccount" || location.pathname === "/") &&
            <Link to={"/login"}>
                <button>Iniciar sesion</button>
            </Link>
        }

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
