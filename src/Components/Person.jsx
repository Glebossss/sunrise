import styles from "../styles/Person.module.scss"

function Person(props) {
  const { image, name, post } = props

  return (
    <div className={styles.person}>
      <img src={image} />
      <h5>{name}</h5>
      <p>{post}</p>
    </div>
  )
}

export default Person
