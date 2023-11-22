import styles from "../styles/scrollBtn.module.scss"

import arrow from "../Images/arrow.svg"

function scrollBtn() {
  return (
    <button
      className={styles.button}
      onClick={() => window.scrollTo(0, 0)}
    >
      <img src={arrow} />
    </button>
  )
}

export default scrollBtn
