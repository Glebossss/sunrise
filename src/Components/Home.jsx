import styles from "../styles/Home.module.scss"

import Slider from "../UI/Slider"
import ScrollBtn from "../UI/scrollBtn"

import cloud from "../Images/Cloud.png"
import gamepad from "../Images/gamepad.png"
import graph from "../Images/graph.png"
import video from "../Images/Video.jpg"

import lines from "../Images/bgLines.png"

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.one}></div>
      <div className={styles.two}>
        <img
          src={lines}
          className={styles.line1}
        />
        <h2>Восходя к новым вершинам!</h2>
        <p>
          Sunrise — одно из крупнейших сообществ поклонников общественного
          транспорта.Мы постоянно организуем активности на любой вкус и цвет: от
          лекториев об устройстве базовых транспортных систем — до
          профессиональных мультиплееров в симуляторах, в течение которых игроки
          с головой погружаются в атмосферу работы реального рельсого и
          троллейбусного транспорта.
        </p>
      </div>
      <Slider />
      <div className={styles.three}>
        <div className={styles.column}>
          <img src={cloud} />
          <h3>12°C</h3>
          <p>Погода в Москве</p>
        </div>
        <div className={styles.column}>
          <img src={gamepad} />
          <h3>10/49</h3>
          <p>Заходов на сервера/в Дискорд</p>
        </div>
        <div className={styles.column}>
          <img src={graph} />
          <h3>23</h3>
          <p>Средний онлайн</p>
        </div>
      </div>
      <div className={styles.four}>
        <video poster={video}>
          <source src=''></source>
        </video>
        <ScrollBtn />
      </div>
    </div>
  )
}

export default Home
