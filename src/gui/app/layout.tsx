import './globals.css'
import type { Metadata } from 'next'
import { AddressBar, GoBackward, GoForward } from '@components/route_path'
import StatusBar from '@components/status_bar'

export const metadata: Metadata = {
  title: 'Starting up | Minecraft Server Manager',
  applicationName: "mcmngr",
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`select-none inter`}>
        <header className="absolute w-screen h-14 bg-green-600 z-40 ml-20 flex flex-row">
          <GoBackward />
          <GoForward />
          <AddressBar />
          <div className='ml-auto -translate-x-20'>
            <StatusBar className='right-0 h-14 flex flex-row items-center w-44 -space-x-8 justify-items-end' />
          </div>
        </header>
        <nav className="absolute h-screen w-20 bg-blue-600 z-50 hover:w-60 ease-in-out transition-all duration-500 hover:delay-500"></nav>
        <main className="absolute w-full h-full ml-20 mt-14 bg-red-600">
          {children}
        </main>
      </body>
    </html>
  )
}
