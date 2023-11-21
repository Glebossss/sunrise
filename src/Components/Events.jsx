import styles from "../styles/Events.module.scss"

import Event from "./Event"

import events from "../data/Events"

import schedule from "../Images/events/Schedule.jpg"
import { useState } from "react"

function Events() {
  const [activity, setActivity] = useState(0)

  return <div className={styles.events}>
    <h1>Мероприятия</h1>
    <div className={styles.tabs}>
      <p className={
        activity === 0 ? (styles.active) : (styles.inActive)
      } onClick={() => setActivity(0)}>Метро</p>
      <p className={
        activity === 1 ? (styles.active) : (styles.inActive)} onClick={() => setActivity(1)}>Трамвай</p>
      <p className={
        activity === 2 ? (styles.active2) : (styles.inActive)} onClick={() => setActivity(2)}>Троллейбус</p>
    </div>
    <div className={styles.block}>
      {events.map((event) => {
        return (
          <Event {...event} key={event.id} />
        )
      })}
    </div>
    <h1>Расписание</h1>
    <img src={schedule} />
  </div>
}

export default Events
