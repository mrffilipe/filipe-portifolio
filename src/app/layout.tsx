import './globals.css'
import './fonts.css'

import type { Metadata } from 'next'

import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Filipe folio',
  description: 'Exploring a Portfolio: I am a passionate software developer focused on backend, specializing in C# and TypeScript. Check out my web development projects and discover how I can improve your online presence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <NavMenu />
        <div id='container'>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}