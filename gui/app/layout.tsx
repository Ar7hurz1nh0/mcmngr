import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Starting up | mcmngr',
  applicationName: "mcmngr",
  colorScheme: "dark light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`select-none inter`}>
        {children}
      </body>
    </html>
  )
}
