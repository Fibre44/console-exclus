import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '../../components/navBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exclus consoles',
  description: 'Liste des exclus des différentes consoles Playstation, Xbox et consoles Nintendo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='h-full w-full'>
      <body className='h-full w-full'>
        <nav>
          <NavBar />
        </nav>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
