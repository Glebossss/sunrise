import DashboardBtn from "../UI/dashboardBtn"

import styles from "../styles/Dashboard.module.scss"

import logo from "../Images/dashboard/logo.svg"
import devider from "../Images/dashboard/devider.svg"
import iconPerson from "../Images/dashboard/icon-person.svg"
import metro from "../Images/dashboard/icon-metro.svg"
import trolleybus from "../Images/dashboard/trolleybus_white 1.svg"
import tram from "../Images/dashboard/material-symbols_tram.svg"
import help from "../Images/dashboard/bx_support.svg"
import exit from "../Images/dashboard/exit.svg"

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.left}>
        <img src={logo} />
        <h2>Sunrise</h2>
        <img src={devider} />
        <p>Добро пожаловать, username123</p>
        <div className={styles.menu}>
            <p>Главное</p>
            <DashboardBtn img={iconPerson} title="Профиль" />
        </div>
        <div className={styles.menu}>
            <p>направления проекта</p>
            <DashboardBtn img={metro} title="Метро" />
            <DashboardBtn img={trolleybus} title="Троллейбусы" />
            <DashboardBtn img={tram} title="Трамваи" />
        </div>
        <div className={styles.bottom}>
            <DashboardBtn img={help} title="Поддержка" />
            <DashboardBtn img={exit} title="Выйти" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
