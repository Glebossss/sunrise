import styles from "../styles/Login.module.scss"

import logo from "../Images/login/logo.svg"
import image from "../Images/account/image.jpg"
import steam from "../Images/account/steam.svg"
import lines from "../Images/bgLines.png"
import burger from "../Images/burger.png"
import photo from "../Images/login/image.jpg"

import { NavLink } from "react-router-dom"
import { useState } from "react"

function Login() {
  const [showBurger, setShowBurger] = useState(false)

  return (
    <div className={styles.login}>
      <img
        src={lines}
        className={styles.lines}
      />
      <div className={styles.left}>
        <div className={styles.top}>
          <img src={logo} />
          <NavLink to='/sunrise/'>Главная</NavLink>
          <NavLink to='/sunrise/contacts'>Контакты</NavLink>
          <button
            className={styles.burgerMenuButton}
            onClick={() => setShowBurger((prev) => !prev)}
          >
            <img src={burger}></img>
          </button>
          {showBurger && (
            <>
              <div
                className={styles.burgerMenuWrapper}
                onClick={() => setShowBurger(false)}
              ></div>
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
          )}
        </div>
        <div className={styles.adaptive}>
          <img src={photo} />
        </div>
        <div className={styles.main}>
          <h5>присоединитесь к нашему сообществу</h5>
          <h3>Добро пожаловать !</h3>
          <p>
            Еще нет аккаунта?{" "}
            <NavLink to='/sunrise/account'>Зарегистрироваться</NavLink>
          </p>
          <form>
            <div className={styles.block}>
              <label for='login'>Логин</label>
              <input
                type='login'
                id='login'
                placeholder='username123'
              ></input>
            </div>
            <div className={styles.block}>
              <label for='password'>Пароль</label>
              <input
                type='password'
                id='password'
                placeholder='password_example'
              ></input>
            </div>
          </form>
          <NavLink
            to='/sunrise/dashboard'
            className={styles.link}
          >
            <button>Войти</button>
          </NavLink>
          <button className={styles.steam}>
            <p>Войти через steam</p>
            <img src={steam} />
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <img src={image} />
      </div>
    </div>
  )
}

export default Login
