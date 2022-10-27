import React, {  useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import principalLogo from "../assets/img/logo1.png"
import menu from "../assets/img/menu.png"
import styles from "../styles/Header.module.css"
import DropdownMenu from './DropdownMenu'
import useBodyScrollLock from "../hooks/useBodyScrollLock"
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useResizeScroll } from '../hooks/useResizeScroll'


export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [open,close]=useBodyScrollLock()
    const location = useLocation()
    const {user,removeLocalStorage} = useLocalStorage("userName")
    const navigate =useNavigate()
    const {width}=useResizeScroll()

    useEffect(() => {
        if(width>481){
            close()
            setOpenMenu(false)
        }
    }, [width])
    
    

    const handleClick=(e)=>{
        const type = e.target.dataset.type;
        switch (type) {
            case "open":
                open()
                setOpenMenu(true)
                break;
            case "close":
                close()
                setOpenMenu(false)
                setTimeout(() => {
                    if(e.target.id === "createAccount") navigate("/newAccount")
                    if(e.target.id === "login") navigate("/login")   
                }, 200);
                break;
            default:
                break;
        }
    }

    const handleLogout=(e)=>{
        const confirm = window.confirm("¿Deseas cerrar sesion?")
        if(confirm){
            handleClick(e)
            removeLocalStorage()
            window.location.reload()
        }else{
            return
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

            {((location.pathname === "/login" || location.pathname === "/") && !user) &&
                <Link to={"/newAccount"}>
                    <button>Crear cuenta</button>
                </Link>
            }

            {((location.pathname === "/newAccount" || location.pathname === "/") && !user) &&
                <Link to={"/login"}>
                    <button>Iniciar sesion</button>
                </Link>
            }

            {(width > 480 && user) &&
                <>
                    <div className={styles.info_user}>

                        <p onClick={handleLogout} className={styles.close}>X</p>

                        <div className={styles.initials_name}>
                            <div className={styles.logo}>
                                <p>{`${user.name.slice(0,1).toUpperCase()}${user.lastname.slice(0,1).toUpperCase()}`}</p>
                            </div>
                            
                            <div className={styles.prhase_name_box}>
                                <p className={styles.prhase_hello}>Hola,</p>
                                <p className={styles.user_name}>{`${user.name} ${user.lastname}`}</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>

        {openMenu && 
            <div className={styles.dropDown}>
                <DropdownMenu handleLogout={handleLogout} handleClick={handleClick} location={location} user={user} setOpen={close}/>
            </div>
        }
    </div>
  )
}
