import styles from "../styles/Events.module.scss"

import Event from "./Event"

import events from "../data/Events"

import train from "../Images/events/train 1.svg"
import tram from "../Images/events/Tram.svg"
import trolleybus from "../Images/events/trolleybus 1.svg"
import schedule from "../Images/events/Schedule.jpg"
import lines from "../Images/bgLines.png"

import { useState } from "react"

function Events() {
  const [activity, setActivity] = useState(0)

  return (
  <div className={styles.events}>
    <img
        src={lines}
        className={styles.line}
    />
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
      {activity === 0 && events.map((event) => {
        return (
          <>
            <Event {...event} key={event.id} />
            <img src={train} className={styles.transport}/>
          </>
        )
      })}
      {activity === 1 && events.map((event) => {
        return (
          <>
            <Event {...event} key={event.id} />
            <img src={tram} className={styles.transport}/>
          </>
        )
      })}
      {activity === 2 && events.map((event) => {
        return (
          <>
            <Event {...event} key={event.id} />
            <img src={trolleybus} className={styles.transport}/>
          </>
        )
      })}
    </div>
    <h1>Расписание</h1>
    <img src={schedule} />
  </div>
  )
}

export default Events
