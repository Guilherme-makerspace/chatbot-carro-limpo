import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
            <path d="M3 12l1.5-5h11L17 12" stroke="#080c14" strokeWidth="1.5"/>
            <rect x="2" y="12" width="16" height="4" rx="2" fill="#080c14"/>
            <circle cx="6" cy="16" r="1.5" fill="#fff"/>
            <circle cx="14" cy="16" r="1.5" fill="#fff"/>
          </svg>
        </div>
        <span className={styles.logoText}>CARRO<span>LIMPO</span></span>
      </div>

      <div className={styles.links}>
        <a href="#servicos">Serviços</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#contato">Contato</a>
      </div>

      <button className={styles.btn}>Agendar agora</button>
    </nav>
  )
}
