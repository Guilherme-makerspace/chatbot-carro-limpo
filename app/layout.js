import './globals.css'

export const metadata = {
  title: 'Carro Limpo - Lava-Rápido',
  description: 'Agende seu serviço de lavagem online. Rápido, fácil e sem sair de casa.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
