import './globals.css'

export const metadata = {
  title: 'PMU - Gestion des courses',
  description: 'Application de gestion PMU',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}