import Calendar from "react-calendar"

import DashboardBtn from "../UI/dashboardBtn"

import styles from "../styles/Dashboard.module.scss"
import "react-calendar/dist/Calendar.css"

import logo from "../Images/dashboard/logo.svg"
import devider from "../Images/dashboard/devider.svg"
import iconPerson from "../Images/dashboard/icon-person.svg"
import metro from "../Images/dashboard/icon-metro.svg"
import trolleybus from "../Images/dashboard/trolleybus_white 1.svg"
import tram from "../Images/dashboard/material-symbols_tram.svg"
import help from "../Images/dashboard/bx_support.svg"
import exit from "../Images/dashboard/exit.svg"
import user from "../Images/dashboard/user_photo_small.svg"
import person from "../Images/dashboard/user_photo_full.jpg"
import line from "../Images/dashboard/line.png"
import discord from "../Images/dashboard/discord.svg"
import bin from "../Images/dashboard/bin.svg"

import { useState } from "react"
import { NavLink } from "react-router-dom"

function Dashboard() {
  const [activity, changeActivity] = useState(0)

  const [value, setValue] = useState(new Date())

  function onChange(nextValue) {
    setValue(nextValue)
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <img src={logo} />
        <h2>Sunrise</h2>
        <img src={devider} />
        <p>Добро пожаловать, username123</p>
        <div className={styles.menu}>
          <p>Главное</p>
          <button onClick={() => changeActivity(0)}>
            <DashboardBtn
              img={iconPerson}
              title='Профиль'
            />
          </button>
        </div>
        <div className={styles.menu}>
          <p>направления проекта</p>
          <button onClick={() => changeActivity(1)}>
            <DashboardBtn
              img={metro}
              title='Метро'
            />
          </button>
          <DashboardBtn
            img={trolleybus}
            title='Троллейбусы'
          />
          <DashboardBtn
            img={tram}
            title='Трамваи'
          />
        </div>
        <div className={styles.bottom}>
          <DashboardBtn
            img={help}
            title='Поддержка'
          />
          <NavLink to='/sunrise/login'>
            <DashboardBtn
              img={exit}
              title='Выйти'
            />
          </NavLink>
        </div>
      </div>
      <div className={styles.right}>
        {activity === 0 && (
          <>
            <div className={styles.top}>
              <div className={styles.text}>
                <h3>Личный кабинет</h3>
                <p>Добро пожаловать в Ваш профиль Sunrise!</p>
              </div>
              <div className={styles.user}>
                <img src={user} />
                <p>Игорь Иванов</p>
              </div>
            </div>

            <div className={styles.main}>
              <div className={styles.info}>
                <img src={person} />
                <div className={styles.data}>
                  <h4>Мои данные:</h4>
                  <form>
                    <div className={styles.name}>
                      <input
                        type='text'
                        placeholder='Игорь'
                      ></input>
                      <input
                        type='text'
                        placeholder='Иванов'
                      ></input>
                    </div>
                    <input
                      type='mail'
                      placeholder='example@gmail.com'
                    ></input>
                    <input
                      type='text'
                      placeholder='username123'
                    ></input>
                    <button>Сохранить изменения</button>
                  </form>
                </div>
              </div>
              <div className={styles.second}>
                <div className={styles.discord}>
                  <h3>Мой Discord:</h3>
                  <img src={line} />
                  <div className={styles.account}>
                    <img src={discord} />
                    <div className={styles.username}>
                      <p>Ваш аккаунт: @UserName</p>
                      <span>Подключен успешно</span>
                    </div>
                    <img src={bin} />
                  </div>
                </div>
                <div className={styles.events}>
                  <h3>Мероприятия, на которые вы записаны:</h3>
                  <img src={line} />
                  <p>В настоящий момент у вас нет предстоящих мероприятий</p>
                </div>
                <div className={styles.about}>
                  <h3>Информация о пользователе:</h3>
                  <img src={line} />
                  <div className={styles.block}>
                    <h5>Имя пользователя:</h5>
                    <p>username123</p>
                  </div>
                  <div className={styles.block}>
                    <h5>Игровой ID:</h5>
                    <p>0000001</p>
                  </div>
                  <div className={styles.block}>
                    <h5>Время в игре:</h5>
                    <p>10 часов</p>
                  </div>
                  <div className={styles.block}>
                    <h5>Ранг:</h5>
                    <p></p>
                  </div>
                  <div className={styles.block}>
                    <h5>Статус игрока:</h5>
                    <span>проходит обучение</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {activity === 1 && (
          <>
            <div className={styles.top}>
              <div className={styles.text}>
                <h3>Метро</h3>
                <p>Получите больше информации о ближайшей РП-сессии</p>
              </div>
              <div className={styles.user}>
                <img src={user} />
                <p>Игорь Иванов</p>
              </div>
            </div>

            <div className={styles.calendar}>
              <h3>Календарь мероприятий:</h3>
              <div className={styles.wrapper}>
                <Calendar
                  onChange={onChange}
                  value={value}
                  className={styles.cal}
                />
                <div className={styles.booking}>
                  <h4>Название мероприятия</h4>
                  <span>Вы не записаны</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore{" "}
                  </p>
                  <button>Записаться на мероприятие</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Dashboard
