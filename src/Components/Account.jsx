import styles from "../styles/Account.module.scss"

import logo from "../Images/logo.png"
import image from "../Images/account/image.jpg"
import steam from "../Images/account/steam.svg"
import lines from "../Images/bgLines.png"

import { NavLink } from "react-router-dom"

function Account() {
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
        </div>
        <div className={styles.main}>
          <form>
            <div className={styles.name}>
              <div className={styles.block}>
                <label for='fname'>Ваше имя</label>
                <input
                  type='text'
                  id='fname'
                  placeholder='Игорь'
                ></input>
              </div>
              <div className={styles.block}>
                <label for='sname'>Ваша фамилия</label>
                <input
                  type='text'
                  id='sname'
                  placeholder='Иванов'
                ></input>
              </div>
            </div>
            <div className={styles.block}>
              <label for='mail'>Ваш адрес электронной почты</label>
              <input
                type='mail'
                id='mail'
                placeholder='example@gmail.com'
              ></input>
            </div>
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
            <div className={styles.check}>
              <input
                type='checkbox'
                id='check'
              ></input>
              <label for='check'>
                Я соглашаюсь с <span>политикой конфиденциальности</span>
              </label>
            </div>
          </form>
          <NavLink to='/sunrise/dashboard'>
            <button>Создать аккаунт</button>
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

export default Account
