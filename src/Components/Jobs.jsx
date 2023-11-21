import styles from "../styles/Jobs.module.scss"

import jobs from "../data/Jobs"

import Vacation from "./Vacation"

function Jobs() {
  return (
    <div className={styles.jobs}>
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
