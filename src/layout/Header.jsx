import { NavLink } from "react-router-dom"

import styles from "../styles/Header.module.scss"

import logo from "../Images/logo.png"
import account from "../Images/icon.png"

function Header() {
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
          to='account'
        >
          <img src={account}></img>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
