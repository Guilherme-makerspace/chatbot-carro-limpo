import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Agendamento online 24h
        </div>
        <h1 className={styles.title}>
          SEU CARRO<br />
          <em>IMPECÁVEL</em><br />
          EM MINUTOS
        </h1>
        <p className={styles.subtitle}>
          Agende seu serviço de lavagem diretamente pelo chatbot.
          Rápido, fácil e sem sair de casa.
        </p>
        <div className={styles.btns}>
          <button className={styles.btnPrimary}>Agendar via chat</button>
          <button className={styles.btnOutline}>Ver serviços</button>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.glow}></div>
        <svg width="320" height="190" viewBox="0 0 320 190" fill="none" className={styles.car}>
          <ellipse cx="160" cy="168" rx="130" ry="9" fill="rgba(0,180,255,0.07)"/>
          <path d="M55 128 L78 85 Q100 58 130 55 L195 53 Q225 56 245 78 L272 128 Z" fill="#1a2234"/>
          <path d="M55 128 L272 128 L278 150 Q278 162 265 162 L52 162 Q40 162 40 150 Z" fill="#1e2840"/>
          <rect x="88" y="60" width="60" height="30" rx="5" fill="rgba(0,180,255,0.12)" stroke="rgba(0,180,255,0.3)" strokeWidth="0.8"/>
          <rect x="168" y="60" width="60" height="30" rx="5" fill="rgba(0,180,255,0.12)" stroke="rgba(0,180,255,0.3)" strokeWidth="0.8"/>
          <circle cx="92" cy="160" r="20" fill="#111827" stroke="#00b4ff" strokeWidth="1.5"/>
          <circle cx="92" cy="160" r="11" fill="#080c14"/>
          <circle cx="92" cy="160" r="4" fill="#00b4ff"/>
          <circle cx="225" cy="160" r="20" fill="#111827" stroke="#00b4ff" strokeWidth="1.5"/>
          <circle cx="225" cy="160" r="11" fill="#080c14"/>
          <circle cx="225" cy="160" r="4" fill="#00b4ff"/>
          <circle cx="42" cy="130" r="5" fill="#00b4ff" opacity="0.7"/>
          <circle cx="275" cy="130" r="5" fill="#ef4444" opacity="0.7"/>
        </svg>
        <div className={styles.drops}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}