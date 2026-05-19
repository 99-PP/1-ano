import './globals.css'

export const metadata = {
  title: '1 Ano Juntos ❤️',
  description: '365 dias contigo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
