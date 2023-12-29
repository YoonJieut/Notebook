import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'subject-7',
  description: '윤준현 과제 7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
