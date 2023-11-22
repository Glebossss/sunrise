import { useState } from "react"

import arrow from "../Images/jobs/Arrow.svg"
import close from "../Images/jobs/close.svg"

import styles from "../styles/Vacation.module.scss"

function Vacation(props) {
  const { title, text, extra } = props

  const [activity, setActivity] = useState(0)

  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className={styles.vacation}>
      <div className={styles.left}>
        <h5>{title}</h5>
        <p>{text}</p>
        <div
          className={styles.extra}
        >
          {activity === 0 && (
            <>
              <span onClick={() => setActivity(1)}>Узнать больше...</span>
              <img src={arrow} />
            </>
          )}
          {activity === 1 && (
            <div className={styles.description}>
              {extra}
              <div className={styles.info}>
                <span onClick={() => setActivity(0)}>Закрыть</span>
                <img src={arrow} />
              </div>
            </div>
          )}
        </div>
      </div>
      <button onClick={openModal}>Откликнуться</button>
      <div className={modal===true ? styles.popup : styles.inActive}>
        <img src={close} onClick={closeModal} />
        <h1>Вакансия</h1>
        <div className={styles.form}>
          <p>Заполните простую форму, и мы свяжемся с вами!</p>
          <form>
            <div className={styles.element}>
              <label for="name">Ваше имя</label>
                <input id="name" type="text" placeholder="Иван"></input>
            </div>
            <div className={styles.element}>
              <label for="age">Возраст</label>
                <input id="age" type="text" placeholder="22 года"></input>
            </div>
            <div className={styles.element}>
              <label for="call">Как с вами связаться?</label>
                <input id="call" type="text" placeholder="@primer_syda_pisat — Телеграм"></input>
            </div>
            <div className={styles.element}>
              <label for="reason">Почему решили откликнуться?</label>
                <input id="reason" type="text" placeholder="Опыт работы, желание развиваться,помогать проекту"></input>
            </div>
            <button type="submit">Откликнуться</button>
            <div className={styles.bottom}>
              <input id="bottom" type="checkbox"></input>
              <label for="bottom">Я соглашаюсь с Политикой Конфиденциальности</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Vacation
