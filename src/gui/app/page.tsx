"use client"
import Greet from '../components/greet'

export default function Home() {
  if (typeof window !== 'undefined') {
    console.log(window?.location.href)
    console.log(window?.location.pathname)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono lg:flex">
        <Greet className="fixed left-0 top-0 flex w-full justify-center bg-primary-color dark:bg-primary-color/dark pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 dark:text-font-color/dark text-font-color font-black text-xl" />
      </div>
    </main>
  )
}
