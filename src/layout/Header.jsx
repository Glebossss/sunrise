import { NavLink } from "react-router-dom"

import "../styles/Header.css"

import logo from "../Images/logo.png"
import account from "../Images/icon.png"

function Header() {
  return (
    <div className='header'>
      <NavLink
        className=''
        to='.'
      >
        <img src={logo}></img>
      </NavLink>
      <nav className='nav'>
        <NavLink
          className='link'
          to='project'
        >
          О проекте
        </NavLink>
        <NavLink
          className='link'
          to='team'
        >
          Руководство
        </NavLink>
        <NavLink
          className='link'
          to='jobs'
        >
          Работа у нас
        </NavLink>
        <NavLink
          className='link'
          to='events'
        >
          Мероприятия
        </NavLink>
        <NavLink
          className='link'
          to='documents'
        >
          Документы
        </NavLink>
        <NavLink
          className='link'
          to='contacts'
        >
          Контакты
        </NavLink>
        <NavLink
          className='icon'
          to='account'
        >
          <img src={account}></img>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
