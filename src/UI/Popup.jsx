import styles from "../styles/Popup.module.scss"

function Popup() {
  return (
    <div className={styles.popup}>
      <h1>Вакансия</h1>
      <div className={styles.form}>
        <p>Заполните простую форму, и мы свяжемся с вами!</p>
        <form>
            <input id="name" type="text" placeholder="Иван"><label for="name">Ваше имя</label></input>
        </form>
      </div>
    </div>
  )
}

export default Popup
