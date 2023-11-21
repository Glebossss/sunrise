import styles from "../styles/Footer.module.scss"

import lines from "../Images/bgLines.png"

import icon1 from "../Images/VK icon.svg"
import icon2 from "../Images/discord icon.svg"
import icon3 from "../Images/steam icon.svg"
import icon4 from "../Images/telegram icon.svg"
import icon5 from "../Images/yourube icon.svg"

import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.socials}>
            <img src={icon1} />
            <img src={icon2} />
            <img src={icon3} />
            <img src={icon4} />
            <img src={icon5} />
            <p>© 2023 Sunrise — ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
            <p>ДИЗАЙН САЙТА — RITONKIN</p>
          </div>
        </div>
        <div className={styles.right}>
          <NavLink to='project'>О проекте</NavLink>
          <NavLink to='team'>Руководство</NavLink>
          <NavLink to='jobs'>Работа у нас</NavLink>
          <NavLink to='events'>Мероприятия</NavLink>
          <NavLink to='documents'>Документы</NavLink>
          <NavLink to='contacts'>Контакты</NavLink>
        </div>
        <img
          src={lines}
          className={styles.line2}
        />
        <img
          src={lines}
          className={styles.line3}
        />
      </div>
    </div>
  )
}

export default Footer
