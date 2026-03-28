import styles from './CarWashChat.module.css'

export default function CarWashChat() {
  return (
    <div className={styles.appWrapper}>

      {/* Logo */}
      <div className={styles.logoArea}>
        <div className={styles.logoPlaceholder}>LOGO</div>
      </div>

      {/* GitHub */}
      <div className={styles.githubBtn}>
        <a href="#" target="_blank" rel="noreferrer">GitHub</a>
      </div>

      {/* Chat Container */}
      <div className={styles.chatContainer} id="chatContainer">
        <div className={styles.chatMessages} id="chatMessages"></div>
        <div className={styles.chatOptions} id="chatOptions"></div>
      </div>

      {/* Input Area */}
      <div className={styles.inputArea}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="userInput"
            placeholder="Agende a lavagem do seu carro!"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div className={styles.sidebar} id="sidebar">
        <p className={styles.sidebarEmpty} id="sidebarEmpty">Nenhum carro agendado</p>
        <div className={styles.appointmentsList} id="appointmentsList"></div>
      </div>

    </div>
  )
}
