"use client"
import { useRouter } from 'next/navigation'
import { invoke } from '@tauri-apps/api/tauri'
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    invoke<void>('start')
      .then(() => router.push("/home"))
      .catch(console.error);
  }, [router]);
  return <></>
}
