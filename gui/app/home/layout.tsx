
import { Metadata } from 'next/types'
import Header from '@components/header'
import Navbar from '@components/navbar'

export const metadata: Metadata = {
  title: 'Home | mcmngr',
  applicationName: "mcmngr",
  colorScheme: "dark light",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <Header />
    <Navbar className="sticky left-0 bottom-0 h-screen w-20 bg-slate-900 z-[999] ease-in-out transition-all duration-500 hover:delay-700 hover:shadow-[-25px_-20px_15px_40px_var(--tw-shadow-color)] shadow-slate-900 will-change-transform hover:w-60 pl-3.5 py-4 flex flex-col group" />
    <div className="absolute w-screen h-screen pl-20 bg-slate-800 z-0 top-14 left-0">
      <main className="w-full h-full">{children}</main>
    </div>
  </>
}