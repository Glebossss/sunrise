import { useState } from "react"

import styles from "../styles/Documents.module.scss"

import lines from "../Images/bgLines.png"

function Documents() {
  const [activity, setActivity] = useState(0)

  return <div className={styles.documents}>
    <img
        src={lines}
        className={styles.line}
      />
    <h1>Документы</h1>
    <div className={styles.tabs}>
      <p className={
        activity === 0 ? (styles.active2) : (styles.inActive)} onClick={() => setActivity(0)}>Метрострой</p>
      <p className={
        activity === 1 ? (styles.active) : (styles.inActive)} onClick={() => setActivity(1)}>Трамвай</p>
      <p className={
        activity === 2 ? (styles.active2) : (styles.inActive)} onClick={() => setActivity(2)}>Троллейбус</p>
    </div>
    <div className={styles.main}>
      <div className={styles.column}>
        <button>Приказы</button>
        <p>Приказ</p>
        <p>Приказ</p>
        <p>Приказ</p>
      </div>
      <div className={styles.column2}>
        <button>Распоряжения</button>
        <p>Распоряжения</p>
        <p>Распоряжения</p>
        <p>Распоряжения</p>
      </div>
      <div className={styles.column}>
        <button>Обучающая документация</button>
        <p>Документация</p>
        <p>Документация</p>
        <p>Документация</p>
      </div>
    </div>
  </div>
}

export default Documents
