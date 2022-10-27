import React from 'react'
import styles from "../styles/DropdownMenu.module.css"
import facebookImg from "../assets/img/facebook-dark.png"
import linkedinImg from "../assets/img/linkedin-dark.png"
import twitterImg from "../assets/img/twitter-dark.png"
import instagramImg from "../assets/img/instagram-dark.png"




export default function DropdownMenu({handleLogout,location,user,handleClick}) {

  return (
    <>
        <div className={styles.head_menu}>
            <div className={styles.icon_close}>
                <p onClick={handleClick} data-type="close">X</p>
            </div>
            
            <div className={styles.user_info}>
            {!user
                ?(
                    <p className={styles.message_menu}>MENU</p>
                ):(
                    <>
                        <div className={styles.initials_name}>
                            <p>{`${user.name.slice(0,1).toUpperCase()}${user.lastname.slice(0,1).toUpperCase()}`}</p>
                        </div>
                        <p className={styles.message_menu}>Hola,</p>
                        <p className={styles.user_name}>{`${user.name} ${user.lastname}`}</p>
                    </>
                )}
            </div>
        </div>

        <div className={styles.main_menu}>
            {!user && location.pathname === "/" &&
                <div className={styles.options_no_login}>
                    <p className={styles.new_account_message} data-type="close" id={"createAccount"} onClick={handleClick}>Crear Cuenta</p>
                    <p data-type="close" id={"login"} onClick={handleClick}>Iniciar sesion</p>
                </div>
            }
            
            {!user && location.pathname === "/login" &&
                    <p data-type="close" id={"createAccount"} onClick={handleClick}>Crear Cuenta</p>
            }

            {!user && location.pathname === "/newAccount" &&
                    <p data-type="close" id={"login"} onClick={handleClick}>Iniciar sesion</p>

            }

            {user &&
                <div className={styles.close_session}>
                    <p>¿Deseas <span onClick={handleLogout} data-type="close">cerrar sesión</span>?</p>
                </div>
            }
            
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
