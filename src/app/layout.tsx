import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '../../components/navBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exclus consoles',
  description: 'Ce site fourni la liste des exclus de chaque consoles',
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
        <div className='h-full w-full'>
          {children}
        </div>
      </body>
    </html>
  )
}
