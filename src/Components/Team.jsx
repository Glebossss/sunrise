import styles from "../styles/Team.module.scss"

import Person from "./Person"

import people from "../data/People"

function Team() {
  return (
    <div className={styles.team}>
      <h1>Руководство</h1>
      <div className={styles.main}>
        {people.map((person) => {
          return (
            <Person
              {...person}
              key={person.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Team
