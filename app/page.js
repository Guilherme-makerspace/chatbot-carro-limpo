import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ChatbotFab from '@/components/ChatbotFab'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <div className={styles.divider}></div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>2.400+</span>
          <span className={styles.statLabel}>carros lavados</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>4.9★</span>
          <span className={styles.statLabel}>avaliação média</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>30min</span>
          <span className={styles.statLabel}>tempo médio</span>
        </div>
      </div>

      <div className={styles.divider}></div>

      <Services />

      <footer className={styles.footer}>
        <p>© 2024 Carro Limpo — Todos os direitos reservados.</p>
      </footer>

      <ChatbotFab />
    </main>
  )
}
