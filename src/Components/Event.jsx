import { useState } from "react"

import arrow from "../Images/jobs/Arrow.svg"

import styles from "../styles/Event.module.scss"

function Event(props) {
  const { title, text, extra, img } = props

  const [activity, setActivity] = useState(0)

  return (
    <div className={styles.event}>
      <div className={styles.left}>
        <h5>{title}</h5>
        <p>{text}</p>
        <div className={styles.extra}>
          {activity === 0 && (
            <>
              <span onClick={() => setActivity(1)}>Узнать больше...</span>
              <img src={arrow} />
            </>
          )}
          {activity === 1 && (
            <div className={styles.description}>
              {extra}
              <img
                src={img}
                className={styles.image}
              />
              <div className={styles.info}>
                <span onClick={() => setActivity(0)}>Закрыть</span>
                <img src={arrow} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Event
