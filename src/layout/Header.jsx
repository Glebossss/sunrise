import { NavLink } from "react-router-dom"

import styles from "../styles/Header.module.scss"

import logo from "../Images/logo.png"
import account from "../Images/icon.png"
<<<<<<< HEAD

function Header() {
=======
import burger from "../Images/burger.png"
import { useState } from "react"

function Header() {
  const [showBurger, setShowBurger] = useState(false)
>>>>>>> 1edc3d0f42a8a0c898416245fbd61838c839e0f7
  return (
    <div className={styles.header}>
      <NavLink
        className=''
        to='.'
      >
        <img src={logo}></img>
      </NavLink>
      <nav className={styles.nav}>
        <NavLink
          className={styles.link}
          to='project'
        >
          О проекте
        </NavLink>
        <NavLink
          className={styles.link}
          to='team'
        >
          Руководство
        </NavLink>
        <NavLink
          className={styles.link}
          to='jobs'
        >
          Работа у нас
        </NavLink>
        <NavLink
          className={styles.link}
          to='events'
        >
          Мероприятия
        </NavLink>
        <NavLink
          className={styles.link}
          to='documents'
        >
          Документы
        </NavLink>
        <NavLink
          className={styles.link}
          to='contacts'
        >
          Контакты
        </NavLink>
        <NavLink
          className={styles.icon}
          to='login'
        >
          <img src={account}></img>
        </NavLink>
      </nav>
<<<<<<< HEAD
=======
      <button className={styles.burgerMenuButton} onClick={()=>setShowBurger(prev=>!prev)}>
        <img src={burger}></img>
      </button>
      {showBurger&&
        <>
        <div className={styles.burgerMenuWrapper} onClick={()=>setShowBurger(false)}></div>
        <div className={styles.burgerMenu}>
          <nav>
            <NavLink
              className={styles.link}
              to='project'
            >
              О проекте
            </NavLink>
            <NavLink
              className={styles.link}
              to='team'
            >
              Руководство
            </NavLink>
            <NavLink
              className={styles.link}
              to='jobs'
            >
              Работа у нас
            </NavLink>
            <NavLink
              className={styles.link}
              to='events'
            >
              Мероприятия
            </NavLink>
            <NavLink
              className={styles.link}
              to='documents'
            >
              Документы
            </NavLink>
            <NavLink
              className={styles.link}
              to='contacts'
            >
              Контакты
            </NavLink>
            <NavLink
              className={styles.link}
              to='login'
              >
              Личный кабинет
            </NavLink>
          </nav>
        </div>
        </>
    }
>>>>>>> 1edc3d0f42a8a0c898416245fbd61838c839e0f7
    </div>
  )
}

export default Header
