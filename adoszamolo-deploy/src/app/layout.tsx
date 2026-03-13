import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AdóSzámoló – Építményadó bejelentés 5 perc alatt',
  description: 'Automatikusan kitöltött ASP-ADO-031 nyomtatvány és XML generálás magyar ingatlan tulajdonosok számára.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
