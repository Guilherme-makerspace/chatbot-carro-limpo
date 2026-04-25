import styles from './Services.module.css'

const services = [
  {
    icon: '💧',
    title: 'Simples',
    desc: 'Lavagem externa completa com secagem e aspiração básica.',
    price: 'R$ 35',
  },
  {
    icon: '⭐',
    title: 'Completo',
    desc: 'Lavagem completa, enceramento, limpeza interna e perfume.',
    price: 'R$ 65',
    popular: true,
  },
  {
    icon: '💎',
    title: 'Premium',
    desc: 'Polimento, cristalização, higienização completa e aromatização.',
    price: 'R$ 120',
  },
]

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.header}>
        <h2>Nossos Serviços</h2>
        <p>Escolha o pacote ideal para o seu veículo</p>
      </div>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={`${styles.card} ${s.popular ? styles.popular : ''}`}>
            <span className={styles.icon}>{s.icon}</span>
            <div className={styles.cardTitle}>
              {s.title}
              {s.popular && <span className={styles.tag}>popular</span>}
            </div>
            <p className={styles.desc}>{s.desc}</p>
            <div className={styles.price}>{s.price}</div>
            <button className={styles.agendarBtn}>Agendar</button>
          </div>
        ))}
      </div>
    </section>
  )
}
