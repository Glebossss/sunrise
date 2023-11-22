import styles from "../styles/dashboardBtn.module.scss"

function dashboardBtn(props) {
  const { img, title } = props

  return (
    <div className={styles.btn}>
      <img src={img} />
      <p>{title}</p>
    </div>
  )
}

export default dashboardBtn