import styles from "../styles/Contacts.module.scss"

function Contacts() {
  return (
    <div className={styles.contacts}>
      <h1>Контакты</h1>
      <p>
        Увлекаешься транспортом и хочешь получать больше новостей и
        подробностей? Присоединяйся:{" "}
      </p>
      <div className={styles.socials}>
        <p className={styles.vk}>ВКонтакте</p>
        <p className={styles.discord}>Discord</p>
        <p className={styles.steam}>Steam</p>
        <p className={styles.tg}>Telegram</p>
        <p className={styles.youtube}>YouTube</p>
      </div>
    </div>
  )
}

export default Contacts
