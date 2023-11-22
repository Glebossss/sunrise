import styles from "../styles/Login.module.scss"

import logo from "../Images/logo.png"
import image from "../Images/account/image.jpg"
import steam from "../Images/account/steam.svg"
import lines from "../Images/bgLines.png"

import { NavLink } from "react-router-dom"

function Login() {
  return (
    <div className={styles.login}>
    <img src={lines} className={styles.lines}/>
    <div className={styles.left}>
      <div className={styles.top}>
        <img src={logo} />
        <NavLink to="/sunrise/">Главная</NavLink>
        <NavLink to="/sunrise/contacts">Контакты</NavLink>
      </div>
      <div className={styles.main}>
        <h5>присоединитесь к нашему сообществу</h5>
        <h3>Добро пожаловать !</h3>
        <p>Еще нет аккаунта? <NavLink to="/sunrise/account">Зарегистрироваться</NavLink></p>
        <form>
          <div className={styles.block}>
            <label for="login">Логин</label>
            <input type="login" id="login" placeholder="username123">
            </input>
          </div>
          <div className={styles.block}>
            <label for="password">Пароль</label>
            <input type="password" id="password" placeholder="password_example">
            </input>
          </div>
        </form>
        <NavLink to="/sunrise/dashboard" className={styles.link}>
          <button>Войти</button>
        </NavLink>
        <button className={styles.steam}>
          <p>Войти через steam</p>
          <img src={steam} />
        </button>
      </div>
    </div>
    <img src={image} />
  </div>
  )
}

export default Login
