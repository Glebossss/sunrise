import styles from "../styles/Jobs.module.scss"

import jobs from "../data/Jobs"

import Vacation from "./Vacation"

import lines from "../Images/bgLines.png"

function Jobs() {
  return (
    <div className={styles.jobs}>
      <img
        src={lines}
        className={styles.line}
      />
      <h1>Работа у нас</h1>
      <div className={styles.block}>
        {jobs.map((job) => {
          return (
            <Vacation
              {...job}
              key={job.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Jobs
