'use client'

import { useState } from 'react'
import styles from './ChatbotFab.module.css'

export default function ChatbotFab() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Olá! Bem-vindo ao Carro Limpo 🚗✨ Como posso te ajudar?\n\n1️⃣ Agendar um serviço\n2️⃣ Consultar meu agendamento' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
  
    const response = await fetch('/api/dialogflow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: input,
        sessionId: 'usuario-123' // idealmente um ID único por usuário
      })
    })
  
    const data = await response.json()
    setMessages(prev => [...prev, { from: 'bot', text: data.text }])
  }

  return (
    <div className={styles.wrap}>
      {!open && (
        <div className={styles.bubble}>
          Olá! Posso te ajudar a agendar 👋
        </div>
      )}

      {open && (
        <div className={styles.window}>
          <div className={styles.windowHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.avatar}>CL</div>
              <div>
                <div className={styles.botName}>Carro Limpo</div>
                <div className={styles.status}>Online agora</div>
              </div>
            </div>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className={styles.messages}>
            {messages.map((m, i) => (
              <div key={i} className={`${styles.msg} ${m.from === 'user' ? styles.userMsg : styles.botMsg}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className={styles.inputRow}>
            <input
              className={styles.input}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Digite uma mensagem..."
            />
            <button className={styles.sendBtn} onClick={sendMessage}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 9h14M10 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <button className={styles.fab} onClick={() => setOpen(!open)}>
        <div className={styles.pulse}></div>
        {open ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 4l14 14M18 4L4 18" stroke="#080c14" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M3 4h20a2 2 0 012 2v11a2 2 0 01-2 2H8l-5 4V6a2 2 0 012-2z" fill="#080c14"/>
            <circle cx="9" cy="11" r="1.5" fill="#fff"/>
            <circle cx="13" cy="11" r="1.5" fill="#fff"/>
            <circle cx="17" cy="11" r="1.5" fill="#fff"/>
          </svg>
        )}
      </button>
    </div>
  )
}
