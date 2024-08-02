import './globals.css'
import { Chivo_Mono } from 'next/font/google'

const chivo = Chivo_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Letters of Thought',
  description: 'Student views. Global issues.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.className}>{children}</body>
    </html>
  )
}