import styles from "../styles/Project.module.scss"

import ScrollBtn from "../UI/scrollBtn"

import image1 from "../Images/project/image 1.jpg"
import image2 from "../Images/project/image 2.jpg"
import image3 from "../Images/project/image 3.jpg"

import icon1 from "../Images/project/icon1.png"
import icon2 from "../Images/project/icon2.png"
import icon3 from "../Images/project/icon3.png"

import lines from "../Images/bgLines.png"

function Project() {
  return (
    <div className={styles.project}>
      <img
        src={lines}
        className={styles.line}
      />
      <div className={styles.top}>
        <h1>О проекте</h1>
        <p>
          В основе ролевой игры лежит Metrostroi server Garry's Mod — это
          песочница, в которой возможно всё. Проект Sunrise является владельцем
          четырёх серверов, позволяющих изучать метро и троллейбусы, прокатиться
          на них тем, у кого их в городе даже нет, и попробовать себя в роли
          водителя общественного транспорта — или в роли пассажира.
        </p>
      </div>
      <div className={styles.main}>
        <div className={styles.block}>
          <img src={image1} />
          <div>
            <h3>Метро</h3>
            <p>
              В основе ролевой игры лежит <b>Metrostroi server Garry's Mod</b> —
              это песочница, в которой возможно всё. Проект Sunrise является
              владельцем четырёх серверов, позволяющих изучать метро и
              троллейбусы, прокатиться на них тем, у кого их в городе даже нет,
              и попробовать себя в роли водителя общественного транспорта — или
              в роли пассажира.
            </p>
          </div>
        </div>
        <div className={styles.block}>
          <div>
            <h3>Троллейбусы</h3>
            <p>
              В основе ролевой игры лежит <b>Metrostroi server Garry's Mod</b> —
              это песочница, в которой возможно всё. Проект Sunrise является
              владельцем четырёх серверов, позволяющих изучать метро и
              троллейбусы, прокатиться на них тем, у кого их в городе даже нет,
              и попробовать себя в роли водителя общественного транспорта — или
              в роли пассажира.
            </p>
          </div>
          <img src={image2} />
        </div>
        <div className={styles.block}>
          <img src={image3} />
          <div>
            <h3>Трамваи</h3>
            <p>
              В основе ролевой игры лежит <b>Metrostroi server Garry's Mod</b> —
              это песочница, в которой возможно всё. Проект Sunrise является
              владельцем четырёх серверов, позволяющих изучать метро и
              троллейбусы, прокатиться на них тем, у кого их в городе даже нет,
              и попробовать себя в роли водителя общественного транспорта — или
              в роли пассажира.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.column}>
<<<<<<< HEAD
          <img src={icon1} />
          <h3>4</h3>
          <p>сервера</p>
        </div>
        <div className={styles.column}>
          <img src={icon2} />
          <h3>1000</h3>
          <p>и более человек на проекте</p>
        </div>
        <div className={styles.column}>
          <img src={icon3} />
          <h3>∞</h3>
          <p>желание развиваться</p>
=======
          <div className={styles.image}>
            <img src={icon1} />
          </div>
          <div className={styles.text}>
            <h3>4</h3>
            <p>сервера</p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.image}>
          <img src={icon2} />
            </div>
            <div className={styles.text}>
            <h3>1000</h3>
          <p>и более человек на проекте</p>
            </div>
        </div>
        <div className={styles.column}>
          <div className={styles.image}>
            <img src={icon3} />
          </div>
          <div className={styles.text}>
            <h3>∞</h3>
            <p>желание развиваться</p>
          </div>
>>>>>>> 1edc3d0f42a8a0c898416245fbd61838c839e0f7
        </div>
        <ScrollBtn />
      </div>
    </div>
  )
}

export default Project
