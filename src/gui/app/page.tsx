"use client"
import { useRouter } from 'next/navigation'
// import Greet from '../components/greet'


export default function Home() {
  const router = useRouter();
  router.push("/home");
  return <></>
}
